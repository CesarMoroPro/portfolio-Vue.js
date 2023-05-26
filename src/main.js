/**
 ** Schéma :
 *      1. Imports nécessaires
 *      2. DOM-Content-loaded => init();
 *      3. init() => goVue() => Instance de Vue ;
 *      4. init() => goRellax() => Instance de Rellax ;
 *      5. init() => goAtropos() => Instance de Atrapos ;
 */

//= ---------------------------------------------------------------------------------------------------------
//^ 1. IMPORTS PACKAGES NÉCESSAIRES
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

//* Import du module pour créer une instance de Vue
import { createApp } from 'vue/dist/vue.esm-bundler.js';
// Import du Root-Component
import App from './App.vue';

//^ IMPORT DE SFC
import iconsComponent from "./Vue-components/social/social-icons.vue";

//^ IMPORT D'IMAGES QUI NE SE BUILD PAS
//* Import des images EN STATIQUE
/* Pourquoi importer les images ?
Le build de Vite ne sait pas forcément prendre tous les assets pour les inclure dans le répertoire `dist > assets`.
En faisant un import des images, le build se fait correctement.
https://cloudinary.com/blog/handle-image-asset-bundling-using-vite-in-vuejs
*/
import profilMajorqueImg from './assets/img/avatars/portfolio-profil-majorque-removebg-nb-effect.png';

//^ IMPORTS JS CUSTOM FILES
import { customJsFiles } from './assets/js/main-JS-custom-files.js';



//= ---------------------------------------------------------------------------------------------------------
//^ 3. et 4. EXÉCUTION DU CODE
function goVue() {
        const app = createApp(App)

        // Composants globauxl dispo partout dans l'app
        .component('font-awesome-icon', FontAwesomeIcon)
        .component("thePreHeader", 
                {
                        template: `
                                <div class="pre-header">
                                        <iconsComponent></iconsComponent>
                                </div>
                        `,

                        components: {
                                iconsComponent,
                        }
                }
        )
        .component("theHeader", 
                {
                        template: `
                                <div class="header-main">
        
                                        <div class="ID">

                                                <div class="ID__pic">
                                                        <div class="atropos my-atropos"> <!-- main Atropos container (required), add your custom class here -->
                                                                <div class="atropos-scale"> <!-- scale container (required) -->
                                                                        <div class="atropos-rotate"> <!-- rotate container (required) -->
                                                                                <div class="atropos-inner"> <!-- inner container (required) -->
                                                                                        <!-- put your custom content here -->
                                                                                        <img :src=profilMajorqueImg  alt="Photo de profil" data-atropos-opacity="0.8;1">
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>

                                                        <!-- <div class="effect-zone"</div> -->
                                                                <div class="effect-zone__pixel-effect"></div>
                                                        <!-- </div> -->
                                                </div>
        
                                                <div class="ID__name">
                                                        <!-- <div class="laser"></div>
                                                        <div class="mask"></div> -->
                                                        <h1 class="rellax" data-rellax-speed="2">César Moro</h1>
                                                        <h2 class="rellax" data-rellax-speed="1">Développeur<br> Web & Web Mobile</h2>
                                                </div>
                                        </div>

                                        <div class="presentation">
                                                <p>Issu d'une reconversion professionnelle en télé-présentiel avec l'&nbsp;<a href="https://oclock.io/" target="blank" class="link link-white link-white-background">École O'clock</a>, je suis à présent disponible pour mettre mes compétences à votre profit.</p>
                                                <p>En plus des compétences techniques acquises lors de cette <a href="https://oclock.io/formations/developpeur-web" target="blank" class="link link-white link-white-background">formation</a>, j'y ai appris "comment apprendre" et je prends du plaisir à continuer de progresser.</p>
                                                <p>Alors, ensemble, aidons-nous à grandir et à évoluer !</p>
                                        </div>
                                        
        
                                        <!-- <div class="k2000">
                                                <div class="k2000__mobile-element"></div>
                                        </div> -->
                                        
                                </div>
                        `,

                        data() {
                                return {
                                        profilMajorqueImg
                                }
                        }
                }
        )
        .component("theFooter", {
                template: `
                        <div class="id-and-copyright">
                                César Moro <br>
                                <span class="important">Développeur JavaScript - Vue.js - Node.js</span><br>
                                https://cesar-moro.fr - Copyright <span id="copy-year">Année injectée en JS Vanilla</span>
                        </div>

                        <div class="post-footer">
                                <iconsComponent></iconsComponent>
                        </div>
                `,

                components: {
                        iconsComponent,
                }
        })
        
        .mount('#app');
}

function goRellax() {
        Vue.use(VueRellax);
}

function goAtropos() {
        // Initialize
        const myAtropos = Atropos({
                el: '.my-atropos',
                activeOffset: 120,
                shadowScale: 1.05,
                highlight: false,
        });
}


function init() {        
        //* Lancement de l'instance de Vue
        goVue();

        //* Lancement des  JS custom files
        //! Laisser ces custom files avant les libraires car une partie de Rellax.js en a besoin !!
        customJsFiles();

        //* Lancement des libraries JS
        goAtropos();
        goRellax();
}



//= ---------------------------------------------------------------------------------------------------------
//^ 2. DOM CONTENT LOADED
window.addEventListener('DOMContentLoaded', init);