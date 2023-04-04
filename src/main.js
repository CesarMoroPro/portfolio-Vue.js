/**
 ** Schéma :
 *      1. Imports nécessaires
 *      2. DOM-Content-loaded => init();
 *      3. init() => goVue() => Instance de Vue ;
 *      4. init() => goRellax() => Instance de Rellax ;
 */

//= ---------------------------------------------------------------------------------------------------------
//^ 1. IMPORTS PACKAGES NÉCESSAIRES
//* (Reset.css est importé dans le fichier "sccs/main.scss" !)
//* Import du package Parallax.js, qui est appelé après l'instance de Vue
import '../node_modules/rellax/rellax.min.js';

//* Import de FontAwesome pour Vue 3 !
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faGithub, faLinkedin, faYoutube  } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faGithub, faLinkedin, faAddressCard, faYoutube);

// Import du module pour créer une instance de Vue
import { createApp } from 'vue/dist/vue.esm-bundler.js';
// Import du Root-Component
import App from './App.vue';

//^ IMPORTS JS FILES
import { letsGetCurrentYear } from './assets/js/copyright.js';
import { initHeightProjectCard } from './assets/js/height-project.js';



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
                                        <font-awesome-icon class="icons icon-github-small" icon="fa-brands fa-github" href="https://github.com/CesarMoroPro" alt="Lien externe vers mon repo Github" title="Lien externe vers mon repo Github" />
                                        <font-awesome-icon class="icons icon-linkedin-small" icon="fa-brands fa-linkedin" href="https://www.linkedin.com/in/c%C3%A9sar-moro/" alt="Lien externe vers mon profil LinkedIn" title="Lien externe vers mon profil LinkedIn" />
                                        <font-awesome-icon class="icons icon-adress-card-small" icon="fa-solid fa-address-card" href="#" alt="Lien interne pour me contacter" title="Lien interne pour me contacter" />
                                </div>
                        `
                }
        )
        .component("theHeader", 
                {
                        template: `
                                <div class="header-main">
        
                                        <!-- <div class="all-logos">
                                                <img class="logos logo__html rellax" data-rellax-speed="5" src="../src/assets/img/logos/html-5.svg"/>
                                                <img class="logos logo__css rellax" data-rellax-speed="1" src="../src/assets/img/logos/css-3.svg"/>
                                                <img class="logos logo__javascript rellax" data-rellax-speed="3" src="../src/assets/img/logos/javascript.svg"/>
                                                <img class="logos logo__node rellax" data-rellax-speed="4" src="../src/assets/img/logos/nodejs.svg"/>
                                                <img class="logos logo__php rellax" data-rellax-speed="-3" src="../src/assets/img/logos/php.svg"/>
                                                <img class="logos logo__sass rellax" data-rellax-speed="2" src="../src/assets/img/logos/sass.svg"/>
                                                <img class="logos logo__vue rellax" data-rellax-speed="-3" src="../src/assets/img/logos/vue.svg"/>
                                        </div> -->
        
                                        <div class="ID">
                                                <div class="ID__pic">
                                                        <img src="../src/assets/img/avatars/portfolio-profil-majorque-removebg-nb-effect.png" alt="Photo de profil">
                                                        <!-- <div class="effect-zone"</div> -->
                                                                <div class="effect-zone__pixel-effect"></div>
                                                        <!-- </div> -->
                                                </div>
        
                                                <div class="ID__name">
                                                        <!-- <div class="laser"></div>
                                                        <div class="mask"></div> -->
                                                        <h1 class="rellax" data-rellax-speed="2">César Moro</h1>
                                                        <h2 class="rellax" data-rellax-speed="1">Portfolio</h2>
                                                </div>
                                        </div>
                                        
        
                                        <!-- <div class="k2000">
                                                <div class="k2000__mobile-element"></div>
                                        </div> -->
                                        
                                </div>
                        `
                }
        )
        .component("theFooter", {
                template: `
                        <div class="id-and-copyright">
                                César MORO - Web Development <br>
                                Développeur Front-end JavaScript - Vue.js <br>
                                Copyright <span id="copy-year">Année injectée en JS Vanilla</span>
                        </div>

                        <div class="post-footer">
                                <font-awesome-icon class="icons icon-github-small" icon="fa-brands fa-github" href="https://github.com/CesarMoroPro" alt="Lien externe vers mon repo Github" title="Lien externe vers mon repo Github" />
                                <font-awesome-icon class="icons icon-linkedin-small" icon="fa-brands fa-linkedin" href="https://www.linkedin.com/in/c%C3%A9sar-moro/" alt="Lien externe vers mon profil LinkedIn" title="Lien externe vers mon profil LinkedIn" />
                                <font-awesome-icon class="icons icon-adress-card-small" icon="fa-solid fa-address-card" href="#" alt="Lien interne pour me contacter" title="Lien interne pour me contacter" bounce />
                        </div>
                `
        })
        
        .mount('#app');
}

function goRellax() {
        const rellax = new Rellax('.rellax');
}


function init() {
        goVue();
        goRellax();
        letsGetCurrentYear();
        //initHeightProjectCard();

        // const el = document.querySelector('.one-project');
        // console.log(el.offsetWidth);
}



//= ---------------------------------------------------------------------------------------------------------
//^ 2. DOM CONTENT LOADED
window.addEventListener('DOMContentLoaded', init);