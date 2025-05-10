<template>
    <h3>Изменить параметры профиля</h3>
    <div class="nav">
        <p>
            <RouterLink :to="{ name: 'change_name' }" class="underline">Поменять имя</RouterLink>
            <RouterLink :to="{ name: 'change_password' }" class="underline">Поменять пароль</RouterLink>
        </p>
        <p>
            <RouterLink :to="{ name: 'change_phone' }" class="underline">Поменять номер</RouterLink>
            <RouterLink :to="{ name: 'change_email' }" class="underline">Поменять почту</RouterLink>
        </p>
    </div>
    <div class="box">
        <RouterView />
    </div>
    <p>
        <RouterLink :to="{ name: 'account' }" class="gray underline">Убрать панель изменений</RouterLink>
    </p>
</template>
<style scoped>
.nav p {
    display: flex;
    justify-content: space-between;
}

.box {
    padding: 10px 0;

}
</style>