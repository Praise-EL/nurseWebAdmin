import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./layouts/MainLayout.vue'),
            children: [
                {
                    path: '',
                    component: () => import('./views/Login.vue'),
                }
            ]
        },
        {
            path: '/dashboard',
            component: () => import('./layouts/DashboardLayout.vue'),
            children: [
                {
                    path: '',
                    component: () => import('./views/DashboardHome.vue')
                },
                {
                    path: '/sections',
                    component: () => import('./views/Sections.vue')
                },
                {
                    path: '/sections/:sectionName',
                    component: () => import('./views/Viewsection.vue'),
                },
                {
                    path: '/users',
                    component: () => import('./views/Users.vue'),
                },
                {
                    path: '/sections/sectionname/topicname',
                    component: () => import('./views/ReadTopic.vue')
                },
                {
                    path: '/sections/sectioname/addsection',
                    component: () => import('./views/AddSection.vue')
                },
                {
                    path: '/sections/sectioname/addsvideo',
                    component: () => import('./views/AddVideo.vue')
                },
                {
                    path: '/sections/sectioname/addaudio',
                    component: () => import('./views/AddAudio.vue')
                },
                {
                    path: '/quiz',
                    component: () => import('./views/Quiz.vue')
                },
            ]
        }
    ]
})