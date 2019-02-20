<template>
  <div
    :class="{
      'x-layout-card-item': parentLayout.isCardLayout,
      'x-layout-box-item': parentLayout.isBoxLayout,
      'x-layout-hbox-item': parentLayout.isHBoxLayout,
      'x-layout-vbox-item': parentLayout.isVBoxLayout,
      'x-layout-center-item': parentLayout.isCenterLayout,
      'x-hovered': isHovered,
      'x-focused': isFocused,
      'x-has-badge': hasBadge,
      'x-has-text': hasText,
      'x-has-icon': hasIcon,
      'x-button-round': hasIcon && !hasText,
      'x-icon-align-left': hasIcon && iconAlignValue === 'left',
      'x-icon-align-right': hasIcon && iconAlignValue === 'right',
      'x-icon-align-top': hasIcon && iconAlignValue === 'top',
      'x-icon-align-bottom': hasIcon && iconAlignValue === 'bottom',
      [uiClass]: hasUi
    }"
    :style="{
      flex: ''
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
import { ui } from '../mixins/MyMixin';

// https://fiddle.sencha.com/#view/editor&fiddle/2390
export default {
  name: 'MyButton',
  mixins: [ui],
  props: ['text', 'badgeText', 'iconCls', 'iconAlign', 'ui', 'flex'],
  inject: ['getParentLayout'],
  computed: {
    parentLayout() {
      return this.getParentLayout();
    },
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
    iconAlignValue() {
      return this.$props.iconAlign || 'left';
    },
    uiClass() {
      return this.hasUi
        ? `x-button-${this.$props.ui} x-component-${this.$props.ui}`
        : '';
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
      this.$emit('onmyclick', e, {
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
    touchstart() {
      // console.log(5555555);
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
