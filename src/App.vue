<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useRoute } from 'vue-router';
import { ref } from 'vue'
import footer_vue from './blocks/site_footer.vue'

const route = useRoute()

const menu = ref(false)
function toggleMenu() {
    if (menu.value === true) {
        menu.value = false
    } else {
        menu.value = true
    }
}
function close_menu() {
    menu.value = false
}
</script>

<template>

    <header :class="{ 'dark_header': route.path === '/Aurgentum/' || route.path === '/Aurgentum/about' },
        { 'light_header': !(route.path === '/Aurgentum/' || route.path === '/Aurgentum/about') }">

        <RouterLink @click="close_menu" class="navigation_left underline" :to="{ name: 'Aurgentum' }">
            <img src="/src/img/icons/лого_svg.svg" alt="">
            <h1>Aurgentum</h1>
        </RouterLink>

        <div class="menu_rigth">

            <div class="burger" @click="toggleMenu">
                <span class="burger-line"></span>
                <span class="burger-line"></span>
                <span class="burger-line"></span>
            </div>
            <div class="navigation_right" :class="{ 'menu_burger': menu }">
                <RouterLink @click="close_menu" class="underline" :to="{ name: 'catalog' }"> Каталог</RouterLink>
                <RouterLink @click="close_menu" class="underline" :to="{ name: 'about_Aurgentum' }"> О магазине
                </RouterLink>
                <RouterLink @click="close_menu" class="underline" :to="{ name: 'questions' }"> Вопросы</RouterLink>
                <RouterLink @click="close_menu" class="underline" :to="{ name: 'basket' }">
                    <img v-if="route.path === '/Aurgentum/' || route.path === '/Aurgentum/about'"
                        src="/src/img/icons/Корзина_light.svg" alt="">
                    <img v-else src="/src/img/icons/Корзина_dark.svg" alt="">
                </RouterLink>
                <RouterLink @click="close_menu" class="underline" :to="{ name: 'account' }">
                    <img v-if="route.path === '/Aurgentum/' || route.path === '/Aurgentum/about'"
                        src="/src/img/icons/Профиль_light.svg" alt="">
                    <img v-else src="/src/img/icons/Профиль_dark.svg" alt="">
                </RouterLink>
            </div>
        </div>

    </header>

    <main>
        <RouterView />
    </main>

    <RouterLink :to="{ name: 'Aurgentum' }">
        <img src="/src/img/icons/лого_svg.svg" style="margin-top: 100px;">
    </RouterLink>
    <footer_vue />

</template>

<style scoped>
/* шапка */
header {
    width: 100%;
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    place-items: center;
    padding: 0;
}

.navigation_left,
.navigation_right {
    display: flex;
    align-items: center;
    text-align: left;
    gap: 1rem;
    padding: 10px;
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

main {
    min-height: 51vh;
}

.burger {
    display: none;
    width: 24px;
    cursor: pointer;
    flex-direction: column;
    margin-top: 5px;
}

.burger-line {
    width: 100%;
    height: 3px;
    margin: 2px;
    border-radius: 4px;
    border: 1px solid var(--black);
    background-color: var(--gold);
}

/* Мобильное меню */
@media(max-width: 768px) {
    .navigation_left>h1 {
        font-size: 30px;
    }

    .burger {
        display: flex;
        position: absolute;
        top: 10px;
        right: 20px;
        z-index: 1001;
    }

    .navigation_right {
        display: none;
        position: absolute;
        flex-direction: column;
        background-color: rgba(161, 161, 161, 0.9);
        backdrop-filter: blur(3px);
        top: 60px;
        right: 0;
        width: 40%;
        padding: 10px;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .navigation_right.menu_burger {
        display: flex;
    }


    .navigation_right a {
        padding: 10px 0;
        width: 100%;
    }

    header {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
