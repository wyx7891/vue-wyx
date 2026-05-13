<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  (e: 'page-change', page: number): void
}>()

const pages = computed(() => {
  const result: (number | string)[] = []
  const total = props.totalPages
  const current = props.currentPage
  
  if (total <= 7) {
    for (let i = 1; i <= total; i++) result.push(i)
  } else {
    result.push(1)
    
    if (current > 3) result.push('...')
    
    for (let i = Math.max(2, current - 1); i <= Math.min(current + 1, total - 1); i++) {
      result.push(i)
    }
    
    if (current < total - 2) result.push('...')
    
    result.push(total)
  }
  
  return result
})

const goToPage = (page: number | string) => {
  if (typeof page === 'string') return
  if (page !== props.currentPage) {
    emit('page-change', page)
  }
}
</script>

<template>
  <div class="flex justify-center gap-2 flex-wrap">
    <!-- 上一页 -->
    <button
      :disabled="currentPage === 1"
      class="px-4 py-2 rounded-lg transition-colors min-w-[40px] bg-[var(--card-bg)] hover:bg-[var(--btn-regular-bg-hover)] text-[var(--deep-text)] dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      @click="goToPage(currentPage - 1)"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <!-- 页码 -->
    <button
      v-for="(page, index) in pages"
      :key="index"
      :disabled="page === '...'"
      class="px-4 py-2 rounded-lg transition-colors min-w-[40px]"
      :class="page === currentPage 
        ? 'bg-[var(--primary)] text-white' 
        : 'bg-[var(--card-bg)] hover:bg-[var(--btn-regular-bg-hover)] text-[var(--deep-text)] dark:text-white disabled:opacity-50'"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>
    
    <!-- 下一页 -->
    <button
      :disabled="currentPage === totalPages"
      class="px-4 py-2 rounded-lg transition-colors min-w-[40px] bg-[var(--card-bg)] hover:bg-[var(--btn-regular-bg-hover)] text-[var(--deep-text)] dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      @click="goToPage(currentPage + 1)"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>
