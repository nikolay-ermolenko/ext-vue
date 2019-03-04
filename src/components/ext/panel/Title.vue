<template>
  <div class="x-unselectable x-paneltitle x-component x-text-align-left
    x-layout-box-item"
    :class="{
      'x-has-icon': hasIcon,
      'x-icon-align-left': hasIcon && iconAlign === 'left',
      'x-icon-align-right': hasIcon && iconAlign === 'right',
      'x-icon-align-top': hasIcon && iconAlign === 'top',
      'x-icon-align-bottom': hasIcon && iconAlign === 'bottom',
      'x-horizontal': ['top', 'bottom'].includes(getPanelHeaderPosition()),
      'x-vertical': ['left', 'right'].includes(getPanelHeaderPosition()),
      'x-layout-hbox-item': ['top', 'bottom'].includes(getPanelHeaderPosition()),
      'x-layout-vbox-item': ['left', 'right'].includes(getPanelHeaderPosition()),
      'x-rotate-270': getPanelHeaderPosition() === 'left',
      'x-rotate-90': getPanelHeaderPosition() === 'right',
      'x-rotate-icon': rotateIcon,
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
  inject: ['getParentLayout', 'getPanelHeaderPosition', 'getHeaderTitleRotation'],
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
    headerPosition: {
      type: String,
      default: 'top',
      validator(value) {
        return ['left', 'top', 'right', 'bottom'].includes(value);
      },
    },
    rotateIcon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
