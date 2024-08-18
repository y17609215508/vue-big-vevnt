import LoginVue from '@/views/Login.vue'
import LayoutVue from '@/views/Layout.vue'
import ArticleManageVue from '../views/article/ArticleManage.vue'
import ArticleCategoryVue from '../views/article/ArticleCategory.vue'
import UserAvatarVue from '@/views/user/UserAvatar.vue'
import UserInfoVue from '@/views/user/UserInfo.vue'
import UserResetPasswordVue from '@/views/user/UserResetPassword.vue'

import { createRouter, createWebHistory } from 'vue-router'

// 定义路由关系
const routes = [
    { path: '/login', component: LoginVue },
    // redirect定义默认跳转路径，children定义子路由
    { path: '/', component: LayoutVue ,redirect:'/article/manage',children:[
        {path:'/article/category',component:ArticleCategoryVue},
        {path:'/article/manage',component:ArticleManageVue},
        {path:'/user/avatar',component:UserAvatarVue},
        {path:'/user/info',component:UserInfoVue},
        {path:'/user/resetPassword',component:UserResetPasswordVue}
    ]}
]

// 创建路由器
const router = createRouter({
    history: createWebHistory(), //路由模式
    routes: routes// 传递路由关系
})

// 导出路由
export default router

