<template>
  <footer class="py-6 border-t border-[var(--line-divider)] bg-[var(--card-bg)] dark:bg-[var(--card-bg)]">
    <div class="max-w-[75rem] mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-[var(--title-active)]">
        <span>&copy; 2024 wyx's Blog</span>
        <span class="hidden md:inline text-[var(--meta-divider)]">/</span>
        <span>Powered by Vue 3 + Tailwind CSS</span>
      </div>
      <div class="flex items-center justify-center gap-2 mt-2 text-sm text-[var(--title-active)]">
        <a 
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/" 
          target="_blank"
          class="link-underline hover:text-[var(--primary)]"
        >
          CC BY-NC-SA 4.0
        </a>
      </div>
    </div>
  </footer>
</template>
