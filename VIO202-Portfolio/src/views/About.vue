<template>
   <nav class="nav-tabs">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      
    </nav>

    <main class="about-page">
      <section class="about-card">
        <!-- <p class="eyebrow">THE PERSON BEHIND THE WORK</p> -->
        <h1>About <span>Me</span></h1>

<p>
    <p>
        Still exploring. Still creating. Still finding my way.
    </p>
        <p>
          I'm a creative and curious person who enjoys exploring the space between technology, art, music and storytelling. 
          I'm currently studying and developing my skills in areas such as coding, digital design, animation and 
          interactive media, but I'm still discovering where all of these interests will take me.
      </p>
        <div class="img-row">
            <img
              src="/images/rail.jpeg"
              alt="Railway"
              :style="{ '--parallax': `${scrollY * 0.09}px` }"
            /> 

          <img
              src="/images/view.JPG"
              alt="View"
              :style="{ '--parallax': `${scrollY * 0.09}px` }"
            />

            <img
              src="/images/sunset.JPG"
              alt="Sunset"
              :style="{ '--parallax': `${scrollY * 0.09}px` }"
            />
          <br/>
        </div>
        
        <p>
          A lot of my visual inspiration comes from nature and quiet moments. 
          I find comfort in sunsets, the moon, stars, flowers, and the peacefulness of being alone in 
          nature. I'm especially drawn to the contrast between light and darkness, and how something 
          can feel peaceful, mysterious or meaningful without having to be loud.

        </p>
        
        <div class="image-row">
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

            <img
              src="/images/trophy.JPG"
              alt="Performance"
              :style="{ '--parallax': `${scrollY * 0.07}px` }"
            />

          </div>
        <p>Music has always been another way for me to connect with emotions and 
        ideas, and I think that naturally influences the way I approach my creative work. Sometimes a sound, a 
        song or even a particular atmosphere can inspire an entire idea.</p>
        <!-- Music is also a big part of who I am. I love listening to music, discovering songs that match different moods, 
        and expressing myself through singing.  -->
        
        <div class="image-row">
          <img
              src="/images/jcp.JPG"
              alt="Railway"
              :style="{ '--parallax': `${scrollY * 0.08}px` }"
            />

          <img
              src="/images/jcp1.JPG"
              alt="View"
              :style="{ '--parallax': `${scrollY * 0.05}px` }"
            />
        </div>
        <p>
          Outside of my own projects, I also enjoy helping others learn. Through tutoring and community work, I've 
          learned that creativity isn't only about what you make, it's also about how you communicate, collaborate 
          and help someone else understand something.
        </p>

    <!-- <p>
        I don't have every part of my creative identity figured out yet, and I don't think I need to.
        This portfolio is a collection of the things I've explored so far, different ideas, skills, stories, 
        sounds and experiments connected together like a constellation. 
    </p> -->
</p>
   
</section>

<section class="skills-section" id="skills">
  <h1>My <span>Skills</span></h1>

  <p class="skills-intro">
    Every skill is another star in my creative universe.
    Explore what I've learned and what I'm still discovering.
  </p>

  <div class="skills-planets">
    <button
      v-for="planet in planets"
      :key="planet.id"
      class="skill-planet"
      :class="[
        planet.colour,
        { 'planet-active': selectedPlanet === planet.id }
      ]"
      @click="togglePlanet(planet.id)"
      :aria-expanded="selectedPlanet === planet.id"
      :aria-controls="'skill-details-' + planet.id"
    >
      <span class="planet-orbit">
        <span class="planet-sphere">{{ planet.symbol }}</span>
      </span>

      <span class="planet-name">{{ planet.name }}</span>
      <span class="planet-hint">
        {{ selectedPlanet === planet.id ? 'Close' : 'Explore' }}
      </span>
    </button>
  </div>

  <Transition name="planet-reveal">
    <div
      v-if="activePlanet"
      class="skill-details"
      :key="activePlanet.id"
      :id="'skill-details-' + activePlanet.id"
    >
      <button
        class="skill-close"
        @click="selectedPlanet = null"
        aria-label="Close skill details"
      >
        ×
      </button>

      <span class="detail-symbol">{{ activePlanet.symbol }}</span>
      <h3>{{ activePlanet.name }}</h3>
      <p class="skill-description">{{ activePlanet.description }}</p>

      <ul class="skill-list">
        <li v-for="skill in activePlanet.skills" :key="skill">
          <span class="skill-star">✦</span>
          {{ skill }}
        </li>
      </ul>

      <p class="skill-level">{{ activePlanet.level }}</p>
    </div>
  </Transition>

  <p class="skills-footer">
    Still learning. Still creating. Still finding my way.
  </p>
</section>

    </main>


</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const scrollY = ref(0)

const selectedPlanet = ref(null)


function handleScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const planets = [
  {
    id: 'programming',
    name: 'Programming',
    symbol: '✦',
    colour: 'planet-pink',
    description: 'The logical side of my creative universe.',
    skills: ['C++','Object-oriented programming'],
    level: 'Developing my programming skills'
  },
  {
    id: 'web',
    name: 'Web Development',
    symbol: '✧',
    colour: 'planet-green',
    description: 'Turning ideas into interactive digital experiences.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Git and GitHub'],
    level: 'Learning through projects'
  },
  {
    id: 'creative',
    name: 'Creative Design',
    symbol: '☾',
    colour: 'planet-purple',
    description: 'Exploring how visuals, movement and atmosphere tell stories.',
    skills: [
      'Visual design',
      'Digital storytelling',
      'Animation and interactive media'
    ],
    level: 'Exploring and experimenting'
  },
  {
    id: 'personal',
    name: 'Personal Strengths',
    symbol: '✧',
    colour: 'planet-pink',
    description: 'The qualities that shape how I learn and create.',
    skills: [
      'Problem-solving',
      'Creativity',
      'Communication',
      'Teamwork',
      'Adaptability'
    ],
    level: 'Growing with every experience'
  }
]

