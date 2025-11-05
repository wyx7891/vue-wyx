<template>
  <div class="page-wrapper">
    <header>
      <div class="header-content">
        <h1><i class="fas fa-seedling"></i> 桃花源 <span>by Claude-3.7-Sonnet</span></h1>
      </div>
    </header>

    <nav>
      <a href="#home" @click.prevent="showSection('mainContent')" :class="{ active: activeSection === 'mainContent' }"><i class="fas fa-home"></i> 首页</a>
      <a href="#about" @click.prevent="showSection('about')" :class="{ active: activeSection === 'about' }"><i class="fas fa-user"></i> 关于我们</a>
      <a href="#portfolio" @click.prevent="showSection('portfolio')" :class="{ active: activeSection === 'portfolio' }"><i class="fas fa-images"></i> 作品集</a>
      <a href="#thanks" @click.prevent="showSection('thanks')" :class="{ active: activeSection === 'thanks' }"><i class="fas fa-heart"></i> 特别鸣谢</a>
      <a href="#contact" @click.prevent="showSection('contact')" :class="{ active: activeSection === 'contact' }"><i class="fas fa-envelope"></i> 联系我们</a>
    </nav>

    <main>
      <section class="content" :class="{ active: activeSection === 'mainContent' }" id="mainContent">
        <div class="section-header">
          <h2>欢迎来到桃花源</h2>
          <p class="subtitle">晋太元中，武陵人捕鱼为业</p>
        </div>
        <div class="feature-cards">
          <div class="card">
            <div class="card-icon"><i class="fa-solid fa-code fa-bounce"></i></div>
            <h3>网站开发</h3>
            <p>由Claude-3.7-Sonnet开发。</p>
          </div>
          <div class="card">
            <div class="card-icon"><i class="fa-solid fa-paintbrush fa-shake"></i></div>
            <h3>网页设计</h3>
            <p>由Claude-3.7-Sonnet设计。</p>
          </div>
          <div class="card">
            <div class="card-icon"><i class="fa-solid fa-truck-front fa-beat"></i></div>
            <h3>百吨王</h3>
            <p>撞大运了！！！</p>
          </div>
        </div>
        <div class="showcase">
          <img src="/wyx/space/img/wyx.jpg" alt="项目展示" class="showcase-image">
          <div class="showcase-overlay">
            <h3>创意无限</h3>
            <p>探索更多精彩内容</p>
          </div>
        </div>
      </section>

      <section class="content" :class="{ active: activeSection === 'about' }" id="about">
        <div class="section-header">
          <h2>关于我们</h2>
          <p class="subtitle">了解我们的故事和使命</p>
        </div>
        <div class="about-content">
          <div class="about-text">
            <p>这个意大利面就应该拌 42 号混凝土，因为这个螺丝钉的长度，它很容易会直接影响到挖掘机的扭矩你知道吧。</p>
            <p>你往里砸的时候，一瞬间它就会产生大量的高能蛋白，俗称 UFO，会严重影响经济的发展，甚至对整个太平洋以及充电器都会造成一定的核污染，你知道吧？</p>
            <p>再者说，根据这个勾股定理，你可以很容易地推断出人工饲养的东条英机，它是可以捕获野生的三角函数的。</p>
            <p>所以说这个，你不管秦始皇的切面是否具有放射性啊，特朗普的 N 次方是否含有沉淀物啊，都不影响这个沃尔玛跟维尔康在南极会合。</p>
          </div>
          <div class="skills">
            <div class="skill">
              <span class="skill-name">Claude-3.7-Sonnet</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: 80%;"></div>
              </div>
            </div>
            <div class="skill">
              <span class="skill-name">Qwen2.5-Coder-32B-Instruct</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: 10%;"></div>
              </div>
            </div>
            <div class="skill">
              <span class="skill-name">Gemini-2.5-Pro-Preview(0506)</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: 7%;"></div>
              </div>
            </div>
            <div class="skill">
              <span class="skill-name">GPT-4o</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: 3%;"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content" :class="{ active: activeSection === 'portfolio' }" id="portfolio">
        <div class="section-header">
          <h2>作品集</h2>
          <p class="subtitle">探索我们的创意作品</p>
        </div>
        <div class="portfolio-grid">
          <div class="portfolio-item">
            <img src="/wyx/space/img/wyx.jpg" alt="项目1">
            <div class="portfolio-overlay">
              <h3>创意网站设计</h3>
              <p>Web开发 / UI设计</p>
            </div>
          </div>
          <div class="portfolio-item">
            <img src="/wyx/space/img/wyx.jpg" alt="项目2">
            <div class="portfolio-overlay">
              <h3>移动应用界面</h3>
              <p>App开发 / UX设计</p>
            </div>
          </div>
          <div class="portfolio-item">
            <img src="/wyx/space/img/wyx.jpg" alt="项目3">
            <div class="portfolio-overlay">
              <h3>品牌标识设计</h3>
              <p>平面设计 / 品牌推广</p>
            </div>
          </div>
        </div>
      </section>

      <section class="content" :class="{ active: activeSection === 'thanks' }" id="thanks">
        <div class="section-header">
          <h2>特别鸣谢</h2>
          <p class="subtitle">犬王</p>
        </div>
        <div class="thanks-content">
          <div class="testimonial">
            <div class="quote"><i class="fas fa-quote-left"></i></div>
            <p>感谢犬王！</p>
            <div class="testimonial-author">— 桃花源团队</div>
          </div>
          <div class="partners">
            <h3>使用工具</h3>
            <div class="partner-logos">
              <div class="partner-logo"><i class="fab fa-github"></i></div>
              <div class="partner-logo"><img src="/wyx/space/img/claude.svg" alt="Claude Logo"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="content" :class="{ active: activeSection === 'contact' }" id="contact">
        <div class="section-header">
          <h2>联系我们</h2>
          <p class="subtitle">随时与我们取得联系</p>
        </div>
        <div class="contact-container">
          <div class="contact-info">
            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <p>桃花源深处</p>
            </div>
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <p>wyxdjb18cm@outlook.com</p>
            </div>
            <div class="info-item">
              <i class="fab fa-github"></i>
              <p>https://github.com/wyx7891/html</p>
            </div>
          </div>
          <form class="contact-form">
            <div class="form-group">
              <input type="text" placeholder="您的姓名" required>
            </div>
            <div class="form-group">
              <input type="email" placeholder="您的邮箱" required>
            </div>
            <div class="form-group full-width">
              <input type="text" placeholder="主题">
            </div>
            <div class="form-group full-width">
              <textarea placeholder="您的留言" rows="5" required></textarea>
            </div>
            <div class="form-group full-width">
              <button type="submit">发送消息 <i class="fas fa-paper-plane"></i></button>
            </div>
          </form>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2024 桃花源. 保留所有权利.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const activeSection = ref('mainContent');

