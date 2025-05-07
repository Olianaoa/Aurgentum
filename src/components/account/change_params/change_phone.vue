<script setup>
import { reactive } from 'vue'

import useUsers from '../../composables/useUsers';
const local = reactive({
    phone_num: '',
    error_phone: '',
})
const active_user_id = useUsers().active_id.value
const active_user = useUsers().find_user(active_user_id)

function change_phone() {
    let test_inp_data = true
    if (/^\+7\d{10}$/.test(local.phone_num)) {
        local.error_phone = ''
    } else {
        local.error_phone = 'Ошибка! Неправильно введен номер телефона'
        test_inp_data = false
    }
    if (test_inp_data) {
        const find_user_phone = useUsers().find_user_phone(local.phone_num)
        if (find_user_phone === undefined) {
            useUsers().change_phone(active_user_id, local.phone_num)
            local.phone_num=''
        }else {
            local.error_phone='Этот номер телефона уже зарегистрирован'
        }
    }
}
</script>

<template>
    <div class="params">
        <legend>Введите номер телефона</legend>
        <div class="smaller gray">Номер телефона обязательно начинается с +7 !
        </div>
        <input type="text" placeholder="+79006005040" maxlength="12" v-model="local.phone_num">
        <div class="error">{{ local.error_phone }}</div>
    </div>
    <button class="gold_button" @click="change_phone()"> Изменить</button>


</template>
<style scoped>
.params {
    width: 80%;
    text-align: left;
    margin-bottom: 10px;
}
</style>