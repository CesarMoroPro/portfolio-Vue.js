<template>
<h2 class="rellax" data-rellax-speed="1">Mes réalisations</h2>

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
                        v-if="project.githubIcon"
                        class="excerpt-and-goToTheProject__goToTheProject" 
                        :href="project.githubLink"
                        >
                                <div 
                                class="icon-and-goToTheProject" 
                                >
                                        <font-awesome-icon class="icon icon-github-mini" icon="fa-brands fa-github" shake />
                                        <p class="link important">{{ project.linkDisplay }}</p>
                                </div>
                        </a>

                        <a
                        v-else-if="project.youtubeIcon"
                        class="excerpt-and-goToTheProject__goToTheProject"
                        :href="project.youtubeLink"
                        >

                                <div class="icon-and-goToTheProject"
                                >
                                        <font-awesome-icon class="icon icon-github-mini" icon="fa-brands fa-youtube" fade />
                                        <p class="link important">{{ project.linkDisplay }}</p>
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
                                        image: "./src/assets/img/minitatures-projets/portfolio/portfolio-400*350.png",
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
                                                        name: [ "Atropos.js", "Rellax.js"],
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
                                                        name: ["Responsive", "Statique"],
                                                },
                                        ],
                                        excerpt: "Ce projet est mon portfolio, sur lequel vous vous trouvez actuellement ! La version dynamique avec un back-end Node.js est en cours de développement",
                                        githubLink: "https://google.com",
                                        githubIcon: true,
                                        youtubeLink: "",
                                        youtubeIcon: true,
                                        linkDisplay: "lien vers le repo GitHub",
                                        finition: "front-end",

                                },

                                /* Devnest */
                                {
                                        title: "Devnest",
                                        date: "12/12/2020",
                                        image: "./src/assets/img/minitatures-projets/devnest/devnest.jpg",
                                        technos: [
                                                "HTML", "CSS", "JavaScript", "PHP",
                                        ],
                                        tools: [
                                                {
                                                        store: "preprocessors",
                                                        name: [ "Sass" ],
                                                },
                                                {
                                                        store: "frameworks",
                                                        name: [  ],
                                                },
                                                {
                                                        store: "builders",
                                                        name: [ "Parcel.js" ],
                                                },
                                                {
                                                        store: "libraries",
                                                        name: [ "Isotop-layout"],
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
                                                        name: [ "SQL", "MySQL", "phpMyAdmin" ],
                                                },
                                                {
                                                        store: "managers",
                                                        name: [ "NPM, Composer"],
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
                                        excerpt: "Projet de fin de formation réalisé en pair-programming, en conditions réelles de travail en entreprise. Formation Développeur Web et Web Mobile, de 6 mois au sein de l'école O'clock",
                                        githubLink: "",
                                        githubIcon: false,
                                        youtubeLink: "https://www.youtube.com/live/Gbczg095K_A?feature=share&t=3775",
                                        youtubeIcon: true,
                                        linkDisplay: "Lien vers la vidéo YouTube",
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