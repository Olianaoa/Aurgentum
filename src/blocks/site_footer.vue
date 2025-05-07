<script setup>
</script>

<template>
    <footer class="gray">
        <div class="flex">
            <div class="navigation left">
                <p>
                    <RouterLink class="underline" :to="{ name: 'catalog' }">Каталог</RouterLink>
                </p>
                <p>
                    <RouterLink class="underline" :to="{ name: 'about_Aurgentum' }">О магазине</RouterLink>
                </p>
                <p>
                    <RouterLink class="underline" :to="{ name: 'questions' }">Вопросы</RouterLink>
                </p>
                <p>
                    <RouterLink class="underline" :to="{ name: 'account' }">Личный кабинет</RouterLink>
                </p>
            </div>
            <div class="navigation left">
                <p>
                    <RouterLink class="underline" :to="{ name: 'table_size' }">Таблица размеров</RouterLink>
                </p>
                <p>
                    <RouterLink class="underline" :to="{ name: 'terms_of_sale' }">Условия продажи</RouterLink>
                </p>
                <p>
                    <RouterLink class="underline" :to="{ name: 'confidentiality' }">Конфиденциальность</RouterLink>
                </p>
                <div class="gap">
                    <a href="https://t.me/telegram"><img src="/src/img/icons/tg_logo.svg"></a>
                    <a href="instagram.com"><img src="/src/img/icons/insta_logo.svg" alt=""></a>
                    <a href="vk.com"><img src="/src/img/icons/vk_logo.svg" alt=""></a>
                </div>
            </div>
        </div>

        <div class="navigation right">
            <p>+7 900 600 70 80</p>
            <p>пн-пт: с 10:00 до 22:00 ч.</p>
            <p>сб-вс: с 11:00 до 19:00 ч.</p>
            <p>© 2025 Aurgentum</p>
        </div>
    </footer>

</template>

<style scoped>
/* подвал */
footer {
    width: 100%;
    min-width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}

.flex {
    display: flex;
}

.navigation {
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
}

.right {
    text-align: right;
}

.left {
    text-align: left;
}
.gap{
margin: 5px 0;
}
.gap a {
    padding: 0 5px;
}

p {
    padding: 5px 0;
}
</style>