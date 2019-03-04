<template>
  <ExtContainer layout="hbox">

    <ExtPanel
      title="Panel A"
      flex=".6"
      :headerPosition="headerPosition"
    >
      <ExtButton
        iconCls="x-fa fa-arrow-left"
        @onmyclick="onButtonClick('left');"
      />
    </ExtPanel>

    <ExtPanel
      title="Panel B"
      iconCls="x-fa fa-user"
      :headerPosition="headerPosition"
      flex=".6"
    >
      <ExtButton
        iconCls="x-fa fa-arrow-right"
        @onmyclick="onButtonClick('right');"
      />
    </ExtPanel>

    <ExtPanel
      iconCls="x-fa fa-cog"
      :headerPosition="headerPosition"
      flex=".4"
    >
      <ExtButton
        iconCls="x-fa fa-arrow-up"
        @onmyclick="onButtonClick('top');"
      />
    </ExtPanel>

    <ExtPanel flex=".8" :headerPosition="headerPosition">
      <template v-slot:header>
        <ExtPanelHeader title="ZZZ" iconAlign="right" iconCls="x-fa fa-bars" />
      </template>
      <ExtButton iconCls="x-fa fa-arrow-down" @onmyclick="onButtonClick('bottom');" />
    </ExtPanel>
    <ExtPanel flex=".8" :headerPosition="headerPosition" layout="center" >
      <template v-slot:header>
        <ExtPanelHeader>
          <ExtPanelTitle text="L-ZZ" iconCls="x-fa fa-wrench" :rotateIcon="true" />
          <ExtButton text="GO" iconCls="x-fa fa-file-o" ui="action" />
          <ExtButton text="ESC" iconCls="x-fa fa-bell-o" ui="decline" />
          <ExtPanelTitle text="R-ZZ" iconAlign="right" iconCls="x-fa fa-file-o" />
        </ExtPanelHeader>
      </template>
    </ExtPanel>
  </ExtContainer>
</template>

<script>
import ExtContainer from '../components/ext/Container';
import ExtPanel from '../components/ext/Panel';
import ExtPanelHeader from '../components/ext/panel/Header';
import ExtPanelTitle from '../components/ext/panel/Title';
import ExtButton from '../components/ext/Button';

export default {
  name: 'PagePanels',
  components: {
    ExtContainer,
    ExtPanel,
    ExtPanelHeader,
    ExtPanelTitle,
    ExtButton,
  },
  data: () => ({
    headerPosition: 'top',
  }),
  methods: {
    onButtonClick(headerPosition) {
      this.headerPosition = headerPosition;
    },
  },
};
</script>
