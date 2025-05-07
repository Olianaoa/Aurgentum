<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
    <div class="first_line line">
        <RouterLink :to="{ name: 'catalog' }">
            <div class="block background"
                style="background-image: url(/Aurgentum/src/img/catalog_img/кольцо_каталог.png);">
                <p class="underline">Кольца</p>
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'catalog' }">
            <div class="block background"
                style="background-image: url(/Aurgentum/src/img/catalog_img/каталог_браслет.png);">
                <p class="underline">Браслеты</p>
            </div>
        </RouterLink>
        <p class="justify">Твоя индивидуальность заслуживает особенного сияния. Украшения AURGENTUM — это не просто
            изделия из серебра и
            золота, это искусство быть собой. Роскошно. Стильно. Без компромиссов.</p>
    </div>
    <div class="second_line line">
        <p>Твоя история начинается с блеска</p>
        <RouterLink :to="{ name: 'catalog' }">
            <div class="block background"
                style="background-image: url(/Aurgentum/src/img/catalog_img/каталог_серьги.png);">
                <p class="underline">Серьги</p>
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'catalog' }">
            <div class="block background"
                style="background-image: url(/Aurgentum/src/img/catalog_img/каталог_колье_кулон.png);">
                <p class="underline">Колье и кулоны</p>
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'catalog' }">
            <div class="block background" style="background-image: url(/Aurgentum/src/img/catalog_img/каталог_все_укр.png); color:var(--white)">
                <p class="underline">Все украшения ></p>
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>
.second_line {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;

}

.first_line {
    grid-template-columns: 1fr 1fr 2.5fr;
}

.line {
    width: 90%;
    margin: 50px auto;
    display: grid;
    place-items: center;
}


.block {
    padding: 20px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

</style>
