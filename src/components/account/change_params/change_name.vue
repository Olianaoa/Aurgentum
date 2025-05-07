<script setup>
import { reactive } from 'vue'
import useUsers from '../../composables/useUsers';

const active_user_id = useUsers().active_id.value

const local = reactive({
    newName: '',
    er_mes_name: '',
})

function change_name() {
    let test_inp_data = true
    if (/[А-ЯA-Zа-яa-z0-9]/.test(local.newName)) {
        local.er_mes_name = ''
    } else {
        test_inp_data = false
        local.er_mes_name = 'Ошибка! Имя может состоять только из букв и цифр'
    }
    if (test_inp_data) {
        useUsers().change_name(active_user_id, local.newName)
        local.newName = ''
    }
}
</script>

<template>
    <div class="params">
        <legend>Введите новое имя</legend>
        <input type="text" placeholder="Введите новое имя" v-model="local.newName"><br>
        <div class="error">{{ local.er_mes_name }}</div>
        <div class="error">{{ local.error_acc_name }}</div>
    </div>
    <button class="gold_button" @click="change_name()">Изменить</button>
</template>

<style scoped>
.params {
    width: 80%;
    text-align: left;
    margin-bottom: 10px;
}
</style>