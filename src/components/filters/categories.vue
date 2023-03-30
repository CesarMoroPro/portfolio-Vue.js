<template>
        <div class="projects-categories">

                <div 
                class="category"
                v-for="(element, index) in categories" :key="index"
                :class="[ element.isSelected ? 'categorySelected' : 'categoryNotSelected', element.isHovered ? 'categoryHovered' : 'categoryNotHovered' ]"
                @click="categoryIsSelected(element)" @mouseover="mouseIn(element)" @mouseout="mouseOut(element)"
                >
                        {{ element.name }} <span class="mini-number"> &nbsp;({{ element.total }})</span>
                </div>

        </div>
</template>


<script>

export default {
        data() {
                return {
                        categories: [
                                {
                                        name: "Front-end", 
                                        isSelected: true,
                                        isHovered: false,
                                        total: 0,
                                },
                                {
                                        name: "Back-end", 
                                        isSelected: true,
                                        isHovered: false,
                                        total: 0,
                                },
                                {
                                        name: "FullStack", 
                                        isSelected: true,
                                        isHovered: false,
                                        total: 0,
                                }
                               
                        ],
                }
        },

        methods: {
                categoryIsSelected(el) {
                        if(el.isSelected) {
                                el.isSelected = false;
                        } else {
                                el.isSelected = true;
                        }
                },

                mouseIn(el) {
                        el.isHovered = true;
                },

                mouseOut(el) {
                        el.isHovered = false;
                }
        }
}
</script>