<template>
  <ExtContainer :layout="layout">
    <ExtButton
      ui="raised"
      text="card"
      iconAlign="right"
      iconCls="x-fa fa-home"
      flex=".5"
      @onmyclick="onButtonClick('card');"
    ></ExtButton>
    <ExtButton
      ui="raised"
      text="hbox"
      iconAlign="right"
      iconCls="x-fa fa-home"
      flex=".5"
      @onmyclick="onButtonClick('hbox');"
    ></ExtButton>
    <ExtButton
      ui="raised"
      text="vbox"
      iconAlign="right"
      iconCls="x-fa fa-home"
      flex=".5"
      @onmyclick="onButtonClick('vbox');"
    ></ExtButton>
    <ExtButton
      ui="raised"
      text="center"
      iconAlign="right"
      iconCls="x-fa fa-home"
      @onmyclick="onButtonClick('center');"
    ></ExtButton>
    <ExtContainer layout="center">
      <ExtPanel
        :title="layout"
        :iconCls="getIconByLayout"
        class="my-center-panel" />
    </ExtContainer>
  </ExtContainer>
</template>

<script>
import ExtContainer from '../components/ext/Container';
import ExtPanel from '../components/ext/Panel';
import ExtButton from '../components/ext/Button';

export default {
  name: 'PageLayout',
  components: {
    ExtContainer,
    ExtPanel,
    ExtButton,
  },
  data: () => ({
    layout: 'center',
  }),
  computed: {
    getIconByLayout() {
      const icons = {
        card: 'fa-id-card',
        hbox: 'fa-arrows-h',
        vbox: 'fa-arrows-v',
        center: 'fa-dot-circle-o',
      };
      return `x-fa ${icons[this.layout]}`;
    },
  },
  methods: {
    onButtonClick(layout) {
    // this.$router.push(path);
      this.layout = layout;
    },
  },
};
</script>

<style>
.my-center-panel {
  min-width: 120px;
  min-height: 100px;
}
</style>
