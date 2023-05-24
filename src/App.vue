<!--= ---------- TEMPLATE ---------- -->
<template>
    <header>
      <thePreHeader></thePreHeader>
      <theHeader></theHeader>
    </header>

    <main class="main-div">
      <ContactPopupComponent></ContactPopupComponent>

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
    </main>

    <footer>
      <theFooter></theFooter>
    </footer>
</template>



<!--= ---------- SCRIPT ---------- -->
<script>
// Import des SFCs
import Hardskills from "./Vue-components/skills/hardskills.vue";
import Softskills from "./Vue-components/skills/softskills.vue";
import Projects from "./Vue-components/projects/projects.vue";
import ParallaxLogos from "./Vue-components/visuals/parallax-logos.vue";
import ContactPopupComponent from "./Vue-components/social/contact-popup.vue";

export default {
  components: {
    theHardskillsComponent: Hardskills,
    theSoftskillsComponent: Softskills,
    theProjectsComponent: Projects,
    theParallaxLogos: ParallaxLogos,
    ContactPopupComponent
  }
}

</script>
