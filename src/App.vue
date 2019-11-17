<template>
  <div id="app">
    <section class="hero is-medium">      
      <nav class="tabs is-centered" aria-label="breadcrumbs">
        <ul>
          <li><router-link to="/">Početna</router-link></li>
          <li><router-link to="/o-nama">Galerija</router-link></li>
          <li><a href="#">Lokacija</a></li>
          <li ><a href="#">Kontakt</a></li>
        </ul>
      </nav>
    </section>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body.home { 
        background-image: url("https://ivijesti.hr/wp-content/uploads/photo-gallery/Internacionalni_sajam_pr%C5%A1uta_u_Tinjanu/06.jpg?bwg=1571716807") ;
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: fixed;
        background-size:  cover;
        background-color: #999;
    }
nav {
  margin-top: 20px;
}  


nav li {
  font-weight: bold;
  color: #000000;
}

nav a.router-link-exact-active {
  color: #4254b9;
}
</style>
