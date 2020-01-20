<template>
<div>
    <div class="modal-background" @click="show = !show; showCta = !showCta"></div>
    <div class="modal-content container">
    
    <div class="columns">
        <div class="column">
            <img v-bind:src="slika" >
            <h4 class="naslov-modal is-size-1">{{naslov}}</h4>
        </div>
        </div>
        
    <div class="columns">
        <div class="column">
        <div class="is-size-4 is-size-6-mobile">
            <p>
            {{text1}}<br><br><br>
            {{text2}}<br><br><br>
            {{text3}}<br><br><br>
            </p>
            <router-link to="/lokacija">
            <button class="is-medium cta button" >POSJETI ISAP</button>
            </router-link>
        </div>
        </div></div>
    
    </div>
    <button @click="show = !show; showCta = !showCta" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  data () {
      return {
        show: false,
        text1: "",
        text2: "",
        text3: "",
        naslov:"",
        slika:""
      }
},
  methods:{
    prvaSlika(){
      this.text1= "Internacionalni sajam pršuta ISAP se od 2006. godine, kada se Općina Tinjan proglasila Općinom istarskog pršuta, redovno održava u Tinjanu trećeg vikenda u listopadu. Jedna je od najvažnijih turističkih i gospodarskih manifestacija središnje Istre koju godišnje posjeti više od 25.000 ljudi.";
      this.text2= "Svake godine se najuspješnijim pršutarima dodjeljuju plakete i priznanja za kvalitetu njihovih proizvoda te se proglašava i šampion sajma, a sve temeljem ocjene stručne komisije koju čine senzorni analitičari pršuta, članovi Udruge senzornih analitičara pršuta - GUSTUS osnovane u Tinjanu 2010. godine. ";
      this.text3="Specifičnost gastronomske ponude manifestacije ISAP ogleda se u mogućnosti da se u isto vrijeme na jednom mjestu nađu pršuti iz svih krajeva svijeta i da se mogu kušati, uspoređivati i valorizirati.  Osim gastro ponude, koja se ne sastoji samo od pršuta i suhomesnatih proizvoda kao najvažnijeg dijela manifestacije, već i od niz drugih gastro proizvoda (sir, maslinovo ulje, vino, voće te proizvodi od voća i povrća, suveniri…) koji se nude na mnogobrojnim štandovima tijekom ISAP-a u Tinjanu.  Nezaobilazni zabavni sadržaj ISAP-a je i organizacija mnogobrojnih koncerata poznatih glazbenih izvođača sa hrvatskog područja i izvan njega.";
      this.naslov="Što je ISAP?";
      this.slika=require("../assets/JPEG/isap.jpg") ;
    },
    drugaSlika(){
      this.text1= "Istarski pršut je trajni suhomesnati proizvod, obrađen na istarski način sa i bez zdjeličnih kosti, suho salamuren morskom soli i prirodnim mirodijama, sušen na zraku i bez dimljenja.";
      this.text2= "Prirodni uvjeti Istre Istarski pršut se najviše proizvodi u unutrašnjosti istarskog poluotoka, gdje klimatski uvjeti omogućuju soljenje mesa i proizvodnju pršuta samo tijekom zimskih mjeseci. Dobar pokazatelj klimatskih prilika kakve vladaju u središnjem dijelu Istre služi šire područje Pazina. Prema podacima Državnog Hidrometeorološkog Zavoda, srednje vrijednosti temperatura i relativne vlage zraka od prosinca do ožujka pogoduju optimalnom prirodnom sušenju mesa. Početna niska temperatura(3-4 stupnja Celzija) i postepen pad relativne vlažnosti zraka(65-70%), omogućavaju pravilan proces sušenja i zrenja pršuta. Dolaskom proljeća i toplijih dana, pršuti se premještaju na zrenje u podrumske prostorije gdje je sada optimalna temperatura zraka 13-15 stupnjeva Celzija i stabilna vlažnost zraka od 65-70 %. Istarsku klimu karakteriziraju vjetrovi koji pogoduju sušenju pršuta. Prema podacima Državnog Hidrometeorološkog Zavoda u središnjem dijelu Istre u razdoblju l989 – l998 godine je bilo svega 11% dana bez vjetra. U središnjem dijelu Istre najčešće puše vjetar sa istoka i jugoistoka te južni vjetrovi. Za pravilno sušenje i zrenje pršuta te stvaranje prirodnih uvjeta, najzaslužniji su vjetrovi sjevernog i sjeveroistočnog smjera te istočni vjetar sa Učke. Prirodni uvjeti Istre pružaju idealno okruženje za tradicionalnu proizvodnju istarskog pršuta, jer zbog utjecaja mediteranske klime izostaju ekstremno niske temperature, a područje hlade česti vjetrovi.";
      this.text3="Tehnologija Istarskog pršuta Primarna obrada buta je jedinstvena, jer se istarski pršut tradicionalno obrađuje sa zdjeličnim kostima. Na butu ostaju kosti kukovlja, odnosno bočna kost(os ilium), sjedna kost (os ischii) i preponska kost (os pubis),a odstranjuje se samo križna kost (os sacrum) i repni kralješci (vertebrae caudales). Nogica se odstranjuje u skočnom zglobu (articulus tarsi),tako da u vezi sa potkoljenicom (tibia i fibula) ostaje proksimalni red skočnih kosti (talus i calcaneus).S vanjske (lateralne) strane i unutarnje (medialne) strane buta odstranjuje se koža s potkožnim masnim tkivom do visine cca l0 cm proksimalno od skočnog zgloba. Ovako obrađeni butovi imaju karakterističan dugi izgled i otvorenu površinu.";
      this.naslov="Zašto pršut?";
      this.slika=require("../assets/JPEG/isap_prsut.jpg") ;
    }
  }
}
</script>
<style lang="scss" scoped>
.modal {
  color:black;
}
.modal img{
  width:100%;
}
.modal-content {
  background-color: white;
  overflow-x: hidden;
}
.modal .is-size-4{
  padding:0rem 10rem ;
  margin-top: 4rem;
  
}
.modal .column{
  position: relative;
}
.naslov-modal{
  text-align: center;
  background-color: white;
  padding: 4.5rem;
  padding-bottom: 0;
  position: absolute;
  bottom: 0;
  left:0;
  right:0;
  clip-path: polygon(0 40%, 100% 0%, 100% 100%, 0% 100%);

}
.modal .columns:nth-of-type(2){
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(241,241,241,1) 100%);
}
@media (max-width: 769px) {
  .naslov-modal{
    position: relative;
    clip-path: none;
    padding:1rem;
  }
  .modal .is-size-4{
    margin-top: 1rem;
    padding:0rem 2rem;
  }
  
}
.modal p::first-letter{
  font-size: 4rem;
  line-height: 0;
  color: crimson;
}
.modal .cta{
  float: right;
}
</style>