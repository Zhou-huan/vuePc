<template>
  <div class="home container-fluid">
         <div class="header row">
           <div class="header-main"> 
    <div class="nav-lists-left">
        <div id="logo">
       <img alt="logo" src="../../public/img/logo.png"/>
      
     </div>
     <div class="nav-menu">
        <img  @click="isshowNavs()" src="../../public/img/backtop.png"/>
     </div>
    </div>
    

     <div id="nav-list"  >
       <ul  class="nav-ul"  >
       <li  class="nav-li"> <router-link to="/"> 首    页</router-link></li>
    

     <li class="nav-li">

       <el-menu
             :default-active="this.$router.path" router
        class="el-menu-demo" 
        mode="horizontal"
       @select="handleSelect"

  border-bottom = "none"
     

  >

  <el-submenu index="2">
    <template slot="title">产品中心</template>
     <el-menu-item index="/product">vr思政虚拟仿真教育</el-menu-item>
    
    <el-menu-item index="/innovation">vr课程思政创新教育</el-menu-item>
    <el-menu-item index="/party">vr党建党性教育</el-menu-item>
        <el-menu-item index="/platform">思政创新与考试</el-menu-item>
    <el-submenu index="/product">
      <template slot="title">其它实验教学解决方案</template>
      <el-menu-item index="/computer">计算机实验教学解决方案</el-menu-item>
      <el-menu-item index="/economys">经管类实验教学解决方案</el-menu-item>
 
    </el-submenu>
  </el-submenu>
  
  
</el-menu>

     </li>

      <li class="nav-li"><router-link to="/success">  成功案例 </router-link></li> 


        <li class="nav-li"><router-link to="/about">关于我们</router-link></li>
    <!--    <li class="nav-li"> <router-link to="/new"> 新闻动态</router-link></li> -->

         <li i class="nav-li" > 
        <el-menu 
        :default-active="this.$router.path" router
        class="el-menu-demo" 
        mode="horizontal"
       @select="handleSelect(index)"
      

    border-bottom = "none"
         >

  <el-submenu index="2">

   <template slot="title">新闻动态</template>
    <el-submenu index="2-1">
      <template slot="title">热门资讯</template>
      <el-menu-item    active-background-color="#11397E"  index="/new">努力培养担当民族复兴...</el-menu-item>
   
    </el-submenu>
        <el-submenu index="2-2">
      <template slot="title">最新动态</template>
      <el-menu-item index="/new7">在线战“疫”：思政3D虚...</el-menu-item>
      <el-menu-item index="/news2">智云鸿道恭祝您鼠年大吉</el-menu-item>
  
    </el-submenu>
        <el-submenu index="2-3">
      <template slot="title">思政资讯</template>
      <el-menu-item index="/new3">一堂特殊而难忘的思政...</el-menu-item>
      <el-menu-item index="/new4">关于深化新时代学校思...</el-menu-item>
      <el-menu-item index="/new5">努力培养担当民族复兴...</el-menu-item>
          <el-menu-item index="/new6">教育部高校思政课教学...</el-menu-item>
    </el-submenu>
  </el-submenu>
  

</el-menu>
</li>

        <li class="nav-li"><router-link to="/jion"> 加入我们</router-link></li>
        <li class="nav-li"><router-link to="/Cooperate">  渠道合作</router-link></li> 
        <li class="nav-li"><router-link to="/tel">   联系我们 </router-link> </li>
       </ul>
       
     </div>
     
     </div>
   
     

         </div>
 <!--  中间部分开始-->
      <keep-alive include="newsa,newsb,computer,economy,platform,innovation,party,product,about,cooperate,telus,jionUs,success">
          <router-view/>
        </keep-alive>
 <!--  中间部分结束-->
 
  <!--  footer部分开始-->
<div class="home-footer container">
  <div class="footer-top">
<ul class="footer-top-ul">

  <li>
    <ul class="ul-childer footer-list-one">
      <li><router-link to="/about">关于我们</router-link></li>
      <li><router-link to="/product">产品中心</router-link></li>
      <li><router-link to="/new">新闻动态</router-link></li>
    </ul>
  </li>
 
 <li>
     <ul class="ul-childer">
      <li><router-link to="/jion">加入我们</router-link></li>
      <li><router-link to="/success">合作用户</router-link></li>
      <li><router-link to="/cooperate">渠道合作</router-link></li>
    </ul>
 </li>
  <li>
     <ul class="ul-childers footer-list-last">
      <li><a href="javascript:;">电话：028-61551840</a></li>
      <li><a href="javascript:;"> QQ:853795119</a></li>
      <li><a href="javascript:;">地址：成都市高新区芳草一街15号金杏苑A区4栋1单元1号</a></li>
    </ul>
  </li>

</ul> 




  </div>
  <div class="footer-bottom">
    <div class="footer-bottom-position">
      <span class="text1">蜀ICP备15014907号-2</span>
  <span class="text2">版权所有 © 成都智云鸿道信息技术有限公司</span>
    </div>
  
  </div>
</div>


   <!--  footer部分结束-->
<!--移动固定导航栏开始  -->

<div class="appNavIiem" v-show="appnavshow">
   <ul  class="app-nav-ul" @click="dispalynonenav">
      
      <li class="nav-li"><router-link to="/product"> 产品中心</router-link></li>
      <li class="nav-li"><router-link to="/success">  成功案例 </router-link></li>
        <li class="nav-li"><router-link to="/about">关于我们</router-link></li>
       <li class="nav-li"> <router-link to="/new"> 新闻动态</router-link></li>
        <li class="nav-li"><router-link to="/jion"> 加入我们</router-link></li>
        <li class="nav-li"><router-link to="/Cooperate">  渠道合作</router-link></li> 
        <li class="nav-li"><router-link to="/tel">   联系我们 </router-link> </li>
       </ul>
</div>

<div class="appNav">
<div class="appNav-left">
<router-link @click="isshowNavs()" to="/"> 首    页</router-link>
</div>

<div class="appNav-right">
    <img  @click="isshowappNavs()" src="../../public/img/menus.png"/> 
</div>
</div>





<!--移动固定导航栏结束  -->
      
  </div>  
</template>
<script>


export default {
    name:'home',
   data(){
     return{
     appnavshow:false,
       activeIndex: '1',
        activeIndex2: '1'
     }
   },
    components: {

    
    },
    methods:{


isshowNavs(){

      
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top < 0) {
          clearInterval(timeTop);
        }
      }, 10);


},

 isshowappNavs(){
   this.appnavshow=!this.appnavshow;
 },
 dispalynonenav(){
    this.appnavshow=!this.appnavshow;
 }

    },
    mountend(){

        window.addEventListener('scroll', this.scrollToTop)
    }
,

destroyed () {
  window.removeEventListener('scroll', this.scrollToTop)
}
  



}
</script>
<style lang='less' scoped>
/* @import "../assets/css/base.less"; */
.navShow{
  display: block
}
.navnoShow{
  display: none;
}


</style>