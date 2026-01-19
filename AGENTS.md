# 项目知识库

**生成时间:** 2026-01-19
**项目:** Vue 3 个人网站 - 动画效果与密码保护

## 概述

Vue 3 + TypeScript + Vite 个人网站。包含 GSAP 动画、FontAwesome 图标、通过 SHA-256 + localStorage 实现密码保护的路由。

## 目录结构

```
./
├── src/
│   ├── components/   # 可复用 UI 组件
│   ├── views/        # 页面级组件
│   ├── router/       # Vue Router 配置
│   └── assets/       # CSS、图片、字体
├── public/           # 静态资源（webfonts）
└── dist/             # 构建输出
```

## 查找指南

| 任务 | 位置 | 说明 |
|------|------|------|
| **认证逻辑** | `src/PasswordCheck.vue` | SHA-256 验证，localStorage |
| **动画实现** | `src/PasswordCheck.vue`, `src/components/MovingBox.vue` | GSAP 驱动 |
| **路由配置** | `src/router/index.ts` | 4 个路由，懒加载 |
| **样式文件** | `src/assets/tailwind.css` | Tailwind + 自定义动画 |

## 编码规范

- **Vue 3 Composition API** 必须使用 `<script setup>` 语法
- **Scoped CSS** 用于组件样式隔离
- **Tailwind v3.4.17** 用于样式处理
- **TypeScript** 严格模式已启用
- **Clock.vue** 允许单字母组件名（例外）

## 反模式（此项目特有）

- **硬编码密码哈希**: `47044e633d52986f801fb44ddb7371b42579de0b6f231298c862f029e1a6feb4` 位于 `PasswordCheck.vue:91`
- **直接 DOM 操作**: `document.createElementNS`、`querySelector` 位于 PasswordCheck.vue（SVG 动画需要）
- **无测试套件**: 项目缺少单元测试和 E2E 测试

## 常用命令

```bash
npm run dev          # 启动开发服务器
npm run build        # 生产构建
npm run type-check   # TypeScript 类型检查
npm run lint         # ESLint + Oxlint 检查
```

## 注意事项

- **复杂度热点**: `PasswordCheck.vue` (438 行) - 包含认证、GSAP 动画、鼠标追踪、SVG 操作
- **桃花源页面**受路由保护 - 未认证时重定向
- `vite.config.ts` 中 `base: './'` 启用相对路径部署
