# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Vue 3 + TypeScript + Vite 的个人网站项目，具有动画效果和密码保护功能。项目使用现代前端技术栈，包含交互式动画、路由管理和身份验证机制。

## 开发命令

### 基本开发流程
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### 代码质量检查
```bash
# 运行所有 lint 检查
npm run lint

# 仅运行 ESLint 检查
npm run lint:eslint

# 仅运行 Oxlint 检查
npm run lint:oxlint

# TypeScript 类型检查
npm run type-check
```

## 项目架构

### 核心技术栈
- **Vue 3** - 使用 Composition API 和 `<script setup>` 语法
- **TypeScript** - 全项目类型支持
- **Vue Router** - 单页面应用路由管理
- **Vite** - 构建工具和开发服务器
- **GSAP** - 高性能动画库
- **FontAwesome** - 图标库

### 目录结构
```
src/
├── assets/          # 静态资源（CSS、图片等）
├── components/      # 可复用组件
│   ├── Clock.vue    # 时钟组件
│   └── MovingBox.vue # 动态移动盒子组件
├── views/           # 页面级组件
│   ├── WyxMainView.vue           # 主页面
│   └── PeachBlossomSpringView.vue # 桃花源页面
├── router/          # 路由配置
├── PasswordCheck.vue # 密码验证组件
├── App.vue          # 根组件
└── main.ts          # 应用入口
```

### 路由结构
- `/` - 重定向到 `/wyx`
- `/wyx` - 主页面，包含动态盒子和时钟
- `/wyx/peach-blossom-spring` - 桃花源页面（需要密码验证）
- `/check` - 密码验证页面

### 身份验证机制
项目使用 localStorage 存储认证状态：
- 密码使用 SHA-256 哈希验证
- 认证成功后在 localStorage 中设置 `auth: 'true'`
- 访问受保护页面时检查认证状态
- 密码验证组件位于 `src/PasswordCheck.vue`

### 动画系统
项目大量使用 GSAP 实现动画效果：
- 主页面的动态移动盒子
- 密码验证页面的交互式背景点阵
- 鼠标聚光灯效果
- 表单验证动画

### 组件特点
- **MovingBox.vue**: 实现自动移动的彩色盒子，支持碰撞检测和重定向
- **Clock.vue**: 显示当前时间的时钟组件
- **PasswordCheck.vue**: 复杂的密码验证界面，包含 SVG 动画和鼠标交互

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

## 特殊功能

### 密码保护
- 使用 crypto-js 进行 SHA-256 哈希
- 硬编码密码哈希值：`47044e633d52986f801fb44ddb7371b42579de0b6f231298c862f029e1a6feb4`
- 支持错误提示和重试机制

### 动画交互
- 鼠标跟踪和响应式动画
- SVG 元素动态操作
- 弹性动画效果和缓动函数

### 外部链接
- 主页面盒子点击可跳转到 GitHub 仓库
- 特殊盒子（桃源）需要密码验证后访问