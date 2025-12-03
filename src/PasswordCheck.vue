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

    <div class="password-check-box" role="form" aria-labelledby="form-title">
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
            aria-invalid="showError"
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
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
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
  tl: gsap.core.Timeline;
}

// Define reactive references
const router = useRouter();
const password = ref('');
const showError = ref(false);
const isVerifying = ref(false);
const mousePosition = ref({ x: 0, y: 0 });

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
const mouseRadius = 60;
let debounceTimeout: number | null = null;

// Mouse tracking
const handleMouseMove = (e: MouseEvent) => {
  if (containerRef.value) {
    const rect = containerRef.value.getBoundingClientRect();
    mousePosition.value = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };

    // Animate dots based on mouse position using GSAP
    animateDotsWithMouse();

    // Clear any existing timeout to restart the debounce
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set a new timeout to restore dots after mouse stops moving
    debounceTimeout = setTimeout(() => {
      restoreDotsToOriginalPosition();
    }, 100); // Wait for 100ms after mouse stops moving
  }
};

// Animate dots based on mouse position
const animateDotsWithMouse = () => {
  for (const dot of dots) {
    const dx = dot.x - mousePosition.value.x;
    const dy = dot.y - mousePosition.value.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouseRadius) {
      // Mouse is near this dot, push it away with GSAP animation
      const angle = Math.atan2(dy, dx);
      const targetX = mousePosition.value.x + Math.cos(angle) * mouseRadius;
      const targetY = mousePosition.value.y + Math.sin(angle) * mouseRadius;

      // Use GSAP to animate the dot away from mouse
      gsap.to(dot.element, {
        cx: targetX,
        cy: targetY,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    }
    // Don't restore to original position immediately when mouse is not near
    // The restoration will happen after mouse stops moving via debounce mechanism
  }
};

// Restore dots to their original positions after mouse stops moving
const restoreDotsToOriginalPosition = () => {
  for (const dot of dots) {
    const dx = dot.x - mousePosition.value.x;
    const dy = dot.y - mousePosition.value.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance >= mouseRadius) {
      // Only restore dots that are not currently being pushed by mouse
      gsap.to(dot.element, {
        cx: dot.originalX,
        cy: dot.originalY,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  }
};

// Initialize dots using SVG
const initDots = async () => {
  if (!svgRef.value || !containerRef.value) return;

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

      // Create GSAP timeline for each dot
      const tl = gsap.timeline({ paused: true });
      tl.to(circle, {
        attr: { r: dotRadius * 1.5 },
        duration: 0.5,
        ease: 'power2.out'
      }).to(circle, {
        attr: { r: dotRadius },
        duration: 0.5,
        ease: 'power2.in'
      });

      dots.push({
        x: dotX,
        y: dotY,
        originalX: dotX,
        originalY: dotY,
        radius: dotRadius,
        element: circle,
        tl
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
      // Redirect to target page
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
            { x: 10, duration: 0.1, repeat: 3, yoyo: true, ease: 'power1.inOut' }
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

  // Clear any existing debounce timeout
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }
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
