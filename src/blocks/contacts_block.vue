<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    ymaps.ready(() => {
        const map = new ymaps.Map("map", {
            center: [60.010522, 30.435671],
            zoom: 16,
        });

        const placemark = new ymaps.Placemark([60.010522, 30.435671], {
            balloonContent: "Магазин Aurgentum",
        });

        map.geoObjects.add(placemark);
    });
});
</script>

<template>
    <div>
        <div class="contacts">
            <div class="main_info">
                <div class='tel_mail'>
                    <div class="info">
                        <h3>Телефон</h3>
                        <p>+7 900 600 70 80</p>
                    </div>
                    <div class="info">
                        <h3>Электронная почта</h3>
                        <p>aurgentum@gmail.com</p>
                    </div>
                </div>
                <div>
                    <div class="adress_hours">
                        <div class="info">
                            <h3>Адрес</h3>
                            <p>Санкт-Петербург, улица Руставели, 33</p>
                        </div>
                        <div class="info">
                            <h3>Время работы</h3>
                            <p>пн-пт: с 10:00 до 22:00 ч.</p>
                            <p>сб-вс: с 11:00 до 19:00 ч.</p>
                        </div>
                    </div>
                </div>

                <div id="map" style="width:500px;height:300px;" alt="координаты агазина 'Aurgentum'"></div>
            </div>

        </div>
        <div class="social">
            <h3>Следите за нами в социальных сетях!</h3>
            <div class="s_links">
                <p>
                    <a href="https://t.me/telegram"><img src="/src/img/icons/tg_logo.svg"></a>
                    <a href="instagram.com"><img src="/src/img/icons/insta_logo.svg" alt=""></a>
                    <a href="vk.com"><img src="/src/img/icons/vk_logo.svg" alt=""></a>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* контакты */
.main_info {
    display: flex;
    gap: 100px;
}

.contacts {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.adress_hours,
.tel_mail {
    gap: 100px;
    text-align: left;
}

.info {
    margin: 30px 0 50px 0;
}

.s_links p {
    padding: 10px;
    text-align: center;
}

.s_links a {
    padding: 20px;
}

#map {
    padding: 20px;
}
</style>