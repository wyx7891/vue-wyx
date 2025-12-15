# 项目上下文 (Project Context)

## 项目概述

这是一个基于 **Vue 3** 和 **Vite** 构建的前端单页应用(SPA)。从路由配置和文件结构来看，该项目似乎专注于提供一个名为 "wyx" 的特定功能或内容展示，包含主页面、桃花源页面以及密码验证功能。

## 技术栈

- **前端框架**: Vue 3 (with Composition API)
- **构建工具**: Vite 7+
- **类型检查**: TypeScript 5.9
- **路由管理**: Vue Router 4
- **UI 图标库**: Font Awesome
- **动画库**: GSAP
- **加密库**: CryptoJS
- **开发工具**: Vite Plugin Vue DevTools

## 开发与构建命令

```bash
# 安装依赖
npm install

# 启动开发服务器 (localhost:5173)
npm run dev

# 类型检查、编译并打包生产版本
npm run build

# 预览生产构建 (localhost:4173)
npm run preview

# 运行类型检查
npm run type-check

# 使用 ESLint 和 Oxlint 进行代码格式化
npm run lint
```

## 项目结构

```
wyx/
├── public/                 # 静态资源文件夹
├── src/                    # 源代码目录
│   ├── assets/             # 静态资源 (CSS, 图片等)
│   ├── components/         # Vue 组件
│   ├── views/              # 页面组件 (与路由对应)
│   │   ├── WyxMainView.vue # 主页面视图
│   │   └── PeachBlossomSpringView.vue # 桃花源页面视图
│   ├── router/index.ts     # Vue Router 路由配置
│   ├── App.vue             # 根组件
│   └── main.ts             # 应用入口文件
├── wyx/                    # 可能是额外的静态资源目录
├── .vscode/                # VSCode 配置
├── .gitignore              # Git 忽略规则
├── index.html              # HTML 模板
├── vite.config.ts          # Vite 配置文件
├── tsconfig.json           # TypeScript 配置
├── package.json            # 项目配置和依赖
└── README.md               # 项目说明文档
```

## 关键特性

- **现代前端技术栈**: 基于 Vue 3 和 Vite，提供快速的开发体验。
- **TypeScript 支持**: 提供静态类型检查，增强代码健壮性。
- **状态管理**: 使用 Vue Router 进行页面导航和状态管理。
- **图标支持**: 集成了 Font Awesome 图标库。
- **动画支持**: 集成了 GSAP 动画库，可用于创建高级动画效果。
- **密码保护**: 包含一个独立的 `PasswordCheck.vue` 组件用于验证访问权限。
- **部署就绪**: 包含 Netlify 部署配置，支持单页应用的正确路由回退。

## 路由配置

- `/` -> 重定向到 `/wyx`
- `/wyx` -> 显示 `WyxMainView.vue`
- `/wyx/peach-blossom-spring` -> 显示 `PeachBlossomSpringView.vue`
- `/check` -> 显示 `PasswordCheck.vue`

## 环境要求

- **Node.js**: ^20.19.0 或 >=22.12.0
- **npm**: 最新稳定版