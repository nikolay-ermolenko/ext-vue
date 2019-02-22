<template>
  <div class="x-unselectable x-paneltitle x-component x-text-align-left
    x-icon-align-left x-horizontal x-has-icon x-layout-box-item x-layout-hbox-item">
    <div class="x-body-el">
      <div v-if="hasIcon" class="x-icon-el x-font-icon x-fa" :class="iconCls"></div>
      <div v-if="hasText" class="x-text-el">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
import * as MyMixin from '../../../mixins/MyMixin';

export default {
  name: 'PanelTitle',
  mixins: [MyMixin.layout, MyMixin.ui],
  components: {
  },
  provide() {
    return {
      getParentLayout: this.myLayout,
    };
  },
  inject: ['getParentLayout'],
  props: {
    text: {
      type: String,
    },
    iconCls: {
      type: String,
    },
  },
};
</script>
