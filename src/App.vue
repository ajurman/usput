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
        <li><router-link to="/"  class="has-text-white nav-link">Početna</router-link></li>
        <li><router-link to="/galerija"  class="has-text-white nav-link">Galerija</router-link></li>
        <li><router-link to="/lokacija"  class="has-text-white nav-link">Lokacija</router-link></li>
        <li ><router-link to="/kontakt"  class="has-text-white nav-link" >Kontakt</router-link></li>
          </ul>
      </nav>
      <div class="navbar-cta">
        <router-link to="/lokacija" class="navbar-item">
          <button class="cta button is-medium">POSJETI ISAP</button>
        </router-link>
      </div>
    </div>
      <router-view/>
      <section class="footer is-medium">
        <div class="container">
          <div class="columns">
            <div class="column has-text-left redText">
              <p>Adresa</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="column">
            </div>
            <div class="column">
            </div>
            <div class="column has-text-right redText">
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

<style lang="scss">
@import "assets/scss/main.scss";

</style>
<script>
export default {
  methods: {
  }
}
</script>
