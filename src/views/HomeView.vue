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
        <h3> Tehnologies étudiées </h3>
        <div id="creation" class="logosT">
        
        <img src="../assets/HTML5Logo.png" alt=" " />
        <img src="../assets/CssLogo.png" alt=" " />
        <img src="../assets/JSLogo.png" alt=" " />
        
        </div>
      </div>

    </div>
      
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
  width:20%;
  font-size:15px;
  padding:2px;
  flex-direction:column;
  width: 50%;
  height: auto;
}
.logosT{
  display:flex;
  align-items:center;
  flex-direction:row;
  width: 50%;
  height: auto;

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
  
}
.paragraf{
  display:flex;
  font-size:20px;
  align-items:center;
  color:white;
  flex-direction:column;
  background-color:black;
}
.error{
  display:flex;
  align-items:center;

}
</style> 




