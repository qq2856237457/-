import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
                    meta: { title: '工资查询' }
                },
                {
                    path: '/vacation',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/Vacation.vue'),
                    meta: { title: '请假查询' }
                },
                {
                    path: '/vacationlist',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/VacationList.vue'),
                    meta: { title: '员工请假记录' }
                },
                {
                    path: '/managestep',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/ManageStep.vue'),
                    meta: { title: '绩效审批' }
                },
                {
                    path: '/vacationstep',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/VacationStep.vue'),
                    meta: { title: '请假审批' }
                },
                {
                    path: '/moneylist',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/Money.vue'),
                    meta: { title: '薪资设置' }
                },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: '通知公告' }
                },
                {
                    path: '/form',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                    meta: { title: '请假审批' }
                },
                {
                    path: '/work',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/WorkForm.vue'),
                    meta: { title: '考勤管理' }
                },
                {
                    path: '/manage',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/ManageList.vue'),
                    meta: { title: '绩效管理' }
                },
                {
                    path: '/manageperson',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/ManagePerson.vue'),
                    meta: { title: '个人绩效记录' }
                },
                {
                    path: '/postmanage',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/Post.vue'),
                    meta: { title: '岗位管理' }
                },
                {
                    path: '/managesubmit',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/ManageSubmit.vue'),
                    meta: { title: '提交绩效申请' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                    meta: { title: '备忘录编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                    meta: { title: '公告编辑' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: { title: '工作情况' }
                },
                {
                    // 待办事项组件
                    path: '/drag',
                    component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
                    meta: { title: '待办事项' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '管理员界面', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
