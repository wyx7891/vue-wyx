<template>
  <div
    class="absolute py-2.5 px-[15px] rounded-[5px] text-2xl font-bold transition-[background-color] duration-300 opacity-80 cursor-pointer [transform:translateZ(0)] [will-change:transform,left,top,background-color] [backface-visibility:hidden] box-border hover:opacity-100 hover:scale-105 hover:[transform:scale(1.05)_translateZ(0)] hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]"
    :class="{
      '!border-[3px] !border-dashed !border-[#FF00FF] !shadow-glow-purple animate-pulse-custom': box.isSpecial,
      'shadow-glow-green': isMouseClose
    }"
    :style="{ left: box.left + 'px', top: box.top + 'px', backgroundColor: colors[box.colorIndex] }"
    @click="handleClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    {{ box.text }}
    <div v-if="box.isSpecial" class="absolute -bottom-2.5 left-0 w-full h-[5px] bg-white/50 rounded-[3px] overflow-hidden">
      <div class="h-full w-0 bg-[#FF00FF] transition-[width] duration-300 ease-[ease]" :style="{ width: clickProgress + '%' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, onBeforeUnmount } from 'vue';

interface Box {
  id: number;
  text: string;
  isSpecial: boolean;
  left: number;
  top: number;
  dx: number;
  dy: number;
  colorIndex: number;
  direction: number;
  redirectUrl: string;
}

const props = defineProps<{
  initialBox: Box
}>();

const emit = defineEmits<{
  redirect: [url: string, isSpecial: boolean]
}>();

const box = reactive(props.initialBox);
const colors = ['#FF6B6B', '#FFA726', '#FFEE58', '#B2FF59', '#66D9EF', '#967ADC', '#DA8FFF'];
const clickProgress = ref(0);
const isMouseClose = ref(false);
let clickCount = 0;
let lastClickTime = 0;
let resetTimeoutId: ReturnType<typeof setTimeout> | null = null;
let animationFrameId: number | null = null;
let mouseX = 0;
let mouseY = 0;
let mouseMoveHandler: ((e: MouseEvent) => void) | null = null;

const move = () => {
  box.left += box.dx;
  box.top += box.dy;

  if (box.left < 0 || box.left + 100 > window.innerWidth) {
    box.dx *= -1;
  }
  if (box.top < 0 || box.top + 50 > window.innerHeight) {
    box.dy *= -1;
  }

  // 检查鼠标距离
  checkMouseDistance();

  animationFrameId = requestAnimationFrame(move);
};

const changeColor = () => {
  box.colorIndex = (box.colorIndex + box.direction + colors.length) % colors.length;
};

const checkMouseDistance = () => {
  if (!mouseX || !mouseY) return;

  // 计算鼠标到方框中心的距离
  const boxCenterX = box.left + 50; // 方框宽度的一半
  const boxCenterY = box.top + 25; // 方框高度的一半

  const distance = Math.sqrt(Math.pow(mouseX - boxCenterX, 2) + Math.pow(mouseY - boxCenterY, 2));

  // 当鼠标距离方框中心小于100px时显示光晕
  isMouseClose.value = distance < 100;
};

const onMouseEnter = () => {
  // 当鼠标进入方框区域时，强制显示光晕
  isMouseClose.value = true;
};

const onMouseLeave = () => {
  // 当鼠标离开方框区域时，停止显示光晕
  isMouseClose.value = false;
};

const handleMouseMove = (e: MouseEvent) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

const handleClick = () => {
  if (box.isSpecial) {
    const currentTime = new Date().getTime();

    if (resetTimeoutId) {
      clearTimeout(resetTimeoutId);
      resetTimeoutId = null;
    }

    if (clickCount > 0 && currentTime - lastClickTime > 3000) {
      clickCount = 0;
    }

    if (currentTime - lastClickTime > 3000) {
      clickCount = 0;
    }

    clickCount++;
    lastClickTime = currentTime;
    clickProgress.value = (clickCount / 3) * 100;

    if (clickCount >= 3) {
      emit('redirect', box.redirectUrl, true);
      clickCount = 0;
      clickProgress.value = 0;
      lastClickTime = 0;
    } else {
      resetTimeoutId = setTimeout(() => {
        if (new Date().getTime() - lastClickTime >= 3000) {
          clickCount = 0;
          clickProgress.value = 0;
        }
      }, 3000);
    }
  } else {
    emit('redirect', box.redirectUrl, false);
  }
};

onMounted(() => {
  // 添加全局鼠标移动事件监听器
  mouseMoveHandler = handleMouseMove;
  window.addEventListener('mousemove', mouseMoveHandler);

  move();
  const colorInterval = setInterval(changeColor, 500);

  onBeforeUnmount(() => {
    if (mouseMoveHandler) {
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    clearInterval(colorInterval);
    if (resetTimeoutId) {
      clearTimeout(resetTimeoutId);
    }
  });
});

</script>