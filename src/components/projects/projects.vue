<template>
<h2>Mes réalisations</h2>

<!--* ICI Component des filtres Catégories (Front, Back, Full) -->
<!--J'envoie le tableau projectsList dans le SFC categories.vue, via la props projectsListProp-->
<!--Puis, après le traitement dans le SFC qui me crée un custom event $emit, je récupère les données ici via @customEvent, qui déclenche une méthode-->
<categoriesComponent
:projectsListProp="projectsList"
@filterByCategoryProcess="filtrage($event)"

>

</categoriesComponent>

<div class="all-projects">
        <div 
        class="one-project"
        v-for="(project, index) in projectsList" :key="index"
        >
                <a class="link-project-card" href="http://cesarmorowebdevelopment.com">

                <!--= TITRE + DATE -->
                <div class="title-and-date">
                        <div class="title-and-date__title">
                                <h3>{{ project.title.toLocaleUpperCase() }}</h3>
                        </div>
                        <div class="title-and-date__date">
                                <p>Date de publication : {{ project.date }}</p>
                        </div>
                </div>

                <!--= VIGNETTE + TAGS -->
                <div class="img-and-tags">
                        <div class="img-and-tags__img">
                                <img class="thumbnail" :src="project.image" alt="Vignette du projet concerné"/>
                        </div>
                                
                        <div class="img-and-tags__tags">
                                <div class="img-and-tags__tags__technos">
                                        <ul class="technos-container">
                                                <li
                                                class="techno"
                                                v-for="techno in project.technos"
                                                >
                                                        {{ techno }}
                                                </li>
                                        </ul>
                                </div>

                                <horizontalSeparatorComponent></horizontalSeparatorComponent>

                                <div class="img-and-tags__tags__tools">
                                        <ul 
                                        class="tools-container"
                                        v-for="(tool, index) in project.tools" :key="index"
                                        >
                                                <li
                                                class="tool"
                                                v-for="nameTool in tool.name"
                                                >
                                                        {{ nameTool }}
                                                </li>
                                        </ul>
                                </div>

                                <horizontalSeparatorComponent></horizontalSeparatorComponent>
                        </div>
                </div>
                        
                <!--= EXCERPT + ICONE + LIEN -->
                <div class="excerpt-and-goToTheProject">
                        <p class="excerpt-and-goToTheProject__excerpt">{{ project.excerpt }}</p>
                        
                        <a 
                        class="excerpt-and-goToTheProject__goToTheProject" 
                        :href="project.link"
                        >
                                <div 
                                class="icon-and-goToTheProject" 
                                v-if="project.githubIcon"
                                >
                                        <font-awesome-icon class="icon icon-github-mini" icon="fa-brands fa-github" shake />
                                        <p class="link important">{{ project.link }}</p>
                                </div>

                                <div class="icon-and-goToTheProject"
                                v-else-if="project.youtubeIcon"
                                >
                                        <font-awesome-icon class="icon icon-github-mini" icon="fa-brands fa-youtube" fade />
                                        <p class="link important">{{ project.link }}</p>
                                </div>
                        </a>
                </div>

                </a>
        </div>
</div>
</template>


<script>

import Categories from "../filters/categories.vue";
import HorizontalSeparator from "../visuals/horizontal-separator.vue";


