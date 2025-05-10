<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import useUsers from '../composables/useUsers';

const router = useRouter()
const active_id = useUsers().active_id.value

const local = reactive({
    inp_name: '',
    password: '',
    inp_email: '',
    phone_num: '',
    password_again: '',

    error_name: '',
    error_email: '',
    error_phone: '',
    error_password: '',
    pass_dont_match: '',
    error_acc: '',
})

if (active_id != '') {
    router.push('/Aurgentum/account')
}

function create_acc() {
    let test_inp_data = true
    if (/[А-ЯA-Zа-яa-z0-9]/.test(local.inp_name)) {
        local.error_name = ''
    } else {
        local.error_name = 'Ошибка! Имя может состоять только из букв и цифр'
        test_inp_data = false
    }

    if (/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(local.inp_email)) {
        local.error_email = ''
    } else {
        local.error_email = 'Ошибка! Введите почту'
        test_inp_data = false
    }

    if (/^\+7\d{10}$/.test(local.phone_num)) {
        local.error_phone = ''
    } else {
        local.error_phone = 'Ошибка! Номер телефона обязательно начинается с +7 !'
        test_inp_data = false
    }

    if (/^(?=.*\d)(?=.*[а-яa-z])(?=.*[А-ЯA-Z])(?=.*\W).{8,}$/.test(local.password)) { //регулярное выражение для пробела
        local.error_password = ''
    } else {
        local.error_password = 'Ошибка! Придумайте пароль. '
        test_inp_data = false
    }
    if (local.password != local.password_again || local.password === '' || local.password_again === '') {
        local.pass_dont_match = 'Ошибка! Пароли не совпадают. '
        test_inp_data = false
    } else {
        local.pass_dont_match = ''
    }

    //если все поля заполнены верно
    if (test_inp_data) {
        // поиск пользователя с введенным номером телефона и почтой
        const find_user_phone = useUsers().find_user_phone(local.phone_num)
        const find_user_email = useUsers().find_user_email(local.inp_email)
        if (find_user_phone === undefined) { // если телефон не зарегистрирован
            if (find_user_email === undefined) { // если почта не зарегистрирована
                //добавление пользователя в массив
                useUsers().add_user(local.inp_name, local.phone_num, local.inp_email, local.password)
                router.push('/Aurgentum/account')
                local.inp_name = '';
                local.password = '';
                local.password_again = '';
                local.inp_email = '';
                local.phone_num = '';
            } else { 
                local.error_acc = 'Пользователь с такой почтой уже зарегистрирован.'
            }
        } else {
            local.error_acc = 'Пользователь с таким номером телефона уже зарегистрирован.'
        }
    }
}
</script>

<template>
    <div class="log_in">
        <h2>Регистрация пользователя</h2>
        <div class="login">
            <legend>Введите имя</legend>
            <div class="smaller gray">Имя может содержать только буквы и цифры
            </div>
            <input type="text" placeholder="Имя" v-model="local.inp_name">
            <div class="error">{{ local.error_name }}</div>

            <legend>Введите почту</legend>
            <input type="email" placeholder="Почта" v-model="local.inp_email">
            <div class="error">{{ local.error_email }}</div>

            <legend>Введите номер телефона</legend>
            <div class="smaller gray">Номер телефона обязательно начинается с +7 !
            </div>
            <input type="text" placeholder="+79006005040" maxlength="12" v-model="local.phone_num">
            <div class="error">{{ local.error_phone }}</div>

            <legend>Введите пароль</legend>
            <div class="smaller gray">Должен содержать не менее 8 символов, большую и маленькую буквы, цифру,
                специальный символ
            </div>

            <input type="password" placeholder="Пароль" v-model="local.password">
            <div class="error">{{ local.error_password }}</div>

            <legend>Повторите пароль</legend>
            <input type="password" placeholder="Повторите пароль" v-model="local.password_again">
            <div class="error">{{ local.pass_dont_match }}</div>

            <div class="error">
                {{ local.error_acc }}
            </div>
        </div>
        <button class="gold_button" @click="create_acc">Зарегистрироваться</button>
        <p>
            Уже есть аккаунт? <RouterLink :to="{ name: 'log_in' }" class="uppercase bold underline">Войти</RouterLink>
        </p>
    </div>
</template>

