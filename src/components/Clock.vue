<template>
  <div class="relative p-5 bg-white/80 backdrop-blur-[10px] rounded-[15px] shadow-[0_8px_24px_rgba(0,0,0,0.2)] w-[280px] text-center z-[2]">
    <div class="font-['Arial',sans-serif] text-[64px] text-clock-text [text-shadow:1px_1px_2px_rgba(255,255,255,0.3)] whitespace-nowrap [will-change:contents] leading-none">{{ time }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const time = ref('00:00:00');
let animationFrameId: number | null = null;

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