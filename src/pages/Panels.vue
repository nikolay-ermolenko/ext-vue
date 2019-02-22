<template>
  <ExtContainer layout="hbox">
    <ExtPanel title="Panel A" flex="1" />
    <ExtPanel title="Panel B" iconCls="fa-user" flex="1" />
    <ExtPanel iconCls="fa-cog" flex="1" />
  </ExtContainer>
</template>

<script>
import ExtContainer from '../components/ext/Container';
import ExtPanel from '../components/ext/Panel';
import ExtButton from '../components/ext/Button';

export default {
  name: 'PagePanels',
  components: {
    ExtContainer,
    ExtPanel,
    ExtButton,
  },
};
</script>
