<template>
  <ExtContainer :layout="layout">
    <ExtButton
      ui="raised"
      text="card"
      iconAlign="right"
      iconCls="x-fa fa-home"
      :class="{
        'x-hidden x-hidden-display': layout === 'card' && activeCard !== 'card'
      }"
      flex=".5"
      @onmyclick="onButtonClick('card');"
    ></ExtButton>
    <ExtButton
      ui="raised"
      text="hbox"
      iconAlign="right"
      iconCls="x-fa fa-home"
      :class="{
        'x-hidden x-hidden-display': layout === 'card' && activeCard !== 'hbox'
      }"
      flex=".5"
      @onmyclick="onButtonClick('hbox');"
    ></ExtButton>
    <ExtButton
      ui="raised"
      text="vbox"
      iconAlign="right"
      iconCls="x-fa fa-home"
      :class="{
        'x-hidden x-hidden-display': layout === 'card' && activeCard !== 'vbox'
      }"
      flex=".5"
      @onmyclick="onButtonClick('vbox');"
    ></ExtButton>
    <ExtButton
      ui="raised"
      text="center"
      iconAlign="right"
      iconCls="x-fa fa-home"
      :class="{
        'x-hidden x-hidden-display': layout === 'card' && activeCard !== 'center'
      }"
      @onmyclick="onButtonClick('center');"
    ></ExtButton>
    <ExtContainer layout="center"
      :class="{
        'x-hidden x-hidden-display': layout === 'card' && activeCard !== 'centerCard'
      }"
    >
      <ExtPanel
        :title="layout"
        :iconCls="getIconByLayout"
        layout="vbox"
        class="my-center-panel" >
        <ExtButton
          :ui="`raised ${activeCard === 'centerCard' ? 'decline' : ''}`"
          text="centerCard"
          iconCls="x-fa fa-id-card"
          @onmyclick="setActiveItem('centerCard');"
        ></ExtButton>
        <ExtButton
          :ui="`raised ${activeCard === 'hbox' ? 'decline' : ''}`"
          text="hbox"
          iconCls="x-fa fa-arrows-h"
          @onmyclick="setActiveItem('hbox');"
        ></ExtButton>
        <ExtButton
          :ui="`raised ${activeCard === 'vbox' ? 'decline' : ''}`"
          text="vbox"
          iconCls="x-fa fa-arrows-v"
          @onmyclick="setActiveItem('vbox');"
        ></ExtButton>
        <ExtButton
          :ui="`raised ${activeCard === 'center' ? 'decline' : ''}`"
          text="center"
          iconCls="x-fa fa-dot-circle-o"
          @onmyclick="setActiveItem('center');"
        ></ExtButton>
      </ExtPanel>
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
    activeCard: 'centerCard',
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
    setActiveItem(item) {
      this.activeCard = item;
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
