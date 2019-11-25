<template>
    <div>
        <article class="hero is-large">
            <div class="hero-body">
                <div class="container">
                    <h2 class="subtitle redText">
                    Primary bold subtitle
                    </h2>
                    <h1 class="title  has-text-light">
                        Primary bold title
                    </h1>
                </div>
            </div>
        </article>
        <article class="hero-body svjetlija skew">
            <div class="container">
                <h3 class="title">Internacionalni sajam pršuta</h3>
                <div class="columns is-mobile">
                    <div class="column">
                        <div class="notification">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quasi perferendis culpa atque sed voluptatibus unde animi laudantium deleniti ipsam totam doloribus qui architecto, nostrum provident quaerat odio! Doloribus, consequatur?</div>
                        <div class="notification">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quasi perferendis culpa atque sed voluptatibus unde animi laudantium deleniti ipsam totam doloribus qui architecto, nostrum provident quaerat odio! Doloribus, consequatur?</div>
                        <div class="notification">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quasi perferendis culpa atque sed voluptatibus unde animi laudantium deleniti ipsam totam doloribus qui architecto, nostrum provident quaerat odio! Doloribus, consequatur?</div>
                        <div class="notification">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quasi perferendis culpa atque sed voluptatibus unde animi laudantium deleniti ipsam totam doloribus qui architecto, nostrum provident quaerat odio! Doloribus, consequatur?</div>
                        <figure class="image">
                            <img src="https://erickson.edu/sites/default/files/Erickson%20Badges%20Banner.png">
                        </figure>
                    </div>
                </div>
                <div class="red">
                    <h4 class="has-background-white">SPONZORI</h4>
                </div>
                <div class="columns is-mobile">
                        <div class="column"><img src="../assets/JPEG/sponzor1.jpg" alt="GhiaStaff"></div>
                        <div class="column"><img src="../assets/JPEG/sponzor2.jpg" alt="Rudan"></div>
                </div>
                 <div class="red">
                    <h4 class="has-background-white">POKROVITELJI I POTPORE</h4>
                </div>
                <div class="columns is-mobile">
                        <div class="column"><img src="../assets/JPEG/potpore2.jpg" alt="Ministarstco turizma"> </div>
                        <div class="column"><img src="../assets/JPEG/potpore3.jpg" alt="Ministarstvo poljoprivrede"></div>            
                </div>
                <div class="columns is-mobile">
                        <div class="column"><img src="../assets/JPEG/potpore1.jpg" alt="Istra"></div>
                        <div class="column"><img src="../assets/JPEG/potpore4.jpg" alt="Istra"></div>
                </div>
                <div class="columns is-mobile">
                        <div class="column"><img src="../assets/JPEG/potpore5.jpg" alt="Središnja Istra"></div>
                        <div class="column"><img src="../assets/JPEG/potpore6.jpg" alt="Središnja Istra"></div>
                </div>
                <div class="red">
                    <h4 class="has-background-white">ORGANIZATORI</h4>
                </div>
                <div class="columns is-mobile">
                        <div class="column"><img src="../assets/JPEG/organizator1.jpg" alt="GUSTUS"></div>
                        <div class="column"><img src="../assets/JPEG/organizator2.jpg" alt="Tinjan"></div>
                </div>
                <div class="columns is-mobile">
                        <div class="column"><img src="../assets/JPEG/organizator3.jpg" alt="Istarski Pršut"></div>
                        <div class="column"><img src="../assets/JPEG/organizator4.jpg" alt="Merikane"></div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
  name: "Pocetna",
  beforeCreate: function() {
        document.body.className = 'home';
    }
}
</script>

<style scoped>
    article:nth-child(1) {
        text-align: left;
        padding-top: -100px;

    }
    article:nth-child(2) {
        margin-top: 100px;
    }
    hr {    padding-bottom: 80px;}
    h3,.column>p {
        padding: 25px;
    
    }
    h4 {
        display:inline-block;
    }
    .skew { 
        clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0% 100%);
    }
    
</style>