const showSection = (sectionId) => {
  activeSection.value = sectionId;
};

onMounted(() => {
  document.body.classList.add('loaded');
});
</script>

<style scoped>
/* 桃花源CSS - 现代深色主题设计 */
:root {
    --primary-color: #ff7eb3;
    --secondary-color: #7f5af0;
    --accent-color: #2cb67d;
    --background-color: #16161a;
    --surface-color: #242629;
    --text-primary: #fffffe;
    --text-secondary: #94a1b2;
    --border-radius: 12px;
    --transition-speed: 0.3s;
    --header-gradient: linear-gradient(135deg, #ff7eb3 0%, #7f5af0 100%);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all var(--transition-speed) ease;
}

.page-wrapper {
    font-family: 'Noto Sans SC', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--background-color);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
    opacity: 0;
    transition: opacity 0.8s ease;
}

.page-wrapper.loaded {
    opacity: 1;
}

/* 页面包装器 */
.page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* 背景动画效果 */
.page-wrapper::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(127, 90, 240, 0.1) 0%, transparent 80%);
    z-index: -1;
    pointer-events: none;
}

/* 页眉样式 */
header {
    background: var(--header-gradient);
    padding: 2rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.header-content {
    position: relative;
    z-index: 1;
}

header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    margin: 0;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

header h1 span {
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.8;
    display: block;
    margin-top: 0.5rem;
}

/* 导航栏样式 */
nav {
    background-color: var(--surface-color);
    display: flex;
    justify-content: center;
    padding: 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

nav a {
    color: var(--text-primary);
    text-decoration: none;
    padding: 1rem 1.5rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    position: relative;
    margin: 0 0.25rem;
}

nav a i {
    font-size: 1.1rem;
}

nav a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: var(--primary-color);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

nav a:hover {
    color: var(--primary-color);
    background-color: transparent;
}

nav a:hover::after,
nav a.active::after {
    width: 80%;
}

nav a.active {
    color: var(--primary-color);
}

/* 主要内容区域 */
main {
    flex: 1;
    padding: 2rem 0;
}

/* 内容区域样式 */
.content {
    background-color: var(--surface-color);
    border-radius: var(--border-radius);
    padding: 2rem;
    margin: 2rem auto;
    max-width: 1000px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
    transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.5s ease;
    opacity: 0;
    display: none;
}

.content.active {
    display: block;
    opacity: 1;
    animation: fadeIn 0.8s ease forwards;
}

.content:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.section-header {
    text-align: center;
    margin-bottom: 2.5rem;
}

.section-header h2 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    font-size: 2rem;
    position: relative;
    display: inline-block;
}

.section-header h2::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    width: 60px;
    height: 3px;
    background: var(--secondary-color);
    transform: translateX(-50%);
}

