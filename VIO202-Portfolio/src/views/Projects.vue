<template>

   <nav class="nav-tabs">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

  <main class="projects-page">
    <p class="eyebrow">A CONSTELLATION OF IDEAS</p>
    <h1>My <span>Projects</span></h1>
    <p class="intro">Explore the things I've imagined, designed and created.</p>

<section class="orbit-scroll">
  <div class="orbit-section">
    <div class="orbit-scene">
      <div
        class="orbit-ring"
        :style="{ transform: `rotateY(${rotation}deg)` }"
      >
       
          <a
            v-for="(project, index) in projects"
            :key="project.id"
            class="planet"
            :href="project.link"
            :target="project.link.startsWith('http') ? '_blank' : '_self'"
            :rel="project.link.startsWith('http') ? 'noopener noreferrer' : undefined"
            :style="{
              '--angle': `${index * (360 / projects.length)}deg`
            }"
          >
            
            <img :src="project.image" :alt="project.title" />

            <span class="planet-title">{{ project.title }}</span>

            <div class="project-tooltip">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <small>{{ project.module }}</small>
              <p class="tooltip-hint">Click to explore ↗</p>
            </div>

          </a>
        

      </div>
    </div>
  </div>
</section>

  </main>
</template>


<style scoped>
.projects-page {
  min-height: 180vh;
  padding: 80px 20px;
  text-align: center;
  color: white;
  overflow-x: clip;
}

.eyebrow {
  color: #d8c37a;
  letter-spacing: 0.25em;
  font-size: 12px;
}

.projects-page h1 {
  font-size: clamp(48px, 8vw, 85px);
  margin: 20px 0;
}

.projects-page h1 span {
  color: #d8b84c;
}

.projects-page {
  min-height: 180vh;
  padding: 80px 20px;
  text-align: center;
  color: white;
  overflow: clip;
}

.intro {
  color: rgba(255, 255, 255, 0.7);
}


.orbit-scroll {
  height: 250vh;
  position: relative;
  margin-top: 40px;
}

.orbit-section {
  height: 100vh;
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
}

.orbit-scene {
  width: 100%;
  height: 420px;
  position: relative;
  perspective: 1000px;
}

.orbit-ring {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  transition: none;
}


.planet {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 180px;
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  transform:
    translate(-50%, -50%)
    rotateY(var(--angle))
    translateZ(300px);

  backface-visibility: visible;
  transition: filter 0.3s ease;
}

.planet img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid rgba(216, 195, 122, 0.8);
  box-shadow: 0 0 25px rgba(216, 195, 122, 0.2);
  transition: all 0.4s ease;
}

.planet span {
  font-size: 15px;
  letter-spacing: 0.08em;
}

.planet:hover img {
  transform: scale(1.15);
  box-shadow:
    0 0 20px #d8c37a,
    0 0 50px rgba(216, 195, 122, 0.5);
}

.planet:hover {
  z-index: 10;
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

/* Keep the project planet as the positioning reference */
.planet {
  position: absolute;
  overflow: visible;
}

/* Description panel hidden by default */
.project-tooltip {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 240px;
  padding: 18px;
  box-sizing: border-box;

  background: rgba(15, 12, 30, 0.96);
  border: 1px solid rgba(216, 195, 122, 0.8);
  border-radius: 14px;
  color: white;
  text-align: left;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  transform: translate(-50%, -45%) scale(0.9);
  transition: opacity 0.3s ease,
              transform 0.3s ease,
              visibility 0.3s ease;

  z-index: 20;
}

.project-tooltip h3 {
  color: #d8c37a;
  font-size: 17px;
  margin: 0 0 10px;
}

.project-tooltip p {
  font-size: 13px;
  line-height: 1.6;
  margin: 0 0 10px;
}

.project-tooltip small {
  color: rgba(255, 255, 255, 0.65);
  font-size: 11px;
}

.project-tooltip .tooltip-hint {
  color: #d8c37a;
  margin: 12px 0 0;
}

/* Reveal the description when hovering over a planet */
.planet:hover .project-tooltip,
.planet:focus-visible .project-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -45%) scale(1);
}

.planet:hover {
  z-index: 100;
}


@media (max-width: 650px) {
  .orbit-scene {
    height: 300px;
  }

  .planet {
    width: 130px;
    transform:
      translate(-50%, -50%)
      rotateY(var(--angle))
      translateZ(180px);
  }

  .planet img {
    width: 110px;
    height: 110px;
  }
}
</style>



<script>
export default {
  name: 'ProjectsPage',

  data() {
    return {
      rotation: 0,

      projects: [
        {
          id: 1,
          title: 'Mutendeh Game Project',
          module: 'IMY 210 - Advanced Markup Languages',
          description: 'A web-based game built with Adobe Animate, featuring custom artwork and interactive gameplay.',
          technologies: ['Adobe Animate', 'Adobe Illustrator', 'Adobe Photoshop', 'JavaScript'],
          gameLink: '/game/Mutendeh_Project4/Mutendeh_Project4.html',
          image: '/images/game.png',
          link: '/game/Mutendeh_Project4/Mutendeh_Project4.html'
        },
        {
          id: 2,
          title: 'Soothing Animation',
          module: 'IMY 220',
          description: 'Calm animation on YouTube',
          technologies: ['Adobe Photoshop', 'Adobe Animate', 'Adobe Illustrator'],
          youtubeLink: 'https://youtu.be/N9hEoVlRg70',
          image: '/images/animation.png',
          link: 'https://youtu.be/N9hEoVlRg70'
        },
        {
          id: 3,
          title: 'Vertical Narrative Comic',
          module: 'VIO 202',
          description: 'Vertical Narrative with sounds and animations',
          technologies: ['Adobe Illustrator', 'Adobe Fresco', 'Ibis PaintX', 'Adobe Audition', 'Adobe Animate', 'Vue'],
          link: 'https://snazzy-nougat-1f0d80.netlify.app/',
          image: '/images/comic.png'

        }
      ]
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll, {
      passive: true
    })

    this.handleScroll()
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
   
  handleScroll() {
  const section = document.querySelector('.orbit-scroll')

  if (!section) return

  const sectionDocumentTop =
    section.getBoundingClientRect().top + window.scrollY

  const startScroll = sectionDocumentTop
  const endScroll =
    sectionDocumentTop + section.offsetHeight - window.innerHeight

  const scrollRange = endScroll - startScroll

  if (scrollRange <= 0) return

  const progress = Math.min(
    1,
    Math.max(
      0,
      (window.scrollY - startScroll) / scrollRange
    )
  )

  this.rotation = progress * 360
}

  }
}
</script>

