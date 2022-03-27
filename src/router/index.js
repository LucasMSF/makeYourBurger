//Importando as dependências
import { createRouter, createWebHistory } from 'vue-router'

//Importando as Views (Componentes)
import HomeView from '../views/HomeView.vue'
import OrdersView from '../views/OrdersView.vue'


//Setando as rotas
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView
  },
]

//Criando o objeto router
const router = createRouter({
  //Setando o modo de histórico
  history: createWebHistory(process.env.BASE_URL),
  //Inserindo as rotas setadas
  routes
})

export default router
