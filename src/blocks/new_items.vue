<script setup>
import useItems from '../components/composables/useItems';
import { RouterLink, RouterView } from 'vue-router';
import useUsers from '../components/composables/useUsers';
import { reactive } from 'vue'
import modal from './modal.vue';

const items = useItems().items.value
const active_id = useUsers().active_id.value

</script>

<template>
    <div class="line">
        <template v-for="elem in items">
            <template v-if="elem.new_item === true">
                <div class="item">
                    <div class="text_all">
                        <img class="icon" src="/src/img/icons/new.svg">
                        <RouterLink :to="{
                            name: 'item',
                            params: {
                                id: elem.id
                            }
                        }">
                            <img class="item_pic" :src="elem.image" alt="">
                            <div class="text uppercase">
                                <p class="name"> {{ elem.name }}</p>
                                <p>{{ elem.price }} Р</p>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </template>
        </template>
    </div>

</template>
<style scoped>
.text_all {
    position: relative;
    display: inline-block;
    text-align: left;
}

.icon {
    position: absolute;
    top: 20px;
    right: 20px;
    color: var(--white);
}

.text {
    position: absolute;
    left: 20px;
    bottom: 20px;
    font-size: 20px;
    color: var(--white);
}

.line {
    width: 90%;
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
}
.item{
    padding: 5px;
}
.add_to_basket {
    margin: 20px 0;
}
@media(max-width: 1400px) {
    .line {
        grid-template-columns: 1fr 1fr;
    }

    .item{
        width: 300px;
    }
    .item_pic {
        width: 100%;
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
    .line {
        grid-template-columns: 1fr;
    }

    .item_pic {
        width: 100%;
    }
}

@media(max-width: 500px) {
    .item_pic {
        width: 100%;
    }

    .text {
        font-size: 14px;
    }

}
</style>
