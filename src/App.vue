<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Présentation</RouterLink>
        <RouterLink to="/about">Les créations</RouterLink>
        <RouterLink to="/projet"> Contact </RouterLink>

      </nav>
    </div>

  </header>

  <RouterView />
 
</template>

<style scoped>
body {
  background:black;
  padding:0;
  margin:0;

}
.wrapper{
  background:black;
  display:flex;
  align-items:center;
  justify-content:space-around;
  margin:0px;
  color:white;
  font-size:40px;
  padding:10px;
  vertical-align: top;
  
}

.icons{
  display:flex;
  align-items:center;
  justify-content:space-around;
  margin:20px;
  padding:10px;
  size:40px;
  vertical-align:bottom;
  
}
</style>
