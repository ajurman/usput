<template>
    <div>
        <div>
            <h1>Google Maps Demo</h1>

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
        <div>
            <h2>O općini</h2>
            <p>Općina Tinjan nalazi se u centralnom dijelu središnje Istre, na prostoru zapadne strane Drage.Tinjan ponosno čuva svoju povijest i tradiciju, bilo da je riječ o simbolima ovog kraja, kamenom suhozidu i lokvama te kosirima i rankunima, folklornom i graditeljskom nasljeđu, predaji i legendama ili pak o vrhunskim gastronomskim delicijama poput istarskog pršuta. Za očuvanje tradicije proizvodnje vrhunskog pršuta na Tinjanštini danas je zaslužno nekoliko registriranih pršutana, a 2006. godine Tinjan je proglašen Općinom istarskog pršuta. </p>
            
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
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}
</style>