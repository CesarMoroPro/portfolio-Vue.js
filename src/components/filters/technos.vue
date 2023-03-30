<template>
        <div class="img-and-tags__projects-technos">
                <ul class="technos-container">
                        <li
                        class="techno"
                        v-for="(element, index) in technos" :key="index"
                        >
                                {{ element.name }}
                        </li>
                </ul>
        </div>
</template>


<script>
export default {
        data() {
                return {
                        technos: [
                                {
                                        name: "HTML",
                                        isSelected: true,
                                        isHovered: false,
                                        total: 0,
                                }, 
                                {
                                        name: "CSS",
                                        isSelected: true,
                                        isHovered: false,
                                        total: 0,
                                },
                                {
                                        name: "JavaScript",
                                        isSelected: true,
                                        isHovered: false,
                                        total: 0,
                                },
                                {
                                        name: "Node.js",
                                        isSelected: true,
                                        isHovered: false,
                                        total: 0,
                                },
                                {
                                        name: "PHP",
                                        isSelected: true,
                                        isHovered: false,
                                        total: 0,
                                },
                                {
                                        name: "SQL",
                                        isSelected: true,
                                        isHovered: false,
                                        total: 0,
                                },
                                {
                                        name: "NoSQL",
                                        isSelected: true,
                                        isHovered: false,
                                        total: 0,
                                }
                        ],
                }
        },
}
</script>