export default {
        data() {
                return {
                        projectsList: [
                                /* Portfolio */
                                {
                                        title: "Mon Portfolio",
                                        date: "23/03/2023",
                                        image: "./src/assets/img/minitatures-projets/portfolio-400*350.png",
                                        technos: [
                                                "HTML", "CSS", "JavaScript"
                                        ],
                                        tools: [
                                                {
                                                        store: "preprocessors",
                                                        name: [ "Sass" ],
                                                },
                                                {
                                                        store: "frameworks",
                                                        name: [ "Vue.js 3" ],
                                                },
                                                {
                                                        store: "builders",
                                                        name: [ "Vite" ],
                                                },
                                                {
                                                        store: "libraries",
                                                        name: [ "Rellax.js"],
                                                },
                                                {
                                                        store: "cmss",
                                                        name: [],
                                                },
                                                {
                                                        store: "sgbds",
                                                        name: [],
                                                },
                                                {
                                                        store: "bdds",
                                                        name: [],
                                                },
                                                {
                                                        store: "managers",
                                                        name: [ "NPM"],
                                                },
                                                {
                                                        store: "versionnings",
                                                        name: [ "Git", "GitHub" ],
                                                },
                                                {
                                                        store: "others",
                                                        name: ["Responsibe"],
                                                },
                                        ],
                                        excerpt: "Ce projet est mon portfolio, sur lequel vous vous trouvez actuellement !",
                                        link: "lien vers le repo GitHub",
                                        githubIcon: true,
                                        youtubeIcon: true,
                                        finition: "front-end",

                                },

                                /* Deadpool 3 */
                                {
                                        title: "Vivement DeadPool 3 !",
                                        date: "30/04/2023",
                                        image: "./src/assets/img/logos/vue.svg",
                                        technos: [
                                                "HTML", "CSS", "JavaScript",
                                        ],
                                        tools: [
                                                {
                                                        store: "preprocessors",
                                                        name: [ "Sass" ],
                                                },
                                                {
                                                        store: "frameworks",
                                                        name: [ "Vue.js 3" ],
                                                },
                                                {
                                                        store: "builders",
                                                        name: [ "Vite" ],
                                                },
                                                {
                                                        store: "libraries",
                                                        name: [ "Rellax.js"],
                                                },
                                                {
                                                        store: "cmss",
                                                        name: [],
                                                },
                                                {
                                                        store: "sgbds",
                                                        name: [],
                                                },
                                                {
                                                        store: "bdds",
                                                        name: [],
                                                },
                                                {
                                                        store: "managers",
                                                        name: [ "NPM"],
                                                },
                                                {
                                                        store: "versionnings",
                                                        name: [ "Git", "GitHub" ],
                                                },
                                                {
                                                        store: "others",
                                                        name: [],
                                                },
                                        ],
                                        excerpt: "Un autre résumé",
                                        link: "lien vers la vidéo Youtube",
                                        githubIcon: false,
                                        youtubeIcon: true,
                                        finition: "fullstack",
                                },

                                /* Deadpool 3 */
                                {
                                        title: "Vivement DeadPool 3 !",
                                        date: "30/04/2023",
                                        image: "./src/assets/img/logos/vue.svg",
                                        technos: [
                                                "HTML", "CSS", "JavaScript",
                                        ],
                                        tools: [
                                                {
                                                        store: "preprocessors",
                                                        name: [ "Sass" ],
                                                },
                                                {
                                                        store: "frameworks",
                                                        name: [ "Vue.js 3" ],
                                                },
                                                {
                                                        store: "builders",
                                                        name: [ "Vite" ],
                                                },
                                                {
                                                        store: "libraries",
                                                        name: [ "Rellax.js"],
                                                },
                                                {
                                                        store: "cmss",
                                                        name: [],
                                                },
                                                {
                                                        store: "sgbds",
                                                        name: [],
                                                },
                                                {
                                                        store: "bdds",
                                                        name: [],
                                                },
                                                {
                                                        store: "managers",
                                                        name: [ "NPM"],
                                                },
                                                {
                                                        store: "versionnings",
                                                        name: [ "Git", "GitHub" ],
                                                },
                                                {
                                                        store: "others",
                                                        name: [],
                                                },
                                        ],
                                        excerpt: "Un autre résumé",
                                        link: "lien vers la vidéo Youtube",
                                        githubIcon: false,
                                        youtubeIcon: true,
                                        finition: "fullstack",
                                },
                        ],
                        filterName: null,
                }
        },

        methods: {
                filtrage(event) {
                        /* Le fait d'entrer dans cette méthode implique forcément que la condition (project.finition === category.name) soit déjà vraie, dans le SFC categories.vue
                        Il n'y a donc pas besoin de refaire un traitement de vérification
                        Il faut simplement renvoyer l'argument event */
                        this.filterName = event;
                        console.log(this.filterName);
                        // return this.filterName;
                }
        },

        components: {
                categoriesComponent: Categories,
                horizontalSeparatorComponent: HorizontalSeparator,
        }
};
</script>