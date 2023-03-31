<template>
        <h2>Mes réalisations</h2>

        <!--* ICI Component des filtres Catégories (Front, Back, Full) -->
        <categoriesComponent></categoriesComponent>

        <div class="all-projects">
                <div class="one-project" v-for="(project, index) in projects" :key="index">

                        <div class="title-and-date">
                                <div class="title-and-date__title">
                                        <h3>{{ project.title.toLocaleUpperCase() }}</h3>
                                </div>
                                <div class="title-and-date__date">
                                        <p>{{ project.date }}</p>
                                </div>
                        </div>

                        <div class="img-and-tags">
                                <div class="img-and-tags__img">
                                        <img class="thumbnail" :src="project.image" alt="Vignette du projet concerné"/>
                                </div>
                                        
                                <!--* ICI Component des filtres Technos (au sens "langages" du terme) -->
                                <technosComponent></technosComponent>

                                <horizontalSeparatorComponent></horizontalSeparatorComponent>

                                <!--* Et ici Component des filtres Tools -->
                                <toolsComponent></toolsComponent>

                                <horizontalSeparatorComponent></horizontalSeparatorComponent>
                        </div>
                                
                        <div class="excerpt-and-goToTheProject">
                                <p class="excertp-and-goToTheProject__excerpt">{{ project.excerpt }}</p>
                                <a 
                                class="excerpt-and-goToTheProject__goToTheProject" 
                                :href="project.link"
                                >
                                        <div 
                                        class="icon-and-goToTheProject" 
                                        v-if="project.githubIcon"
                                        >
                                                <font-awesome-icon class="icon icon-github-mini" icon="fa-brands fa-github" shake />
                                                <p class="link">{{ project.link }}</p>
                                        </div>

                                        <div class="icon-and-goToTheProject"
                                        v-else-if="project.youtubeIcon"
                                        >
                                                <font-awesome-icon class="icon icon-github-mini" icon="fa-brands fa-youtube" fade />
                                                <p class="link">{{ project.link }}</p>
                                        </div>
                                </a>
                        </div>

                </div>
        </div>
</template>


<script>
import Categories from "../filters/categories.vue";
import Technos from "../filters/technos.vue";
import Tools from "../filters//tools.vue";
import HorizontalSeparator from "../visuals/horizontal-separator.vue";


export default {
        data() {
                return {
                        projects: [
                                {
                                        title: "Mon Portfolio",
                                        date: "23/03/2023",
                                        image: "./src/assets/img/minitatures-projets/portfolio-400*350.png",
                                        tags: [
                                                "HTML", "CSS", "JavaScript", "Vue 3"
                                        ],
                                        excerpt: "Ceci est le résumé du projet statique",
                                        link: "lien vers le repo GitHub",
                                        githubIcon: true,
                                        youtubeIcon: true,

                                },

                                {
                                        title: "Vivement DeadPool 3 !",
                                        date: "30/04/2023",
                                        image: "./src/assets/img/logos/vue.svg",
                                        tags: [
                                                "HTML", "CSS", "JavaScript", "Vue 3"
                                        ],
                                        excerpt: "Un autre résumé",
                                        link: "lien vers la vidéo Youtube",
                                        githubIcon: false,
                                        youtubeIcon: true,
                                }
                        ]
                }
        },

        components: {
                categoriesComponent: Categories,
                technosComponent: Technos,
                toolsComponent: Tools,
                horizontalSeparatorComponent: HorizontalSeparator,
        }
};
</script>