<!--= ---------- TEMPLATE ---------- -->
<template>
        <div id="contact-div" class="contact-div">
                <ContactPopupComponent></ContactPopupComponent>
        </div>

        <div class="global-div">
                <header>
                        <PreHeaderComponent></PreHeaderComponent>
                        <HeaderComponent></HeaderComponent>
                </header>

                <main class="main-div">

                        <div class="skills-zone">
                                <div class="parallax">
                                        <theParallaxLogos></theParallaxLogos>
                                </div>
                                
                                <div class="skills">
                                        <theHardskillsComponent></theHardskillsComponent>
                                        <theSoftskillsComponent></theSoftskillsComponent>
                                </div>
                                
                        </div>
                
                        <div class="projects-div">
                                <theProjectsComponent></theProjectsComponent>
                        </div>
                
                        <div class="NB">
                                <p>
                                NB : Portfolio : V 1.0.0.<br>
                                Certaines fonctionnalités ne sont pas encore optimales, voire opérationnelles. De même, certains aspects UX doivent être perfectionnés.<br>
                                Ces améliorations arriveront dans une prochaine version, pour laquelle je ne suis pas en mesure de communiquer une date à ce jour.<br>
                                Merci de votre compréhension.
                                </p>
                        </div>
                </main>

                <footer>
                        <FooterComponent></FooterComponent>
                </footer>
        </div>
</template>


<!--= ---------- SCRIPT ---------- -->
<script>
// Import des SFCs
import PreHeaderComponent from "./Vue-components/layouts/PreHeader.vue";
import HeaderComponent from "./Vue-components/layouts/Header.vue";
import FooterComponent from "./Vue-components/layouts/Footer.vue";
import Hardskills from "./Vue-components/skills/hardskills.vue";
import Softskills from "./Vue-components/skills/softskills.vue";
import Projects from "./Vue-components/projects/projects.vue";
import ParallaxLogos from "./Vue-components/visuals/parallax-logos.vue";
import ContactPopupComponent from "./Vue-components/social/contact-popup.vue";

export default {
        components: {
                PreHeaderComponent,
                HeaderComponent,
                FooterComponent,
                theHardskillsComponent: Hardskills,
                theSoftskillsComponent: Softskills,
                theProjectsComponent: Projects,
                theParallaxLogos: ParallaxLogos,
                ContactPopupComponent,
        }
}

</script>
