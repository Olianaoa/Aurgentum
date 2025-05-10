<script setup>
import contacts_block from '../blocks/contacts_block.vue';
</script>

<template>
    <div class="logo_name background">
        <div class="logo">
            <img src="/src/img/icons/лого_svg.svg" width="250px">
            <h2>Aurgentum</h2>
            <p color="white">Твоя история начинается с блеска</p>
        </div>
    </div>
    <div>
        <h2>О магазине</h2>
        <div class="block one">
            <div class="text justify">
                <p>Aurgentum — пространство, где изысканность, безупречное качество и благородство металлов воплощаются
                    в
                    украшениях, созданных для тех, кто ценит стиль, эстетику и совершенство деталей.</p>

                <p>Мы создаём украшения, которые не просто дополняют образ, а становятся его сердцем — отражением
                    характера,
                    вкуса и индивидуальности.</p>

                <p> Мы не следуем трендам — мы их задаём. Украшения Aurgentum — для тех, кто выбирает нечто большее, чем
                    просто
                    аксессуар. Это — прикосновение к роскоши, которую можно носить каждый день.</p>
            </div>
            <div class="img">
                <img src="/src/img/pic_about/кольцо.jpg">
            </div>
        </div>
        <h2>Наша история</h2>
        <div class="block two">
            <div class="img">
                <img src="/src/img/pic_about/silver.jpg">
            </div>
            <div class="text justify">
                <p>В сердце Aurgentum — сияние благородных металлов, золота и серебра. Они словно два начала: золото —
                    тепло
                    солнца, воплощение роскоши, силы и вечной ценности. Серебро — лунный свет, утонченное, загадочное,
                    полное глубины и внутреннего спокойствия.</p>

                <p>Наши украшения рождаются на грани искусства и мастерства. Это не просто драгоценности — это истории,
                    застывшие в металле, образы, способные говорить без слов. Мы верим, что каждое изделие несёт в себе
                    энергию стиля, характер и настроение своего владельца.</p>

                <p>Aurgentum — это бренд, где важна каждая деталь, каждое сияние граней и каждый вдохновенный штрих. Мы
                    создаём украшения, которые не просто дополняют образ, а становятся его душой.</p>
            </div>

        </div>
        <h2>Философия бренда</h2>
        <div class="block three">
            <ul>
                <li>
                    Безупречное качество: каждое изделие проходит строгий контроль, чтобы соответствовать самым высоким
                    стандартам.
                </li>
                <li>
                    Эстетика в деталях: мы уделяем внимание каждой грани, каждой линии и каждому сочетанию оттенков.
                </li>
                <li>
                    Современный стиль: Aurgentum сочетает сдержанный минимализм с выразительной формой — для тех, кто
                    ценит баланс между классикой и трендом.
                </li>
                <li>
                    Прозрачность и доверие: мы открыты перед нашими клиентами и всегда готовы рассказать о происхождении
                    материалов и условиях производства.
                </li>
            </ul>
            <div class="img">
                <img src="/src/img/pic_about/создание.jpg">
            </div>
        </div>
    </div>
    <h2>Контактные данные</h2>
    <div class="contacts">
        <contacts_block />
    </div>

</template>

<style scoped>
.logo_name {
    background-image: url(/src/img/pic_about/wavee.jpg);
    width: 100%;
    height: 100vh;
    display: flex;
    place-items: center;
}

.logo {
    width: 250px;
    margin: 0 auto;
    text-align: center;
}

.logo>h2 {
    color: var(--white);
    font-size: 2.5rem;
    font-family: 'Montaga';
    margin: 0 auto;
}

.logo>p {
    color: var(--white);
}

.block {
    width: 90%;
    margin: auto;
}

.text {
    margin: auto;
    width: 80%;
    place-items: center;
    padding: 1rem;
}

.three,
.one {
    display: grid;
    grid-template-columns: 3fr 1fr;
}

.two {
    display: grid;
    grid-template-columns: 1fr 3fr;
}

.img {
    width: 100%;
}

.img img {
    width: 100%;
    object-fit: cover;
}

ul {
    padding: 1rem;
    text-align: left;
}

li {
    padding: 0 10px;
    margin: 0;
}

@media(max-width: 992px) {
    .block {
        width: 95%;
    }

    ul {
        padding: 0;
        text-align: left;
    }

    .text {
        padding: 0;
    }

    ul {
        padding: 0 2rem;
    }
}

@media(max-width: 550px) {
    .img {
        display: none;
    }

    .three,
    .one {
        display: grid;
        grid-template-columns: 1fr;
    }

    .two {
        display: grid;
        grid-template-columns: 1fr;
    }
}
</style>