<template>
        <div class="right">
                <h2 class="rellax" data-rellax-speed="1">{{ title }}</h2>
                <div v-for="(element, index) in softskillsList" :key="index">
                        <p>{{ element.name }} </p>
                </div>
        </div>
</template>


<script>
export default {
        data() {
                return {
                        title: "Softskills",
                        // softskillsList: ["Curiosité", "Esprit d'analyse", "Esprit critique", "Prise de recul", "Patience", "Esprit d'équipe", "Empathie", "Humilité", "Remise en question", "Culture de l'apprentissage", "Pair-programming"],
                        softskillsList: [
                                {
                                        id: "",
                                        name: "Culture de l'apprentissage",
                                },

                                {
                                        id: "",
                                        name: "Curiosté",
                                },

                                {
                                        id: "",
                                        name: "Esprit d'analyse",
                                },

                                {
                                        id: "",
                                        name: "Esprit critique",
                                },

                                {
                                        id: "",
                                        name: "Patience",
                                },

                                {
                                        id: "",
                                        name: "Prise de recul",
                                },

                                {
                                        id: "",
                                        name: "Esprit d'équipe",
                                },

                                {
                                        id: "",
                                        name: "Empathie",
                                },

                                {
                                        id: "",
                                        name: "Humilité",
                                },

                                {
                                        id: "",
                                        name: "Remise en question",
                                },

                                { 
                                        id: "",
                                        name: "Pair-programming",
                                }
                        ]
                }
        },
};
</script>