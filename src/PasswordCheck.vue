<template>
  <div
    class="password-check-container"
    ref="containerRef"
    @mousemove="handleMouseMove"
  >
    <!-- Interactive background with animated dots using GSAP -->
    <div class="background-dots" ref="dotsContainerRef">
      <svg class="dots-svg" ref="svgRef" width="100%" height="100%"></svg>
    </div>

    <div
      class="password-check-box"
      role="form"
      aria-labelledby="form-title"
      @mouseenter="spotlightVisible = true"
      @mouseleave="spotlightVisible = false"
    >
      <div class="mouse-spotlight" :style="spotlightStyle"></div>
      <h2 id="form-title">访问验证</h2>
      <p>请输入访问密码</p>
      <form @submit.prevent="verifyPassword">
        <div class="input-group">
          <label for="password-input" class="sr-only">密码</label>
          <input
            id="password-input"
            v-model="password"
            type="password"
            placeholder="输入密码"
            class="password-input"
            :class="{ 'error': showError }"
            required
            :aria-invalid="showError"
            aria-describedby="error-message"
          />
          <div
            v-if="showError"
            id="error-message"
            class="error-message"
            role="alert"
          >
            密码错误，请重试
          </div>
        </div>
        <button
          type="submit"
          class="submit-btn"
          :disabled="isVerifying"
        >
          {{ isVerifying ? '验证中...' : '验证' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue';
import { useRouter } from 'vue-router';
import CryptoJS from 'crypto-js';
import { gsap } from 'gsap';

// Define TypeScript interfaces
interface Dot {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  radius: number;
  element: SVGCircleElement;
  vx: number; // 速度 x
  vy: number; // 速度 y
  isDisplaced: boolean; // 是否被推开
}

// Define reactive references
const router = useRouter();
const password = ref('');
const showError = ref(false);
const isVerifying = ref(false);
const mousePosition = ref({ x: 0, y: 0 });
const isMouseNearBox = ref(false);
const spotlightVisible = ref(false);

// Refs for DOM elements
const containerRef = ref<HTMLElement | null>(null);
const dotsContainerRef = ref<HTMLElement | null>(null);
const svgRef = ref<SVGSVGElement | null>(null);

// SHA-256 password hash value
const PASSWORD_HASH = '47044e633d52986f801fb44ddb7371b42579de0b6f231298c862f029e1a6feb4';

// Animation variables
let dots: Dot[] = [];
const dotRadius = 3;
const dotSpacing = 30;
const mouseRadius = 80; // 鼠标影响半径
const pushForce = 15; // 推开力度
const returnSpeed = 0.08; // 回弹速度
const friction = 0.85; // 摩擦系数
let animationFrameId: number | null = null;
let isAnimating = false;

// Mouse tracking
const handleMouseMove = (e: MouseEvent) => {
  if (containerRef.value) {
    const rect = containerRef.value.getBoundingClientRect();
    mousePosition.value = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };

    // Check if mouse is near the password check box
    updateMouseNearBoxStatus();

    // Update spotlight position for password check box if mouse is inside the box
    if (isMouseNearBox.value) {
      updateSpotlightPosition(e);
    }

    // 启动动画循环（如果尚未运行）
    startAnimationLoop();
  }
};

// Update spotlight position for the password check box
const updateSpotlightPosition = (e: MouseEvent) => {
  if (containerRef.value) {
    const rect = containerRef.value.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const boxElement = containerRef.value.querySelector('.password-check-box') as HTMLElement;
    if (boxElement) {
      const boxRect = boxElement.getBoundingClientRect();
      // Calculate mouse position relative to the password check box element
      const relativeX = mouseX - (boxRect.left - rect.left);
      const relativeY = mouseY - (boxRect.top - rect.top);

      // Set CSS variables for spotlight position
      boxElement.style.setProperty('--mouse-x', `${relativeX}px`);
      boxElement.style.setProperty('--mouse-y', `${relativeY}px`);
    }
  }
};

// 启动动画循环
const startAnimationLoop = () => {
  if (!isAnimating) {
    isAnimating = true;
    animationLoop();
  }
};

// 停止动画循环
const stopAnimationLoop = () => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
  isAnimating = false;
};

