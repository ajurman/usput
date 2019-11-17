<template>
    <div>
        <article class="hero is-large">
            <div class="hero-body">
                <div class="container">
                    <h2 class="subtitle has-text-info">
                    Primary bold subtitle
                    </h2>
                    <h1 class="title  has-text-light">
                        Primary bold title
                    </h1>
                </div>
            </div>
        </article>
        <article class="hero-body has-background-white-ter">
            <div class="container">
                <h3 class="title">Internacionalni sajam pršuta</h3>
                <div class="columns is-mobile">
                    <div class="column">
                        <div class="notification is-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quasi perferendis culpa atque sed voluptatibus unde animi laudantium deleniti ipsam totam doloribus qui architecto, nostrum provident quaerat odio! Doloribus, consequatur?</div>
                        <div class="notification is-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quasi perferendis culpa atque sed voluptatibus unde animi laudantium deleniti ipsam totam doloribus qui architecto, nostrum provident quaerat odio! Doloribus, consequatur?</div>
                        <div class="notification is-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quasi perferendis culpa atque sed voluptatibus unde animi laudantium deleniti ipsam totam doloribus qui architecto, nostrum provident quaerat odio! Doloribus, consequatur?</div>
                        <div class="notification is-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quasi perferendis culpa atque sed voluptatibus unde animi laudantium deleniti ipsam totam doloribus qui architecto, nostrum provident quaerat odio! Doloribus, consequatur?</div>
                        <figure class="image">
                            <img src="https://erickson.edu/sites/default/files/Erickson%20Badges%20Banner.png">
                        </figure>
                    </div>
                </div>
                <div class="has-background-info">
                    <h4 class="has-background-white">SPONZORI</h4>
                </div>
                <div class="columns is-mobile">
                         <div class="column">1</div>
                        <div class="column">2</div>
                        <div class="column">3</div>
                        <div class="column">4</div> 
                </div>
                <div class="columns is-mobile">
                         <div class="column">1</div>
                        <div class="column">2</div>
                        <div class="column">3</div>
                        <div class="column">4</div> 
                </div>
                <div class="columns is-mobile">
                        <div class="column">1</div>
                        <div class="column">2</div>
                        <div class="column">3</div>
                        <div class="column">4</div> 
                </div>
                <div class="columns is-mobile">
                         <div class="column">1</div>
                        <div class="column">2</div>
                        <div class="column">3</div>
                        <div class="column">4</div> 
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
        margin-top: 300px;
    }
    hr {    padding-bottom: 80px;}
    h3,.column>p {
        padding: 25px;
    
    }
    h4 {
        display:inline-block;
    }
    
</style>