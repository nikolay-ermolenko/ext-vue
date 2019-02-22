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
    :style="{
      flex: getParentLayout().isCenterLayout ? '' : flex
    }"
  >
    <ExtPanelHeader v-if="hasTitle || hasIcon" :title="title" :iconCls="iconCls" />

    <slot name="header" />

    <div class="x-body-wrap-el x-panel-body-wrap-el
      x-container-body-wrap-el x-component-body-wrap-el">
      <div class="x-body-el x-panel-body-el x-container-body-el
        x-component-body-el x-noborder-trl"
        :class="{
          'x-layout-auto': isAutoLayout,
          'x-layout-center': isCenterLayout,
        }"
      >
        <div class="x-innerhtml">
          <a href="#/panels">Goto Panels</a>
          <br>
          <a href="#/layout">Goto Layouts</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as MyMixin from '../../mixins/MyMixin';
import ExtPanelHeader from './panel/Header';

export default {
  name: 'Panel',
  mixins: [MyMixin.layout, MyMixin.ui],
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
    flex: {
      type: String,
      default: '1',
    },
  },
};
</script>
