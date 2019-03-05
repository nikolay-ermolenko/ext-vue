<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img width="25%" src="../assets/logo.png" />
    <LinksBlock title="ExtJS Examples" :links="links.extjs.links" />
    <LinksBlock :title="links.essential.title" :links="links.essential.links" />
    <LinksBlock
      v-if="false"
      :title="links.ecosystem.title"
      :links="links.ecosystem.links"
    />
    <Card>
      <LinksBlock
        title="Ecosystem using Slot [ ngContent :) ]"
        :links="links.ecosystem.links"
      />
    </Card>
  </div>
</template>

<script>
import LinksBlock from '../components/LinksBlock';
import Card from '../components/Card';

export default {
  name: 'HelloWorld',
  components: {
    LinksBlock,
    Card,
  },
  data() {
    return {
      links: {
        extjs: {
          title: 'ExtJS Examples',
          links: [
            { linkTitle: 'Layouts', url: '#/layout' },
            { linkTitle: 'Panels', url: '#/panels' },
            { linkTitle: 'Collapsible', url: '#/collapsible' },
          ],
        },
        essential: {
          title: 'Essential Links',
          links: [
            { linkTitle: 'Core Docs', url: 'https://vuejs.org' },
            { linkTitle: 'Forum', url: 'https://forum.vuejs.org' },
            { linkTitle: 'Community Chat', url: 'https://chat.vuejs.org' },
            { linkTitle: 'Twitter', url: 'https://twitter.com/vuejs' },
            {
              linkTitle: 'Docs for This Template',
              url: 'http://vuejs-templates.github.io/webpack/',
            },
          ],
        },
        ecosystem: {
          title: 'Ecosystem',
          links: [
            { linkTitle: 'vue-router', url: 'http://router.vuejs.org/' },
            { linkTitle: 'vuex', url: 'http://vuex.vuejs.org/' },
            { linkTitle: 'vue-loader', url: 'http://vue-loader.vuejs.org/' },
            {
              linkTitle: 'awesome-vue',
              url: 'https://github.com/vuejs/awesome-vue',
            },
          ],
        },
      },
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
.hello {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
