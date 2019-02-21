<template>
  <ExtContainer :layout="layout">
    <ExtButton
      ui="raised"
      text="card"
      iconAlign="right"
      iconCls="x-fa fa-home"
      @onmyclick="onButtonClick('card');"
    ></ExtButton>
    <ExtButton
      ui="raised"
      text="hbox"
      iconAlign="right"
      iconCls="x-fa fa-home"
      @onmyclick="onButtonClick('hbox');"
    ></ExtButton>
    <ExtButton
      ui="raised"
      text="vbox"
      iconAlign="right"
      iconCls="x-fa fa-home"
      @onmyclick="onButtonClick('vbox');"
    ></ExtButton>
    <ExtButton
      ui="raised"
      text="center"
      iconAlign="right"
      iconCls="x-fa fa-home"
      @onmyclick="onButtonClick('center');"
    ></ExtButton>
  </ExtContainer>
</template>

<script>
import ExtContainer from '../components/ext/Container';
import ExtButton from '../components/ext/Button';

export default {
  name: 'PageLayout',
  components: {
    ExtContainer,
    ExtButton,
  },
  data: () => ({
    layout: 'center',
  }),
  methods: {
    onButtonClick(layout) {
    // this.$router.push(path);
      this.layout = layout;
    },
  },
};
</script>
