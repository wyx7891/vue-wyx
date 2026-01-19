import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 导入 fontawesome 相关内容
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// 添加图标到库中
library.add(fas, far, fab)

const app = createApp(App)

// 注册全局组件
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
