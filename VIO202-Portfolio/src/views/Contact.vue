<template>
  <div class="container">
    <Header />
    
    <main>
     <p>Lets create a connection</p>
      
      <div class="contact-container">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p>
              Every project is a little part of my creative journey, and I'm always open to discovering where the next connection might lead.
              Whether you'd like to talk about a project, collaborate on an idea, share an opportunity, or simply say hello, I'd love to hear from you.
          </p>

          
          <div class="info-item">
            <strong>Email:</strong>
            <p>mova.nk23@gmail.com</p>
          </div>
          
          <!-- <div class="info-item">
            <strong>GitHub</strong>
            <p>https://github.com/nat-ming</p>
          </div> -->

            <div class="info-item">
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
          </form>
        </div>
      </div>
    </main>

    
  </div>

  
       


</template>

<style scoped>
.container {
  position: relative;
  z-index: 2;
  width: min(1050px, calc(100% - 40px));
  margin: 55px auto 90px;
}

main > p:first-child {
  margin-bottom: 35px;
  text-align: center;
  color: #d8c37a;
  font-size: 12px;
  letter-spacing: .3em;
  text-transform: uppercase;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.contact-info,
.contact-form {
  padding: 35px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 26px;
  background: rgba(10,8,15,.72);
  backdrop-filter: blur(14px);
  box-shadow: 0 25px 70px rgba(0,0,0,.35);
}

.contact-info h2,
.contact-form h2 {
  margin-bottom: 18px;
  font-size: 30px;
}

.contact-info > p {
  color: rgba(255,255,255,.68);
  line-height: 1.75;
}

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
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  margin-bottom: 7px;
  color: rgba(255,255,255,.75);
  font-size: 13px;
}

.form-group input,
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
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: rgba(255,215,0,.6);
  box-shadow: 0 0 0 3px rgba(255,215,0,.07);
}

.contact-form .btn {
  cursor: pointer;
  padding: 12px 22px;
}

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