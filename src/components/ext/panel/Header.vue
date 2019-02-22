<template>
  <div class="x-panelheader x-container x-component x-docked-top x-horizontal x-noborder-trl">
    <div class="x-body-el x-panelheader-body-el x-container-body-el
      x-component-body-el x-layout-box x-layout-hbox x-horizontal x-align-center x-pack-start">

      <Title v-if="title || iconCls" :text="title" :iconCls="iconCls" :iconAlign="iconAlign" />

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
      getParentLayout: this.myLayout,
    };
  },
  inject: ['getParentLayout'],
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
  },
};
</script>
