<script setup>
</script>
<template>
    <h2>404</h2>
    <p>Страница не найдена</p>
    
    <div class="text">
        <p>Возможно, страница была удалена или никогда не существовала</p>

        <p>Вы можете
            <RouterLink class="underline bold" :to="{ name: 'Aurgentum' }">
                перейти на главную страницу магазина Aurgentum
            </RouterLink>
        </p>
    </div>
</template>
<style scoped>
h2{
    padding: 0;
    margin: 0;
    font-size: 200px;
}
.text{
    margin: 70px 0 0 0;
}
</style>