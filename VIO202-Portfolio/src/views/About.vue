<template>
   <nav class="nav-tabs">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

    <main class="about-page">
      <section class="about-card">
        <p class="eyebrow">THE PERSON BEHIND THE WORK</p>
        <h1>About <span>Me</span></h1>


    <p>
        Still exploring. Still creating. Still finding my way.

        I'm a creative and curious person who enjoys exploring the space between technology, art, music and storytelling. 
        I'm currently studying and developing my skills in areas such as coding, digital design, animation and 
        interactive media, but I'm still discovering where all of these interests will take me.
        <br/>
        I enjoy creating things that feel like more than just a finished product. I'm interested in the small details 
        that make an experience memorable movement, sound, atmosphere, colour, interaction and the story behind an idea.
        <img
            src="/images/view.JPG"
            alt="View"
            :style="{ '--parallax': `${scrollY * 0.05}px` }"
          />
        <br/>
        Music is also a big part of who I am. I love listening to music, discovering songs that match different moods, 
        and expressing myself through singing. 
        <img
            src="/images/htk.jpg"
            alt="Music"
            :style="{ '--parallax': `${scrollY * -0.03}px` }"
          />

          <img
            src="/images/showup.jpeg"
            alt="Performance"
            :style="{ '--parallax': `${scrollY * 0.07}px` }"
          />
        Music has always been another way for me to connect with emotions and 
        ideas, and I think that naturally influences the way I approach my creative work. Sometimes a sound, a 
        song or even a particular atmosphere can inspire an entire idea.
        <br/>
        A lot of my visual inspiration comes from nature and quiet moments. I find beauty in sunsets, the night sky, 
        animals, flowers and places where things feel a little slower. I'm especially drawn to the contrast between 
        light and darkness, and how something can feel peaceful, mysterious or meaningful without having to be loud.
       <img
            src="/images/rail.jpeg"
            alt="Railway"
            :style="{ '--parallax': `${scrollY * -0.04}px` }"
          />

          <img
            src="/images/sunset.JPG"
            alt="Sunset"
            :style="{ '--parallax': `${scrollY * 0.06}px` }"
          />
        <br/>
        My creative process is also a lot about learning. Coding hasn't always come naturally to me, but learning 
        how things work, experimenting, making mistakes and eventually figuring them out has become part of the process. 
        I like understanding the why behind what I'm creating, not just following instructions.
        Outside of my own projects, I also enjoy helping others learn. Through tutoring and community work, I've 
        learned that creativity isn't only about what you make, it's also about how you communicate, collaborate 
        and help someone else understand something.
        <br/>
        I don't have every part of my creative identity figured out yet, and I don't think I need to.
        This portfolio is a collection of the things I've explored so far, different ideas, skills, stories, 
        sounds and experiments connected together like a constellation.
        <br/>
        
       
    </p>

      </section>
    </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)

function handleScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
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

.nav-tabs {
  position: relative;

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 40px;

  padding: 25px;
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

.about-page {
  position: relative;
  z-index: 2;
  width: min(1000px, calc(100% - 40px));
  margin: 55px auto 100px;
}

.about-card {
  padding: clamp(30px, 6vw, 75px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 30px;
  background: rgba(10, 8, 15, 0.72);
  backdrop-filter: blur(14px);
  box-shadow: 0 30px 100px rgba(0,0,0,0.38);
}

.about-card .eyebrow {
  color: #d8c37a;
  font-size: 12px;
  letter-spacing: 0.28em;
  font-weight: 700;
}

.about-card h1 {
  margin-bottom: 45px;
  font-size: clamp(48px, 8vw, 92px);
  line-height: 0.95;
  letter-spacing: -0.05em;
}

.about-card h1 span {
  color: #d8b84c;
}

.about-card > p:not(.eyebrow) {
  color: rgba(255,255,255,0.72);
  font-size: 17px;
  line-height: 1.9;
}


/* images */
.about-card > p:not(.eyebrow) img {
  width: 240px;
  height: 300px;

  object-fit: cover;

  padding: 10px;

  background: #111;

  border: 2px solid rgba(255, 255, 255, 0.75);

  box-shadow:
    0 15px 30px rgba(0, 0, 0, 0.55),
    0 0 15px rgba(255, 255, 255, 0.08);

  margin: 40px 25px;

  vertical-align: middle;

  transition:
    transform 0.5s ease,
    box-shadow 0.5s ease;

  display: inline-block;
}


.about-card > p:not(.eyebrow) img:nth-of-type(1) {
  transform: rotate(-4deg);
}

.about-card > p:not(.eyebrow) img:nth-of-type(2) {
  transform: rotate(3deg);
}

.about-card > p:not(.eyebrow) img:nth-of-type(3) {
  transform: rotate(-2deg);
}

.about-card > p:not(.eyebrow) img:nth-of-type(4) {
  transform: rotate(4deg);
}

.about-card > p:not(.eyebrow) img:nth-of-type(5) {
  transform: rotate(-3deg);
}



.about-card > p:not(.eyebrow) img:hover {
  transform: rotate(0deg) scale(1.08);

  z-index: 5;

  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.7),
    0 0 30px rgba(255, 255, 255, 0.25);
}




@media (max-width: 650px) {
  .about-page {
    width: min(100% - 22px, 1000px);
    margin-top: 25px;
  }

  .about-card {
    padding: 28px 22px;
  }
}
</style>