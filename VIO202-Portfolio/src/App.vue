<template>
  <div class="app">
    <canvas ref="canvas" class="constellation"></canvas>

   
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
          A collection of ideas, experiments, stories and skills, 
                connected through my creative journey.
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

  //drawConnections();

  animationFrame = requestAnimationFrame(drawStars);
}

// function drawConnections() {
//   for (let i = 0; i < stars.length; i++) {

//     for (let j = i + 1; j < stars.length; j++) {

//       const star1 = stars[i];
//       const star2 = stars[j];

//       const dx = star1.x - star2.x;
//       const dy = star1.y - star2.y;

//       const distance = Math.sqrt(
//         dx * dx + dy * dy
//       );

//       if (distance < 150) {

//         const opacity = 1 - distance / 150;

//         ctx.beginPath();

//         ctx.moveTo(
//           star1.x,
//           star1.y
//         );

//         ctx.lineTo(
//           star2.x,
//           star2.y
//         );

//         ctx.strokeStyle =
//           `rgba(255,255,255,${opacity * 0.3})`;

//         ctx.lineWidth = 1;

//         ctx.stroke();
//       }
//     }
//   }
// }

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





.footer-content{
   /* border: 1px solid rgba(255,255,255,0.13);
  border-radius: 28px;  */
  background: rgba(8, 7, 13, 0.62);
  backdrop-filter: blur(12px);
  /* box-shadow: 0 30px 100px rgba(0,0,0,0.45); */
  width: auto;
}


</style>