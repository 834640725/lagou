<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import lgIndex from '@/views/index'
export default {
  name: 'App',
  components:{
    lgIndex,
  }
}
</script>

<style lang="less">

</style>
