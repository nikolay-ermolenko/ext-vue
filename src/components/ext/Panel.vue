<template>
  <div class="x-panel x-container x-component x-noborder-trbl
    x-shadow x-managed-borders"
    :class="{
      'x-layout-auto-item': getParentLayout().isAutoLayout,
      'x-layout-card-item': getParentLayout().isCardLayout,
      'x-layout-box-item': getParentLayout().isBoxLayout,
      'x-layout-hbox-item': getParentLayout().isHBoxLayout,
      'x-layout-vbox-item': getParentLayout().isVBoxLayout,
      'x-layout-center-item': getParentLayout().isCenterLayout,
      'x-header-position-top': headerPosition === 'top',
      'x-header-position-left': headerPosition === 'left',
      'x-header-position-right': headerPosition === 'right',
      'x-header-position-bottom': headerPosition === 'bottom',
    }"
  >
    <ExtPanelHeader :title="title" :iconCls="iconCls" />

  ghfhfghfghfgh
  </div>
</template>

<script>
import * as MyMixin from '../../mixins/MyMixin';
import ExtPanelHeader from './panel/Header';

export default {
  name: 'Panel',
  mixins: [MyMixin.layout],
  components: {
    ExtPanelHeader,
  },
  provide() {
    return {
      getParentLayout: this.myLayout,
    };
  },
  inject: ['getParentLayout'],
  props: {
    layout: {
      type: String,
      default: 'auto',
    },
    headerPosition: {
      type: String,
      default: 'top',
    },
    title: {
      type: String,
    },
    iconCls: {
      type: String,
    },
  },
};
</script>
