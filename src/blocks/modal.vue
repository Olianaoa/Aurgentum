<script setup>
import { ref, reactive } from 'vue'

const emit = defineEmits([
    'modalYes', 'modalNo'
])

const props = defineProps({
    modalType: null,
    modalText: null,
})
</script>

<template>
    <div class="container">
        <div class="modal-back"></div>
        <div class="modal-main">
            <img src="/src/img/icons/лого_svg.svg" alt="">
            <div class="header">
                <p>{{ props.modalText }}</p>
            </div>
            <div v-if="props.modalType == 'answer'">
                <button class="gold_button" @click="$emit('modalYes')">Удалить профиль</button>
                <button  @click="$emit('modalNo')">Отмена</button>
            </div>
            <div v-else>
                <button class="gold_button" @click="$emit('modalYes')">Понятно</button>
            </div>
        </div>
    </div>

</template>

<style scoped>
.container {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-back {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: var(--gray);
    opacity: 0.5;
    z-index: 1000;
}

.modal-main {
    background-color: var(--white);
    border: var(--black) solid 1px;
    border-radius: 5%;
    width: 400px;
    height: 400px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    padding: 40px;
    align-items: center;
}

.header {
    margin: 50px 0;
    width: 100%;
    height: 100%;
    place-items: center;
    color: var(--black);
}

img {
    width: 48px;
    margin: 0 0 50px 0;
}
button{
    margin: 20px;
}
</style>