// 主动画循环 - 使用 requestAnimationFrame 实现流畅动画
const animationLoop = () => {
  let hasMovement = false;
  const mouseX = mousePosition.value.x;
  const mouseY = mousePosition.value.y;

  for (const dot of dots) {
    const dx = dot.x - mouseX;
    const dy = dot.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // 鼠标在影响范围内，推开点
    if (distance < mouseRadius && distance > 0) {
      const angle = Math.atan2(dy, dx);
      const force = (mouseRadius - distance) / mouseRadius * pushForce;
      dot.vx += Math.cos(angle) * force;
      dot.vy += Math.sin(angle) * force;
      dot.isDisplaced = true;
    }

    // 应用摩擦力
    dot.vx *= friction;
    dot.vy *= friction;

    // 回弹到原始位置
    const returnDx = dot.originalX - dot.x;
    const returnDy = dot.originalY - dot.y;
    dot.vx += returnDx * returnSpeed;
    dot.vy += returnDy * returnSpeed;

    // 更新位置
    dot.x += dot.vx;
    dot.y += dot.vy;

    // 更新 SVG 元素位置
    dot.element.setAttribute('cx', dot.x.toString());
    dot.element.setAttribute('cy', dot.y.toString());

    // 检查是否还有明显移动
    const totalVelocity = Math.abs(dot.vx) + Math.abs(dot.vy);
    const distanceFromOrigin = Math.sqrt(returnDx * returnDx + returnDy * returnDy);
    if (totalVelocity > 0.01 || distanceFromOrigin > 0.5) {
      hasMovement = true;
    }
  }

  // 如果还有移动，继续动画循环
  if (hasMovement) {
    animationFrameId = requestAnimationFrame(animationLoop);
  } else {
    // 所有点都静止了，停止动画循环
    isAnimating = false;
    animationFrameId = null;
  }
};

// Initialize dots using SVG
const initDots = async () => {
  if (!svgRef.value || !containerRef.value) return;

  // 停止现有动画
  stopAnimationLoop();

  // Clear previous dots
  while (svgRef.value.firstChild) {
    svgRef.value.removeChild(svgRef.value.firstChild);
  }

  dots = [];

  const container = containerRef.value;
  const width = container.clientWidth;
  const height = container.clientHeight;

  // Calculate how many dots we need based on container size
  const cols = Math.ceil(width / dotSpacing);
  const rows = Math.ceil(height / dotSpacing);

  // Create dots grid using SVG circles
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const dotX = x * dotSpacing + dotSpacing / 2;
      const dotY = y * dotSpacing + dotSpacing / 2;

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', dotX.toString());
      circle.setAttribute('cy', dotY.toString());
      circle.setAttribute('r', dotRadius.toString());
      circle.setAttribute('fill', '#cccccc');
      circle.setAttribute('class', 'dot');

      svgRef.value.appendChild(circle);

      dots.push({
        x: dotX,
        y: dotY,
        originalX: dotX,
        originalY: dotY,
        radius: dotRadius,
        element: circle,
        vx: 0,
        vy: 0,
        isDisplaced: false
      });
    }
  }
};

// Password verification function
const verifyPassword = async () => {
  // Show loading state
  isVerifying.value = true;
  showError.value = false;

  try {
    // Add a small delay to show the loading state
    await new Promise(resolve => setTimeout(resolve, 300));

    const inputHash = CryptoJS.SHA256(password.value).toString();

    if (inputHash === PASSWORD_HASH) {
      // Verification successful, store auth status in localStorage
      localStorage.setItem('auth', 'true');
      // Redirect to peach blossom spring page
      router.push('/wyx/peach-blossom-spring');
    } else {
      // Verification failed, show error
      showError.value = true;
      // Clear input field
      password.value = '';
      // Add shake animation to input using GSAP
      if (containerRef.value) {
        const inputElement = containerRef.value.querySelector('.password-input') as HTMLElement;
        if (inputElement) {
          gsap.fromTo(inputElement,
            { x: -10 },
            {
              x: 10,
              duration: 0.1,
              repeat: 3,
              yoyo: true,
              ease: 'power1.inOut',
              onComplete: () => {
                // 确保动画结束后输入框回到原始位置
                gsap.set(inputElement, { x: 0 });
              }
            }
          );
        }
      }
    }
  } finally {
    // Always hide loading state
    isVerifying.value = false;
  }
};