.subtitle {
    color: var(--text-secondary);
    font-size: 1.1rem;
}

/* 特色卡片 */
.feature-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.card {
    background-color: #2c2f33;
    padding: 2rem;
    border-radius: var(--border-radius);
    text-align: center;
    border: 1px solid transparent;
}

.card:hover {
    border-color: var(--accent-color);
    transform: translateY(-5px);
}

.card-icon {
    font-size: 2.5rem;
    color: var(--accent-color);
    margin-bottom: 1rem;
}

.card h3 {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.card p {
    color: var(--text-secondary);
}

/* 项目展示 */
.showcase {
    position: relative;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.showcase-image {
    width: 100%;
    display: block;
    border-radius: var(--border-radius);
}

.showcase-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity var(--transition-speed);
}

.showcase:hover .showcase-overlay {
    opacity: 1;
}

.showcase-overlay h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
}

/* 关于我们 */
.about-content {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
}

.about-text {
    flex: 2;
}

.about-text p {
    margin-bottom: 1rem;
}

.skills {
    flex: 1;
    background-color: #2c2f33;
    padding: 1.5rem;
    border-radius: var(--border-radius);
}

.skill {
    margin-bottom: 1rem;
}

.skill-name {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.skill-bar {
    background-color: #40444b;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
}

.skill-level {
    height: 100%;
    background: var(--accent-color);
    border-radius: 5px;
}

/* 作品集 */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius);
}

.portfolio-item img {
    width: 100%;
    display: block;
}

.portfolio-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: #fff;
    padding: 1.5rem;
    transform: translateY(100%);
    transition: transform var(--transition-speed);
}

.portfolio-item:hover .portfolio-overlay {
    transform: translateY(0);
}

.portfolio-overlay h3 {
    margin-bottom: 0.25rem;
}

/* 特别鸣谢 */
.thanks-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.testimonial {
    background-color: #2c2f33;
    padding: 2rem;
    border-radius: var(--border-radius);
    text-align: center;
    position: relative;
    border-left: 5px solid var(--primary-color);
}

.quote {
    font-size: 2rem;
    color: var(--primary-color);
    position: absolute;
    top: 1rem;
    left: 1rem;
}

.testimonial p {
    font-size: 1.2rem;
    font-style: italic;
    margin-bottom: 1rem;
}

.testimonial-author {
    font-weight: 700;
}

.partners {
    text-align: center;
}

.partner-logos {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
}

.partner-logo {
    font-size: 3rem;
    color: var(--text-secondary);
}

.partner-logo img {
    height: 48px;
    filter: grayscale(100%);
    transition: filter var(--transition-speed);
}

.partner-logo:hover img {
    filter: grayscale(0);
}

/* 联系我们 */
.contact-container {
    display: flex;
    gap: 2rem;
}

.contact-info {
    flex: 1;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
}

.info-item i {
    font-size: 1.5rem;
    color: var(--accent-color);
}

.contact-form {
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.form-group {
    width: calc(50% - 0.5rem);
}

.form-group.full-width {
    width: 100%;
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 1rem;
    background-color: #2c2f33;
    border: 1px solid #40444b;
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 1rem;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

button[type="submit"] {
    background: var(--primary-color);
    color: #fff;
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

button[type="submit"]:hover {
    background: #e66aac;
}

/* 页脚样式 */
footer {
    background-color: var(--surface-color);
    text-align: center;
    padding: 1.5rem 0;
    margin-top: 2rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* 动画 */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* 响应式设计 */
@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }

    nav {
        flex-direction: column;
        align-items: center;
    }

    nav a {
        padding: 0.75rem 1rem;
        width: 100%;
        text-align: center;
    }

    .about-content, .contact-container {
        flex-direction: column;
    }
}
</style>