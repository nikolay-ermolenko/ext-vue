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

export default {
  components: {
    ExtViewport,
    PageHelloWorld,
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
        path: '/',
        redirect: 'home',
      },
    ],
  }),
};
</script>
