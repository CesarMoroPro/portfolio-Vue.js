<template>
        <div class="id-and-copyright">
                César Moro <br>
                <span class="important">Développeur JavaScript - Vue.js - Node.js</span><br>
                https://cesar-moro.fr - Copyright <span id="copy-year">Année injectée en JS Vanilla</span>
        </div>

        <div class="post-footer">
                <IconsComponent></IconsComponent>
        </div>
</template>

<script>
//^ IMPORT DE SFC
import IconsComponent from "../social/social-icons.vue";

export default {
        components: {
                IconsComponent,
        }
}

</script>