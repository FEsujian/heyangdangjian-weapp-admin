import Vue from 'vue';
import Router from 'vue-router';

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router);

/* Layout */
import Layout from '../views/layout/Layout';

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/indexConfig',
    component: Layout,
    redirect: '/indexConfig/table',
    name: 'indexConfig',
    meta: {
      title: '首页配置',
      icon: 'index'
    },
    children: [{
        path: 'banner',
        name: 'Banner',
        component: () => import('@/views/banner/index'),
        meta: {
          title: '轮播图设置',
          icon: 'banner'
        }
      },
      {
        path: 'summary',
        name: 'Summary',
        component: () => import('@/views/summary/index'),
        meta: {
          title: '合阳简介',
          icon: 'jianjie'
        }
      },
      {
        path: 'survey',
        name: 'Survey',
        component: () => import('@/views/survey/index'),
        meta: {
          title: '党建概况',
          icon: 'gaikuo'
        }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: {
          title: '合阳动态',
          icon: 'dongtai'
        }
      },

      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: {
          title: '党建要闻',
          icon: 'yaowen'
        }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: {
          title: '党建活动',
          icon: 'huodong'
        }
      }
    ]
  },
  {
    path: '/studySpace',
    component: Layout,
    redirect: '/studySpace/menu1',
    name: 'studySpace',
    meta: {
      title: '学习园地',
      icon: 'xuexiyuandi'
    },
    children: [{
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: {
          title: '党章党规',
          icon: 'dangzhangdanggui'
        }
      },
      {
        path: 'menu1-3',
        component: () => import('@/views/nested/menu1/menu1-3'),
        name: 'Menu1-3',
        meta: {
          title: '公开课',
          icon: 'gongkaike'
        }
      },
      {
        path: 'menu1-3',
        component: () => import('@/views/nested/menu1/menu1-3'),
        name: 'Menu1-3',
        meta: {
          title: '在线考试',
          icon: 'zaixiankaoshi'
        }
      },
      {
        path: 'menu1-3',
        component: () => import('@/views/nested/menu1/menu1-3'),
        name: 'Menu1-3',
        meta: {
          title: '心得体会',
          icon: 'xindetihui'
        }
      }
    ]
  },
  {
    path: '/systemSetting',
    component: Layout,
    redirect: '/systemSetting/menu1',
    name: 'systemSetting',
    meta: {
      title: '系统设置',
      icon: 'xitongshezhi'
    },
    children: [{
      path: 'menu1',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      name: 'Menu1',
      meta: {
        title: '用户查看',
        icon: 'yonghuchakan'
      }
    }, {
      path: 'menu1',
      component: () => import('@/views/nested/menu1/index'), // Parent router-view
      name: 'Menu1',
      meta: {
        title: '意见反馈',
        icon: 'yijianfankui'
      }
    }, {
      path: 'modifyPass',
      component: () => import('@/views/modifyPass/index'), // Parent router-view
      name: 'ModifyPass',
      meta: {
        title: '修改密码',
        icon: 'xiugaimima'
      }
    }]
  }
];

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
});
