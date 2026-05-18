<template>
  <div class="wyx-main-container">
    <Clock @pause="handlePause" />
    <MovingBox
      v-for="(box, index) in boxes"
      :key="index"
      :initial-box="box"
      :paused="isPaused"
      @redirect="handleRedirect"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Clock from '@/components/Clock.vue';
import MovingBox from '@/components/MovingBox.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const boxes = ref([]);
const isPaused = ref(false);
let pauseTimeoutId = null;

const handlePause = () => {
  isPaused.value = true;
  if (pauseTimeoutId) {
    clearTimeout(pauseTimeoutId);
  }
  pauseTimeoutId = setTimeout(() => {
    isPaused.value = false;
    pauseTimeoutId = null;
  }, 3000);
};

const colors = ['#FF6B6B', '#FFA726', '#FFEE58', '#B2FF59', '#66D9EF', '#967ADC', '#DA8FFF'];
const redirectUrl = 'https://github.com/wyx7891/html';
const specialRedirectUrl = '/wyx/peach-blossom-spring';

onMounted(() => {
  const initialBoxes = [];
  const NUM_ELEMENTS = 3;
  const initialMargin = 100;

  for (let i = 0; i < NUM_ELEMENTS; i++) {
    const isSpecial = i === 0;
    initialBoxes.push({
      id: i,
      text: isSpecial ? '桃源' : '卡卡',
      isSpecial: isSpecial,
      left: Math.random() * (window.innerWidth - initialMargin),
      top: Math.random() * (window.innerHeight - initialMargin),
      dx: (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1),
      dy: (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1),
      colorIndex: Math.floor(Math.random() * colors.length),
      direction: Math.random() > 0.5 ? 1 : -1,
      redirectUrl: isSpecial ? specialRedirectUrl : redirectUrl,
    });
  }
  boxes.value = initialBoxes;
});

const handleRedirect = (url, isSpecial) => {
  if (isSpecial) {
    // 对特殊链接（桃花源）进行认证检查
    const isAuthenticated = localStorage.getItem('auth') === 'true';

    if (isAuthenticated) {
      // 已认证，直接跳转到桃花源
      router.push(url);
    } else {
      // 未认证，跳转到验证页面
      router.push('/check');
    }
  } else {
    window.open(url, '_blank');
  }
};

</script>

<style scoped>
.wyx-main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: linear-gradient(45deg, #FF6B6B, #FFA726, #FFEE58, #B2FF59, #66D9EF, #967ADC, #DA8FFF);
  font-family: 'MI Sans', sans-serif;
  overflow: hidden;
  position: relative;
}
</style>
