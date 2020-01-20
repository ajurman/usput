<template>
    <div class="forma has-background-light has-text-centered">
        <br>
        <h2 class="is-size-1">Pošaljite nam upit!</h2>
        <div class="columns">
            <div class="column is-half is-offset-one-quarter">
                <form @submit.prevent="onSubmit">
                    <br><br>
                    <section>

                        <b-field 
                            label="Ime"
                        >
                            <b-input 
                                required
                                minlength="3"
                                maxlength="30"
                                placeholder="Vaše ime"
                                v-model="forma.ime"></b-input>
                        </b-field>


                        <b-field 
                        label="Pravna ili fizička osoba?">
                            <b-select
                            expanded
                            v-model="forma.vrstaOsobe"
                            placeholder="Odaberite">
                                <option
                                    v-for="vrsta in vrsteOsoba"
                                    :value="vrsta.id"
                                    :key="vrsta.id">{{vrsta.tip}}
                                </option>
                            </b-select>
                        </b-field>
<br>

                        <b-field 
                        label="E-mail adresa?">

                            <b-input 
                                required
                                v-model="forma.email" 
                                type="email"
                                placeholder="Vaša e-mail adresa"
                                maxlength="30">
                            </b-input>
                        </b-field>


                        <b-field
                        label="Koji je razlog pisanja upita?" >
                            <b-select
                            v-model="forma.razlog"
                            expanded
                            placeholder="Odaberite">
                                <option
                                    v-for="razlog in razlozi"
                                    :value="razlog.id"
                                    :key="razlog.id"
                                    >
                                    {{razlog.opis}}
                                </option>
                            </b-select>
                        </b-field>
<br>
<br>

                        <b-field
                        label="Upit"
                        >
                            <b-input
                            required
                            minlength="10"
                            maxlength="250"
                            type="textarea"
                            v-model="forma.upit"></b-input>
                        </b-field>
<br><br>
                        <button class="cta button is-medium" native-type="submit">Pošalji upit</button>
                    </section>
                </form>
                <b-modal :active.sync="isModalActive" :width="640" scroll="keep">
                    <div class="has-background-white">
                        <i class="mdi mdi-check"></i>
                        <h4 class="is-size-2">Upit je uspješno poslan!</h4>
                    </div>
                </b-modal>
               <!-- <div>
                    <p>Ime:{{forma.ime}}</p>
                    <p>Osoba:{{forma.vrstaOsobe}}</p>
                    <p>Email:{{forma.email}}</p>
                    <p>Razlog:{{forma.razlog}}</p>
                    <p>upit:{{forma.upit}}</p>
                </div> -->
            </div>
        </div>
    </div>
</template>






<script>
export default {
    data(){
        return {
            errors:{
                ime:false,
                vrstaOsobe:false,
                email:false,
                razlog:false,
                upit:false
            },
            forma:{
                ime:"",
                vrstaOsobe:"2",
                email:"",
                razlog:"1",
                upit:""
            },
            vrsteOsoba:[
                {
                    id:1,
                    tip:"Pravna"
                },
                {
                    id:2,
                    tip:"Fizička"
                }
            ],
            razlozi:[
                {
                    id:1,
                    opis:"Sudjelovanje"
                },
                {
                    id:2,
                    opis:"Promocija"
                },
                {
                    id:3,
                    opis:"Kritika"
                },
                {
                    id:4,
                    opis:"Ostalo"
                }
            ],
            imaError : false,
            isModalActive : false            

        }
    },
    methods:{
        //checkErr(){
         //   this.imaError = false
          //  if(this.forma.ime==="") {this.imaError = true;this.errors.ime = true}
         //   else this.errors.ime = false
         //   if(this.forma.email==="") {this.imaError = true;this.errors.email = true}
         //   else this.errors.email = false
         //   if(this.forma.upit==="") {this.imaError = true;this.errors.upit = true}
         //   else this.errors.upit = false
       // },
        onSubmit(){
            return new Promise((resolve,reject) => {
                //this.checkErr();
                if(this.imaError) { reject("Error");}
                else {
                    resolve();
                    this.forma.ime=""
                    this.forma.email=""
                    this.forma.upit="";
                    this.isModalActive=true;
                }
            }); 
        }
    }
}
</script>
<style lang="scss" scoped>
b-modal{
    z-index: 110;
}
.forma{
    color:rgb(49,49,49);
    padding-bottom: 5rem;
}
i{color:rgb(68, 156, 68)}
h4{padding:3rem}
// pattern="[a-z]*"
</style>