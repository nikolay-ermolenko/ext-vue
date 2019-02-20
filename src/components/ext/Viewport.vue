<template>
  <div
    class="x-viewport x-container x-component x-widthed x-heighted x-root"
    style="width:100%;height:100%;"
  >
    <div
      class="x-body-el x-viewport-body-el x-container-body-el x-component-body-el"
      :class="{
        'x-card-layout': isCardLayout,
        'x-layout-box': isHBoxLayout || isVBoxLayout,
        'x-layout-hbox': isHBoxLayout,
        'x-layout-vbox': isVBoxLayout,
        'x-layout-center': isCenterLayout,
        'x-vertical': isVBoxLayout,
        'x-align-stretch': false
      }"
    >
      <slot v-bind:isCardLayout="isCardLayout" />
    </div>
  </div>
</template>

<template2>
  <div
    class="x-viewport x-container x-component x-widthed x-heighted x-root"
    style="width:100%;height:100%;"
  >
    <div
      class="x-body-el x-viewport-body-el x-container-body-el x-component-body-el x-layout-card"
    >
      <div
        class="x-panel x-container x-component x-noborder-trbl x-header-position-top x-managed-borders x-layout-card-item"
      >
        <div
          class="x-panelheader x-container x-component x-docked-top x-horizontal x-noborder-trl"
        >
          <div
            class="x-body-el x-panelheader-body-el x-container-body-el x-component-body-el x-layout-box x-layout-hbox x-horizontal x-align-center x-pack-start"
          >
            <div
              class="x-unselectable x-paneltitle x-component x-text-align-left x-icon-align-left x-horizontal x-layout-box-item x-layout-hbox-item x-flexed"
            >
              <div class="x-body-el">
                <div class="x-icon-el x-font-icon" :class="iconCls" />
                <div class="x-text-el">Sample</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="x-body-el x-panel-body-el x-container-body-el x-component-body-el x-layout-auto x-noborder-rbl"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template2>

<script>
import { layout } from "/src/mixins/MyMixin.js";

export default {
  name: "MyButton",
  mixins: [layout],
  provide: function() {
    return {
      getParentLayout: this.getParentLayout
    };
  },
  props: {
    layout: {
      type: String,
      default: "card"
    },
    pack: {
      type: String,
      default: "start"
    }
  },

  methods: {
    getParentLayout: function() {
      return {
        isCardLayout: this.isCardLayout,
        isBoxLayout: this.isBoxLayout,
        isHBoxLayout: this.isHBoxLayout,
        isVBoxLayout: this.isVBoxLayout,
        isCenterLayout: this.isCenterLayout
      };
    }
  },

  computed: {
    layoutCss: function() {
      let result = [];
      if (this.$props.layout === "card") {
        result.push("x-card-layout");
      }

      return result.join(" ");
    }
  },
  data: () => {
    return {
      iconCls: "x-fa fa-home"
    };
  }
};
</script>
