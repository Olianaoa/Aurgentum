// import modal from './components/modal.vue'
import main_page from './components/main.vue'
import catalog from './components/catalog.vue'
import questions from './components/questions.vue'
import basket from './components/basket.vue'
import about from './components/about.vue'
import item_params from './components/item_params.vue'

import account from './components/account/account.vue'
import log_in from './components/account/log_in.vue'
import registration from './components/account/registration.vue'

import change_params from './components/account/change_params/change_params.vue'
import change_name from './components/account/change_params/change_name.vue'
import change_password from './components/account/change_params/change_password.vue'
import change_phone from './components/account/change_params/change_phone.vue'
import change_email from './components/account/change_params/change_email.vue'

import terms_of_sale from './components/terms_of_sale.vue'
import table_size from './components/table_size.vue'
import confidentiality from './components/confidentiality.vue'

import Error404 from './components/Error404.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/Aurgentum/', component: main_page, name: 'Aurgentum' },
    { path: '/Aurgentum/catalog', component: catalog, name: 'catalog', },
    { path: '/Aurgentum/item/:id', component: item_params, name: 'item', },

    { path: '/Aurgentum/about', component: about, name: 'about_Aurgentum' },
    { path: '/Aurgentum/questions', component: questions, name: 'questions' },
    { path: '/Aurgentum/basket', component: basket, name: 'basket' },
    {
        path: '/Aurgentum/account', component: account, name: 'account',
        children:
            [
                {
                    path: 'change_account_information', component: change_params, name: 'change_params',
                    children:
                        [
                            { path: 'change_name', component: change_name, name: 'change_name' },
                            { path: 'change_password', component: change_password, name: 'change_password' },
                            { path: 'change_phone', component: change_phone, name: 'change_phone' },
                            { path: 'change_email', component: change_email, name: 'change_email' },
                        ]
                },
            ]
    },
    { path: '/Aurgentum/log_in', component: log_in, name: 'log_in' },
    { path: '/Aurgentum/registration', component: registration, name: 'registration' },
    { path: '/Aurgentum/terms_of_sale', component: terms_of_sale, name: 'terms_of_sale' },
    { path: '/Aurgentum/table_size', component: table_size, name: 'table_size' },
    { path: '/Aurgentum/confidentiality', component: confidentiality, name: 'confidentiality' },

    
    { path: '/:pathMatch(.*)*', component: Error404, name: 'Error404' },
]

export const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        window.scrollTo(0, 0);
    },
    routes
})
