import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes =[
    {
        path:'*',
        component:()=> import('../views/ErrorPages/Error404.vue')
    },
   
{
    path:'/',
    component:{
        render(c){
            return c('router-view');
        }
    },

    children:[
        {
            path: '/formulario',
            name:'formulario',
            component: () => import('../components/Formulario.vue')
        }   ,
        {
            path:'/inicio',
            name:'inicio',
            component:()=>import('../components/Inicio.vue')
        },
        {
            path:'/info',
            name:'info',
            component:()=>import('../components/Info.vue')
        },
        {
            path:'/somerandom',
            name:'somerandom',
            component:()=>import('../components/somerandom.vue')
        }
    ]
}


]

const router = new VueRouter({routes,})

export default router;