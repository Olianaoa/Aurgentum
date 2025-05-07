import { ref, watch } from "vue"
import useItems from "./useItems"
//МАССИВ ПОЛЬЗОВАТЕЛИ
const users = ref([])
try {
    if (localStorage.getItem('users') === null) {
        users.value = [
            {
                id: 0,
                name: 'Админ',
                phone: '+79006308313',
                email: 'olianaoa@mail.ru',
                password: 'Oliana123!',
                role: 'Админ'
            },
        ]
    } else {
        users.value = JSON.parse(localStorage.getItem('users'))
    }
} catch (error) { //обязательно в скобках что-то, иначе ругается
    users.value = [
        {
            id: 0,
            name: 'Админ',
            phone: '+79006308313',
            email: 'olianaoa@mail.ru',
            password: 'Oliana123!',
            role: 'Админ'
        },
    ]
}

watch(users, (newValue) => {
    localStorage.setItem('users', JSON.stringify(newValue))
},
    { deep: true })

// поиск пользователя по id 
function find_user(index) {
    return users.value.find((user) => user.id === index) // весь пользователь
}
//поиск пользователя по телефону
function find_user_phone(phone) {
    return users.value.find((user) => user.phone === phone) // весь пользователь
}

//поиск пользователя по почте
function find_user_email(email) {
    return users.value.find((user) => user.email === email) // весь пользователь
}

//регистрация  пользователя (добавление в массив)
function add_user(name, phone, email, password) {
    if (users.value.length === 0) {
        users.value.push(
            {
                id: 0,
                name: 'Админ',
                phone: '+79006308313',
                email: 'olianaoa@mail.ru',
                password: 'Oliana123!',
                role: 'Админ'
            },
        )
    } else {
        users.value.push({
            id: users.value[users.value.length - 1].id + 1,
            name: name,
            phone: phone,
            email: email,
            password: password,
            role: 'Пользователь'
        })
        log_in_user_acc(users.value[users.value.length - 1].id) // введенный пользователь становится активным
    }
    console.log(users.value);
}

// АКТИВНЫЙ АЙ ДИ
const active_id = ref('')
console.log(active_id.value);

if (localStorage.getItem('active_id') === null) {
    active_id.value = ""
}
else {
    active_id.value = Number(localStorage.getItem('active_id'))
}

watch(active_id, (newValue) => {
    localStorage.setItem('active_id', newValue)
});


// массивы из useItems
const items = useItems().items.value
const favorites_array = useItems().favorites_array.value
const basket_array = useItems().basket_array.value

// Зайти в аккаунт
function log_in_user_acc(user_id) {
    active_id.value = user_id
    console.log(favorites_array);

    favorites_array.forEach(element => {
        if (element.user_id === user_id) {
            element.item.favorite = true
            const item_in_items = useItems().find_item(element.item.id)
            item_in_items.favorite = true
        }
    });

    basket_array.forEach(element => {
        if (element.user_id === user_id) {
            element.item.in_basket = true
            const item_in_items = useItems().find_item(element.item.id)
            item_in_items.in_basket = true
        }
    });
}

//выйти
function log_out() {
    active_id.value = ""
    // обновляем массив до состояния по умолчанию
    items.forEach(item => {
        item.favorite = false;
        item.in_basket = false
    });
    console.log(active_id.value);
}
//удалить профиль
function delete_user(index) {
    //удаление пользователя
    const user_to_del = find_user(index) // весь пользователь
    const del_user_index = users.value.indexOf(user_to_del)
    users.value.splice(del_user_index, 1)
    //выходим из аккаунта
    log_out()
}

//
function change_name(index, name) {
    const user = find_user(index) // весь пользователь
    const change_user_name = users.value.indexOf(user) //id пользователя
    users.value[change_user_name].name = name;
}

function change_password(index, password) {
    const user = find_user(index) // весь пользователь
    const change_user_password = users.value.indexOf(user) //id пользователя
    users.value[change_user_password].password = password;
}

function change_phone(index, phone) {
    const user = find_user(index) // весь пользователь
    const change_user_phone = users.value.indexOf(user) //id пользователя
    users.value[change_user_phone].phone = phone;
}

function change_email(index, email) {
    const user = find_user(index) // весь пользователь
    const change_user_email = users.value.indexOf(user) //id пользователя
    users.value[change_user_email].email = email;
}

//название функции по названию файла
export default function useUsers() {
    return {
        //массивы + id активный  
        users, active_id,
        // поиск
        find_user, find_user_phone, find_user_email,
        // регистрация, вход, выход, удалить
        add_user, log_in_user_acc, log_out, delete_user,
        //изменить имя, пароль, телефон, почту
        change_name, change_password, change_phone, change_email
    }
}