<template>

 <header>
    
    <div class="wrapper">
      <nav>
        <RouterLink to="/"> Présentation </RouterLink>
        <RouterLink to="/about"> Les créations </RouterLink>
        <RouterLink to="/projet"> Contact </RouterLink>

      </nav>
    </div>

  </header>



  <div class=" ">

    <h1></h1>

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




<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.wrapper{
  background-color:black;
  display:flex;
  align-items:center;
  justify-content:space-around;
  margin:20px;
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
  size:50px;
  vertical-align:bottom;
  
}

</style>
