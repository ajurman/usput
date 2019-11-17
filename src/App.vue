<template>
  <div id="app">
    <section class="hero is-medium">      
      <nav class="tabs is-centered is-size-4" aria-label="breadcrumbs">
        <ul>
          <li><router-link to="/"  class="has-text-white">Početna</router-link></li>
          <li><router-link to="/galerija"  class="has-text-white">Galerija</router-link></li>
          <li><router-link to="/lokacija"  class="has-text-white">Lokacija</router-link></li>
          <li ><router-link to="/kontakt"  class="has-text-white">Kontakt</router-link></li>
        </ul>
      </nav>
    </section>
    <router-view/>
    <section class="footer is-medium has-background-grey-dark">
      <div class="container">
        <div class="columns">
          <div class="column has-text-left has-text-info">
            <p>Adresa</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="column">
          </div>
          <div class="column">
          </div>
          <div class="column has-text-right has-text-info">
            <p>Kontakt</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button>social media</button>
          </div>
        </div>
        <hr>
        copyright
      </div>
    </section>
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
  margin-top: 40px;
}  


nav li {
  font-weight: bold;
  color: #000000;
}

nav a.router-link-exact-active {
  background-color: #5590cc;
}
footer {
  padding-top:100px;
}
</style>
