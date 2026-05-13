<script setup lang="ts">
import { ref } from 'vue'
import { allTags } from '@/data/articles'

const searchQuery = ref('')
const emit = defineEmits<{
  (e: 'search', query: string): void
}>()

const handleSearch = () => {
  emit('search', searchQuery.value)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <!-- 个人资料卡片 -->
    <div class="card-base card-shadow p-4">
      <div class="flex flex-col items-center text-center">
        <!-- 头像 -->
        <div class="w-20 h-20 rounded-full overflow-hidden mb-3 bg-[var(--btn-regular-bg)]">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=wyx" 
            alt="Avatar" 
            class="w-full h-full object-cover"
          />
        </div>
        <!-- 名字 -->
        <h3 class="text-lg font-bold text-[var(--deep-text)] dark:text-white">wyx</h3>
        <!-- 简介 -->
        <p class="text-sm text-[var(--title-active)] mt-1">
          热爱前端，热爱生活<br/>
          Welcome to my blog!
        </p>
        
        <!-- 社交链接 -->
        <div class="flex gap-3 mt-3">
          <a 
            href="https://github.com/wyx7891" 
            target="_blank"
            class="btn-plain p-2 rounded-lg"
            aria-label="GitHub"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="mailto:wyx@example.com"
            class="btn-plain p-2 rounded-lg"
            aria-label="Email"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <!-- 搜索 -->
    <div class="card-base card-shadow p-4">
      <h3 class="text-sm font-semibold text-[var(--deep-text)] dark:text-white mb-3">搜索</h3>
      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索文章..."
          class="w-full px-4 py-2 rounded-lg border border-[var(--line-divider)] bg-[var(--card-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
          @input="handleSearch"
        />
        <svg class="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-[var(--title-active)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
    
    <!-- 标签云 -->
    <div class="card-base card-shadow p-4">
      <h3 class="text-sm font-semibold text-[var(--deep-text)] dark:text-white mb-3">标签</h3>
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in allTags.slice(0, 10)" 
          :key="tag.name"
          class="px-2 py-1 text-xs rounded-md bg-[var(--btn-regular-bg)] text-[var(--btn-content)] hover:bg-[var(--btn-regular-bg-hover)] cursor-pointer transition-colors"
        >
          {{ tag.name }} ({{ tag.count }})
        </span>
      </div>
    </div>
  </div>
</template>
