<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="a in links" v-bind:key="a.url">
        <a v-bind:href="a.url">{{ a.linkTitle }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LinksBlock",
  props: ["title", "links"],
  data: () => {
    return {};
  }
};
</script>

<style scoped>
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
