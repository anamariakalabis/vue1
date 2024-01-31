<script setup>
import { RouterLink, RouterView } from "vue-router";



  // Fonction pour ouvrir la modal et remplir les données
  function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Remplacez ces données par celles de votre projet
    document.getElementById("modalTitle").innerHTML = "Titre du Projet";
    document.getElementById("modalDate").innerHTML = "Date de création";
    document.getElementById("modalTechnologies").innerHTML = "Technologies utilisées";
    document.getElementById("modalLink").href = "lien vers le site ou le fichier PDF";
    document.getElementById("modalGitHub").href = "lien vers le repository GitHub (le cas échéant)";
  }

  // Fonction pour fermer la modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  // Fermer la modal en dehors de son contenu
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

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
        <img src="../assets/UP.png" alt="" />
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
