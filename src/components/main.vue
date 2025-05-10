<script setup>
import { RouterLink } from 'vue-router';

import contacts_block from '../blocks/contacts_block.vue';
import catalog_for_main from '../blocks/catalog_for_main.vue';
import new_items from '../blocks/new_items.vue';
import about_for_main from '../blocks/about_for_main.vue';
</script>

<template>
    <div class="main_container">

        <div class="container-images container">
            <div class="image_model background">
                <div class="text_about">
                    <p class="bold">Aurgentum</p>
                    <p>Магазин ювелирных украшений</p>
                </div>

            </div>
            <div class="image background">
                <div class="text_other">
                    <RouterLink :to="{ name: 'catalog' }">
                        <p class="bold underline">Изделия</p>
                    </RouterLink>
                    <p>Изделия из золота и серебра </p>
                </div>
            </div>
        </div>
        <!-- каталог -->
        <div class="catalog_main container">
            <h2>КАТАЛОГ</h2>

            <catalog_for_main />
        </div>
        <!-- новинки -->
        <div class="container">
            <h2>НОВИНКИ</h2>
            <new_items />
        </div>

        <!-- о магазине -->
        <div class="about_main container">
            <h2>О МАГАЗИНЕ</h2>
            <about_for_main />
        </div>
        <!-- вопросы -->
        <div class="questions_main container">
            <h2 class="uppercase">Популярные вопросы</h2>
            <details>
                <summary>Можно ли получить консультацию перед покупкой?</summary>
                <p>Конечно! Наши специалисты готовы помочь вам с выбором украшения и проконсультировать по любым
                    вопросам.
                    Свяжитесь с нами через социальные сети или по почте aurgentum@gmail.com.</p>
            </details>
            <details>
                <summary>Из каких материалов изготавливаются украшения?</summary>
                <p>Мы используем только благородные металлы: золото 585 пробы и серебро 925 пробы. Вставки выполнены из
                    натуральных или лабораторно выращенных драгоценных и полудрагоценных камней.</p>
            </details>
            <details>
                <summary>Есть ли гарантия на украшения?</summary>
                <p>Да, каждое изделие Aurgentum сопровождается гарантией сроком 6 месяцев. Мы уверены в качестве наших
                    украшений и обеспечиваем послепродажное обслуживание. По закону обмен и возврат ювелирных изделий с
                    браком осуществляется в случае обнаружения недостатка в пределах разумного срока, но не более чем
                    через
                    2 года (п. 2 ст. 19 ФЗ №2300-1) </p>
            </details>
            <details>
                <summary>Как осуществляется доставка?</summary>
                <p>Мы доставляем заказы по всей России и в страны СНГ. Срок доставки составляет от 7 до 14 рабочих дней
                    в
                    зависимости от региона. Все посылки надёжно упакованы и застрахованы.</p>
            </details>
            <details>
                <summary>Здесь нет ответа на мой вопрос. Что мне делать?</summary>
                <p>Мы готовы помочь лично! Свяжитесь с нами через социальные сети или по почте aurgentum@gmail.com .</p>
            </details>
            <p class="h3">Больше ответов на странице
                <RouterLink :to="{ name: 'questions' }" class="link"> "Вопросы" </RouterLink>
            </p>
        </div>
        <!-- контакты -->
        <div class="contacts_main">
            <h2>КОНТАКТЫ</h2>
            <p>Свяжитесь с нами любым удобным для Вас способом!</p>
            <contacts_block />
        </div>
    </div>

</template>

<style scoped>
h2 {
    margin: 20px;
}

.container-images {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
}

.container {
    width: 100%;
    min-height: 100vh;
}

.image_model {
    width: 60%;
    background-image: url(https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/img/%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C.jpg);
}

.image {
    width: 40%;
    background-image: url(https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/img/jelwery.jpg);
}

.text_about {
    position: absolute;
    bottom: 60px;
    left: 60px;
    text-align: left;
}

.text_other {
    position: absolute;
    bottom: 60px;
    right: 60px;
    text-align: right;
}

.container-images {
    color: var(--white);
}

.bold {
    font-weight: bolder;
    font-size: 3rem;
}


.questions_main {
    width: 90%;
    margin: 2rem auto;
}

.questions_main .h3 {
    padding: 80px;
}



.link {
    text-decoration: underline 1px var(--black);
}

.contacts_main {
    width: 80%;
    margin: 0 auto;
}

@media(max-width: 768px) {
    .image_model {
        width: 100%;
    }

    .text_about {
        bottom: 30px;
        left: 30px;
    }

    .image {
        display: none;
    }
}
</style>