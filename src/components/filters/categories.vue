<template>
        <div class="projects-categories">

                <ul>
                        <li 
                        class="category"
                        v-for="(category, index) in categories" :key="index"
                        :class="[ category.isSelected ? 'categorySelected' : 'categoryNotSelected', category.isHovered ? 'categoryHovered' : 'categoryNotHovered' ]"
                        @click="isSelectedCategory(category)"
                        @mouseover="mouseIn(category)" 
                        @mouseout="mouseOut(category)"
                        >
                                {{ category.name }}<span class="mini-number">&nbsp;({{ category.total }})</span>
                        </li>
                </ul>
                <span class="info">[Fonctionnalité des filtres en cours de développement !]</span>

        </div>
</template>


<script>

export default {
        data() {
                return {
                        selectedFiltersList: ["front-end", "back-end", "fullstack"],
                        categories: [
                                {
                                        name: "front-end", 
                                        isSelected: true,
                                        isHovered: false,
                                        total: 0,
                                },
                                {
                                        name: "back-end", 
                                        isSelected: true,
                                        isHovered: false,
                                        total: 0,
                                },
                                {
                                        name: "fullstack", 
                                        isSelected: true,
                                        isHovered: false,
                                        total: 0,
                                }
                        ],                        
                }
        },

        emits: ["filterByCategoryProcess"],

        methods: {
                isSelectedCategory(category) {
                        /* Quand la catégorie est cliquée, si isSelected vaut true ... */
                        if(category.isSelected) {
                                /* Elle doit devenir false */
                                category.isSelected = false;
                                /* Et il faut supprimer cette catégorie dans le tableau des catégories */
                                this.selectedFiltersList.splice(this.selectedFiltersList.indexOf(category.name), 1);
                                //console.log("État du tableau après suppression de " + category.name + " ==> " + this.selectedFiltersList);
                        } else {
                                /* Si le filtre est désélectionné, la data 'isSelected' vaut false, il faut donc la repasser à true */
                                category.isSelected = true;

                                /* Avant d'ajouter le category.name dans le tableau, il faut vérifier qu'il ne la contient pas déjà */
                                //console.log(this.selectedFiltersList.includes(category.name));
                                if(!this.selectedFiltersList.includes(category.name)) {
                                        /* Dans ce cas, 
                                        -> pour chaque filtre sélectionné (à valeur true),
                                        -> Je l'ajoute au tableau 'selectedFiltersList' */
                                        this.selectedFiltersList.push(category.name);
                                        //console.log(this.selectedFiltersList.includes(category.name));

                                        /*
                                        -> et pour chaque projet du tableau projectsListProp (= props qui récupère la tableau projectsList du SFC projects.vue)
                                        -> je récupère la valeur enregistrée dans sa propriété 'finition'
                                        -> si project.finition vaut une catégorie qui est sélectionnée
                                        -> alors je crée un événement que je déclenche dans le SFC projects.vue */ 
                                        this.selectedFiltersList.forEach(selectedFilter => {
                                                //console.log(selectedFilter);
                                                this.projectsListProp.forEach(project => {
                                                        if(project.finition === selectedFilter){
                                                                //console.log(selectedFilter)
                                                                /* Avec $emit, j'envoie dans le composant parent les filtres sélectionnés SI un projet avec ce filtre existe !  */
                                                                this.$emit("filterByCategoryProcess", selectedFilter);
                                                        };
                                                });
                                        });
                                }
                                //console.log("État du tableau après ajout de " + category.name + " ==> " + this.selectedFiltersList);                                
                        }
                },

                mouseIn(el) {
                        el.isHovered = true;
                },

                mouseOut(el) {
                        el.isHovered = false;
                },


        }, 

        props: {
                projectsListProp: {
                        type: Object,
                },
        }
}
</script>