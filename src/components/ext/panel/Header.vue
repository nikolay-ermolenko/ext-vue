<template>
  <div class="x-panelheader x-container x-component x-noborder-trl"
    :class="{
      'x-docked-top': getPanelHeaderPosition() === 'top',
      'x-docked-bottom': getPanelHeaderPosition() === 'bottom',
      'x-docked-left': getPanelHeaderPosition() === 'left',
      'x-docked-right': getPanelHeaderPosition() === 'right',
      'x-horizontal': ['top', 'bottom'].includes(getPanelHeaderPosition()),
      'x-vertical': ['left', 'right'].includes(getPanelHeaderPosition()),
    }"
  >
    <div class="x-body-el x-panelheader-body-el x-container-body-el
      x-component-body-el x-layout-box x-align-center x-pack-start"
      :class="{
        'x-horizontal': ['top', 'bottom'].includes(getPanelHeaderPosition()),
        'x-vertical': ['left', 'right'].includes(getPanelHeaderPosition()),
        'x-layout-hbox': ['top', 'bottom'].includes(getPanelHeaderPosition()),
        'x-layout-vbox': ['left', 'right'].includes(getPanelHeaderPosition()),
      }"
    >

      <Title v-if="title || iconCls"
        :text="title"
        :iconCls="iconCls"
        :iconAlign="iconAlign"
      />

      <slot />
    </div>
  </div>
</template>

<script>
import * as MyMixin from '../../../mixins/MyMixin';
import Title from './Title';

export default {
  name: 'PanelHeader',
  mixins: [MyMixin.layout],
  components: {
    Title,
  },
  provide() {
    return {
      getParentLayout: this.myHeaderLayout,
      getHeaderTitleRotation: this.myTitleRotation,
    };
  },
  inject: ['getParentLayout', 'getPanelHeaderPosition'],
  props: {
    title: {
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
    titleRotation: {
      type: String,
      default: 'auto',
      validator(value) {
        return ['auto', '0', '90', '270'].includes(value);
      },
    },
  },
  methods: {
    myTitleRotation() {
      return this.titleRotation;
    },
    myHeaderLayout() {
      return {
        isAutoLayout: false,
        isBoxLayout: true,
        isHBoxLayout: ['top', 'bottom'].includes(this.getPanelHeaderPosition()),
        isVBoxLayout: ['left', 'right'].includes(this.getPanelHeaderPosition()),
        isCardLayout: false,
        preventFlex: true,
      };
    },
  },
};
</script>
