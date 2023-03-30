<template>
        <!--
        /*
        Avec le premier "v-for", à chaque itération, "element" devient un objet contenant une propriété "store" et une propriété "name"
        Il faut alors ensuite un deuxième "v-for" pour boucler sur toutes les propriétés "name" puisqu'elles contiennent toutes un tableau
        pour enfin avoir accès à tout leur contenu
        */
        -->
        <div class="img-and-tags__projects-tools">
                <ul class="tools-container"
                v-for="(element, index) in tools" :key="index"
                >
                        <li
                        class="tool"
                        v-for="(el) in element.name"
                        >
                                {{ el }}
                        </li>
                </ul>
        </div>

</template>


<script>
export default {
        data() {
                return {
                        tools: [
                                {
                                        store: "preprocessors",
                                        name: [ "Sass" ],
                                },
                                {
                                        store: "frameworks",
                                        name: [ "Vue.js 3", "React", "Symfony", "Laravel", "Express.js" ],
                                },
                                {
                                        store: "builders",
                                        name: [ "Vite" ],
                                },
                                {
                                        store: "libraries",
                                        name: [ "Rellax.js", "Swiper.js", "Axios", "jQuery" ],
                                },
                                {
                                        store: "cmss",
                                        name: [ "WordPress Custom-Development", "WordPress No-Code" ],
                                },
                                {
                                        store: "sgbds",
                                        name: [ "SGBDR", "SGBDOD" ],
                                },
                                {
                                        store: "bdds",
                                        name: [ "MySQL", "PDO", "MongoDB", "Mongoose" ],
                                },
                                {
                                        store: "managers",
                                        name: [ "NPM", "Composer" ],
                                },
                                {
                                        store: "versionnings",
                                        name: [ "Git", "GitHub" ],
                                },
                                {
                                        store: "others",
                                        name: [ "API", "POO", "Pair-programming" ],
                                },
                        ]
                }
        },
}
</script>