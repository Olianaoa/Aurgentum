<script setup>
import { RouterLink, RouterView } from 'vue-router';
import footer_vue from './blocks/site_footer.vue'

import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
</script>

<template>

    <header :class="{ 'dark_header': route.path === '/Aurgentum/' || route.path === '/Aurgentum/about' },
        { 'light_header': !(route.path === '/Aurgentum/' || route.path === '/Aurgentum/about') }">

        <RouterLink class="navigation_left underline" :to="{ name: 'Aurgentum' }">
            <img src="/src/img/icons/лого_svg.svg" alt="">
            <h1>Aurgentum</h1>
        </RouterLink>

        <div class="navigation_right">
            <RouterLink class="underline" :to="{ name: 'catalog' }"> Каталог</RouterLink>
            <RouterLink class="underline" :to="{ name: 'about_Aurgentum' }"> О магазине </RouterLink>
            <RouterLink class="underline" :to="{ name: 'questions' }"> Вопросы</RouterLink>
            <RouterLink class="underline" :to="{ name: 'basket' }">
                <img v-if="route.path === '/Aurgentum/' || route.path === '/Aurgentum/about'" src="/src/img/icons/Корзина_light.svg" alt="">
                <img v-else src="/src/img/icons/Корзина_dark.svg" alt="">
            </RouterLink>
            <RouterLink class="underline" :to="{ name: 'account' }">
                <img v-if="route.path === '/Aurgentum/' || route.path === '/Aurgentum/about'" src="/src/img/icons/Профиль_light.svg" alt="">
                <img v-else src="/src/img/icons/Профиль_dark.svg" alt="">
            </RouterLink>
        </div>
    </header>

    <main>
        <RouterView />
    </main>

    <RouterLink :to="{ name: 'Aurgentum' }" >
        <img src="/src/img/icons/лого_svg.svg" style="margin-top: 100px;">
    </RouterLink>
    <footer_vue />

</template>

<style scoped>
/* шапка */
header {
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navigation_left,
.navigation_right {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    text-align: left;
    gap: 1rem;
}

img {
    cursor: pointer;
}

.light_header {
    position: static;
    color: var(--black);
}

.dark_header {
    position: absolute;
    color: var(--white);
}

main{
    min-height: 51vh;
}
</style>
