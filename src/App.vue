<!--= ---------- TEMPLATE ---------- -->
<template>
    <header>
      <theHeader></theHeader>
    </header>

    <main class="main-div">
      <div class="skills">
        <hardskillsComponent></hardskillsComponent>
        <softskillsComponent></softskillsComponent>
      </div>
      
      <div class="slides-div">
        <projectsComponent></projectsComponent>
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
    hardskillsComponent: Hardskills,
    softskillsComponent: Softskills,
    projectsComponent: Projects,
  }
}

</script>
