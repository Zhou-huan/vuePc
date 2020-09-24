<template>
    <div class="index container">   
     <!-- 轮播 -->       
    <div class="swiper">
    <!-- 图片 -->
    <div class="wrap">
       <!-- <div class="slide">三</div> -->
       <div v-for="(data,index) in imgdata" v-show="index===mark" :key="index" class="slide">
         <img alt="加载中..."  :src="require('../../public/img/'+data.url)"/>
         </div>
     
      <!-- <div class="slide">一</div> -->
    </div>

    <!-- 小圆点 -->
 <div class="dots">
      <div v-for="(item, index) in imgdata" :class="{ 'active':index===mark }" :key="index" class="dots-item"></div>
      
    </div>

 
  </div>
     <!-- 轮播结束 -->  
   <!-- 优秀作品开始 -->

 <div class="works-item-title">
    <span class="works-items-box">
      <span class="span-cps"><router-link to="/product">产品中心</router-link></span>
      <span class="works-items-text-span">PRODUCT dISPALY</span>
    </span>
    
  </div>


<div class="works-item">
<div class="display-left" @click="moveDisplayL()">
    <span><img src="../../public/img/r.png"></span>
</div>
<div class="display-right " @click="moveDisplayR()">
    <span><img src="../../public/img/l.png"></span>
</div>



<div class='display-lunbo-box'>
<div :style="{'margin-left':DisplayMargin + 'px'}" class="dispaly-item">
  
      <div class="dispaly-list">
  <div class="display-list-img">
        <router-link to="/product"> <img src="../../public/img/cp/cp1.png"></router-link> 
        </div>
      </div>

         <div class="dispaly-list">
          <div class="display-list-img">
        <router-link to="/innovation">  <img src="../../public/img/cp/cp2.png"></router-link>
        </div>
      </div>
         <div class="dispaly-list">
          <div class="display-list-img">
          <router-link to="/party">    <img src="../../public/img/cp/cp3.png"></router-link>

        </div>
      </div>
         <div class="dispaly-list">
              <div class="display-list-img">
                 <router-link to="/platform">    <img src="../../public/img/cp/cp4.png"></router-link>

        </div>
      </div>
             <div class="dispaly-list">
  <div class="display-list-img">
        <router-link to="/computer"> <img src="../../public/img/cp/cp5.png"></router-link> 
        </div>
      </div>

           <div class="dispaly-list">
  <div class="display-list-img">
        <router-link to="/economys"> <img src="../../public/img/cp/cp6.png"></router-link> 
        </div>
      </div>


      <div class="dispaly-list display-none">
  <div class="display-list-img">
        <router-link to="/product"> <img src="../../public/img/cp/cp1.png"></router-link> 
        </div>
      </div>


        <div class="dispaly-list display-none">
          <div class="display-list-img">
        <router-link to="/innovation">  <img src="../../public/img/cp/cp2.png"></router-link>
        </div>
      </div>
         <div class="dispaly-list display-none">
          <div class="display-list-img">
          <router-link to="/party">    <img src="../../public/img/cp/cp3.png"></router-link>

        </div>
      </div>


    </div>




</div>
  
</div>
   <!-- 优秀作品结束 -->


<div class="works-item-title company-works-title">
    <span class="works-items-box">
      <span class="span-cps"><router-link to="/about">关于智云鸿道</router-link></span>
      <span class="works-items-text-span">ABOUT ZHIYUNHONGDAO</span>
    </span>  
  </div>

  
    <!-- 公司开始 -->
    <div class="company">
  <div class="company-main">

<div class="company-main-top">
    <span>成都智云鸿道信息技术有限公司成立于2013年，坐落于高新区，专业从事教育信息化产品研发、销售及服务。</span>
</div>

<div class="company-main-main">
<div class="company-list company-img">
 <img  class="about-img1" src="../../public/img/about-zy2.png"/>

</div>
<div class="company-list company-list-one c-list-text">
<span class="about-text about-list-one">
           
