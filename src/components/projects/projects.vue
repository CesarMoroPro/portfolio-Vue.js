<template>
        <swiper-container :slides-per-view="1" :loop="true" :navigation="true" :scrollbar="true" :breakpoints="{ 651: slidePerView='2'}">
                <swiper-slide v-for="(project, index) in projects" :key="index">
                        <div class="one-slide">
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
                                        
                                <div class="excerpt">
                                        <p>{{ project.excerpt }}</p>
                                </div>
                                        
                        </div>
                </swiper-slide>


                <swiper-slide>Element 2</swiper-slide>
                <swiper-slide>Element 3</swiper-slide>
                <swiper-slide>Element 4</swiper-slide>
                <swiper-slide>Element 5</swiper-slide>
                <swiper-slide>Element 6</swiper-slide>
        </swiper-container>
</template>


<script>
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
                                },

                                {
                                        title: "DeadPool 2 !",
                                        date: "30/04/2023",
                                        image: "./src/assets/img/vue.svg",
                                        tags: [
                                                "HTML", "CSS", "JavaScript", "Vue 3"
                                        ],
                                        excerpt: "Un autre résumé",
                                }
                        ]
                }
        },
};
</script>