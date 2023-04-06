<template>
        <div class="left">
                <h2 class="rellax" data-rellax-speed="1">{{ title }}</h2>
                <div v-for="(element, index) in hardskillsList" :key="index">
                        <p>{{element.name }}</p>
                </div>
        </div>
</template>


<script>

export default {
        data() {
                return {
                        title: "Hardskills",
                        // hardskillsList: ["HTML", "CSS", "JavaScript vanilla", "PHP", "SQL", "NoSQL", "Node.js", "Express.js", "Sass", "Bootsrap", "jQuery", "Vue.js 3", "WordPress No-Code", "WordPress Development", "Git", "GitHub", "POO", "API", "MongoDB & Mongoose", "MySQL & Adminer / PhpMyAdmin", "Composer", "NPM", "Reset.css", "Embedded JS", "Axios"],
                        hardskillsList: [
                                {
                                        id: "",
                                        name: "HTML",
                                },

                                {
                                        id: "",
                                        name: "CSS",
                                },

                                {
                                        id: "",
                                        name: "JavaScript Vanilla",
                                },

                                {
                                        id: "",
                                        name: "PHP",
                                },

                                {
                                        id: "",
                                        name: "SQL",
                                },

                                {
                                        id: "",
                                        name: "MySQL & Adminer / phpMyAdmin",
                                },

                                {
                                        id: "",
                                        name: "NoSQL",
                                },

                                {
                                        id: "",
                                        name: "MongoDB & Mongoose",
                                },

                                {
                                        id: "",
                                        name: "Node.js",
                                },

                                {
                                        id: "",
                                        name: "Express.js",
                                },

                                {
                                        id: "",
                                        name: "EJS",
                                },

                                {
                                        id: "",
                                        name: "Axios",
                                },

                                {
                                        id: "",
                                        name: "API",
                                },

                                {
                                        id: "",
                                        name: "Sass",
                                },

                                {
                                        id: "",
                                        name: "Reset.css",
                                },

                                {
                                        id: "",
                                        name: "Bootstrap",
                                },

                                {
                                        id: "",
                                        name: "jQuery",
                                },

                                {
                                        id: "",
                                        name: "Vue.js 3",
                                },

                                {
                                        id: "",
                                        name: "WordPress No-Code",
                                },

                                {
                                        id: "",
                                        name: "WordPress Code",
                                },

                                {
                                        id: "",
                                        name: "POO",
                                },

                                {
                                        id: "",
                                        name: "Git & GitHub",
                                },

                                {
                                        id: "",
                                        name: "NPM",
                                },

                                {
                                        id: "",
                                        name: "Composer",
                                },
                        ]
                }
        },
}

</script>