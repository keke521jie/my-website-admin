import { createRouter, createWebHashHistory } from 'vue-router'
import Index from "@/view/Index.vue"
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Index
        },
        {
            path: '/article',
            name: 'article',
            component: ()=>import('@/view/Article.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: ()=>import('@/view/Blog.vue')
        },
        {
            path: '/addblog',
            name: 'addblog',
            component: ()=>import('@/view/AddBlog.vue')
        },
        {
            path: '/music',
            name: 'music',
            component: ()=>import('@/view/Music.vue')
        },
        {
            path: '/content',
            name: 'content',
            component: ()=>import('@/view/Content.vue')
        }
    ]
})

export default router
