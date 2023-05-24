<template>
        <a href="https://github.com/CesarMoroPro" alt="Icône de GitHub" title="Lien externe vers mes repos Github"><font-awesome-icon class="icons icon-github-small" icon="fa-brands fa-github"/></a>
        <a href="https://www.linkedin.com/in/c%C3%A9sar-moro/" alt="Icône de LinkedIn" title="Lien externe vers mon profil LinkedIn"><font-awesome-icon class="icons icon-linkedin-smal" icon="fa-brands fa-linkedin"/></a>
        <font-awesome-icon class="icons icon-adress-card-small" icon="fa-solid fa-address-card" alt="Icône de Contact" title="Ouverture d'une popup de contact" v-on:click="openContactPopup"/>
</template>

<script>
export default {
        methods: {
                openContactPopup() {
                        //* Je récupère la popup de contact et la fait apparaître en supprimant la class "display-none"
                        const contactPopup = document.querySelector("#contact-popup");
                        contactPopup.classList.remove("display-none");

                        // Je récupère la div Globale afin de la fouter
                        //TODO : rendre inactives toutes les intéractions autres que la croix pour quitter la popup de contact
                        const globalDiv = document.querySelector('.global-div');
                        globalDiv.classList.add('bluring');
                }
        }
}
</script>