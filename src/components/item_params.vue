<script setup>
import modal from '../blocks/modal.vue';
import { reactive } from 'vue'

import { useRoute } from 'vue-router';

import useItems from './composables/useItems';
import useUsers from './composables/useUsers';

const route = useRoute()

const active_id = useUsers().active_id.value
const item_params = useItems().find_item(Number(route.params.id))

const local = reactive({
    modalShow: false,
    modalType: '',
    modalText: '',
})

// корзина
function add_to_basket(item, user_id) {
    if (active_id === '' || active_id === undefined) {
        local.modalType = 'okay'
        local.modalShow = true
        local.modalText = 'Для добавления товара в КОРЗИНУ необходимо авторизоваться.'
    } else {
        useItems().add_to_basket(item, user_id)
    }
}
function remove_from_basket(item, user_id) {
    useItems().remove_from_basket(item, user_id)
}

// избранное 
function add_to_fav(item, user_id) {
    if (active_id === '' || active_id === undefined) {
        local.modalType = 'okay'
        local.modalShow = true
        local.modalText = 'Для добавления товара в ИЗБРАННОЕ необходимо авторизоваться.'
    } else {
        useItems().add_to_fav(item, user_id)
    }
}
function remove_from_fav(id, user_id) {
    useItems().remove_from_fav(id, user_id)
}
</script>

<template>
    <div class="all_params">
        <h2 class="uppercase"> {{ item_params.name }}</h2>
        <div class="box">
            <div class="img_price">
                <img :src="item_params.image" alt="Изображение товара">
                <p class="uppercase">{{ item_params.price }} p</p>
                <div class="favorite">
                    <div class="like" v-if="!item_params.favorite">
                        <img class="icon" src="/src/img/icons/unliked.svg" @click="add_to_fav(item_params, active_id)">
                    </div>
                    <div class="like" v-else>
                        <img class="icon" src="/src/img/icons/liked.svg"
                            @click="remove_from_fav(item_params.id, active_id)">
                        <p>В избранном</p>
                    </div>
                </div>
            </div>
            <div class="text">
                <p class="uppercase">Описание</p>
                <p>{{ item_params.description }}</p>
                <p>{{ item_params.description2 }}</p>

                <p class="uppercase">Характеристики</p>
                <ul>
                    <li>Металл: {{ item_params.material }}</li>
                    <li>{{ item_params.weight }}</li>
                    <li>{{ item_params.stone }}</li>
                    <li>{{ item_params.shape }}</li>
                    <li>{{ item_params.stone_weight }}</li>
                    <li>{{ item_params.size }}</li>
                </ul>

                <p class="uppercase">Дополнительно</p>
                <ul>
                    <li>Поставляется в фирменной упаковке</li>
                    <li>Сертификат качества и подлинности прилагается</li>
                    <li>Возможность персональной гравировки</li>
                </ul>
            </div>
        </div>
        <div class="buttons">
            <div class="basket">
                <button class="gold_button" v-if="!item_params.in_basket"
                    @click="add_to_basket(item_params, active_id)">В корзину</button>
                <button v-else class="dark_button" @click="remove_from_basket(item_params.id, active_id)">В
                    корзине</button>
            </div>
        </div>
    </div>
    <div>
        <modal v-if="local.modalShow" modalType="okay" :modalText="local.modalText"
            @modalYes="local.modalShow = false" />
    </div>
</template>

<style scoped>
.all_params {
    margin: 0 auto;
    place-items: center;
}

.like {
    display: flex;
}

.buttons {
    display: flex;
    justify-content: space-around;
}

.favorite {
    place-items: center;
}

.icon {
    position: absolute;
    top: 20px;
    right: 20px;
}

p {
    padding: 10px 0;
}

ul {
    padding: 0 30px;
    margin: 0 0 20px 0;
}

li {
    padding: 3px;
}

.uppercase {
    font-size: larger;
    text-transform: uppercase;
}

.img_price {
    position: relative;
    text-align: center;
}

.text {
    margin: 10px 50px;
}

.box {
    margin: 10px auto;
    width: 90%;
    text-align: left;
    display: flex;
}
</style>
