<!--= ---------- TEMPLATE ---------- -->
<template>
    <header>
      <thePreHeader></thePreHeader>
      <theHeader></theHeader>
    </header>

    <main class="main-div">
      <div class="skills">
        <theHardskillsComponent></theHardskillsComponent>
        <theSoftskillsComponent></theSoftskillsComponent>
      </div>
      
      <div class="projects-div">
        <theProjectsComponent></theProjectsComponent>
      </div>
    </main>
</template>



<!--= ---------- SCRIPT ---------- -->
<script>
// Import des SFCs
import Hardskills from "./components/skills/hardskills.vue";
import Softskills from "./components/skills/softskills.vue";
import Projects from "./components/projects/projects.vue";

export default {
  components: {
    theHardskillsComponent: Hardskills,
    theSoftskillsComponent: Softskills,
    theProjectsComponent: Projects,
  }
}

</script>
