<template>
  <div class="x-container x-component"
    :class="{
      'x-layout-auto-item': getParentAAA().isAutoLayout,
      'x-layout-card-item': getParentAAA().isCardLayout,
      'x-layout-box-item': getParentAAA().isBoxLayout,
      'x-layout-hbox-item': getParentAAA().isHBoxLayout,
      'x-layout-vbox-item': getParentAAA().isVBoxLayout,
      'x-layout-center-item': getParentAAA().isCenterLayout,
    }"
  >
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
</template>

<script>
import * as MyMixin from '../../mixins/MyMixin';

export default {
  name: 'Container',
  mixins: [MyMixin.layout],
  provide() {
    return {
      getParentAAA: this.myAAA,
    };
  },
  inject: ['getParentAAA'],
  props: {
    layout: {
      type: String,
      default: 'auto',
    },
    pack: {
      type: String,
    },
  },
};
</script>
