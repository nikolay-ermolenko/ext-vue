<template>
  <div class="x-container x-component"
    :class="{
      'x-layout-auto-item': getParentLayout().isAutoLayout,
      'x-layout-card-item': getParentLayout().isCardLayout,
      'x-layout-box-item': getParentLayout().isBoxLayout,
      'x-layout-hbox-item': getParentLayout().isHBoxLayout,
      'x-layout-vbox-item': getParentLayout().isVBoxLayout,
      'x-layout-center-item': getParentLayout().isCenterLayout,
    }"
    :style="{
      flex: getParentLayout().isCenterLayout ? '' : flex
    }"
  >
    <div class="
      x-body-wrap-el
      x-panel-body-wrap-el
      x-container-body-wrap-el
      x-component-body-wrap-el">
      <div class="x-body-el x-container-body-el x-component-body-el"
        :class="{
          'x-auto-layout': isAutoLayout,
          'x-card-layout': isCardLayout,
          'x-layout-box': isHBoxLayout || isVBoxLayout,
          'x-layout-hbox': isHBoxLayout,
          'x-layout-vbox': isVBoxLayout,
          'x-layout-center': isCenterLayout,
          'x-vertical': isVBoxLayout,
          'x-align-stretch': false
        }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import * as MyMixin from '../../mixins/MyMixin';

export default {
  name: 'Container',
  mixins: [MyMixin.layout],
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
    pack: {
      type: String,
    },
    flex: {
      type: String,
      default: '1',
    },
  },
};
</script>
