<script>

</script>


<template>
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
        <br/>
        Music is also a big part of who I am. I love listening to music, discovering songs that match different moods, 
        and expressing myself through singing. Music has always been another way for me to connect with emotions and 
        ideas, and I think that naturally influences the way I approach my creative work. Sometimes a sound, a 
        song or even a particular atmosphere can inspire an entire idea.
        <br/>
        A lot of my visual inspiration comes from nature and quiet moments. I find beauty in sunsets, the night sky, 
        animals, flowers and places where things feel a little slower. I'm especially drawn to the contrast between 
        light and darkness, and how something can feel peaceful, mysterious or meaningful without having to be loud.
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


<style scoped>
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