公司坚定科教兴国的信念，以国内外知名教育企业为依托,充分发挥自身的行业背景、实践经验和专业知识，系统借鉴国内外的教育模式，面向我国现代教育领域，推出了一系列符合国际企业管理体系标准的教学模拟软件，针对不同的教学方向推出个性化的解决方案。经过校企专家数年的合作努力，提供了集方法、产品、服务三位一体、完整有效的“实践教学一体化解决方案”。
         </span>
  
</div>
<div class="company-list list-texts">
<span class="about-text">
           
2017年公司团队成员为四川省教育厅主办的首届高职大学生VR设计与制作技能大赛提供技术保障支持，2019年公司与西南财经大学联合开发的“飞夺泸定桥虚拟仿真实验教学项目”被四川省教育厅评为省级高校思政类虚拟仿真实验教学项目，代表西南地区高校参加国家级高校思政类虚拟仿真实验教学项目评选。
         </span>
  
</div>
<div class="company-list company-img company-imgs">
  <img class="about-as2" src="../../public/img/about-zy1.png"/>
  
</div>


  </div>


</div>
</div>
  <!-- 公司结束 -->
    <!-- 新闻资讯开始 -->
  <div class="works-item-title">
    <span class="works-items-box">
      <span class="span-cps"> <router-link to="/new"> 新闻动态</router-link></span>
      <span class="works-items-text-span">NEWS INFORMATION</span>
    </span>
    
  </div>
<div class="news">

  <div class="news-main">
    <div class="new-main-list">
      <div class="new-main-list-main">
         <div class="new-main-list-top">
           <div class="new-main-list-top-left">
             <span>新闻动态</span>
           </div>
           <div class="new-main-list-top-right">
             <span><router-link to="/new"> <img class="index-more-img" src="../../public/img/more.png"></router-link></span>
           </div>
         </div>
        <div class="new-main-list-mid">
          <img class="newsimg-newyear" src="../../public/img/news4.png"/>
        </div>
        <div class="new-main-list-buttom">
          <span>
          
          <router-link to="/newa">智云鸿道恭祝您鼠年大吉</router-link></span>
        </div>
      </div>
     
       
           
    </div>
    <div class="new-main-list">
        <div class="new-main-list-main">
         <div class="new-main-list-top">
           <div class="new-main-list-top-left">
             <span>新闻动态</span>
           </div>
           <div class="new-main-list-top-right">
         <span><router-link to="/new"> <img class="index-more-img" src="../../public/img/more.png"></router-link></span>
           </div>
         </div>
        <div class="new-main-list-mid">
          <img src="../../public/img/new2.png"/>
        </div>
        <div class="new-main-list-buttom">
          <span> <router-link to="/new">努力培养担当民族复兴大任的时代新人...</router-link></span>
        </div>
      </div>
    </div>
    <div class="new-main-list">
        <div class="new-main-list-main">
         <div class="new-main-list-top">
           <div class="new-main-list-top-left">
             <span>新闻动态</span>
           </div>
           <div class="new-main-list-top-right">
             <span><router-link to="/newb"> <img class="index-more-img" src="../../public/img/more.png"></router-link></span>
           </div>
         </div>
        <div class="new-main-list-mid">
          <img src="../../public/img/new3.png"/>
        </div>
        <div class="new-main-list-buttom">
         
          <span> <router-link to="/newb"> 一堂特殊而难忘的思政课</router-link></span>
        </div>
      </div>
    </div>
  </div>
</div>
  <!-- 新闻资讯结束-->


  <!-- 合作商开始-->
 
<div class="oprative">
   <div class="works-item-title">
    <span class="works-items-box">
      <span class="span-cps"><router-link to="/success">合作伙伴</router-link></span>
      <span class="works-items-text-span">PARTNER</span>
    </span>   
  </div>
  <div class="oprative-main">
  <div class="back_add">
     <div class="threeImg">
               <div class="Containt">
               
                    <ul :style="{'left':calleft + 'px'}"  v-on:mouseover="stopmove()" v-on:mouseout="move()">
                        <li v-for="(item,index) in superurl" :key="index">
                            <img :src="require('../../public/img/hz/'+item.img)"/>
                        </li>
                    </ul>
               
                    
                </div>
                   <div class="iconlefts"  @click="zuohua()">
                     <span><img src="../../public/img/r.png"></span>
                      
                    </div>

                          <div class="iconrights" @click="youhua()">
                         <span><img src="../../public/img/l.png"></span>
                      
                    </div> 
               
            </div>
  </div>




  </div>





