<script setup>
import { reactive } from 'vue';
import { RouterView, useRouter, useRoute } from 'vue-router';
import useUsers from '../composables/useUsers';
import useItems from '../composables/useItems';
import modal from '../../blocks/modal.vue';

const route = useRoute()
const router = useRouter()

const favorites_array = useItems().favorites_array.value

const active_id = useUsers().active_id.value
const active_user = useUsers().find_user(active_id)

function delete_account() {
    useUsers().delete_user(active_id);
    useItems().delete_user_items(active_id);
    log_out();
}

function log_out() {
    useUsers().log_out()
    router.push('/Aurgentum/log_in')
}

// избранное 
function add_to_fav(item, user_id) {
    useItems().add_to_fav(item, user_id)
}
function remove_from_fav(item, user_id) {
    useItems().remove_from_fav(item, user_id)
}

const local = reactive({
    modalShow: false,
    modalType: '',
    modalText: '',
})
</script>

<template>
    <div class="all_params">
        <h2>Личный кабинет</h2>
        <div v-if="active_id === ''" class="no_user">
            <p>Нет авторизованного аккаунта</p>
            <p>Вы можете
                <RouterLink :to="{ name: 'registration' }" class="uppercase bold underline">Создать аккаунт</RouterLink>
                /
                <RouterLink :to="{ name: 'log_in' }" class="uppercase bold underline">Войти</RouterLink>
            </p>
        </div>
        <div v-else>
            <div :class="{ 'flex': (!(route.path === '/Aurgentum/account')) }">
                <div class="params_user" style="height: 250px;">
                    <h3>Данные пользователя</h3>
                    <div>
                        <div class="line">
                            <p>Имя: </p>
                            <p>{{ active_user?.name }}</p>
                        </div>
                        <div class="line">
                            <p>Почта: </p>
                            <p>{{ active_user.email }}</p>
                        </div>
                        <div class="line">
                            <p>Телефон: </p>
                            <p>{{ active_user?.phone }}</p>
                        </div>
                    </div>

                    <div class="change_params">
                        <template v-if="active_id != 0">
                            <RouterLink :to="{ name: 'change_params' }" class="uppercase underline">Изменить профиль
                            </RouterLink>
                            <p class="underline gray" @click="local.modalShow=true">Удалить профиль</p>
                        </template>
                    </div>
                </div>
                <!-- это блок с изменением данных пользователя -->
                <div class="params_user" v-if="(!(route.path === '/Aurgentum/account'))">
                    <RouterView />
                </div>
            </div>

            <button class="gold_button" @click="log_out()"> Выйти </button>

            <div class="favorites">
                <h3>Избранные товары</h3>
                <div class="no_fav" v-if="!favorites_array.some(elem => elem.user_id === active_id)">
                    <p>Нет избранных товаров</p>
                    <div class="img"><img src="/src/img/icons/broken_heart.svg" alt=""></div>
                    <RouterLink class="link" :to="{ name: 'catalog' }">
                        Переходите в Каталог, чтобы найти своих фаворитов
                    </RouterLink>
                </div>
                <div class="all_params1" v-else>
                    <template v-for="elem in favorites_array">
                        <template v-if="elem.user_id === active_id">
                            <div class="item">
                                <div class="text_all">
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
                                        <img class="item_pic" :src="'/Aurgentum'+elem.item.image" alt="">
                                        <div class="text">
                                            <p class="name"> {{ elem.item.name }}</p>
                                            <p>{{ elem.item.price }} Р</p>
                                        </div>
                                    </RouterLink>
                                </div>
                            </div>
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </div>
    <div>
        <modal v-if="local.modalShow"
        modalType="answer" 
        :modalText="'Вы точно хотите удалить профиль?'" 
        @modalYes="delete_account()"
        @modalNo="local.modalShow = false" />
    </div>
</template>

<style scoped>
.flex {
    display: flex;
    justify-content: space-around;
}

.line {
    display: flex;
    justify-content: space-between;
    text-align: left;
    border-bottom: solid 1px var(--black);
    margin: 15px 0;
}

.no_fav {
    margin: 50px 0;
}

.img {
    margin: 20px;
}

.all_params {
    margin: 0 auto;
}

.params_user {
    margin: 20px auto;
    background-color: var(--white);
    border: var(--black) solid 1px;
    border-radius: 10px;
    width: 450px;
    height: auto;
    padding: 20px;
}

button {
    margin: 30px 0 0 0;
}

.no_user {
    margin: 8% 0;
}

.all_params1 {
    width: 80%;
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.change_params p {
    padding: 10px 0 0 0;
}

.favorites {
    margin: 70px auto;
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

.item_pic {
    width: 250px;
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
</style>