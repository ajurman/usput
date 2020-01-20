<template>
  <div id="app">
    <div  v-if="['galerija', 'lokacija', 'kontakt'].indexOf($route.name) > -1" 
      class="navbar-wrap">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="logo.png" alt="logo">
        </router-link>
      </div>
      <nav class="tabs is-centered is-size-4" aria-label="breadcrumbs">
          <ul>
        <li><router-link to="/"  class="has-text-white is-size-4 nav-link">Početna</router-link></li>
        <li><router-link to="/galerija"  class="has-text-white is-size-4 nav-link">Galerija</router-link></li>
        <li><router-link to="/lokacija"  class="has-text-white is-size-4 nav-link">Lokacija</router-link></li>
        <li ><router-link to="/kontakt"  class="has-text-white is-size-4 nav-link" >Kontakt</router-link></li>
          </ul>
      </nav>
      <div class="navbar-cta">
        <router-link to="/lokacija">
          <button class="cta button is-medium">POSJETI ISAP</button>
        </router-link>
      </div>
    </div>
      <router-view/>
      <section class="bg-tamna">
        <div class="container futer">
          <hr>
          <div class="columns">
             <div class="column is-half is-offset-one-quarter has-text-centered">
               <p><b>Anthony Jurman</b></p>
               <p>Tehničko veleučilište u Zagrebu</p>
               <p>2019./2020.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
</template>

<style lang="scss">
@import "assets/scss/main.scss";

</style>
