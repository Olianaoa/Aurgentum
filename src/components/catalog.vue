<script setup>
import { reactive } from 'vue';
import useItems from './composables/useItems';
import useUsers from './composables/useUsers';
import modal from '../blocks/modal.vue';

const items = useItems().items.value
const active_id = useUsers().active_id.value

// корзина
function add_to_basket(item, user_id) {
    // модальное окно: если нет активного пользователя
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
    // модальное окно: если нет активного пользователя
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

const local = reactive({
    filter_type: '',

    modalShow: false,
    modalType: '',
    modalText: '',
})

</script>

<template>
    <h2 class="uppercase">каталог</h2>
    <div class="filter">
        <div class="type">
            <p :class="{ 'uppercase': local.filter_type === '' }" class="underline" @click="local.filter_type = ''">Все
                украшения</p>
            <p :class="{ 'uppercase': local.filter_type === 'ring' }" class="underline"
                @click="local.filter_type = 'ring'">Кольца</p>
            <p :class="{ 'uppercase': local.filter_type === 'earring' }" class="underline"
                @click="local.filter_type = 'earring'">Серьги</p>
            <p :class="{ 'uppercase': local.filter_type === 'neckless' }" class="underline"
                @click="local.filter_type = 'neckless'">Колье</p>
            <p :class="{ 'uppercase': local.filter_type === 'bracelet' }" class="underline"
                @click="local.filter_type = 'bracelet'">Браслеты</p>
        </div>
    </div>

    <div class="catalog">
        <template v-for="(elem, index) in items">
            <template v-if="!local.filter_type || elem.type == local.filter_type">
                <div class="item">
                    <div class="text_all">
                        <img class="icon" v-if="!elem.favorite" src="/src/img/icons/unliked.svg"
                            @click="add_to_fav(elem, active_id)">
                        <img class="icon" v-else src="/src/img/icons/liked.svg"
                            @click="remove_from_fav(elem.id, active_id)">
                        <RouterLink :to="{
                            name: 'item',
                            params: {
                                id: elem.id
                            }
                        }">
                            <img class="item_pic" :src="elem.image" alt="">
                            <div class="text">
                                <p class="name"> {{ elem.name }}</p>
                                <p>{{ elem.price }} Р</p>
                            </div>
                        </RouterLink>
                    </div>
                    <div class="add_to_basket">
                        <button v-if="!elem.in_basket" @click="add_to_basket(elem, active_id)">В корзину</button>
                        <button v-else class="dark_button" @click="remove_from_basket(elem.id, active_id)">В
                            корзине</button>
                    </div>
                </div>
            </template>
        </template>
    </div>
    <div>
        <modal v-if="local.modalShow" modalType="okay" :modalText="local.modalText"
            @modalYes="local.modalShow = false" />
    </div>
</template>

<style scoped>
.uppercase {
    font-weight: bolder;
}

.item_pic {
    width: 300px;
}

.add_to_basket {
    margin: 10px 0 0 0;
}

.filter {
    margin: 0 auto;
    padding: 10px 20px;
    display: flex;
    width: 90%;
    height: 40px;
    background-color: var(--black);
    color: var(--white);
    font-size: 16px;
    justify-content: space-between;
}

.type {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.type p {
    cursor: pointer;
}

.name {
    font-size: larger;
    text-transform: uppercase;
}

.catalog {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 10px;
}

.item {
    margin: 20px auto;
    padding: 20px;
    border: 2px solid transparent;
    transition: border 0.2s;
}

.item:hover {
    border: 2px solid var(--black);
    transition: 0.2s ease-in-out;
}

.text_all {
    position: relative;
    display: inline-block;
    text-align: left;
}

.icon {
    position: absolute;
    top: 20px;
    right: 20px;
}

.text {
    position: absolute;
    left: 20px;
    bottom: 20px;
    font-size: 16px;
    color: var(--white);
}

.filter p {
    font-size: 16px;
}

@media(max-width: 992px) {
    .catalog {
        grid-template-columns: 1fr 1fr;
    }

    .filter {
        font-size: 14px;
        flex-wrap: wrap;
        height: auto;
        row-gap: 10px;
    }

    .type {
        flex-wrap: wrap;
        gap: 0.5rem;
    }
}

@media(max-width: 768px) {
    .catalog {
        grid-template-columns: 1fr;
    }

    .item {
        width: auto;
    }

    .filter {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
    }
}

@media(max-width: 500px) {
    .text {
        font-size: 14px;
    }

    .filter {
        font-size: 13px;
    }
}
</style>