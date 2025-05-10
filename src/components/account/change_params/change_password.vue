<script setup>
import { reactive } from 'vue'

import useUsers from '../../composables/useUsers';

const local = reactive({
    old_password: '',
    new_password: '',
    password_again: '',

    error_old_password: '',
    error_password: '',
    pass_dont_match: '',

    changed: '',
})


const active_user_id = useUsers().active_id.value
const active_user = useUsers().find_user(active_user_id)
const user_password = active_user.password

function change_password() {
    if (local.old_password === user_password) {
        local.error_old_password = ''
        let test_inp_data = true
        if (/^(?=.*\d)(?=.*[а-яa-z])(?=.*[А-ЯA-Z])(?=.*\W).{8,}$/.test(local.new_password)) { //регулярное выражение для пробела
            local.error_password = ''
        } else {
            local.error_password = 'Ошибка! Пароль должен содержать от 4-х до 10-ти символов'
            test_inp_data = false
        }
        if (local.new_password != local.password_again) {
            local.pass_dont_match = 'Ошибка! Пароли не совпадают.'
            test_inp_data = false
        } else {
            local.pass_dont_match = ''
        }

        if (test_inp_data) {
            useUsers().change_password(active_user_id, local.new_password)
            local.changed = "Пароль изменен"
            local.old_password = ''
            local.new_password = ''
            local.password_again = ''
        }
    } else {
        local.error_old_password = 'Неправильный текущий пароль'
    }
}
</script>

<template>
    <div class="params">
        <legend>Введите старый пароль</legend>
        <input type="password" placeholder="Старый пароль" v-model="local.old_password">
        <div class="error">{{ local.error_old_password }}</div>
        <legend>Введите новый пароль</legend>
        <div class="smaller gray">Должен содержать не менее 8 символов, большую и маленькую буквы, цифру, специальный символ
        </div>
        <input type="password" placeholder="Пароль" v-model="local.new_password">
        <div class="error">{{ local.error_password }}</div>
        <legend>Повторите новый пароль</legend>
        <input type="password" placeholder="Пароль" v-model="local.password_again">
        <div class="error">{{ local.pass_dont_match }}</div>
    </div>
    <div>{{ local.changed }}</div>
    <button class="gold_button" @click="change_password()"> Изменить</button>
</template>
<style scoped>
.params {
    width: 80%;
    text-align: left;
    margin-bottom: 10px;
}
</style>