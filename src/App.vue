<template>
  <div id="app">
   
   <router-view/>
   
  </div>
</template>

<style lang="less">


 @import "./assets/less/apppc.less"; //pc端口样式 
@import "./assets/less/apppb.less"; //平板端样式 
@import "./assets/less/app.less"; //移动端样式
@import "./assets/less/all.less"; //其它样式


*{
  margin:0;
  padding:0;

}
.nav-li{
  list-style: none;
}





</style>
