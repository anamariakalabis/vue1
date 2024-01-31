<script setup>
</script>

<template>

 <div class=' main-container'>
     <div class=' container1'>
        <div class='profile'>
        <a href="../assets/photo.png" target=""> 
        <img src="../assets/photo.png" alt="photoAK" />
        </a>
        <h1> Anamaria Brazdau</h1>
        <p> Software Developper</p> 
        </div>

    </div>

    </div>

    <div class='container2'> 

     <div id="about1" class=" about">
     <h2> About Me </h2>

     <p> Salut ! Je suis Anamaria Brazdau, un développeur JavaScript junior passionné par la création d'applications web et la résolution de problèmes concrets à travers le code.
      Mon parcours dans le monde de la programmation a débuté avec une profonde curiosité et un engagement envers l'apprentissage continu.
      En ce moment, je perfectionne mes compétences en HTML,CSS et Vue.js, et je suis ravi de contribuer mes connaissances à des projets qui ont un impact positif.
      Je crois en la puissance de l'apprentissage continu. 
      Je suis toujours ouvert à la collaboration avec d'autres développeurs et à l'apprentissage auprès de professionnels expérimentés dans le domaine.
      </p>
     
      </div>
      <div class="tehnologies">
        <h2> Tehnologies étudiées </h2>
        <div id="creation" class="logosT">
        
       <!-- <img src="../assets/HTML5Logo.png" alt=" " />-->
        <img src="../assets/CssLogo.png" alt=" " />
        <img src="../assets/JSLogo.png" alt=" " />
        
        <!-- Bouton pour ouvrir la modal -->
       <button onclick="openModal()">Ouvrir la Modal</button>

      <!-- La Modal -->
          <div id="myModal">
          <div class="modal-content">
          <span class="close" onclick="closeModal()">&times;</span>
           <img id="modalImage" src="../assets/HTML5Logo.png"/>
          <h2 id="modalTitle"></h2>
          <p>Date de création: <span id="modalDate"></span></p>
          <p>Technologies utilisées: <span id="modalTechnologies"></span></p>
          <a id="modalLink" target="_blank" href="#">Visiter le site</a><br>
          <a id="modalGitHub" target="_blank" href="#">Repository GitHub</a>
          </div>

          
</div>


        </div>
      </div>

    </div>
      

      <div class="container3">
     
     <div class="wrapper">
      
      <!-- Ajouter photo projet -->
      <a href="#demo-modal">CV en ligne</a>
      </div>
      
      <div id="demo-modal" class="modal">
        <div class="modal__content">

          <!-- Ajouter les informations -->

          <h1>Titre</h1>
          <span>Date de création</span>
          <a href="#" >Lien GitHub</a>
          
          <p>
            You can use the :target pseudo-class to create a modals with Zero JavaScript. Enjoy!
          </p>
          
          
          
          <a href="#" class="modal__close">&times;</a>
        </div>
      </div>
    
    </div>
      

  <form action="aaa.php" method="POST">
    <div class="main-wrapper">
      <h1 id="title">Contact</h1>
    
        <div class="items-wrapper">
          <label hidden id="name-label">""</label>
          <input required id="name" type="text" class="feedback-input" placeholder="Name" />
          <label hidden id="email-label">""</label>
          <input required id="email" type="email" class="feedback-input" placeholder="Email" />
          <label hidden id="number-label">""</label>
          <input min="1" max="9" required id="number" type="number" class="feedback-input" placeholder="Number" /><br>
         
          <textarea id="description" name="text" class="feedback-input" placeholder="Comment"></textarea>
          
          <input id="submit" type="submit" value="Envoyer" />

        </div>
        </div>
      </form>



       <footer>
         <div class="icons">
          <a href="https://www.linkedin.com" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
          </a>

           <a href="https://twitter.com" target="_blank">
           <font-awesome-icon icon="fa-brands fa-square-twitter" />
          </a>

          <a href="https://github.com" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" /> 
          </a>
          </div>

          <div class="paragraf">
          <p> La date de dernière mise à jour du site </p>
          </div>
       </footer>
    


