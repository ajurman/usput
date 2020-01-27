<template>
    <div class="lokacija">
        <section class="slika"></section>
            <div>
                <div class="container lokacija-tekst">
                <h1 class="title">
                    Tinjan - Grad ISAP-a
                </h1>
                <h5>
                    Nalazi se u centralnom dijelu središnje Istre, na prostoru zapadne strane Drage.Tinjan ponosno čuva svoju povijest i tradiciju, bilo da je riječ o simbolima ovog kraja, kamenom suhozidu i lokvama te kosirima i rankunima, folklornom i graditeljskom nasljeđu, predaji i legendama ili pak o vrhunskim gastronomskim delicijama poput istarskog pršuta. Za očuvanje tradicije proizvodnje vrhunskog pršuta na Tinjanštini danas je zaslužno nekoliko registriranih pršutana, a 2006. godine Tinjan je proglašen Općinom istarskog pršuta.
                </h5>
                </div>
            </div>
        <div class="container razmak">
            <div class="columns is-gapless has-background-white">
                <div class="column">
                    <GmapMap
                    :center="center"
                    :zoom="9"
                    >
                    <GmapMarker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                    />
                    </GmapMap>
                </div>
                <div class="column is-4">
                    <div class="crta-siva"></div>
                    <i class="mdi mdi-google-maps mdi-48px"></i>
                    <h6 class="is-size-3">Lokacija</h6>
                    <p><b>lat</b> 45.2176</p>
                    <p><b>lng</b> 13.8369 </p><br>
                    <p>Tinjan, Istra, Hrvatska </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            center: { lat: 45.217, lng: 13.839 },
            markers : [
                {
                    position: { lat: 45.2176, lng: 13.8369 }
                }
            ]
        }
    }    
}
</script>
<style lang="scss" scoped>

.slika {
        width: 100%;
        height:50vh;
    }
.razmak{
        margin: 5rem auto;
    }
$siva : rgb(97, 97, 97);
.razmak{
    margin-bottom: 3rem;
}
section {
    width: 100%;

}
.slika {
    background-image: url("../assets/JPEG/Tinjan.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

h5, h1 {
    color:rgb(228, 228, 228);
}
.crta-siva{
    height:50px;
    background-color:$siva;

}
.lokacija-tekst{
    z-index: 10;
    margin-top: -100px;
    padding:3rem !important;
    background-color:$siva;
}
.is-4 {
    color:$siva;
    display: flex;
    flex-direction: column;
    text-align: center;
    p {
        padding:1rem;
    }
    h6 {
        padding: 1.5rem;
    }
    i {
        padding-top: 1rem;
    }
}
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}
</style>