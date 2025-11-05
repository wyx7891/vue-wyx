<template>
  <div id="clock-container">
    <div id="clock">{{ time }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const time = ref('00:00:00');
let animationFrameId = null;

const updateClock = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  time.value = `${hours}:${minutes}:${seconds}`;
};

const animateClock = () => {
  updateClock();
  animationFrameId = requestAnimationFrame(animateClock);
};

onMounted(() => {
  animateClock();
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<style scoped>
#clock-container {
  position: relative;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 280px;
  text-align: center;
  z-index: 2;
}

#clock {
  font-family: 'Arial', sans-serif;
  font-size: 64px;
  color: #2c3e50;
  text-shadow: 1px 1px 2px rgba(255,255,255,0.3);
  white-space: nowrap;
  will-change: contents;
  line-height: 1;
}
</style>