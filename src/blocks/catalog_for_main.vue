<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
    <div class="first_line line">
        <RouterLink :to="{ name: 'catalog' }">
            <div class="block background"
                style="background-image: url(https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%BE_%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3.png);">
                <p class="underline">Кольца</p>
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'catalog' }">
            <div class="block background"
                style="background-image: url(https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3_%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82.png);">
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
                style="background-image: url(https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3_%D1%81%D0%B5%D1%80%D1%8C%D0%B3%D0%B8.png);">
                <p class="underline">Серьги</p>
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'catalog' }">
            <div class="block background"
                style="background-image: url(https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3_%D0%BA%D0%BE%D0%BB%D1%8C%D0%B5_%D0%BA%D1%83%D0%BB%D0%BE%D0%BD.png);">
                <p class="underline">Колье и кулоны</p>
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'catalog' }">
            <div class="block background" style="background-image: url(https://raw.githubusercontent.com/Olianaoa/Aurgentum/refs/heads/main/src/assets/catalog_img/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3_%D0%B2%D1%81%D0%B5_%D1%83%D0%BA%D1%80.png); 
            color:var(--white)">
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

/* Мобильное меню */
@media(max-width: 768px) {
    .second_line,
    .first_line {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-top: 0;
    }
    .second_line>p,
    .first_line>p{
        display: none;
    }
}
@media(max-width: 550px) {
    .second_line,
    .first_line {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 0;
    }
    .second_line>p,
    .first_line>p{
        display: none;
    }

}
</style>
