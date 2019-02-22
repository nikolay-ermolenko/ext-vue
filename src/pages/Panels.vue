<template>
  <ExtContainer layout="hbox">
    <ExtPanel title="Panel A" flex=".6" />
    <ExtPanel title="Panel B" iconCls="x-fa fa-user" flex=".6" />
    <ExtPanel iconCls="x-fa fa-cog" flex=".4" />
    <ExtPanel flex=".8">
      <template v-slot:header>
        <ExtPanelHeader title="ZZZ" iconAlign="right" iconCls="x-fa fa-bars" />
      </template>
    </ExtPanel>
    <ExtPanel flex=".8" headerPosition="bottom" layout="center" >
      <template v-slot:header>
        <ExtPanelHeader>
          <ExtPanelTitle text="L-ZZ" iconCls="x-fa fa-wrench" />
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
};
</script>
