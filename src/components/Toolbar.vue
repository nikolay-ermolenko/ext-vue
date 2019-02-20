<template>
  <div class="toolbar x-ripple-transition x-rippling">
    <slot />

    <slot name="ripple" />
    <!--
      div class="x-ripple-container">
        <div
          v-for="r in rippleStack"
          v-bind:key="r.counter"
          class="x-ripple-bubble x-ripple"
          :style="
            `background-color:${r.color};width:${r.dim}px;height:${r.dim}px;top:${
              r.top
            }px;left:${r.left}px;`
          "
        />
      </div
    -->
  </div>
</template>

<script>
export default {
  name: "MyButton",
  data: () => {
    return {
      isHovered: false,
      isFocused: false,
      rippleCount: 0,
      rippleStack: []
    };
  },
  methods: {
    mousedown: function(e) {
      console.log(11111);
      if (e.button === 0) {
        var rippleDim =
          this.$el.offsetHeight > this.$el.offsetWidth
            ? this.$el.offsetHeight
            : this.$el.offsetWidth;
        var rippleCount = ++this.rippleCount;
        rippleDim = rippleDim > 95 ? 95 : rippleDim;
        this.rippleStack.push({
          counter: rippleCount,
          color: this.$el.ownerDocument.defaultView.getComputedStyle(this.$el)
            .color,
          dim: rippleDim,
          top: e.offsetY - rippleDim * 0.5,
          left: e.offsetX - rippleDim * 0.5
        });
        setTimeout(() => {
          this.rippleStack.splice(
            this.rippleStack.findIndex(r => r.counter === rippleCount),
            1
          );
        }, 400);
        document
          .getElementsByTagName("body")[0]
          .classList.remove("x-keyboard-mode");
      }
    }
  }
};
</script>

<style scoped>
.toolbar {
  padding: 20px 10px;
  box-shadow: 0 4px 13px -4px black;
  background: #f9f9f9;
}
.toolbar > div {
  //margin: 0 5px;
}
</style>
