# AGENTS.md

本文件为 Claude Code (claude.ai/code) 和通义等 AI 代码助手提供项目上下文指导。

## 项目概述

这是一个基于 Vue 3 + TypeScript + Vite 的个人网站项目，具有动画效果和密码保护功能。项目使用现代前端技术栈，包含交互式动画、路由管理和身份验证机制。该项目专注于提供一个名为 "wyx" 的特定功能或内容展示，包含主页面、桃花源页面以及密码验证功能。

## 技术栈

- **前端框架**: Vue 3 (with Composition API 和 `<script setup>` 语法)
- **构建工具**: Vite 7.1.11
- **类型检查**: TypeScript 5.9
- **路由管理**: Vue Router 4.6.3
- **UI 图标库**: Font Awesome 7.1.0
- **动画库**: GSAP 3.13.0 (高性能动画)
- **加密库**: CryptoJS 4.2.0 (SHA-256 哈希)
- **开发工具**: Vite Plugin Vue DevTools 8.0.3
- **样式系统**: scoped CSS + TailwindCSS 4.2.1

## 开发命令

### 基本开发流程
```bash
# 安装依赖
npm install

# 启动开发服务器 (localhost:5173)
npm run dev

# 构建生产版本
npm run build

# 预览构建结果 (localhost:4173)
npm run preview
```

### 代码质量检查
```bash
# 运行所有 lint 检查 (ESLint + Oxlint)
npm run lint

# 仅运行 ESLint 检查
npm run lint:eslint

# 仅运行 Oxlint 检查
npm run lint:oxlint

# TypeScript 类型检查
npm run type-check
```

## 项目结构

```
wyx/
├── public/                 # 静态资源文件夹
│   ├── space/             # 空间主题资源
│   ├── webfonts/          # Font Awesome 字体文件
│   ├── wyx/               # wyx 主题资源
│   └── favicon.ico        # 网站图标
├── src/                    # 源代码目录
│   ├── assets/             # 静态资源
│   │   ├── base.css       # 基础样式
│   │   ├── logo.svg       # Logo 图片
│   │   └── main.css       # 主样式文件
│   ├── components/         # Vue 组件
│   │   ├── ArticleCard.vue # 文章卡片组件
│   │   ├── BlogFooter.vue  # 博客底部组件
│   │   ├── BlogSidebar.vue # 博客侧边栏组件
│   │   ├── Clock.vue       # 时钟组件
│   │   ├── MovingBox.vue   # 动态移动盒子组件
│   │   ├── Navbar.vue      # 导航栏组件
│   │   └── Pagination.vue  # 分页组件
│   ├── data/               # 数据文件
│   │   └── articles.ts    # 文章数据
│   ├── views/              # 页面组件
│   │   ├── BlogListView.vue          # 博客列表页面
│   │   ├── PeachBlossomSpringView.vue # 桃花源页面
│   │   ├── WyxMainView.vue           # 主页面视图
│   │   └── PBScss.css                # 桃花源页面样式
│   ├── router/             # 路由配置
│   │   └── index.ts       # Vue Router 路由配置
│   ├── App.vue             # 根组件
│   ├── main.ts            # 应用入口文件
│   └── PasswordCheck.vue  # 密码验证组件
├── wyx/                    # 静态 HTML 资源目录
├── .vscode/               # VSCode 配置
├── .gitignore             # Git 忽略规则
├── index.html             # HTML 模板
├── vite.config.ts         # Vite 配置文件
├── tsconfig.json          # TypeScript 配置
├── tsconfig.app.json      # 应用 TypeScript 配置
├── package.json           # 项目配置和依赖
├── tailwind.config.cjs    # TailwindCSS 配置
├── netlify.toml           # Netlify 部署配置
└── README.md              # 项目说明文档
```

## 路由配置

- `/` - 重定向到 `/wyx`
- `/wyx` - 主页面（包含动态盒子和时钟）
- `/wyx/peach-blossom-spring` - 桃花源页面（需要密码验证）
- `/check` - 密码验证页面
- `/91` - 博客列表页面

## 身份验证机制

项目使用 localStorage 存储认证状态：
- 密码使用 SHA-256 哈希验证
- 硬编码密码哈希值：`47044e633d52986f801fb44ddb7371b42579de0b6f231298c862f029e1a6feb4`
- 认证成功后在 localStorage 中设置 `auth: 'true'`
- 访问受保护页面时检查认证状态
- 密码验证组件位于 `src/PasswordCheck.vue`

## 动画系统

项目大量使用 GSAP 实现动画效果：
- 主页面的动态移动盒子
- 密码验证页面的交互式背景点阵
- 鼠标聚光灯效果
- SVG 元素动态操作
- 弹性动画效果和缓动函数
- 鼠标跟踪和响应式动画
- 表单验证动画

## 组件特点

- **MovingBox.vue**: 实现自动移动的彩色盒子，支持墙壁边界检测、鼠标靠近发光效果。特殊盒子（桃源）需要点击三次才能跳转，点击时有进度条动画提示。
- **Clock.vue**: 显示当前时间的时钟组件，点击可暂停三秒。
- **PasswordCheck.vue**: 复杂的密码验证界面，包含 SVG 背景点阵动画、鼠标聚光灯效果、输入框抖动动画。

## 开发注意事项

### 样式系统
- 使用 scoped CSS 避免样式冲突
- 主要使用 CSS Grid 和 Flexbox 布局
- 响应式设计考虑移动端适配

### TypeScript 配置
- 严格模式启用
- Vue 组件类型支持通过 vue-tsc
- 使用 `@` 别名指向 `src` 目录

### 代码规范
- 使用 ESLint + Oxlint 双重检查
- Vue 3 Composition API 优先
- TypeScript 接口定义清晰

### 构建配置
- Vite 配置支持相对路径部署 (`base: './'`)
- 包含字体文件资源处理
- 开发工具集成 Vue DevTools
- 包含 Netlify 部署配置，支持单页应用的正确路由回退

## 特殊功能

### 密码保护
- 使用 crypto-js 进行 SHA-256 哈希
- 支持错误提示和重试机制

### 外部链接
- 主页面盒子点击可跳转到 GitHub 仓库
- 特殊盒子（桃源）需要密码验证后访问

## 环境要求

- **Node.js**: ^20.19.0 或 >=22.12.0
- **npm**: 最新稳定版
