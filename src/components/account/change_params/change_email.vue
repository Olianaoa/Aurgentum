<script setup>
import { reactive } from 'vue'
import useUsers from '../../composables/useUsers';

const active_user_id = useUsers().active_id.value
const active_user = useUsers().find_user(active_user_id)

const local = reactive({
    email: '',
    error: '',
})

function change_email() {
    let test_inp_data = true
    if (/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(local.email)) {
        local.error = ''
    } else {
        local.error = 'Ошибка! Введите почту'
        test_inp_data = false
    }
    if (test_inp_data) {
        const find_user_email = useUsers().find_user_email(local.email)
        if (find_user_email === undefined) {
            useUsers().change_email(active_user_id, local.email)
            local.email=''
        }else {
            local.error='Эта почта уже используется другим пользователем. Введите другую'
        }
    }
}
</script>

<template>
    <div class="params">
        <legend>Введите почту</legend>
            <input type="email" placeholder="Почта" v-model="local.email">
            <div class="error">{{ local.error }}</div>
    </div>
    <button class="gold_button" @click="change_email()"> Изменить</button>
</template>

<style scoped>
.params {
    width: 80%;
    text-align: left;
    margin-bottom: 10px;
}
</style>