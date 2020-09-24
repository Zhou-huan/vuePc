<template>
    <div class="product">
    <div class="product-banner">
<img src="../../public/img/cpbaner.png"/>
    </div>
    <div class="product-main">
    <div class="product-main-left cp-mian-left" :class="{addLeftwidth:ifshow}">
        <div class="mian-left-top">
            <span class='news-titles-top'><h1>产品中心</h1></span>
         <span :class="{changeimgs:ifshow}" @click="changeWidth()" class='new-titles-shou-img'><img src="../../public/img/shou.png"></span> 
        </div>
 <ul class="produce-menu-list cp-mian-left">

  <li>     
      <ul class="p-menu-lists">
<li class="p-li-list" @click="show1()">vr思政虚拟仿真教育</li>
  <li @click="isshow='szcx'" class="p-li-list2" v-show="isShow1">简介</li>
    
      </ul>
  </li>


  <li>     
      <ul  class="p-menu-lists">
<li class="p-li-list" @click="show2()">vr课程思政创新教育</li>
  <li @click="isshow='szjy'" class="p-li-list2" v-show="isShow2">简介</li>
 

      </ul>
  </li>


  
  <li>     
      <ul  class="p-menu-lists">
<li  class="p-li-list" @click="show3()">vr党建党性教育</li>
  <li @click="isshow='dxjy'" class="p-li-list2" v-show="isShow3">简介</li>


      </ul>
  </li>


  
  <li>     
      <ul  class="p-menu-lists">
<li class="p-li-list" @click="show4()">思政创新与考试</li>
 <li @click="isshow='szpt'" class="p-li-list2" v-show="isShow4">简介</li>

 
      </ul>

          <ul  class="p-menu-lists">
<li class="p-li-list" @click="show5()">其它实验教学解决方案</li>
 <li @click="isshow='faComputer'" class="p-li-list2" v-show="isShow5">计算机实验教学解决方案</li>
  <li @click="isshow='faFinace'" class="p-li-list2" v-show="isShow5">经管类实验教学解决方案</li>
 
      </ul>
  </li>

 

 </ul>
    </div>
       <div class="product-main-right" :class="{addrightwidth:ifshow}">
           <newsa :is="isshow" keep-alive></newsa>
    </div>




    </div>
 
    </div>
</template>
<script>

/* import texts from '../components/text.vue' */
import newsa from '../components/newsa.vue'
import szcx from '../components/p-szcx.vue'
import szjy from '../components/p-szjy.vue'
import dxjy from '../components/p-dxjy.vue'
import szpt from '../components/p-szpt.vue'
import faComputer from '../components/plan-computer.vue'
import faFinace from '../components/plan-finance.vue'

export default {
   name:"innovation",
      components: {
         /* texts, */
         newsa,
         szcx,
         szjy,
         dxjy,
         szpt,
         faComputer,
         faFinace

  },
   data(){
       return{
           isShow1:false,
           isShow2:false,
           isShow3:false,
           isShow4:false,
           isShow5:false,
           isshow:'szjy',     
     ifshow:false,



       }
    
   },
   compontents:{

   },
   methods:{
         show:function(v){
                    this.lists.forEach(function(item){
                        item.isShow=false;
                    });
                    v.isShow=!v.isShow
                },


                 handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },

      show1(){
          this.isShow1=!this.isShow1;
          this.isShow2=false;
          this.isShow3=false;
          this.isShow4=false;
            this.isShow5=false;
      },
      show2(){
          this.isShow2=!this.isShow2;
          this.isShow1=false;
          this.isShow3=false;
          this.isShow4=false;
            this.isShow5=false;
      },
      show3(){
          this.isShow3=!this.isShow4;
          this.isShow1=false;
          this.isShow2=false;
          this.isShow4=false;
            this.isShow5=false;
      },
      show4(){
          this.isShow4=!this.isShow4;
          this.isShow2=false;
          this.isShow3=false;
          this.isShow1=false;
        this.isShow5=false;
      },
 show5(){
          this.isShow5=!this.isShow5;
          this.isShow2=false;
          this.isShow3=false;
          this.isShow1=false;
           this.isShow4=false;
      },
    changeWidth(){
            this.ifshow=!this.ifshow;
        }   

   },
    created(){
     

    } 

    
}
</script>
<style lang="less" scoped>
 .produce-menu-list li {
 text-align: left;
 
 }
      
        

</style>