<template>
    <div>
        <header>
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">
                    <img src="../assets/logo.png" alt="logo">
                </router-link>
            </div>
            <nav class="navic tabs is-centered" aria-label="breadcrumbs">
                    <ul>
                    <li><router-link to="/"  class="has-text-white is-size-6 nav-link">Početna</router-link></li>
                    <li><router-link to="/galerija"  class="has-text-white is-size-6 nav-link">Galerija</router-link></li>
                    <li><router-link to="/lokacija"  class="has-text-white is-size-6 nav-link">Lokacija</router-link></li>
                    <li ><router-link to="/kontakt"  class="has-text-white is-size-6 nav-link">Kontakt</router-link></li>
                    </ul>
                </nav>
            <div class="navbar-cta">
                <router-link to="/lokacija">
                    <button class="cta button">POSJETI ISAP</button>
                </router-link>
            </div>
            <div class="header"> 
               
                <div id="overlay"></div>
                <div id="naslov">
                    <h1 class="is-size-3" >PRŠUT – ZAŠTITNI ZNAK OPĆINE TINJAN</h1>
                    <h2 class="has-text-white is-size-6">GASTRONOMSKU TRADICIJU PRETVORILI SMO U NAŠIROKO POZNAT DOGAĐAJ</h2>
                </div>
                <video autoplay loop muted class="video-background" >
                    <source src="../assets/trimmed.mp4" type="video/mp4">
                </video>
                <div class="crtica"></div>
            </div>
            <div id="bocno" class="is-size-4">
                <span>TINJAN | 18.-20.10.2019.</span>
                <a href="" class="redText">FB</a>
                <a href="" class="redText">IG</a>
            </div>
            
        </header>
        
        <main>
            <section>
                <div>
                    <div id="logo-pozadina"><div id="veliki-logo"></div></div>
                    <div class="columns is-variable is-0">
                        <div class="column">
                            <div class="vh-50 slika-text">
                                <div class="text-slika">
                                    <h4>Što je ISAP?</h4><br>
                                    <button class="button cta" :class="{'is-invisible-cta':showCta }" @click="show = !show; prvaSlika(); showCta = !showCta">Saznaj više</button>

                                </div>
                            </div>
                        </div>   
                        <div class="column">
                            <div class="vh-50 slika-text">
                                <div class="text-slika">
                                    <h4>Zašto pršut?</h4><br>
                                    <button class="button cta" :class="{'is-invisible-cta':showCta }" @click="show = !show; drugaSlika(); showCta = !showCta">Saznaj više</button>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>
            <h3 class="deepshadow has-text-centered">ISAP 2019. u brojkama</h3>
            <brojke/>
            </section>
            <section>
                <article class="bg-tamna">  


                    <div class="probajte">
                        <h4 id="probajte" class="is-size-1">I Vi zaslužujete uživati</h4>
                        <div id="gradient"></div>
                        <div class="v-centar">
                            <br>
                            <router-link to="/lokacija">
                                <button class="cta button " :class="{'is-invisible-cta':showCta }">POSJETI ISAP</button>
                            </router-link>
                        </div>
                        
                    </div>
                    <sponzori/>
                </article>
            </section>
        </main>

        <!--MODAL-->

        <div class="modal" :class="{ 'is-active':show }">
            <div class="modal-background" @click="show = !show; showCta = !showCta"></div>
            <div class="modal-content  container">
            
            <div class="columns">
                <div class="column">
                    <img v-bind:src="slika" >
                    <h4 class="naslov-modal is-size-1">{{naslov}}</h4>
                </div>
                </div>
                
            <div class="columns">
                <div class="column">
                <div>
                    <p>
                    {{text1}}<br><br><br>
                    {{text2}}<br><br><br>
                    </p>
                    <router-link to="/lokacija">
                    <button class=" cta button" >POSJETI ISAP</button>
                    </router-link>
                </div>
                </div></div>
            
            </div>
            <button @click="show = !show; showCta = !showCta" class="modal-close is-large" aria-label="close"></button>
         </div>

    </div>

</template>

<script>
import brojke from "../components/brojke.vue"
import sponzori from "../components/sponzori.vue"
export default {
    data() {
        return {
            show: false,
            text1: "",
            text2: "",
            text3: "",
            naslov:"",
            slika:"",
            showCta: false,
        }
    },
    components:{
            brojke,
            sponzori
    },
    methods:{
        prvaSlika(){
        this.text1= "Internacionalni sajam pršuta ISAP se od 2006. godine, kada se Općina Tinjan proglasila Općinom istarskog pršuta, redovno održava u Tinjanu trećeg vikenda u listopadu. Jedna je od najvažnijih turističkih i gospodarskih manifestacija središnje Istre koju godišnje posjeti više od 25.000 ljudi.";
        this.text2= "Svake godine se najuspješnijim pršutarima dodjeljuju plakete i priznanja za kvalitetu njihovih proizvoda te se proglašava i šampion sajma, a sve temeljem ocjene stručne komisije koju čine senzorni analitičari pršuta, članovi Udruge senzornih analitičara pršuta - GUSTUS osnovane u Tinjanu 2010. godine. ";
        this.naslov="Što je ISAP?";
        this.slika=require("../assets/JPEG/isap.jpg") ;
        },
        drugaSlika(){
        this.text1= "Istarski pršut je trajni suhomesnati proizvod, obrađen na istarski način sa i bez zdjeličnih kosti, suho salamuren morskom soli i prirodnim mirodijama, sušen na zraku i bez dimljenja.";
        this.text2= "Prirodni uvjeti Istre Istarski pršut se najviše proizvodi u unutrašnjosti istarskog poluotoka, gdje klimatski uvjeti omogućuju soljenje mesa i proizvodnju pršuta samo tijekom zimskih mjeseci. Dobar pokazatelj klimatskih prilika kakve vladaju u središnjem dijelu Istre služi šire područje Pazina. Prema podacima Državnog Hidrometeorološkog Zavoda, srednje vrijednosti temperatura i relativne vlage zraka od prosinca do ožujka pogoduju optimalnom prirodnom sušenju mesa. Početna niska temperatura(3-4 stupnja Celzija) i postepen pad relativne vlažnosti zraka(65-70%), omogućavaju pravilan proces sušenja i zrenja pršuta. Dolaskom proljeća i toplijih dana, pršuti se premještaju na zrenje u podrumske prostorije gdje je sada optimalna temperatura zraka 13-15 stupnjeva Celzija i stabilna vlažnost zraka od 65-70 %. Istarsku klimu karakteriziraju vjetrovi koji pogoduju sušenju pršuta. Prema podacima Državnog Hidrometeorološkog Zavoda u središnjem dijelu Istre u razdoblju l989 – l998 godine je bilo svega 11% dana bez vjetra. U središnjem dijelu Istre najčešće puše vjetar sa istoka i jugoistoka te južni vjetrovi. Za pravilno sušenje i zrenje pršuta te stvaranje prirodnih uvjeta, najzaslužniji su vjetrovi sjevernog i sjeveroistočnog smjera te istočni vjetar sa Učke. Prirodni uvjeti Istre pružaju idealno okruženje za tradicionalnu proizvodnju istarskog pršuta, jer zbog utjecaja mediteranske klime izostaju ekstremno niske temperature, a područje hlade česti vjetrovi.";
        this.naslov="Zašto pršut?";
        this.slika=require("../assets/JPEG/isap_prsut.jpg") ;
        }
    }
}
</script>

<style lang="scss" scoped>


nav{
    padding-top: 1em;
    position: absolute;
    left:0;
    right:0;
}
</style>
