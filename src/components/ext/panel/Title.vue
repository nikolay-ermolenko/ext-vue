<template>
  <div class="x-unselectable x-paneltitle x-component x-text-align-left
    x-horizontal x-layout-box-item x-layout-hbox-item"
    :class="{
      'x-has-icon': hasIcon,
      'x-icon-align-left': hasIcon && iconAlign === 'left',
      'x-icon-align-right': hasIcon && iconAlign === 'right',
      'x-icon-align-top': hasIcon && iconAlign === 'top',
      'x-icon-align-bottom': hasIcon && iconAlign === 'bottom',
      }">
    <div class="x-body-el">
      <div v-if="hasIcon" class="x-icon-el x-font-icon" :class="iconCls"></div>
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
    iconAlign: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'top', 'right', 'bottom'].includes(value);
      },
    },
  },
};
</script>
