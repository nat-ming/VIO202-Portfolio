<template>
  <div class="container">

    <main>
      <h1>My Projects</h1>
      
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <h2>{{ project.title }}</h2>
          <p class="project-module">{{ project.module }}</p>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>

          <div class="button-container">
            <a :href="project.gameLink" target="_blank" class="btn game-btn" v-if="project.gameLink">
               Play Game
            </a>
            <a :href="project.youtubeLink" target="_blank" class="btn youtube-btn" v-if="project.youtubeLink">
              ▶ Watch on YouTube
            </a>
            <a :href="project.pdfLink" target="_blank" class="btn pdf-btn" v-if="project.pdfLink">
              View Comic
              
            </a>
          </div>
        </div>
      </div>
    </main>

    
  </div>
</template>

<style scoped>
.container {
  position: relative;
  z-index: 2;
  width: min(1150px, calc(100% - 40px));
  margin: 55px auto 90px;
}

main {
  padding-bottom: 40px;
}

main > h1 {
  margin-bottom: 42px;
  text-align: center;
  font-size: clamp(45px, 7vw, 80px);
  letter-spacing: -0.05em;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 390px;
  padding: 28px;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(30,23,34,0.82), rgba(8,7,12,0.82));
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
}

.project-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 28px;
  right: 28px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,215,0,.65), transparent);
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255,215,0,0.35);
  box-shadow: 0 30px 65px rgba(0,0,0,0.45);
}

.project-card h2 {
  margin-bottom: 10px;
  font-size: 25px;
}

.project-module {
  color: #d8c37a;
  font-size: 12px;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.project-description {
  color: rgba(255,255,255,.68);
  line-height: 1.7;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: auto 0 22px;
}

.tech-tag {
  padding: 6px 10px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 999px;
  color: rgba(255,255,255,.75);
  background: rgba(255,255,255,.04);
  font-size: 11px;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  border: 1px solid rgba(255,255,255,.3);
  border-radius: 999px;
  color: white;
  text-decoration: none;
  background: rgba(255,255,255,.06);
  font-size: 12px;
  transition: .25s ease;
}

.btn:hover {
  background: rgba(255,215,0,.13);
  border-color: rgba(255,215,0,.6);
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .container {
    width: min(100% - 22px, 1150px);
    margin-top: 25px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<script>

export default {
  name: 'ProjectsPage',
  
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Mutendeh Game Project',
          module: 'IMY 210 - Advanced Markup Languages',
          description: 'A web-based game built with Adobe Animate, featuring custom artwork and interactive gameplay.',
          technologies: ['Adobe Animate', 'Adobe Illustrator', 'Adobe Photoshop', 'JavaScript'],
          gameLink: '/game/Mutendeh_Project4/Mutendeh_Project4.html'
        },
        {
          id: 2,
          title: 'Soothing Animation',
          module: 'IMY 220',
          description: 'Calm animation on YouTube',
          technologies: ['Adobe Photoshop', 'Adobe Animate', 'Adobe Illustrator'],
          youtubeLink: 'https://youtu.be/N9hEoVlRg70',
          link: '#'
        },
        {
          id: 3,
          title: 'Vertical Narrative Comic',
          module: 'VIO 202',
          description: 'Vertical Narrative with sounds and animations',
          technologies: ['Adobe Illustrator', 'Adobe Fresco', 'Ibis PaintX',' Adobe Audition', 'Adobe Animate',' VUE'],
          link: 'https://snazzy-nougat-1f0d80.netlify.app/'
        }
      ]
    }
  }
}
</script>