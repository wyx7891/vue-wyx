export interface Article {
  id: number
  slug: string
  title: string
  description: string
  content?: string
  date: string
  updated?: string
  image: string
  tags: string[]
  category: string
}

export const articles: Article[] = [
  {
    id: 1,
    slug: 'hello-world',
    title: 'Hello World - 我的第一篇博客',
    description: '这是我博客的第一篇文章，记录了创建这个博客的整个过程和一些心得体会。',
    date: '2024-01-15',
    image: 'https://picsum.photos/seed/blog1/800/400',
    tags: ['随笔', '建站'],
    category: '随笔',
  },
  {
    id: 2,
    slug: 'vue3-composition-api',
    title: 'Vue3 Composition API 最佳实践',
    description: '深入探讨 Vue3 Composition API 的使用技巧和最佳实践，帮助你写出更优雅的 Vue 代码。',
    date: '2024-02-20',
    image: 'https://picsum.photos/seed/blog2/800/400',
    tags: ['Vue', '前端', '教程'],
    category: '前端',
  },
  {
    id: 3,
    slug: 'typescript-advanced',
    title: 'TypeScript 高级类型技巧',
    description: '探索 TypeScript 的高级类型系统，包括泛型、条件类型、映射类型等高级用法。',
    date: '2024-03-10',
    image: 'https://picsum.photos/seed/blog3/800/400',
    tags: ['TypeScript', '前端'],
    category: '前端',
  },
  {
    id: 4,
    slug: 'css-grid-layout',
    title: 'CSS Grid 布局完全指南',
    description: '掌握现代 CSS Grid 布局技术，打造响应式网页设计。',
    date: '2024-03-25',
    image: 'https://picsum.photos/seed/blog4/800/400',
    tags: ['CSS', '布局', '响应式'],
    category: '前端',
  },
  {
    id: 5,
    slug: 'vscode-extensions',
    title: '提升开发效率的 VSCode 插件推荐',
    description: '分享我日常开发中使用的 VSCode 插件，让你的编码效率翻倍。',
    date: '2024-04-05',
    image: 'https://picsum.photos/seed/blog5/800/400',
    tags: ['工具', '效率'],
    category: '工具',
  },
  {
    id: 6,
    slug: 'git-advanced-commands',
    title: 'Git 高级命令详解',
    description: '学习 Git 的高级用法，包括 rebase、cherry-pick、stash 等命令的正确使用方式。',
    date: '2024-04-18',
    image: 'https://picsum.photos/seed/blog6/800/400',
    tags: ['Git', '版本控制'],
    category: '工具',
  },
  {
    id: 7,
    slug: 'web-performance',
    title: 'Web 性能优化实战',
    description: '从实际项目出发，探讨网页性能优化的各个方面，包括加载速度、渲染性能等。',
    date: '2024-05-02',
    image: 'https://picsum.photos/seed/blog7/800/400',
    tags: ['性能', '优化'],
    category: '前端',
  },
  {
    id: 8,
    slug: 'docker-basics',
    title: 'Docker 入门与实践',
    description: 'Docker 入门指南，从零开始学习容器化技术。',
    date: '2024-05-20',
    image: 'https://picsum.photos/seed/blog8/800/400',
    tags: ['Docker', 'DevOps'],
    category: '后端',
  },
  {
    id: 9,
    slug: 'api-design-best-practices',
    title: 'RESTful API 设计最佳实践',
    description: '如何设计一个好的 RESTful API，包括 URL 设计、状态码选择、版本控制等。',
    date: '2024-06-08',
    image: 'https://picsum.photos/seed/blog9/800/400',
    tags: ['API', '后端', '设计'],
    category: '后端',
  },
  {
    id: 10,
    slug: 'react-vs-vue',
    title: 'React vs Vue: 如何选择？',
    description: '对比 React 和 Vue 两大前端框架，帮助你根据项目需求做出正确选择。',
    date: '2024-06-25',
    image: 'https://picsum.photos/seed/blog10/800/400',
    tags: ['React', 'Vue', '框架'],
    category: '前端',
  },
  {
    id: 11,
    slug: 'mac-development-setup',
    title: '我的 Mac 开发环境配置',
    description: '记录我的 Mac 开发环境配置，包括终端、编辑器、常用软件等。',
    date: '2024-07-12',
    image: 'https://picsum.photos/seed/blog11/800/400',
    tags: ['Mac', '环境配置'],
    category: '工具',
  },
  {
    id: 12,
    slug: 'frontend-interview',
    title: '前端面试题汇总',
    description: '汇总常见的前端面试题，包括 HTML、CSS、JavaScript、Vue、React 等。',
    date: '2024-07-30',
    image: 'https://picsum.photos/seed/blog12/800/400',
    tags: ['面试', '前端'],
    category: '随笔',
  },
]

export const allTags = [
  { name: '前端', count: 8 },
  { name: 'Vue', count: 3 },
  { name: 'React', count: 2 },
  { name: 'TypeScript', count: 2 },
  { name: 'CSS', count: 2 },
  { name: '工具', count: 4 },
  { name: '随笔', count: 2 },
  { name: '后端', count: 2 },
  { name: '教程', count: 1 },
  { name: '效率', count: 2 },
  { name: 'Git', count: 1 },
  { name: '性能', count: 1 },
  { name: '优化', count: 1 },
  { name: 'Docker', count: 1 },
  { name: 'API', count: 1 },
  { name: '设计', count: 1 },
  { name: '框架', count: 1 },
  { name: 'Mac', count: 1 },
  { name: '环境配置', count: 1 },
  { name: '面试', count: 1 },
  { name: '布局', count: 1 },
  { name: '响应式', count: 1 },
  { name: '版本控制', count: 1 },
  { name: 'DevOps', count: 1 },
  { name: '建站', count: 1 },
]

export function getArticles(page: number = 1, pageSize: number = 6) {
  const start = (page - 1) * pageSize
  const end = start + pageSize
  return {
    list: articles.slice(start, end),
    total: articles.length,
    totalPages: Math.ceil(articles.length / pageSize),
  }
}

export function getArticleBySlug(slug: string) {
  return articles.find(a => a.slug === slug)
}
