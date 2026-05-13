<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const isDark = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { name: '首页', path: '/wyx' },
  { name: '博客', path: '/91' },
]

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <nav class="sticky top-0 z-50 bg-[var(--card-bg)] dark:bg-[var(--card-bg)] border-b border-[var(--line-divider)]">
    <div class="max-w-[75rem] mx-auto px-4 h-16 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/91" class="text-xl font-bold text-[var(--primary)] hover:opacity-80 transition-opacity">
        wyx's Blog
      </RouterLink>

      <!-- 桌面端导航 -->
      <div class="hidden md:flex items-center gap-2">
        <RouterLink 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="btn-plain px-3 py-2 rounded-lg text-sm font-medium"
          active-class="!text-[var(--primary)]"
        >
          {{ link.name }}
        </RouterLink>
        
        <!-- 主题切换按钮 -->
        <button 
          @click="toggleTheme"
          class="btn-plain p-2 rounded-lg ml-2"
          aria-label="切换主题"
        >
          <!-- 太阳图标 (亮色模式) -->
          <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- 月亮图标 (暗色模式) -->
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>

      <!-- 移动端菜单按钮 -->
      <button 
        class="md:hidden p-2 btn-plain rounded-lg"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="菜单"
      >
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- 移动端下拉菜单 -->
    <div v-if="isMenuOpen" class="md:hidden bg-[var(--card-bg)] border-t border-[var(--line-divider)]">
      <RouterLink 
        v-for="link in navLinks" 
        :key="link.path"
        :to="link.path"
        class="block px-4 py-3 hover:bg-[var(--btn-plain-bg-hover)] border-b border-[var(--line-divider)] last:border-b-0"
        @click="isMenuOpen = false"
      >
        {{ link.name }}
      </RouterLink>
      <button 
        @click="toggleTheme; isMenuOpen = false"
        class="w-full text-left px-4 py-3 hover:bg-[var(--btn-plain-bg-hover)] flex items-center gap-2"
      >
        <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        {{ isDark ? '切换亮色模式' : '切换暗色模式' }}
      </button>
    </div>
  </nav>
</template>
