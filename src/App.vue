<template>
  <ExtViewport>
    <router-view></router-view>
  </ExtViewport>
</template>

<script>
import VueRouter from 'vue-router';
import ExtViewport from './components/ext/Viewport';
import PageHelloWorld from './pages/HelloWorld';
import PageLayout from './pages/Layout';
import PagePanels from './pages/Panels';
import PageCollapsible from './pages/Collapsible';

export default {
  components: {
    ExtViewport,
  },
  router: new VueRouter({
    routes: [
      {
        path: '/home',
        alias: '/home/*',
        meta: { basePath: '/home' },
        component: PageHelloWorld,
      },
      {
        path: '/layout',
        alias: '/layout/*',
        component: PageLayout,
      },
      {
        path: '/panels',
        alias: '/panels/*',
        component: PagePanels,
      },
      {
        path: '/collapsible',
        alias: '/collapsible/*',
        component: PageCollapsible,
      },
      {
        path: '/',
        redirect: 'home',
      },
    ],
  }),
};
</script>
