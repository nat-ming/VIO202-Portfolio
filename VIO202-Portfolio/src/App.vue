<template>
  <div class="app">
    <canvas ref="canvas" class="constellation"></canvas>

    <nav class="nav-tabs">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

    <!--current page-->
    <main class="page-content">
      <RouterView />
    </main>

    
    <footer class="site-footer">
      <div class="footer-content">
        <p>© 2026 Natalie Mutendeh</p>

        <div class="footer-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </div>

        <p class="footer-tagline">
          Connecting ideas through a creative constellation.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);

let ctx;
let animationFrame;

const stars = [];

function resizeCanvas() {
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
}

function createStars() {
  stars.length = 0;

  for (let i = 0; i < 80; i++) {
    stars.push({
      x: Math.random() * canvas.value.width,
      y: Math.random() * canvas.value.height,
      radius: Math.random() * 2 + 1,

      // Used for twinkling
      brightness: Math.random(),
      speed: Math.random() * 0.03 + 0.01
    });
  }
}

function drawStars() {
  ctx.clearRect(
    0,
    0,
    canvas.value.width,
    canvas.value.height
  );

  for (const star of stars) {

    // Make the star slowly brighten and dim
    star.brightness += star.speed;

    if (star.brightness >= 1) {
      star.brightness = 1;
      star.speed *= -1;
    }

    if (star.brightness <= 0.2) {
      star.brightness = 0.2;
      star.speed *= -1;
    }

    ctx.beginPath();

    ctx.arc(
      star.x,
      star.y,
      star.radius,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = `rgba(255, 215, 0, ${star.brightness})`;

    ctx.fill();
  }

  drawConnections();

  animationFrame = requestAnimationFrame(drawStars);
}

function drawConnections() {
  for (let i = 0; i < stars.length; i++) {

    for (let j = i + 1; j < stars.length; j++) {

      const star1 = stars[i];
      const star2 = stars[j];

      const dx = star1.x - star2.x;
      const dy = star1.y - star2.y;

      const distance = Math.sqrt(
        dx * dx + dy * dy
      );

      if (distance < 150) {

        const opacity = 1 - distance / 150;

        ctx.beginPath();

        ctx.moveTo(
          star1.x,
          star1.y
        );

        ctx.lineTo(
          star2.x,
          star2.y
        );

        ctx.strokeStyle =
          `rgba(255,255,255,${opacity * 0.3})`;

        ctx.lineWidth = 1;

        ctx.stroke();
      }
    }
  }
}

function handleResize() {
  resizeCanvas();
  createStars();
}

onMounted(() => {

  ctx = canvas.value.getContext("2d");

  resizeCanvas();

  createStars();

  drawStars();

  window.addEventListener(
    "resize",
    handleResize
  );
});

onUnmounted(() => {

  cancelAnimationFrame(animationFrame);

  window.removeEventListener(
    "resize",
    handleResize
  );
});
</script>

<style scoped>

.app {
  min-height: 100vh;
}

.constellation {
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 1;

  pointer-events: none;
}

canvas {
  display: block;

  width: 100%;
  height: 100%;
}

.nav-tabs {
  position: relative;

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 40px;

  padding: 25px;
}

.nav-tabs a {
  display: block;

  color: white;
  background: black;

  text-decoration: none;

  font-size: 18px;

  padding: 12px 25px;

  border: 2px solid white;
  border-radius: 30px;

  transition: all 0.3s ease;
}

.nav-tabs a:hover {
  background: white;

  color: black;

  box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
}

.nav-tabs a.router-link-active {
  background: white;

  color: black;

  box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
}

.welcome {
  color: #4F1B45;

  align-items: center;

  font-size: 30px;
}

.tabs {
  display: flex;

  gap: 20px;

  padding: 20px;

  background: #222;
}

.tabs button {
  background: none;

  border: none;

  color: white;

  font-size: 18px;

  cursor: pointer;

  padding: 10px 15px;
}

.tabs button:hover {
  color: #aaa;
}

.tabs button.active {
  color: white;

  border-bottom: 3px solid white;
}

.content {
  padding: 40px;
}


/* styling */

.app {
  position: relative;
  overflow-x: hidden;
}

.app::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 15% 80%, rgba(79, 27, 69, 0.18), transparent 30%),
    radial-gradient(circle at 85% 20%, rgba(255, 215, 0, 0.06), transparent 25%);
}

.nav-tabs {
  position: sticky;
  top: 0;
  width: 100%;
  padding: 22px 30px;
  background: rgba(5, 5, 9, 0.72);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(14px);
}

.nav-tabs a {
  min-width: 105px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.45);
  border-color: rgba(255,255,255,0.65);
}

.nav-tabs a:hover,
.nav-tabs a.router-link-active {
  transform: translateY(-2px);
}

@media (max-width: 650px) {
  .nav-tabs {
    gap: 8px;
    padding: 14px 10px;
  }

  .nav-tabs a {
    min-width: auto;
    padding: 10px 13px;
    font-size: 11px;
  }
}

</style>