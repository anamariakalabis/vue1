<script setup>
import TheWelcome from "../components/TheWelcome.vue";
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

     <div class=" about">
     <h2> About Me </h2>

     <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
     elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum.
      </p>
     
      </div>
      <div class="tehnologies">
        <h3> Tehnologies étudiées </h3>
        <div class="logosT">
        
        <img src="./assets/photo.png" alt=" " />
        <img src="./assets/photo.png" alt=" " />
        <img src="./assets/photo.png" alt=" " />
        
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

          <div>
          <p></p>
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
  
}

.profile img{
  widht:150px;
  height:150px;
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
  justify-content:space-around;
  margin:20px;
  padding:10px;
  size:50px;
  vertical-align:bottom;
  
}
</style> 
