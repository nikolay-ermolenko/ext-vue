<template>
  <div class="x-ripple-container" @mousedown="aaa($event);">
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
  </div>
</template>

<script>
export default {
  name: "Ripple",
  data: () => {
    return {
      rippleCount: 0,
      rippleStack: []
    };
  },
  methods: {
    aaa: function(e) {
      console.log(23423423424);
      if (e.button === 0) {
      }
    }
  }
};
</script>
