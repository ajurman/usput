<template>
    <div>
        <header>
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
                    <li ><router-link to="/kontakt"  class="has-text-white nav-link">Kontakt</router-link></li>
                    </ul>
                </nav>
            <div class="navbar-cta">
                <router-link to="/lokacija" class="navbar-item">
                <button class="cta button is-medium">POSJETI ISAP</button>
                </router-link>
            </div>
            <div class="header"> 
                <img src="../assets/pozadina.jpg" id="pozadina-slika">
                <div id="overlay"></div>
                <div id="naslov">
                    <h1 class="title">PRŠUT – ZAŠTITNI ZNAK OPĆINE TINJAN</h1>
                    <h2 class="subtitle has-text-white">GASTRONOMSKU TRADICIJU PRETVORILI SMO U NAŠIROKO POZNAT DOGAĐAJ</h2>
                </div>
                <video autoplay loop muted class="video-background" >
                    <source src="../assets/trimmed.mp4" type="video/mp4">
                </video>
                <div class="crtica"></div>
            </div>
            <div id="bocno">
                <span>TINJAN | 18.-20.10.2019.</span>
                <a href="">FB</a>
                <a href="">IG</a>
            </div>
            
        </header>
        
        <main>



            <section>
                <div>
                    <div class="columns is-variable is-0">
                        <div class="column">
                            <div class="vh-50 pomoc slika-text">
                                <div class="text-slika">
                                    <h4>Što je ISAP?</h4>
                                    <button class="button is-large">Saznaj više</button>

                                </div>
                            </div>
                        </div>   
                        <div class="column">
                            <div class="vh-50 slika-text">
                                <div class="text-slika">
                                    <h4>Zašto pršut?</h4>
                                    <button class="button is-large">Saznaj više</button>
                                </div>
                            </div>
                        </div>   
                        
                    </div>
                </div>
                <div class="has-text-centered">
                    <h3 class="is-size-1">ISAP 2019. u brojkama</h3>
                    <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
                        <div class="brojevi column has-text-centered ">
                            <div>
                                <span class="icon is-large">
                                    <i class="mdi mdi-48px mdi-format-list-numbered "></i>
                                </span>
                                <p class="heading">Po redu</p>
                                <p class="title redText">13.</p>
                            </div>
                        </div>
                        <div class="brojevi column has-text-centered ">
                            <div>
                                <span class="icon is-large">
                                    <i class="mdi mdi-48px mdi-weight-kilogram"></i>
                                </span>
                                <p class="heading">Pršuta pojedeno u tonama</p>
                                <p class="title redText">20+</p>
                            </div>
                        </div>
                    </div>
                    <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
                         <div class="brojevi column has-text-centered ">
                            <div>
                                <span class="icon is-large">
                                    <i class="mdi mdi-48px mdi-account-group"></i>
                                </span>
                                <p class="heading">Posjetitelja</p>
                                <p class="title redText">30.000+</p>
                            </div>
                        </div>
                        <div class="brojevi column has-text-centered ">
                            <div>
                                <span class="icon is-large">
                                    <i class="mdi mdi-48px mdi-account-badge"></i>
                                </span>
                                <p class="heading">Natjecatelja</p>
                                <p class="title redText">81</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

<template>
    <modal name="modalPrvi"
        transition="nice-modal-fade"
        min-width="768"
        :pivot-y="0.5"
        :adaptive="true"
        :scrollable="true"
        width="80%"
        height="auto">
      <div class="size-modal-content has-text-black">
        <h5>{{naslov}}</h5>
        <img id="modal-slika" v-bind:src= "slika" >
        <div>
          {{text}}
        </div>
      </div>
    </modal>
</template>
<button @click="show">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</button>

            <section>
                <article class="hero-body svjetlija">  
                    <div class="container">
                        <h5 class="title">Internacionalni sajam pršuta</h5>
                        <div class="columns is-mobile">
                            <div class="column">
                                <div class="notification">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quasi perferendis culpa atque sed voluptatibus unde animi laudantium deleniti ipsam totam doloribus qui architecto, nostrum provident quaerat odio! Doloribus, consequatur?</div>
                                <figure class="image">
                                    <img src="https://erickson.edu/sites/default/files/Erickson%20Badges%20Banner.png">
                                </figure>
                            </div>
                        </div>
                        <div class="has-background-white sponzori">
                            <div class="red">
                                <h4 class="has-background-white">POKROVITELJI I POTPORE</h4>
                            </div>
                            <div class="columns is-mobile">
                                    <div class="column"><img src="../assets/JPEG/sponzor1.jpg" alt="GhiaStaff"></div>
                                    <div class="column"><img src="../assets/JPEG/sponzor2.jpg" alt="Rudan"></div>
                            </div>
                            <div class="columns is-mobile">
                                    <div class="column"><img src="../assets/JPEG/potpore2.jpg" alt="Ministarstco turizma"> </div>
                                    <div class="column"><img src="../assets/JPEG/potpore3.jpg" alt="Ministarstvo poljoprivrede"></div>
                                    <div class="column"><img src="../assets/JPEG/potpore1.jpg" alt="Istra"></div>
                                    <div class="column"><img src="../assets/JPEG/organizator1.jpg" alt="GUSTUS"></div> 
                                    <div class="column"><img src="../assets/JPEG/potpore5.jpg" alt="Središnja Istra"></div>
                            </div>
                            <div class="columns is-mobile">
                                    <div class="column"><img src="../assets/JPEG/potpore6.jpg" alt="Središnja Istra"></div>    
                                    <div class="column"><img src="../assets/JPEG/potpore4.jpg" alt="Istra"></div>
                                    <div class="column"><img src="../assets/JPEG/organizator2.jpg" alt="Tinjan"></div>
                                    <div class="column"><img src="../assets/JPEG/organizator3.jpg" alt="Istarski Pršut"></div>
                                    <div class="column"><img src="../assets/JPEG/organizator4.jpg" alt="Merikane"></div>  
                            </div>
                            
                        </div>
                    </div>
                </article>
            </section>
        </main>
    </div>

</template>

<script>
//import modal_1 from "../components/modal_1"
export default {
  data () {
      return {
        text: "aaaaaaaaaaaa",
        naslov:"",
        slika:require("../assets/pozadina.jpg") 
      }
},
    methods:{
    show () {
      this.$modal.show('modalPrvi');
      }
    }
}
</script>

<style lang="scss" scoped>
#modal-slika{
  width:100%;
}
.size-modal-content {
    padding: 10px;
    font-style: 13px;
    font-size: 3rem;
}
.v--modal-overlay[data-modal="size-modal"] {
    background: rgba(0, 0, 0, 0.5);
}
main h3{
    padding: 5rem;
}
.sponzori img {
    filter: grayscale(100%);
}
nav{
    padding-top: 1em;
    position: absolute;
    left:0;
    right:0;
}
    
</style>
