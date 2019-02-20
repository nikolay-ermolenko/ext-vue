<template>
  <Viewport :layout="layout">
    <MyButton
      ui="raised"
      text="card"
      iconAlign="right"
      iconCls="x-fa fa-home"
      @onmyclick="onButtonClick('card');"
    ></MyButton>
    <MyButton
      ui="raised"
      text="hbox"
      iconAlign="right"
      iconCls="x-fa fa-home"
      @onmyclick="onButtonClick('hbox');"
    ></MyButton>
    <MyButton
      ui="raised"
      text="vbox"
      iconAlign="right"
      iconCls="x-fa fa-home"
      @onmyclick="onButtonClick('vbox');"
    ></MyButton>
    <MyButton
      ui="raised"
      text="center"
      iconAlign="right"
      iconCls="x-fa fa-home"
      @onmyclick="onButtonClick('center');"
    ></MyButton>
  </Viewport>
</template>

<template3>
  <div id="app">
    <Toolbar>
      <MyButton
        ui="raised"
        text="Hello World"
        iconCls="x-fa fa-home"
        @onmyclick="onButtonClick('hello');"
      >
      </MyButton>
      <MyButton text="Route" @onmyclick="onButtonClick('route');">
        <!-- iconCls="x-fa fa-external-link"  ui="raised" -->
      </MyButton>

      <template v-slot:ripple>
        <Ripple />
      </template>
    </Toolbar>
    <router-view></router-view>
  </div>
</template3>

<template2>
  <div id="app">
    <Toolbar>
      Hello <MyButton iconCls="x-fa fa-user"></MyButton>
      <MyButton text="Add User"></MyButton>

      <MyButton
        ui="raised"
        text="News"
        iconAlign="right"
        badgeText="5"
        iconCls="x-fa fa-home"
        @onmyclick="onButtonClick"
      ></MyButton>
    </Toolbar>
    <img width="25%" src="./assets/logo.png" /> <HelloWorld />

    <router-view></router-view>
  </div>
</template2>

<script>
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";
import Toolbar from "./components/Toolbar";
import MyButton from "./components/MyButton";
import Ripple from "./components/Ripple";
import Viewport from "./components/ext/Viewport";

export default {
  components: {
    Toolbar,
    MyButton,
    Ripple,
    Viewport
  },
  router: new VueRouter({
    linkActiveClass: "text-blue font-bold",
    routes: [
      {
        path: "/hello",
        alias: "/hello/*",
        meta: { basePath: "/hello" },
        component: HelloWorld
      },
      {
        path: "/route",
        alias: "/route/*",
        component: Toolbar
      }
    ]
  }),
  data() {
    return {
      layout: "card"
    };
  },
  methods: {
    onButtonClick: function(path) {
      // this.$router.push(path);
      this.layout = path; //this.layout === "hbox" ? "card" : "hbox";
    },
    buttonClick: function(path) {
      this.$router.push(path);
    }
  }
};

// import HelloWorld from "./components/HelloWorld";
// import Toolbar from "./components/Toolbar";
// import MyButton from "./components/MyButton";
// import VueRouter from "vue-router";
// import Card from "./components/Card";

// const myRoute = new VueRouter({
//   mode: "history",
//   routes: [
//     { path: "/foo", component: Toolbar, alias: "/foo/*" },
//     { path: "/bar", component: Card, alias: "/bar/*" }
//   ]
// });

// export default {
//   name: "App",
//   components: {
//     HelloWorld,
//     Toolbar,
//     MyButton
//   },
//   router: myRoute,
//   methods: {
//     onButtonClick: function() {
//       // this.$router.go('/foo')
//       console.log(44, this);
//     }
//   }
// };
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
