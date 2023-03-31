import VueRouter from 'vue-router'


import Class from '@/views/home/class.vue'
import Specialty from '@/views/home/specialty.vue'
import Info from '@/views/home/Info.vue'

// //信息系 Information
// import Information from '@/views/home/teacher/Information.vue'
// //机电系 mechatronic
// import Mechatronic from '@/views/home/teacher/mechatronic.vue'
// //创业系 venture
// import Venture from '@/views/home/teacher/venture.vue'
// //服务系 service
// import Service from '@/views/home/teacher/service.vue'
// //制造系 fabrication
// import Fabrication from '@/views/home/teacher/fabrication.vue'
// //交通系 traffic
// import Traffic from '@/views/home/teacher/traffic.vue'
// //经贸系 finance
// import Finance from '@/views/home/teacher/finance.vue'

export default new VueRouter({
    linkExactActiveClass:'exact-active',
    routes:[
        {
            path:'/',
            name:'login',
            component:()=>import('@/views/login/index.vue'),
            meta:{title:'校园管理 - 登录'}
        },
        {
            path:'/WangJi',
            name:'WangJi',
            component:()=>import('@/views/login/WangJi.vue'),
            meta:{title:'忘记密码的蠢蛋'}
        },
        {
            path:'/layout',
            component:()=>import('@/views/layout/index.vue'),
            breadcrumb:true,
            children:[
                {
                    path:'/Info',
                    component:()=>import('@/views/home/Info.vue'),
                    meta:{title:'校园管理 - 首页',breadcrumb:true},
                    
                },{
                    path:'/class',
                    name:'班级管理',
                    component:Class,
                    meta:{title:'校园管理 - 班级管理',breadcrumb:true},
                },{
                    path:'/specialty',
                    name:'专业课管理',
                    component:Specialty,
                    meta:{title:'校园管理 - 专业管理',breadcrumb:true},
                },{
                    path:'/Info',
                    name:'个人信息',
                    component:Info,
                    meta:{title:'校园管理 - 个人信息',breadcrumb:true},
                },
            ]
       },{
        path:'/teacher',
        breadcrumb:true,
        component:()=>import('@/views/layout/index.vue'),
        children:[
            {
                path:'Information',
                name:'信息系',
                component:()=>import('@/views/home/teacher/Information.vue'),
                meta:{title:'校园管理 - 信息系',breadcrumb:true},
            },{
                path:'mechatronic',
                name:'机电系',
                component:()=>import('@/views/home/teacher/mechatronic.vue'),
                meta:{title:'校园管理 - 机电系',breadcrumb:true},
            },{
                path:'venture',
                name:'创业系',
                component:()=>import('@/views/home/teacher/venture.vue'),
                meta:{title:'校园管理 - 创业系',breadcrumb:true},
            },{
                path:'service',
                name:'服务系',
                component:()=>import('@/views/home/teacher/service.vue'),
                meta:{title:'校园管理 - 服务系',breadcrumb:true},
            },{
                path:'fabrication',
                name:'制造系',
                component:()=>import('@/views/home/teacher/fabrication.vue'),
                meta:{title:'校园管理 - 制造系',breadcrumb:true},
            },{
                path:'traffic',
                name:'交通系',
                component:()=>import('@/views/home/teacher/traffic.vue'),
                meta:{title:'校园管理 - 交通系',breadcrumb:true},
            },{
                path:'finance',
                name:'经贸系',
                component:()=>import('@/views/home/teacher/finance.vue'),
                meta:{title:'校园管理 - 经贸系',breadcrumb:true},
            }
        ]
       }

    ]
})



