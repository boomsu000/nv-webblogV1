import Vue from 'vue'
import Router from 'vue-router'
// Users
import UserIndex from '@/components/Users/Index'
import MovieIndex from '@/components/Users/MovieIndex'
import UserCreate from '@/components/Users/CreateUser'
import CreateMovie from '@/components/Users/CreateMovie'
import UserEdit from '@/components/Users/EditUser'
import EditMovie from '@/components/Users/EditMovie'
import UserShow from '@/components/Users/ShowUser'
import ShowMovie from '@/components/Users/ShowMovie'
import Login from '@/components/Users/login'


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/users',
            name: 'users',
            component: UserIndex
        },
        {
            path: '/musers',
            name: 'musers',
            component: MovieIndex
        },
        {
            path: '/user/create',
            name: 'users-create',
            component: UserCreate
        },
        {
            path: '/muser/create',
            name: 'musers-create',
            component: CreateMovie
        },
        {
            path: '/user/edit/:userId',
            name: 'user-edit',
            component: UserEdit
        },
        {
            path: '/muser/edit/:muserId',
            name: 'muser-edit',
            component: EditMovie
        },
        {
            path: '/user/:userId',
            name: 'user',
            component: UserShow
        },
        {
            path: '/muser/:muserId',
            name: 'muser',
            component: ShowMovie
        },
        // authen
{
    path: '/login',
    name: 'login',
    component: Login
   }
    ]
})