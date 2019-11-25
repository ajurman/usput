<template>
    <div>
        <div class="columns">
            <div class="column"></div>
            <div class="column">
                <img src="../assets/Untitled-1.png" usemap="#image_map">
                <map name="image_map">
                    <area alt="Rijeka" title="Rijeka" coords="2958,483,3341,688" shape="rect" @mouseover="rijeka = true" @mouseleave="rijeka = false">
                    <area alt="Pula" title="Pula" coords="2179,1768,2423,2017" shape="rect" @mouseover="pula = true" @mouseleave="pula = false">
                    <area alt="Pazin" title="Pazin" coords="1897,1080,2050,1228" shape="rect" @mouseover="pazin = true" @mouseleave="pazin = false">
                    <area alt="Koper" title="Koper" coords="1042,554,1204,679" shape="rect" @mouseover="koper = true" @mouseleave="koper = false">
                    <area alt="Novigrad" title="Novigrad" coords="965,913,1128,1018" shape="rect" @mouseover="novigrad = true" @mouseleave="novigrad = false">
                    <area alt="Porec" title="Porec" coords="1133,1137,1300,1295" shape="rect" @mouseover="porec = true" @mouseleave="rporec= false">
                    <area alt="Buzet" title="Buzet" coords="1792,640,1993,798" shape="rect" @mouseover="buzet = true" @mouseleave="buzet = false">
                </map>
                <!--<div v-for="grad in gradovi" :key="grad" v-if="grad == true">
                    <p>Klikni za dobit rutu {{grad}} - Tinjan !</p>
                    <p><small>Bit ćete preusmjereni na Google Maps</small></p>
                </div>-->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        gradovi: [
            {rijeka:false},
            {pula:false},
            {pazin:false},
            {koper:false},
            {novigrad:false},
            {porec:false},
            {buzet:false}
        ]
    }
    
    
}
</script>