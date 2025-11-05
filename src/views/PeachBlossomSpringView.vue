<template>
  <div class="page-wrapper">
    <header>
      <div class="header-content">
        <h1><i class="fas fa-seedling"></i> 桃花源 <span>by wyx卡卡传奇</span></h1>
      </div>
    </header>

    <nav>
      <a href="#home" @click.prevent="showSection('mainContent')"><i class="fas fa-home"></i> 首页</a>
      <a href="#about" @click.prevent="showSection('about')"><i class="fas fa-user"></i> 关于我们</a>
      <a href="#portfolio" @click.prevent="showSection('portfolio')"><i class="fas fa-images"></i> 作品集</a>
      <a href="#thanks" @click.prevent="showSection('thanks')"><i class="fas fa-heart"></i> 特别鸣谢</a>
      <a href="#contact" @click.prevent="showSection('contact')"><i class="fas fa-envelope"></i> 联系我们</a>
    </nav>

    <main>
      <section class="content active" id="mainContent">
        <div class="section-header">
          <h2>欢迎来到桃花源</h2>
          <p class="subtitle">晋太元中，武陵人捕鱼为业</p>
        </div>

        <div class="feature-cards">
          <div class="card">
            <div class="card-icon"><i class="fa-solid fa-code fa-bounce"></i></div>
            <h3>网站开发</h3>
            <p>wyx卡卡传奇。</p>
          </div>
          <div class="card">
            <div class="card-icon"><i class="fa-solid fa-paintbrush fa-shake"></i></div>
            <h3>网页设计</h3>
            <p>wyx卡卡传奇。</p>
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

      <section class="content" id="about">
        <div class="section-header">
          <h2>关于我们</h2>
          <p class="subtitle">了解我们的故事和使命</p>
        </div>

        <div class="about-content">
          <div class="about-text">
            <p>这个意大利面就应该拌 42 号混凝土，因为这个螺丝钉的长度，它很容易会直接影响到挖掘机的扭矩你知道吧。</p>
            <p>你往里砸的时候，一瞬间它就会产生大量的高能蛋白，俗称 UFO，会严重影响经济的发展，甚至对整个太平洋以及充电器都会造成一定的核污染，你知道吧？</p>
            <p>再者说，根据这个勾股定理，你可以很容易地推断出人工饲养的东条英机，它是可以捕获野生的三角函数的。</p>
            <p>这么说，你不管秦始皇的切面是否具有放射性啊，特朗普的 N 次方是否含有沉淀物啊，都不影响这个沃尔玛跟维尔康在南极会合。</p>
          </div>
          <div class="skills">
            <div class="skill">
              <span class="skill-name">wyx卡卡传奇</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: 80%;"></div>
              </div>
            </div>
            <div class="skill">
              <span class="skill-name">wyx卡卡传奇t</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: 10%;"></div>
              </div>
            </div>
            <div class="skill">
              <span class="skill-name">wyx卡卡传奇</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: 7%;"></div>
              </div>
            </div>
            <div class="skill">
              <span class="skill-name">wyx卡卡传奇</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: 3%;"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content" id="portfolio">
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

      <section class="content" id="thanks">
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

      <section class="content" id="contact">
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

          <form class="contact-form" @submit.prevent="showModal">
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

    <div id="customAlertModal" class="modal" v-if="isModalVisible">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <h2>消息未发送</h2>
        <p>没后端怎么发？</p>
      </div>
    </div>

    <footer>
      <div class="footer-content">
        <div class="footer-logo">
          <h3><i class="fas fa-seedling"></i> 桃花源</h3>
          <p>创意无限 · 技术卓越</p>
        </div>
        <div class="footer-links">
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-weixin"></i></a>
          <a href="#"><i class="fab fa-weibo"></i></a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 桃花源 | 保留所有权利</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isModalVisible = ref(false);

const showModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const showSection = (sectionId) => {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add('active');
    selectedSection.scrollIntoView({ behavior: 'smooth' });
  }

  updateNavActiveState(sectionId);
};

const updateNavActiveState = (sectionId) => {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${sectionId}`) {
      link.classList.add('active');
    }
  });
};

onMounted(() => {
  const fontAwesomeScript = document.createElement('script');
  fontAwesomeScript.src = 'https://kit.fontawesome.com/cb09ccbe88.js';
  fontAwesomeScript.crossOrigin = 'anonymous';
  document.head.appendChild(fontAwesomeScript);

  document.body.classList.add('loaded');

  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        updateNavActiveState(section.id);
      }
    });
  });

  window.addEventListener('click', (event) => {
    const modal = document.getElementById('customAlertModal');
    if (event.target == modal) {
      closeModal();
    }
  });
});
</script>

<style scoped>
@import url('./PBScss.css');
</style>
