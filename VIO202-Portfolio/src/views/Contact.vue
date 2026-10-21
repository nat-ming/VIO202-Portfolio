<template>
   <nav class="nav-tabs">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

  <div class="container">
    <Header />
    
    <main>
     <p>Lets create a connection</p>
      <!-- <h2>Get in Touch</h2> -->
     <!-- <p>
              Every project is a little part of my creative journey, and I'm always open to discovering where the next connection might lead.
              Whether you'd like to talk about a project, collaborate on an idea, share an opportunity, or simply say hello, I'd love to hear from you.
          </p> -->
      
      <div class="contact-container">
        <div class="contact-info">
          
          

            <div class="contant_Orbit">
                <img src="/images/orbit.png" alt="orbit" />
            </div>
          
            <div class="social-icons">
              <a
                class="ig"
                href="https://www.instagram.com/crystal_taliana?vrfl=MXNxMHhjbTk1ZGxlZw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my Instagram"
              >
                <img src="/images/ig.png" alt="Instagram" />
              </a>

            
            <a
              class="git"
                href="https://github.com/nat-ming"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub"
              >
                <img src="/images/git.png" alt="GitHub" />
              </a>

               <a
               class="tt"
                href="https://www.tiktok.com/@taliana_natt?_r=1&_t=ZS-98qp3MPc7XO"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my Instagram"
              >
                <img src="/images/tt.png" alt="Instagram" />
              </a>

            </div>
              
          
          <!-- <div class="info-item">
            <strong>Email:</strong>
            <p>mova.nk23@gmail.com</p>
          </div>
          
            <button>
            
            <p>https://github.com/nat-ming</p>
            </button> -->

            <!-- <div class="info-item">
            <strong>Instagram</strong>
            <p>crystal_taliana</p>
          </div>

            <div class="info-item">
             <strong>Tiktok</strong>
            <p>taliana_natt</p>
          </div>
          
          <div class="info-item">
            <strong>GitHub</strong>
            <p>nat-ming</p>
          </div>
        </div>

        <div class="contact-form">
          <h2>Send a Message</h2>
          
          
          <form name="contact" method="POST" netlify>
            <input type="hidden" name="form-name" value="contact" />
            
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
              <label for="subject">Subject:</label>
              <input type="text" id="subject" name="subject" required>
            </div>
            
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            

            <button type="submit" class="btn">Send Message</button>
          </form> -->
        </div>
      </div>
    </main>

    
  </div>

  
       


</template>

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

.nav-tabs {
  position: relative;

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 40px;

  padding: 25px;
}

h2{
   display: flex;
  justify-content: center;
}

.contant_Orbit {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto 20px;
  position: relative;
  left: 280px;
  z-index: 1;
}

.contant_Orbit img {
  width: 500px;
  max-width: 100%;
  height: auto;
  display: block;
  
  
}

.social-icons img {
  width: 80px;
  height: 80px;
  /* object-fit: contain;
  display: block; */
  
}

.ig{
  position: absolute;
  left: 280px;
  top: 200px;
  z-index:4 ;
}

.tt{
  position: absolute;
  left: 600px;
  top: 120px;
  z-index: 4;
}

.git{
  position: absolute;
  left: 400px;
  top: 450px;
  z-index: 4 ;
}

.git:hover .git {
    filter: grayscale(100%);
    opacity: 0.4;
}


.git:hover {
    filter: grayscale(0%) drop-shadow(0 0 25px white);
    opacity: 1;
    transform: scale(1.15);
}


.tt:hover {
    filter: grayscale(0%) drop-shadow(0 0 25px white);
    opacity: 1;
    transform: scale(1.15);
}

.tt:hover .tt{
    filter: grayscale(100%);
    opacity: 0.4;
}

.ig:hover {
    filter: grayscale(0%) drop-shadow(0 0 25px white);
    opacity: 1;
    transform: scale(1.15);
}

.ig:hover .ig{
    filter: grayscale(100%);
    opacity: 0.4;
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
.container {
  position: relative;
  z-index: 2;
  width: min(1050px, calc(100% - 40px));
  margin: 55px auto 90px;
}

main > p:first-child {
  margin-bottom: 35px;
  text-align: center;
  /* color: #d8c37a; */
  color: white;
  font-size: 12px;
  letter-spacing: .3em;
  text-transform: uppercase;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

/* .contact-info,
.contact-form {
  padding: 35px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 26px;
  background: rgba(10,8,15,.72);
  backdrop-filter: blur(14px);
  box-shadow: 0 25px 70px rgba(0,0,0,.35);
} */

.contact-info h2,
.contact-form h2 {
  margin-bottom: 18px;
  font-size: 30px;
}

.contact-info > p {
  color: rgba(255,255,255,.68);
  line-height: 1.75;
}
/* 
.info-item {
  padding: 17px 0;
  border-top: 1px solid rgba(255,255,255,.09);
}

.info-item strong {
  color: #d8c37a;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: .12em;
}

.info-item p {
  margin: 7px 0 0;
  color: rgba(255,255,255,.78);
  overflow-wrap: anywhere;
} */

/* .form-group {
  margin-bottom: 18px;
} */

/* .form-group label {
  display: block;
  margin-bottom: 7px;
  color: rgba(255,255,255,.75);
  font-size: 13px;
} */

/* .form-group input,
.form-group textarea {
  width: 100%;
  padding: 13px 14px;
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 12px;
  outline: none;
  color: white;
  background: rgba(255,255,255,.045);
  resize: vertical;
  transition: .25s ease;
} */

/* .form-group input:focus,
.form-group textarea:focus {
  border-color: rgba(255,215,0,.6);
  box-shadow: 0 0 0 3px rgba(255,215,0,.07);
} */

/* .contact-form .btn {
  cursor: pointer;
  padding: 12px 22px;
} */

@media (max-width: 800px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .container {
    width: min(100% - 22px, 1050px);
    margin-top: 25px;
  }

  .contact-info,
  .contact-form {
    padding: 25px 20px;
  }
}
</style>


<style scoped>

</style>