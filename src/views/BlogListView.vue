<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import BlogSidebar from '@/components/BlogSidebar.vue'
import BlogFooter from '@/components/BlogFooter.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import Pagination from '@/components/Pagination.vue'
import { getArticles } from '@/data/articles'

const currentPage = ref(1)
const pageSize = 6

const { list: articles, total, totalPages } = getArticles(currentPage.value, pageSize)

const handlePageChange = (page: number) => {
  currentPage.value = page
  const result = getArticles(page, pageSize)
  articles.length = 0
  articles.push(...result.list)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleSearch = (query: string) => {
  console.log('Search:', query)
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[var(--page-bg)]">
    <!-- 导航栏 -->
    <header id="navbar" class="onload-animation">
      <Navbar />
    </header>

    <!-- 主内容区 -->
    <div class="flex-1 w-full max-w-[75rem] mx-auto px-0 md:px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-[17.5rem_1fr] gap-6">
        <!-- 侧边栏 - 移动端隐藏 -->
        <aside id="sidebar" class="hidden lg:block lg:col-span-1 lg:max-w-[17.5rem] onload-animation">
          <div class="sticky top-24">
            <BlogSidebar @search="handleSearch" />
          </div>
        </aside>

        <!-- 主要内容 -->
        <main id="content-wrapper" class="col-span-1 lg:col-span-1 onload-animation">
          <!-- 页面标题 -->
          <div class="mb-6">
            <h1 class="text-2xl font-bold text-[var(--deep-text)] dark:text-white">
              所有文章
            </h1>
            <p class="text-sm text-[var(--title-active)] mt-1">
              共 {{ total }} 篇文章
            </p>
          </div>

          <!-- 文章列表 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ArticleCard 
              v-for="article in articles" 
              :key="article.id" 
              :article="article"
              class="onload-animation"
            />
          </div>

          <!-- 分页 -->
          <div class="mt-8 onload-animation" style="animation-delay: 100ms">
            <Pagination 
              :current-page="currentPage" 
              :total-pages="totalPages"
              @page-change="handlePageChange"
            />
          </div>
        </main>
      </div>
    </div>

    <!-- 页脚 -->
    <footer class="footer onload-animation">
      <BlogFooter />
    </footer>
  </div>
</template>