</template>
<style TheWelcome>

.main-container{
  background-color:black;
  display:flex;
  flex-direction:column;
}
.container1{
  background-color:black;
  align-items:center;
  padding:2%;
  text:white solid;
}
.profile{
  display:flex;
  flex-direction:column;
  text-align:center;
}

.container2{
  display:flex;
  flex-direction:column;
  padding:10%;
  padding-top:0;
  padding-bottom:0;
  background-color:black;
  font-size:10px;
}

.about{
  text-align:center;
  font-size:15px;
  padding:2px;
}
.tehnologies{
  display:flex;

  font-size:15px;
  padding:2px;
  flex-direction:column;

  height: auto;
}

.tehnologies h2{
  text-align:center;
  margin:20px
}
.logosT{
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:row;
  height: auto;

}

.logosT img {
  width:100px
}
.profile img{
  widht:50px;
  height:50px;
  border-radius:100px;
  box-shadow: 3px -4px 25px 5px pink;
  border-color: pink solid;
  
}
.profile h1{
  font-size:30px;
  
}

.profile p{
  font-size:20px;
}
.icons{
  display:flex;
  align-items:center;
  background-color:black;
  justify-content:space-around;
  padding:10px;
  size:50px;
  vertical-align:bottom;
  font-size:50px
  
}
.paragraf{
  display:flex;
  font-size:20px;
  align-items:center;
  color:white;
  flex-direction:column;
  background-color:black;
}


.main-wrapper {
  background-color: black;
  max-width: 500px;
  margin: 50px auto;
}

.items-wrapper {
  width: 95%;
  margin: 3% auto 3% auto;
}

.drop-gen-div {
  width: 100%;
  display: flex;
}

.dropdown-div {
  margin-left: 25%;
}


.feedback-input,
.main-wrapper {
  color: #ccc;
  font-family: 'Ubuntu', sans-serif;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border: 2px solid #c7d5e0;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
}

select {
  color: #ccc;
  font-family: 'Ubuntu', sans-serif;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border: 2px solid #c7d5e0;
  padding: 10px;
  width: 100%;
}

select option {
  color: black;
}

select:focus {
  border: 2px solid #2a475e;
}

.feedback-input:focus {
  border: 2px solid #2a475e;
}

textarea {
  height: 150px;
  line-height: 150%;
  resize: vertical;
}

.check-div {
  margin-bottom: 5%;
}

[type="submit"] {
  font-size: 24px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  width: 100%;
  background: #2a475e;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: #ccc;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
}

[type="submit"]:hover {
  background: #171a21;
}

.container3 h1 {
  text-align: center;
}

/* Modal Stye */

.wrapper {
  height: 10vh;
  /* This part is important for centering the content */
  display: flex;
  align-items: center;
  justify-content: center;
  /* End center */
}

.wrapper a {
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  background-color: #fff;
  border-radius: 3px;
  text-transform: uppercase;
  color: #585858;
  font-family: 'Roboto', sans-serif;
}

.modal {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;
}

.modal:target {
  visibility: visible;
  opacity: 1;
}

.modal__content {
  border-radius: 4px;
  position: relative;
  width: 40%;
  max-width: 90%;
  background: #fff;
  padding: 1em 2em;
  color: black;
  padding: 30px;
}

.modal__footer {
  text-align: right;
  a {
    color: #585858;
  }
  i {
    color: #d02d2c;
  }
}
.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #585858;
  text-decoration: none;
}

#myModal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
    }

    .modal-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fefefe;
      padding: 20px;
      border: 1px solid #888;
      max-width: 600px;
      width: 80%;
      text-align: left;
    }

    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
      #modalImage {
      max-width: 100%;
      height: auto;
      margin-bottom: 10px;
    }

</style> 




