<template>
<div id="index">
  <lgHome></lgHome>
     <ul class="lg-navgtor">
       <li>
         <i class="nav-index lg-index active"></i>
         <span class="index-text">首页</span>
       </li>
       <li>
         <i class="nav-index nav-message"></i>
         <span class="index-text">消息</span>
       </li>
       <li>
         <i class="nav-index speech"></i>
         <span class="index-text">言职</span>
       </li>
       <li>
         <i class="nav-index user"></i>
         <span class="index-text">我</span>
       </li>
     </ul>
</div>
</template>

<script>
   /*
   * 拉钩网首页, 下面导航顺序切换路由
   * */
    import Home from './home/home'
    export default {
        name: "index",
        components:{
          lgHome:Home
        }
    }
</script>

<style lang="less">

  @import ".././assets/less/lg-app.css";
</style>