// Initialize the component
onMounted(async () => {
  // Check if already authenticated, redirect if true
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  if (isAuthenticated) {
    router.push('/wyx/peach-blossom-spring');
    return;
  }

  // Wait for DOM to be ready
  await nextTick();

  // Initialize dots and start animation
  initDots();

  // Add window resize listener
  window.addEventListener('resize', initDots);
});

onUnmounted(() => {
  // Clean up event listeners
  window.removeEventListener('resize', initDots);

  // 停止动画循环
  stopAnimationLoop();
});

// Check if mouse is near the password check box
const updateMouseNearBoxStatus = () => {
  if (containerRef.value) {
    const boxElement = containerRef.value.querySelector('.password-check-box');
    if (boxElement) {
      const boxRect = boxElement.getBoundingClientRect();
      const containerRect = containerRef.value.getBoundingClientRect();

      // Calculate mouse position relative to container
      const mouseX = mousePosition.value.x;
      const mouseY = mousePosition.value.y;

      // Calculate box position relative to container
      const boxX = boxRect.left - containerRect.left;
      const boxY = boxRect.top - containerRect.top;

      // Check if mouse is near the password check box (with some tolerance)
      const tolerance = 50; // pixels
      isMouseNearBox.value =
        mouseX >= boxX - tolerance &&
        mouseX <= boxX + boxRect.width + tolerance &&
        mouseY >= boxY - tolerance &&
        mouseY <= boxY + boxRect.height + tolerance;
    }
  }
};

// Spotlight style computed property
const spotlightStyle = computed(() => {
  if (!spotlightVisible.value || !containerRef.value) {
    return {
      display: 'none' as const
    };
  }

  // 获取密码框元素的位置信息
  const boxElement = containerRef.value.querySelector('.password-check-box') as HTMLElement;
  if (!boxElement) {
    return {
      display: 'none' as const
    };
  }

  const boxRect = boxElement.getBoundingClientRect();
  const containerRect = containerRef.value.getBoundingClientRect();

  // 计算鼠标相对于密码框的位置
  const relativeLeft = mousePosition.value.x - (boxRect.left - containerRect.left);
  const relativeTop = mousePosition.value.y - (boxRect.top - containerRect.top);

  return {
    display: 'block' as const,
    left: `${relativeLeft}px`,
    top: `${relativeTop}px`,
    background: `radial-gradient(circle, rgba(76, 175, 80, 0.4) 0%, rgba(76, 175, 80, 0.2) 40%, rgba(76, 175, 80, 0) 70%)`,
    width: '120px',
    height: '120px',
    position: 'absolute' as const,
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none' as const,
    zIndex: 1,
    transition: 'opacity 0.2s ease'
  };
});

// Add some GSAP animations when component mounts
onMounted(() => {
  // Fade in animation for the form
  gsap.from('.password-check-box', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  });
});
</script>

<style scoped>
.password-check-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa; /* Slightly off-white background for better contrast */
  padding: 20px;
  position: relative;
  overflow: hidden;
}

/* Container for animated dots */
.background-dots {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.dots-svg {
  width: 100%;
  height: 100%;
}

/* Spotlight effect implementation for password check box */
.password-check-box {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;
  z-index: 10;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

/* 恢复原始样式并确保相对定位 */
.password-check-box {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;
  z-index: 10;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.password-check-box:hover {
  transform: translateY(-5px);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.15),
    0 0 25px rgba(76, 175, 80, 0.4),
    0 0 50px rgba(76, 175, 80, 0.3),
    0 0 80px rgba(76, 175, 80, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Spotlight effect element */
.mouse-spotlight {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: screen;
}

.password-check-box h2 {
  margin-bottom: 10px;
  color: #333;
  font-size: 1.75rem;
}

.password-check-box p {
  margin-bottom: 25px;
  color: #666;
  font-size: 1.1rem;
}

.input-group {
  margin-bottom: 25px;
}

.password-input {
  width: 100%;
  padding: 14px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.password-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

.password-input.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 8px;
  text-align: left;
  padding-left: 2px;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  font-weight: 500;
}

.submit-btn:hover:not(:disabled) {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(0);
}

.submit-btn:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
