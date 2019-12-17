<template>
  <div id="app">
    <div class="tamnija">
      <nav class="tabs is-centered is-size-4" aria-label="breadcrumbs">
            <ul>
              <li><router-link to="/"  class="has-text-white">Početna</router-link></li>
              <li><router-link to="/galerija"  class="has-text-white">Galerija</router-link></li>
              <li><router-link to="/lokacija"  class="has-text-white">Lokacija</router-link></li>
              <li ><router-link to="/kontakt"  class="has-text-white">Kontakt</router-link></li>
            </ul>
      </nav>
      <div class="ssnap">
      </div>
        <router-view/>
        <section class="footer is-medium tamnija">
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
    </div>
</template>

<style lang="scss">
@import "assets/css/main.scss";

</style>
