<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="symbolId" rel="external nofollow" />
  </svg>
</template>

<script>
// svg 组件
export default {
  name: "svg-icon",

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    symbolId() {
      return `#icon-${this.name}`;
    },
  },
};
</script>

<style lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
