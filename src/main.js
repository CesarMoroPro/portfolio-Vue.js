//^ PACKAGES
//* Import des nodes_modules
// Package Parallax.js
import '../node_modules/rellax/rellax.min.js';
const rellax = new Rellax('.rellax');


import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App)

.component(
        "theHeader", 
        {
                template: `
                        <header>

                                <div class="header-main">

                                        <div class="all-logos">
                                                <img class="logos logo__html rellax" data-rellax-speed="5" src="./assets/img/html-5.svg"/>
                                                <img class="logos logo__css rellax" data-rellax-speed="1" src="./assets/img/css-3.svg"/>
                                                <img class="logos logo__javascript rellax" data-rellax-speed="3" src="./assets/img/javascript.svg"/>
                                                <img class="logos logo__node rellax" data-rellax-speed="4" src="./assets/img/nodejs.svg"/>
                                                <img class="logos logo__php rellax" data-rellax-speed="-3" src="./assets/img/php.svg"/>
                                                <img class="logos logo__sass rellax" data-rellax-speed="2" src="./assets/img/sass.svg"/>
                                                <img class="logos logo__vue rellax" data-rellax-speed="-3" src="./assets/img/vue.svg"/>
                                        </div>

                                        <div class="ID">
                                                <div class="ID__pic">
                                                        <img src="./assets/img/portfolio-profil-majorque-removebg-nb-effect.png" alt="Photo de profil">
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
                        </header>
                `
        }
)


.mount('#app');
