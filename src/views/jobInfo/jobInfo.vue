<template>
  <div class="job-content">
    <Header fixed title="职位详情" class="job-header">
      <mt-button icon="back" slot="left" @click="handleClose"></mt-button>
    </Header>
    <div class="job-info-show">
      <div class="job-cont">

        <!--顶部-->
        <div class="job-text">
          <h2 class="job-name">前端工程师</h2>
          <p class="claim">
            <span>1-3年/</span>
            <span>本科/</span>
            <span>全职</span>
          </p>
          <p class="wages">10k-20k</p>
        </div>
        <div class="job-image">
          <img src="../../assets/logo/1.png" alt="">
        </div>

        <div class="address">
          <p class="add-q">北京-北京-海淀区</p>
          <p class="add-i">上帝信息路11号彩虹大厦北楼西段403室</p>
        </div>
      </div>

      <!--职位发布者-->
      <div class="job-warpper">
        <h2 class="job-hr-name">职位发布者</h2>
        <div class="job-header-image">
          <img src="../../assets/logo/1.png" alt="">
          <div class="allege">
             <span class="leader">孙佳俊/CEO</span>
             <span class="today-time">今天来过</span>
            <div class="state">
              <span>简历处理神速</span>
              <span>经常回聊天消息</span>
              <span>全天活跃</span>
            </div>
          </div>
        </div>
      </div>

      <!--职位描述-->
      <div class="job-description">
        <h2>职位描述</h2>
        <div class="des-list">
          <span>高级</span>
          <span>中级</span>
          <span>初级</span>
          <span>高级web</span>
          <span>web前端</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Header } from 'mint-ui';
    export default {
      components: {
        Header,
      },
      methods:{
        handleClose(){
           console.log('返回')
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/less/jobinfo/lg-job-info.css";
</style>
