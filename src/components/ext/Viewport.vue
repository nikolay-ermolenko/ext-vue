<template>
  <div
      class="x-viewport x-container x-component x-widthed x-heighted x-root"
      style="width:100%;height:100%;"
    >
      <div
        class="x-body-el x-viewport-body-el x-container-body-el x-component-body-el x-layout-card"
      >
        <slot />
      </div>
    </div>
</template>

<script>
import * as MyMixin from '../../mixins/MyMixin';

export default {
  name: 'Viewport',
  mixins: [MyMixin.layout],
  provide() {
    return {
      getParentAAA: this.myAAA,
    };
  },
  props: {
    layout: {
      type: String,
      default: 'card',
    },
  },
};
</script>
