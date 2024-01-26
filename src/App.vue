<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    
   <nav>
        <ul>
            <li><a href="#about1">Présentation</a></li>
            <li><a href="#creation">Créations</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div id="backToTop" onclick="scrollToTop()">
        
        <img src="../assets/UP.png" alt="">
    </div>
    </nav>
   

  </header>

  <RouterView />
 
</template>

<style scoped>
nav {
    background-color: black;
    color: white;
    padding: 10px;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

nav ul li {
    display: inline;
    margin-right: 20px;

}

nav a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}

section {
    padding: 20px;
}
#backToTop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    display: none;
}

#backToTop img {
    width: 50px; /* Ajustez la taille de votre logo ou photo */
    height: auto;
}

</style>
