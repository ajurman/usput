<template>
<div class="brojke">
    <!--<div class="container has-text-centered">
        <div
        v-for="(item,indeks) in items"
        :key="item.klasa"
        :class="{'lijevi' : (indeks %2)==0}"
        class="columns is-variable is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
            <div class="column is-half" :class="{'lijevi' : (indeks %2)==0}">
                <div class="okrugli">
                    <i class="mdi" :class="item.klasa"></i>
                    <p class="title redText">{{item.title}}</p>
                    <p class="heading has-text-centered">{{item.heading}}</p> 
                </div>
                
            </div>
            <div class="column desni centar is-half"
            :class="{'margine': (indeks %2)!=0}">
                <div>
                    <p class="opis-brojki is-size-6">{{item.tekst}}</p>
                </div>
            </div>                      
        </div>
    </div>-->
    <div class="container">
        <div class="columns">
            <div 
                class="card column"
                v-for="(item) in items"
                :key="item.klasa">
                <div class="card-content">
                    
                   <!-- <div class="media-left">
                        <b-icon
                            icon="format-list-numbered"
                            size="is-large"
                            type="is-success">
                        </b-icon>
                    </div>
                    <div class="media-content">
                        {{item.title}}
                        {{item.heading}}
                    </div>-->
                    <div class="card-naslov">
                        <b-icon
                            :icon="item.klasa"
                            size="is-large">
                        </b-icon>
                        <span id="pomak">
                        <b>{{item.title}}
                        {{item.heading}}</b>
                        </span>
                        
                    </div>
                    <hr>

                    <div class="content is-size-7">
                    {{item.tekst}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            istina: true,
            items:[ 
                {
                    klasa:"format-list-numbered",
                    heading:"Po redu",
                    title:"13.",
                    tekst:"Internacionalni sajam pršuta ISAP se od 2006. godine, kada se Općina Tinjan proglasila Općinom istarskog pršuta, redovno održava u Tinjanu trećeg vikenda u listopadu"
                },
                {
                    klasa:"account-group",
                    heading:"Posjetitelja",
                    title:"30.000+",
                    tekst:"Posjetitelji iz svih krajeva Hrvatske i Europe, ali i s drugih kontinenata, oslobode tri dana za odlazak u Tinjan, opisavši pritom ovu sjajnu manifestaciju kao nešto što se čeka cijelu godinu, i što se nikako ne propušta"
                },
                {
                    klasa:"account-badge",
                    heading:"Natjecatelja",
                    title:"81",
                    tekst:"Svi izlagači, vrsni majstori svog zanata, na stol su stavili najbolje iz svoje ponude, pokazavši tako razlike u finesama spravljanja pršuta, kralja delicija."
                }/*,
                {
                    klasa:"mdi-weight-kilogram",
                    heading:"Pršuta pojedeno",
                    title:"20.000+ kg",
                    tekst:"Ovo je najbolji pokazatelj sve veće popularnosti događaja. U posljednih 7 godine se ukupna količina pojedenih pršuta povećala za skoro ČETIRI puta. Gastro ponuda se ne sastoji samo od pršuta i suhomesnatih proizvoda, već i od niz drugih gastro proizvoda (sir, maslinovo ulje, vino, voće te proizvodi od voća i povrća)"
                }*/
                
            ]
        }
    },
    watch :{

    }

}
</script>

<style>

</style>
