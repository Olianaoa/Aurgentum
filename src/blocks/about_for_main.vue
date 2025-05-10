<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="about_shop_info">
        <div class="logo_bg background">
            <img src="/src/img/icons/лого_svg.svg" alt="">
        </div>
        <div class="text_about_shop">
            <p>Aurgentum — пространство, где изысканность, безупречное качество и благородство металлов
                воплощаются
                в
                украшениях, созданных для тех, кто ценит стиль, эстетику и совершенство деталей.</p>

            <p>Мы создаём украшения, которые не просто дополняют образ, а становятся его сердцем — отражением
                характера,
                вкуса и индивидуальности.</p>

            <p> Мы не следуем трендам — мы их задаём. Украшения Aurgentum — для тех, кто выбирает нечто большее,
                чем
                просто
                аксессуар. Это — прикосновение к роскоши, которую можно носить каждый день.</p>
            <p>
                <RouterLink class="link" :to="{ name: 'about_Aurgentum' }"> Узнать больше об Aurgentum
                </RouterLink>
            </p>
        </div>
    </div>
</template>

<style scoped>
/* о магазине */

.about_shop_info {
    display: grid;
    grid-template-columns: 1fr 1.7fr;
    width: 80%;
    margin: 20px auto;
    place-items: center;
}

.logo_bg {
    height: 500px;
    width: 500px;
    display: flex;
    position: relative;
    background-image: url(/src/img/pic_about/wavee.jpg);
}

.logo_bg img {
    margin: auto;
    width: 200px;
}

.text_about_shop {
    margin: 0 auto;
    padding: 0 30px 0 100px;
    text-align: justify;
}

.text_about_shop p {
    padding: 20px 0;
}

@media(max-width: 992px) {
    .logo_bg {
        height: 300px;
        width: 300px;
    }
    .logo_bg img {
    width: 150px;
}
.about_shop_info {
    display: grid;
    grid-template-columns: 1fr;
    width: 90%;
    margin: 0px auto;
}
.text_about_shop {
    margin: 20px auto;
    padding: 0 ;
    text-align: justify;
}

.text_about_shop p {
    padding: 10px 0;
}
}


</style>