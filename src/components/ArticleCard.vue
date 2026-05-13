<script setup lang="ts">
import type { Article } from '@/data/articles'

defineProps<{
  article: Article
}>()
</script>

<template>
  <article class="card-base card-shadow overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
    <!-- 封面图片 -->
    <div class="aspect-[2/1] overflow-hidden">
      <img 
        :src="article.image" 
        :alt="article.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    
    <!-- 内容 -->
    <div class="p-4">
      <!-- 分类和日期 -->
      <div class="flex items-center gap-2 text-xs text-[var(--title-active)] mb-2">
        <span class="px-2 py-0.5 rounded-md bg-[var(--btn-regular-bg)]">
          {{ article.category }}
        </span>
        <span>{{ article.date }}</span>
      </div>
      
      <!-- 标题 -->
      <h2 class="text-lg font-bold text-[var(--deep-text)] dark:text-white group-hover:text-[var(--primary)] transition-colors line-clamp-2 mb-2">
        {{ article.title }}
      </h2>
      
      <!-- 描述 -->
      <p class="text-sm text-[var(--title-active)] line-clamp-2 mb-3">
        {{ article.description }}
      </p>
      
      <!-- 标签 -->
      <div class="flex flex-wrap gap-1.5">
        <span 
          v-for="tag in article.tags" 
          :key="tag"
          class="px-2 py-0.5 text-xs rounded-md bg-[var(--btn-regular-bg)] text-[var(--btn-content)]"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
