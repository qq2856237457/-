export default {
  commonItems: [
    {
        icon: 'el-icon-lx-home',
        index: 'dashboard',
        title: '系统首页'
    },
    {
        icon: 'el-icon-lx-redpacket',
        index: 'table',
        title: '工资查询'
    },
    {
        icon: 'el-icon-lx-calendar',
        index: '3',
        title: '请假',
        subs: [
            {
                index: 'form',
                title: '提交请假申请'
            },
            {
                index: 'vacation',
                title: '个人请假记录'
            },
        ]
    },
    {
        icon: 'el-icon-pie-chart',
        index: 'charts',
        title: '工作情况'
    },
    {
        icon: 'el-icon-lx-tag',
        index: 'editor',
        title: '备忘录'
    },
    {
        icon: 'el-icon-lx-file',
        index: 'upload',
        title: '文件上传'
    },
    {
        icon: 'el-icon-sort',
        index: 'drag',
         title: '待办事项'
    },
    {
        icon: 'el-icon-lx-message',
        index: 'tabs',
        title: '通知公告'
    },
    // {
    //     icon: 'el-icon-lx-emoji',
    //     index: 'icon',
    //     title: '自定义图标'
    // },
  ],
  adminItems: [
    {
        icon: 'el-icon-lx-home',
        index: 'dashboard',
        title: '系统首页'
    },
    {
        icon: 'el-icon-lx-warn',
        index: '7',
        title: '管理员界面',
        subs: [
            {
                index: 'permission',
                title: '员工管理'
            },
            {
                index: 'markdown',
                title: '公告编辑'
            },
            {
                index: '404',
                title: '404页面'
            }
        ]
    },
    // {
    //     icon: 'el-icon-lx-emoji',
    //     index: 'icon',
    //     title: '自定义图标'
    // },
  ],
  leaderItems: [
    {
        icon: 'el-icon-lx-home',
        index: 'dashboard',
        title: '系统首页'
    },
    {
        icon: 'el-icon-lx-redpacket',
        index: 'table',
        title: '工资查询'
    },
    {
        icon: 'el-icon-lx-calendar',
        index: '3',
        title: '员工管理',
        subs: [
            {
                index: '3-1',
                title: '绩效管理',
                subs: [
                    {
                        index: 'manage',
                        title: '查看员工绩效',
                    },
                    {
                        index: 'managecontal',
                        title: '绩效审批',
                    }
                ]
            },
            {
                index: '3-2',
                title: '考勤管理',
                subs: [
                    {
                        index: 'work',
                        title: '出勤情况'
                    }
                ]
            },
            {
                index: '3-3',
                title: '请假管理',
                subs: [
                    {
                        index: 'qingjiashenpi',
                        title: '请假审批'
                    },
                    {
                        index: 'qingjiashenpi',
                        title: '请假记录'
                    }
                ]
            },
        ]
    },
    {
        icon: 'el-icon-lx-calendar',
        index: '4',
        title: '请假',
        subs: [
            {
                index: 'form',
                title: '提交请假申请'
            },
            {
                index: 'vacation',
                title: '个人请假记录'
            },
        ]
    },
    {
        icon: 'el-icon-pie-chart',
        index: 'charts',
        title: '工作情况'
    },
    {
        icon: 'el-icon-lx-tag',
        index: 'editor',
        title: '备忘录'
    },
    {
        icon: 'el-icon-lx-file',
        index: 'upload',
        title: '文件上传'
    },
    {
        icon: 'el-icon-sort',
        index: 'drag',
         title: '待办事项'
    },
    {
        icon: 'el-icon-lx-message',
        index: 'tabs',
        title: '通知公告'
    },
  ]
}