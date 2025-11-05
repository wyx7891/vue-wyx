<template>
  <div 
    class="moving-text" 
    :class="{ 'special-moving-text': box.isSpecial }"
    :style="{ left: box.left + 'px', top: box.top + 'px', backgroundColor: colors[box.colorIndex] }"
    @click="handleClick"
  >
    {{ box.text }}
    <div v-if="box.isSpecial" class="click-progress-container">
      <div class="click-progress-bar" :style="{ width: clickProgress + '%' }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';

const props = defineProps({
  initialBox: Object
});

const emit = defineEmits(['redirect']);

const box = reactive(props.initialBox);
const colors = ['#FF6B6B', '#FFA726', '#FFEE58', '#B2FF59', '#66D9EF', '#967ADC', '#DA8FFF'];
const clickProgress = ref(0);
let clickCount = 0;
let lastClickTime = 0;
let resetTimeoutId = null;
let animationFrameId = null;

const move = () => {
  box.left += box.dx;
  box.top += box.dy;

  if (box.left < 0 || box.left + 100 > window.innerWidth) {
    box.dx *= -1;
  }
  if (box.top < 0 || box.top + 50 > window.innerHeight) {
    box.dy *= -1;
  }

  animationFrameId = requestAnimationFrame(move);
};

const changeColor = () => {
  box.colorIndex = (box.colorIndex + box.direction + colors.length) % colors.length;
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
  move();
  const colorInterval = setInterval(changeColor, 500);

  onUnmounted(() => {
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

<style scoped>
.moving-text {
  position: absolute;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  transition: background-color 0.3s;
  opacity: 0.8;
  cursor: pointer;
  transform: translateZ(0);
  will-change: transform, left, top, background-color;
  backface-visibility: hidden;
  box-sizing: border-box;
}

.moving-text:hover {
  opacity: 1;
  transform: scale(1.05) translateZ(0);
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}

.special-moving-text {
  border: 3px dashed #FF00FF !important;
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.7) !important;
  animation: pulse 1.5s infinite alternate;
}

.click-progress-container {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  overflow: hidden;
}

.click-progress-bar {
  height: 100%;
  width: 0%;
  background-color: #FF00FF;
  transition: width 0.3s ease;
}

@keyframes pulse {
  from {
    transform: scale(1);
    opacity: 0.8;
  }
  to {
    transform: scale(1.1);
    opacity: 1;
  }
}
</style>