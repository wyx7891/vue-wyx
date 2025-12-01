<template>
  <div class="password-check-container">
    <div class="password-check-box">
      <h2>访问验证</h2>
      <p>请输入访问密码</p>
      <form @submit.prevent="verifyPassword">
        <div class="input-group">
          <input
            v-model="password"
            type="password"
            placeholder="输入密码"
            class="password-input"
            :class="{ 'error': showError }"
            required
          />
          <div v-if="showError" class="error-message">密码错误，请重试</div>
        </div>
        <button type="submit" class="submit-btn">验证</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CryptoJS from 'crypto-js';

const router = useRouter();
const password = ref('');
const showError = ref(false);

// SHA-256密码哈希值
const PASSWORD_HASH = '47044e633d52986f801fb44ddb7371b42579de0b6f231298c862f029e1a6feb4';

// 检查是否已经验证，如果已验证则重定向到目标页面
onMounted(() => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  if (isAuthenticated) {
    router.push('/wyx/peach-blossom-spring');
  }
});

const verifyPassword = () => {
  const inputHash = CryptoJS.SHA256(password.value).toString();

  if (inputHash === PASSWORD_HASH) {
    // 验证成功，存储验证状态到localStorage
    localStorage.setItem('auth', 'true');
    // 重定向到目标页面
    router.push('/wyx/peach-blossom-spring');
  } else {
    // 验证失败，显示错误信息
    showError.value = true;
    // 清空输入框
    password.value = '';
  }
};
</script>

<style scoped>
.password-check-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.password-check-box {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.password-check-box h2 {
  margin-bottom: 10px;
  color: #333;
}

.password-check-box p {
  margin-bottom: 20px;
  color: #666;
}

.input-group {
  margin-bottom: 20px;
}

.password-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.password-input.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
  text-align: left;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>
