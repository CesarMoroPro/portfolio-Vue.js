<template>
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
                <p>Issu d'une reconversion professionnelle en télé-présentiel avec l'&nbsp;<a href="https://oclock.io/" target="blank" class="link link-white link-white-background">École O'clock</a>, je suis dès maintenant disponible pour mettre mes compétences à votre profit.</p>
                <p>En plus des compétences techniques acquises lors de cette <a href="https://oclock.io/formations/developpeur-web" target="blank" class="link link-white link-white-background">formation</a>, j'y ai appris "comment apprendre" et je prends du plaisir à continuer de progresser.</p>
                <p>Bien qu'ayant une fibre artistique musicale évoluée, il n'est est pas de même en graphisme. Gardez simplement à l'esprit que mon domaine est le <span class="link-white-background">développement web</span> et non le graphisme.</p>
                <p>Alors, ensemble, aidons-nous à grandir et à évoluer !</p>
        </div>
        

        <!-- <div class="k2000">
                <div class="k2000__mobile-element"></div>
        </div> -->
        
</div>
</template>

<script>
//^ IMPORT D'IMAGES QUI NE SE BUILD PAS
//* Import des images EN STATIQUE
/* Pourquoi importer les images ?
Le build de Vite ne sait pas forcément prendre tous les assets pour les inclure dans le répertoire `dist > assets`.
En faisant un import des images, le build se fait correctement.
https://cloudinary.com/blog/handle-image-asset-bundling-using-vite-in-vuejs
*/
import profilMajorqueImg from '../../assets/img/avatars/portfolio-profil-majorque-removebg-nb-effect.png';

export default {
        data() {
                return {
                        profilMajorqueImg,
                }
        },
}

</script>