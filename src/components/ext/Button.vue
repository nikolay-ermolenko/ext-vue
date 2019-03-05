<template>
  <div
    :class="{
      'x-layout-card-item': getParentLayout().isCardLayout,
      'x-layout-box-item': getParentLayout().isBoxLayout,
      'x-layout-hbox-item': getParentLayout().isHBoxLayout,
      'x-layout-vbox-item': getParentLayout().isVBoxLayout,
      'x-layout-center-item': getParentLayout().isCenterLayout,
      'x-hovered': isHovered,
      'x-focused': isFocused,
      'x-has-badge': hasBadge,
      'x-has-text': hasText,
      'x-has-icon': hasIcon,
      'x-button-round': hasIcon && !hasText,
      'x-icon-align-left': hasIcon && iconAlign === 'left',
      'x-icon-align-right': hasIcon && iconAlign === 'right',
      'x-icon-align-top': hasIcon && iconAlign === 'top',
      'x-icon-align-bottom': hasIcon && iconAlign === 'bottom',
      [uiClass]: hasUi
    }"
    :style="{
      flex: getParentLayout().isCenterLayout || getParentLayout().preventFlex ? '' : flex
    }"
    @mousedown="mousedown($event);"
    class="x-ripple-transition x-rippling
    x-component x-button
    x-arrow-align-right x-layout-auto-item"
  >
    <div class="x-inner-el ">
      <div class="x-body-el">
        <div v-if="hasIcon" class="x-icon-el x-font-icon" :class="iconCls" />
        <div v-if="hasText" class="x-text-el">{{ text }}</div>
      </div>
      <div class="x-arrow-el x-font-icon x-fa fa-home" />
      <div class="x-ripple-container">
        <div
          v-for="r in rippleStack"
          v-bind:key="r.counter"
          class="x-ripple-bubble x-ripple"
          :style="{
            background: r.color,
            width: `${r.dim}px`,
            height: `${r.dim}px`,
            top: `${r.top}px`,
            left: `${r.left}px`
          }"
        />
      </div>
    </div>
    <div v-if="hasBadge" class="x-badge-el">{{ badgeText }}</div>
    <button
      @mouseover="hover($event, true);"
      @mouseleave="hover($event, false);"
      @click="click"
      @focus="focus($event, true);"
      @blur="focus($event, false);"
      @keydown="keydown();"
      @touchstart="touchstart();"
      class="x-button-el"
      type="button"
    />
    <div class="x-paint-monitor cssanimation" />
  </div>
</template>

<script>
import * as MyMixin from '../../mixins/MyMixin';

// https://fiddle.sencha.com/#view/editor&fiddle/2390
export default {
  name: 'Button',
  mixins: [MyMixin.ui, MyMixin.layout],
  props: {
    text: {
      type: String,
    },
    badgeText: {
      type: String,
    },
    iconCls: {
      type: String,
    },
    iconAlign: {
      type: String,
      default: 'left',
    },
    ui: {
      type: String,
    },
    flex: {
      type: String,
      default: '1',
    },
  },
  inject: ['getParentLayout'],
  computed: {
    isCardLayoutItem() {
      return this.getParentLayout() === 'card';
    },
    isBoxLayoutItem() {
      return (
        this.getParentLayout() === 'box' ||
        this.getParentLayout() === 'hbox' ||
        this.getParentLayout() === 'vbox'
      );
    },
    uiClass() {
      if (this.hasUi) {
        return this.$props.ui
          .split(' ')
          .map(ui => `x-button-${ui} x-component-${ui}`)
          .join(' ');
      }
      return '';
    },
  },
  data: () => ({
    isHovered: false,
    isFocused: false,
    rippleCount: 0,
    rippleStack: [],
  }),
  methods: {
    hover(e, isHovered) {
      this.isHovered = isHovered;
    },
    focus(e, isFocused) {
      this.isFocused = isFocused;
    },
    click(e) {
      this.$emit('onmyclick', {
        e,
        component: this,
      });
    },
    keydown() {
      document.getElementsByTagName('body')[0].classList.add('x-keyboard-mode');
    },
    removeRipple() {},
    mousedown(e) {
      e.stopPropagation();
      if (e.button === 0) {
        let rippleDim =
          this.$el.offsetHeight > this.$el.offsetWidth
            ? this.$el.offsetHeight
            : this.$el.offsetWidth;
        this.rippleCount += 1;
        const rippleCount = this.rippleCount;
        rippleDim = rippleDim > 275 ? 275 : rippleDim;
        this.rippleStack.push({
          counter: rippleCount,
          color: this.$el.ownerDocument.defaultView.getComputedStyle(this.$el)
            .color,
          dim: rippleDim,
          top: e.offsetY - (rippleDim * 0.5),
          left: e.offsetX - (rippleDim * 0.5),
        });
        setTimeout(() => {
          this.rippleStack.splice(
            this.rippleStack.findIndex(r => r.counter === rippleCount),
            1,
          );
        }, 400);
        document
          .getElementsByTagName('body')[0]
          .classList.remove('x-keyboard-mode');
      }
    },
  },
};
</script>

<style scoped>
.x-badge-el {
  padding-left: 0;
  padding-right: 0;
}
</style>