const activePlanet = computed(() =>
  planets.find(planet => planet.id === selectedPlanet.value) ?? null
)

function togglePlanet(id) {
  selectedPlanet.value =
    selectedPlanet.value === id ? null : id
}

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

h1 span {
  color: #d8b84c;
}

.about-card > p:not(.eyebrow) {
  color: rgba(255,255,255,0.72);
  font-size: 17px;
  line-height: 1.9;
}


/* images */
.about-card > p:not(.eyebrow) img {
  width: 200px;
  height: 260px;

  object-fit: cover;

  padding: 10px;

  background: #111;

  border: 2px solid #d8b84c;;

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

img{
   width: 160px;
  height: 200px;
}

.image-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 30px 0;
}

.image-row img {
  width: 160px;
  height: 200px;
  object-fit: cover;
  padding: 10px;
  background: #111;
  border: 2px solid rgba(255, 255, 255, 0.75);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.55);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  transform: translateY(var(--parallax, 0px));
}

.image-row img:hover {
  transform: translateY(var(--parallax, 0px)) scale(1.05);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
}


.h2{
  font-family:'monimer', sans-serif;;
}

.skills-section {
  position: relative;
  margin-top: 55px;
  padding: 35px 0 15px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.skills-section .skills-title {
  margin-bottom: 15px;
  color: #d8b84c;
  font-family: 'monimer', sans-serif;
  font-size: clamp(32px, 5vw, 48px);
}

.skills-section .skills-intro {
  max-width: 580px;
  margin: 0 auto 40px;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.8;
}

.skills-planets {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

.skill-planet {
  width: 145px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
  background: transparent;
  border: 0;
  font: inherit;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.planet-orbit {
  width: 100px;
  height: 100px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(216, 184, 76, 0.55);
  border-radius: 50%;
  position: relative;
  transition: box-shadow 0.3s ease;
}

.planet-orbit::after {
  content: "";
  position: absolute;
  width: 125px;
  height: 36px;
  border: 1px solid rgba(216, 184, 76, 0.8);
  border-radius: 50%;
  transform: rotate(-25deg);
  pointer-events: none;
}

.planet-sphere {
  width: 66px;
  height: 66px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: 24px;
  transition: transform 0.3s ease;
}

.planet-pink .planet-sphere {
  background: radial-gradient(circle at 30% 25%, #f4c3e2, #c56ba7 55%, #552e58);
  box-shadow: 0 0 20px rgba(230, 120, 200, 0.35);
}

.planet-green .planet-sphere {
  background: radial-gradient(circle at 30% 25%, #d1e9b5, #659c76 55%, #243f3c);
  box-shadow: 0 0 20px rgba(130, 220, 160, 0.3);
}

.planet-purple .planet-sphere {
  background: radial-gradient(circle at 30% 25%, #e6d0ff, #9876c3 55%, #443357);
  box-shadow: 0 0 20px rgba(180, 130, 230, 0.3);
}

.skill-planet:hover,
.skill-planet.planet-active {
  transform: translateY(-5px);
}

.skill-planet:hover .planet-orbit,
.skill-planet.planet-active .planet-orbit {
  box-shadow: 0 0 24px rgba(216, 184, 76, 0.25);
}

.skill-planet:hover .planet-sphere,
.skill-planet.planet-active .planet-sphere {
  transform: scale(1.1);
}

.planet-name {
  font-weight: 600;
}

.planet-hint {
  font-size: 12px;
  opacity: 0.65;
}

.skill-details {
  position: relative;
  max-width: 560px;
  margin: 40px auto 0;
  padding: 30px;
  text-align: left;
  border: 2px solid #D4A910;
  border-radius: 20px;
  background: rgba(10, 8, 15, 0.88);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.25);
}

.skill-close {
  position: absolute;
  top: 10px;
  right: 15px;
  color: white;
  background: transparent;
  border: none;
  font-size: 26px;
  cursor: pointer;
}

.detail-symbol,
.skill-star {
  color: #d8b84c;
}

.skill-details h3 {
  color: #d8b84c;
}

.skill-description {
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.75);
}

.skill-list {
  padding-left: 0;
  list-style: none;
  line-height: 2;
}

.skill-star {
  margin-right: 8px;
}

.skill-level {
  margin-top: 20px;
  font-size: 13px;
  font-style: italic;
  opacity: 0.7;
}

.skills-footer {
  margin-top: 35px;
  color: #d8b84c;
  font-style: italic;
  opacity: 0.8;
}

.planet-reveal-enter-active,
.planet-reveal-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.planet-hint{
  color:  #d8b84c ;

}

.planet-reveal-enter-from,
.planet-reveal-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 600px) {
  .skills-planets {
    gap: 15px;
  }

  .skill-planet {
    width: 125px;
  }

  .skill-details {
    padding: 25px 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill-planet,
  .planet-orbit,
  .planet-sphere,
  .planet-reveal-enter-active,
  .planet-reveal-leave-active {
    transition: none;
  }
}


@media (max-width: 650px) {
.image-row img {
    width: 100%;
    max-width: 200px;
  }

  .about-page {
    width: min(100% - 22px, 1000px);
    margin-top: 25px;
  }

  .about-card {
    padding: 28px 22px;
  }
}
</style>