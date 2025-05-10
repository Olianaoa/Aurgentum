<script setup>
import { ref, reactive } from 'vue'
import useUsers from '../composables/useUsers';
import { useRouter } from 'vue-router';

const router = useRouter()
const active_id = useUsers().active_id.value

const local = reactive({
    inp_phone: '',
    password: '',

    error_phone: '',
    error_password: '',

    error_user_not_found: '',
})

if (active_id != '') {
    router.push('/Aurgentum/account')
}

function log_in() {
    let test_inp_data = true 
    if (local.inp_phone != '') { 
        local.error_phone = ''
    } else {
        local.error_phone = 'Ошибка! Введите номер телефона'
        test_inp_data = false
    }
    if (local.password != '') {
        local.error_password = ''
    } else {
        local.error_password = 'Ошибка! Введите пароль'
        test_inp_data = false
    }
    //если все поля заполнены верно
    if (test_inp_data) {
        // поиск пользователя с введенным номером телефона
        const find_user_in_array = useUsers().find_user_phone(local.inp_phone)
        if (find_user_in_array != undefined) { //если пользователь есть
            // если есть комбинация введенный номер + введенный пароль
            if (find_user_in_array.phone === local.inp_phone && find_user_in_array.password === local.password) {
                useUsers().log_in_user_acc(find_user_in_array.id)
                router.push('/Aurgentum/account')
                local.error_user_not_found = ''
                local.inp_phone = '';
                local.password = '';
            } else { // есть номер, пароль не совпал
                local.error_user_not_found = 'Неправильный номер или пароль.'
            }
        } else { // нет номера
            local.error_user_not_found = 'Неправильный номер или пароль.'
        }
    }
}
</script>

<template>
    <div class="log_in">
        <h2>ВОЙТИ</h2>
        <div class="login">
            <legend>Введите номер телефона</legend>
            <div class="smaller gray">Номер телефона обязательно начинается с +7 !
            </div>
            <input type="text" placeholder="+79006005040" v-model="local.inp_phone">
            <div class="error">{{ local.error_phone }}</div>

            <legend>Введите пароль</legend>
            <input type="password" placeholder="Пароль" v-model="local.password">
            <div class="error">{{ local.error_password }}</div>

        </div>
        <div class="error">{{ local.error_user_not_found }}</div>
        <button class="gold_button" @click="log_in">Войти</button>
        <p>
            Еще нет аккаунта? <RouterLink :to="{ name: 'registration' }" class="uppercase bold underline">
                Зарегистрироваться</RouterLink>
        </p>
    </div>
</template>
