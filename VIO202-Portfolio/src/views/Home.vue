
<template>
    <main class="home-page">
        <section class="hero">
            <p class="eyebrow">A CREATIVE CONSTELLATION</p>
            <h1>WELCOME<span>!</span></h1>
            <p class="hero-text">
                A collection of ideas, experiments, stories and skills, 
                connected through my creative journey.
            </p>
            <!-- <RouterLink to="/projects" class="explore-button">Explore my work <span>↗</span></RouterLink> -->
        </section>

        <div class="home-orbit orbit-one"></div>
        <div class="home-orbit orbit-two"></div>
    </main>


</template>


<style scoped>
.home-page {
  position: relative;
  z-index: 2;
  min-height: calc(100vh - 90px);
  display: grid;
  place-items: center;
  padding: 70px 24px 120px;
  overflow: hidden;
}

.hero {
  width: min(850px, 100%);
  text-align: center;
  padding: 70px 35px;
  border: 1px solid rgba(255,255,255,0.13);
  border-radius: 28px;
  background: rgba(8, 7, 13, 0.62);
  backdrop-filter: blur(12px);
  box-shadow: 0 30px 100px rgba(0,0,0,0.45);
}

.eyebrow {
  margin-bottom: 18px;
  color: #d8c37a;
  font-size: 12px;
  letter-spacing: 0.35em;
  font-weight: 700;
}

.hero h1 {
  margin-bottom: 18px;
  font-size: clamp(64px, 12vw, 150px);
  line-height: 0.9;
  letter-spacing: -0.06em;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 0 35px rgba(255,255,255,0.1);
}

.hero h1 span {
  color: #d8b84c;
}

.hero-text {
  width: min(570px, 100%);
  margin: 0 auto 34px;
  color: rgba(255,255,255,0.72);
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.8;
}

.explore-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 23px;
  border: 1px solid rgba(255,215,0,0.65);
  border-radius: 999px;
  color: #f8f2df;
  text-decoration: none;
  background: rgba(255,215,0,0.07);
  transition: 0.3s ease;
}

.explore-button:hover {
  background: rgba(255,215,0,0.16);
  box-shadow: 0 0 25px rgba(255,215,0,0.12);
  transform: translateY(-3px);
}

.home-orbit {
  position: absolute;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 50%;
  pointer-events: none;
}

.orbit-one {
  width: 650px;
  height: 650px;
}

.orbit-two {
  width: 1000px;
  height: 1000px;
}

.home-page footer {
  display: none;
}
</style>