/**
 ** Schéma :
 *      01. Imports Vue
 *      02. Import des packages
 *      03. Import des custom files
 *      04. DOM-Content-loaded => init();
 *      05. Déclaration de la fonction init() 
 *      06. init() => goVue() => Instance de Vue ;
 *      4. init() => goRellax() => Instance de Rellax ;
 *      5. init() => goAtropos() => Instance de Atrapos ;
 */

//= ---------------------------------------------------------------------------------------------------------
//? 01 - IMPORT DE VUE
import { createApp } from 'vue/dist/vue.esm-bundler.js';
// Import du Root-Component
import App from './App.vue';

//? 02 - IMPORTS PACKAGES NÉCESSAIRES
//* (Reset.css est importé dans le fichier "sccs/main.scss" !)

//* Import du package Vue-Rellax, qui est appelé après l'instance de Vue
import VueRellax from 'vue-rellax';

//* Import du package Atrapos.js qui est appelé après l'instance de Vue
// import Atropos library
import Atropos from 'atropos';

//* Import de FONTAWESOME pour Vue 3 !
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faGithub, faLinkedin, faYoutube, faWordpress  } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faEnvelope, faMobileScreenButton, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faGithub, faLinkedin, faAddressCard, faYoutube, faWordpress, faEnvelope, faMobileScreenButton, faSquareXmark);

//? 03 - IMPORTS JS CUSTOM FILES
import { customJsFiles } from './assets/js/main-JS-custom-files.js';


//= ---------------------------------------------------------------------------------------------------------
//? 06 - Création du programme
//^ 06A - Création de l'instance de Vue
function goVue() {
        const app = createApp(App)

        // Composants globauxl dispo partout dans l'app
        .component('font-awesome-icon', FontAwesomeIcon)
        
        .mount('#app');
}

//^ 06D - Création des librairies JS
function goAtropos() {
        // Initialize
        const myAtropos = Atropos({
                el: '.my-atropos',
                activeOffset: 120,
                shadowScale: 1.05,
                highlight: false,
        });
}

function goRellax() {
        Vue.use(VueRellax);
}       

//? - 05 Déclaration de la fonction init()
function init() {        
        //^ 06B - Lancement de l'instance de Vue
        goVue();

        //^ 06C - Chargement des  JS custom files
        //! Laisser ces custom files avant les libraires car une partie de Rellax.js en a besoin !!
        customJsFiles();

        //^ 06E - Lancement des libraries JS
        goAtropos();
        goRellax();
}



//= ---------------------------------------------------------------------------------------------------------
//? 04 - DOM CONTENT LOADED
window.addEventListener('DOMContentLoaded', init);