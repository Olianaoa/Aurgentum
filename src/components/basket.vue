<script setup>
import { computed, reactive } from 'vue';
import { RouterLink } from 'vue-router';

import useItems from './composables/useItems';
import useUsers from './composables/useUsers';

import modal from '../blocks/modal.vue';

const basket_array = useItems().basket_array.value
const active_id = useUsers().active_id.value

const local = reactive({
    modalShow: false,
    modalType: '',
    modalText: '',
})
//удалить товар
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
// итоговая цена
const total_price = computed(() => {
    let sum = 0
    basket_array.forEach(element => {
        // поиск товаров в корзине по активному id
        // если id есть в массиве -> sum + цена товара
        if (element.user_id === active_id) {
            sum += Number(element.item.price)
        }
    });
    return sum
});
//модальное окно: переход к оплате
function move_to_payment_page() {
    local.modalType = 'payment'
    local.modalShow = true
    local.modalText = 'Супер! Вы сделали заказ, мы свяжемся с вами для оплаты товаров по почте. '
}
</script>

<template>
    <h2 class="uppercase">корзина</h2>
    <div v-if="active_id === '' || active_id === undefined" class="no_user">
        <p>Нет авторизованного аккаунта</p>
        <p>Вы можете
            <RouterLink :to="{ name: 'registration' }" class="uppercase bold underline">Создать аккаунт</RouterLink>
            /
            <RouterLink :to="{ name: 'log_in' }" class="uppercase bold underline">Войти</RouterLink>
        </p>
    </div>
    <template v-else>
        <div class="all_params" v-if="!basket_array.some(elem => elem.user_id === active_id)">
            <p>В корзине нет ни одно товара</p>
            <div class="basket_imgs">
                <img src="/src/img/icons/Корзина_dark.svg" width="200px">
            </div>
            <RouterLink class="link" :to="{ name: 'catalog' }">
                Переходите в Каталог, чтобы наполнить корзину
            </RouterLink>
        </div>

        <div class="all_params" v-else>
            <div class="all_items">
                <template v-for="elem in basket_array">
                    <div class='item' v-if="elem.user_id === active_id">
                        <div class="item_pic">
                            <img class="icon" v-if="!elem.item.favorite" src="/src/img/icons/unliked.svg"
                                @click="add_to_fav(elem.item, active_id)">
                            <img class="icon" v-else src="/src/img/icons/liked.svg"
                                @click="remove_from_fav(elem.item.id, active_id)">
                            <RouterLink :to="{
                                name: 'item',
                                params: {
                                    id: elem.item.id
                                }
                            }">
                                <div class="image">
                                    <img :src="elem.item.image" alt="Изображение товара">
                                </div>
                            </RouterLink>
                            <p class="gray" @click="remove_from_basket(elem.item.id, active_id)">Удалить товар</p>
                        </div>
                        <RouterLink :to="{
                            name: 'item',
                            params: {
                                id: elem.item.id
                            }
                        }">
                            <p>{{ elem.item.name }}</p>
                        </RouterLink>
                        <p>{{ elem.item.price }} Рублей</p>
                    </div>
                </template>
            </div>
            <p>
                Итог: <span>{{ total_price }}</span> Рублей
            </p>
            <button class="uppercase gold_button" @click="move_to_payment_page">Перейти к оплате</button>
        </div>
    </template>
    <div>
        <modal v-if="local.modalShow" modalType="payment" :modalText="local.modalText"
            @modalYes="local.modalShow = false" />
    </div>
</template>

<style scoped>
.no_user {
    margin: 8% 0;
    padding: 10px;
}

.item p {
    padding: 50px;
}

button {
    margin: 50px;
}

span {
    text-align: right;
}

.all_params {
    width: 80%;
    margin: auto;
}

.all_items {
    border-bottom: 2px var(--black) solid;
}

.item {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    place-items: center;
}

.item_pic {
    position: relative;
}

.icon {
    position: absolute;
    width: 30px;
    top: 14px;
    right: 10px;
}

.item_pic p {
    padding: 0;
    margin: 0;
    cursor: pointer;
}

.image {
    width: 200px;
}

.image img {
    width: 100%;
}

@media(max-width: 768px) {
    p {
        font-size: 14px;
    }

    .image {
        width: 150px;
    }

    .icon {
        width: 24px;
    }
}

@media(max-width: 500px) {
    .image {
        width: 100px;
    }

    .icon {
        width: 18px;
    }
}
</style>