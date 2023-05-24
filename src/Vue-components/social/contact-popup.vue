<template>
        <div id="contact-popup" class="contact-popup display-none">

                <div id="cross-mark" class="contact-popup__cross-mark" @click="closePopup"><font-awesome-icon icon="fa-solid fa-square-xmark" class="icon-cross-mark"/></div>

                <div class="contact-popup__info-phone">
                        <div class="icon phone-icon"><font-awesome-icon icon="fa-solid fa-mobile-screen-button" class="icon-contact"/></div>
                        <div class="phone-number infos-contact">+33 (0)7 60 46 96 33</div>
                </div>

                <div class="contact-popup__info-mail">
                        <div class="info-mail"><font-awesome-icon icon="fa-solid fa-envelope" class="icon-contact"/></div>
                        <div class="mail-address infos-contact">cesar.moro.dev@gmail.com</div>
                </div>

        </div>
</template>

<script>
export default {
        methods: {
                closePopup() {
                        // Je récupère la popup de contact et je la masque avec la class "display-none"
                        const contactPopup = document.querySelector("#contact-popup");
                        contactPopup.classList.add("display-none");

                        // Je récupère la div Global pour la déflouter
                        //TODO : Lorsque la fonctionnalité rendant inactives toutes les intéractions pendant la popup contact sera opérationnelle, il faudra la désactiver
                        const globalDiv = document.querySelector(".global-div");
                        globalDiv.classList.remove('bluring');
                },
        }
}

</script>