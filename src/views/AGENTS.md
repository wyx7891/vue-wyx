# src/views/ 知识库

**复杂度热点** - 包含受认证保护的路由和大量 UI

## 概述

页面级组件。`PeachBlossomSpringView.vue` (325 行) 受保护 - 未认证时重定向至 `/check`。

## 文件列表

| 文件 | 行数 | 用途 |
|------|------|------|
| `PeachBlossomSpringView.vue` | 325 | 受保护页面、认证守卫、多区块布局 |
| `WyxMainView.vue` | 79 | 主入口页面，包含 MovingBox 和 Clock |

## 认证模式

```typescript
// PeachBlossomSpringView.vue:226-233
onBeforeMount(() => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  if (!isAuthenticated) {
    router.push('/check');
  }
});

// 退出登录清除 localStorage 并重定向
logout() {
  localStorage.setItem('auth', 'false');
  router.push('/check');
}
```

## 页面区块 (PeachBlossomSpringView)

- `#mainContent` - 顶部区域 + 功能卡片 + 展示图片
- `#about` - 关于文本 + 技能条
- `#portfolio` - 3 列图片网格
- `#thanks` - 感言 + 合作伙伴图标
- `#contact` - 联系表单 + 模态框

## 编码规范

- **滚动导航**: `scrollIntoView({ behavior: 'smooth' })`
- **FontAwesome 图标**: 所有图标使用 `<font-awesome-icon>` 组件
- **模态框处理**: 手动基于 DOM 的模态框 (`v-if="isModalVisible"`)
- **图片懒加载**: `loading="lazy"` + 错误处理
- **样式迁移**: 组件样式已移至 tailwind.css (`@layer components`)

## 反模式

- **直接 DOM 操作**: `document.querySelectorAll`、`getElementById` 在 Composition API 中使用
- **未提取组件**: 所有区块都在单个文件中 (325 行)
- **模态框全局可用**: `isModalVisible` 在根组件中定义
- **硬编码图片 URL**: 使用外部 `picui.cn` 链接
