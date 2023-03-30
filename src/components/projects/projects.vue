<template>
        <h2>Mes réalisations</h2>

        <categoriesComponent></categoriesComponent>

        <div class="all-projects">
                <div class="one-project" v-for="(project, index) in projects" :key="index">

                        <div class="title-and-date">
                                <div class="title-and-date__title">
                                        <h3>{{ project.title }}</h3>
                                </div>
                                <div class="title-and-date__date">
                                        <p>{{ project.date }}</p>
                                </div>
                        </div>

                        <div class="img-and-tags">
                                <div class="img-and-tags__img">
                                        <img :src="project.image" />
                                </div>
                                <div class="img-and-tags__tags" v-for="(tag, index) in projects.tags" :key="index">
                                        <p class="tag"> {{ tag }} </p>
                                </div>
                        </div>
                                
                        <div class="excerpt-and-github">
                                <p>{{ project.excerpt }}</p>
                                <a :href="project.github">{{ project.github }}</a>
                        </div>

                </div>
        </div>
</template>


<script>
import Categories from "../filters/categories.vue";
import Technos from "../filters/technos.vue";
import Tools from "../filters//tools.vue";


export default {
        data() {
                return {
                        projects: [
                                {
                                        title: "Wham !",
                                        date: "23/03/2023",
                                        image: "./src/assets/img/github-icon.svg",
                                        tags: [
                                                "HTML", "CSS", "JavaScript", "Vue 3"
                                        ],
                                        excerpt: "Ceci est le résumé du projet statique",
                                        github: "lien vers le repo GitHub",
                                },

                                {
                                        title: "Vivement DeadPool 3 !",
                                        date: "30/04/2023",
                                        image: "./src/assets/img/vue.svg",
                                        tags: [
                                                "HTML", "CSS", "JavaScript", "Vue 3"
                                        ],
                                        excerpt: "Un autre résumé",
                                        github: "lien vers le repo GitHub",
                                }
                        ]
                }
        },

        components: {
                categoriesComponent: Categories,
                technosComponent: Technos,
                toolsComponent: Tools,
        }
};
</script>