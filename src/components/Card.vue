<template>
  <div class="card"><slot /></div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style scoped>
.card {
  width: 90%;
  margin: auto;
  padding: 5px;
  box-shadow: 0 4px 13px -4px black;
  background: #f9f9f9;
}
</style>