</div>










  <!-- 合作商结束-->


       </div> 




    
</template>
<script>
import { indexJs } from '../assets/js/index.js'
export default {
   name:"index",
   data(){
     return{
       mark:0,
       imgdata:[
      
         {"url":"sybg1.png"},
        {"url":"sybg2.png"},
        {"url":"sybg3.png"},
        {"url":"sybg4.png"},
           {"url":"newyears2.png"},
       ],
       superurl: [
                {
                    url: '',
                    img: 'hz1.png',
                },
                {
                    url: '',
                    img: 'hz2.png',
                },
                {
                    url: '',
                    img: 'hz3.png',
                },
             
                {
                    url: '',
                    img: 'hz5.jpg',
                },
                {
                    url: '',
                    img: 'hz6.png',
                },
                {
                    url: '',
                    img: 'hz7.png',
                },
                   {
                    url: '',
                    img: 'hz8.png',
                },
                   {
                    url: '',
                    img: 'hz9.jpg',
                },
             
                {
                    url: '',
                    img: 'hz10.png',
                },
                     {
                    url: '',
                    img: 'hz4.jpg',
                },
                   {
                    url: '',
                    img: 'hz11.jpg',
                },
                  {
                    url: '',
                    img: 'hz14.jpg',
                },
                {
                    url: '',
                    img: 'hz12.jpg',
                },
                {
                    url: '',
                    img: 'hz13.jpg',
                },
              
                 {
                    url: '',
                    img: 'hz15.png',
                },
                 {
                    url: '',
                    img: 'hz16.png',
                },
                 {
                    url: '',
                    img: 'hz17.png',
                },
                 {
                    url: '',
                    img: 'hz18.png',
                },
                {
                    url: '',
                    img: 'hz1.png',
                },
                {
                    url: '',
                    img: 'hz2.png',
                },  
            ],
            calleft:0,
            DisplayMargin:0,
                        

     }
   },
   methods:{
      autoPlay () {  
      this.mark++;  
      if (this.mark === 5) { //当遍历到最后一张图片置零  
        this.mark = 0  
      }  },
      play () {  
      setInterval(this.autoPlay, 2500) 

    }, 
      change (i) {  
      this.mark = i  
    },
  
 move() {
            this.timer = setInterval(this.starmove, 2000)
        },
        //开始移动
        starmove() {
            this.calleft -= 350;
            if (this.calleft < -5250) {
                this.calleft = 0
            }
        },
        //鼠标悬停时停止移动
        stopmove() {
            clearInterval(this.timer)
        },
        //点击按钮左移
        zuohua() {
            this.calleft -= 350;
            if (this.calleft < -5250) {
                this.calleft = 0
            }
        },
        //点击按钮右移
        youhua() {
            this.calleft += 350;
            if (this.calleft > 0) {
                this.calleft = -5250
            }
        },

      moveDisplayR(){
           this.DisplayMargin += 290;
            if (this.DisplayMargin >= 0) {
                this.DisplayMargin = -1450
            }

      },


        moveDisplayL(){
           this.DisplayMargin -= 290;
            if (this.DisplayMargin <= -1450) {
                this.DisplayMargin = 0
            }

      }



    

   },

/*     created: function () {
    indexJs
} */
   created(){
            indexJs
          this.play(),
           this.move() 
    }


}
</script>
<style lang="less" scoped>
  .active{
    background-color: rgb(255, 255, 255);
  }
  .on {
    background: rgb(184, 182, 182);
  }
  .iconlefts:hover{
  cursor: pointer;
  }
.iconrights{
   cursor: pointer;
}
.index-more-img{
  width:20%;
  height:auto;
}
.new-main-list-top-right{
  span{
    text-align: right;
   
    float:right;
    display: block
  }
}

</style>