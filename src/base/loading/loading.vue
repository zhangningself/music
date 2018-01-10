<template>
  <div class="mf-loading-container">
    <img src="./loading.gif">
    <div class="desc">正在加载...</div>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'loading'
  export default {
    name: COMPONENT_NAME
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
@import "~common/stylus/variable"
  .mf-loading-container
    img
      width: 20px
      height: 20px
      display: block
      margin: 0 auto
    .desc
      line-height: 20px
      font-size: $font-size-small
      color: $color-text-l
      text-align: center
</style>
