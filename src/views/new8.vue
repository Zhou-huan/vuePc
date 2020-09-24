<template>
    <div class="new">
    <div class="product-banner">
<img src="../../public/img/abxz.png"/>
    </div>
    <div class="product-main" >
    <div class="product-main-left news-left-main" :class="{addLeftwidth:ifshow}" >
        <div class="mian-left-top">





            <span class='news-titles-top'>新闻资讯</span>


            
            <span :class="{changeimgs:ifshow}" @click="changeWidth()" class='new-titles-shou-img'><img src="../../public/img/shou.png"></span>
        </div>
 <ul class="produce-menu-list top-ul">
        

  <li>     
      <ul class="p-menu-lists">
<li class="p-li-list" @click="show1()">热门资讯</li>
  <li @click="isshow='newsb'" class="p-li-list2" v-show="isShow1">努力培养担当...</li>
    
      </ul>
  </li>
  

    <li>     
      <ul class="p-menu-lists">
<li class="p-li-list" @click="show2()">最新动态</li>
  <li @click="isshow='newsa'" class="p-li-list2" v-show="isShow2">祝您鼠年大吉</li>
<li @click="isshow='newsp'" class="p-li-list2" v-show="isShow2">在线战“疫”:...</li>
      </ul>
  </li>


    <li>     
      <ul class="p-menu-lists">
<li class="p-li-list" @click="show3()">思政资讯</li>
  <li @click="isshow='newsc'" class="p-li-list2" v-show="isShow3">一堂特殊而难...</li>
  <li @click="isshow='news1'" class="p-li-list2" v-show="isShow3">关于深化新时...</li>
  <li @click="isshow='news2'" class="p-li-list2" v-show="isShow3">努力培养德智...</li>
  <li @click="isshow='news3'" class="p-li-list2" v-show="isShow3">教育部高校思...</li>

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

import newsa from '../components/newsa.vue'
 import newsb from '../components/newsb.vue'
import newsc from '../components/newsc.vue' 
import news1 from '../components/newsnews.vue'
 import news2 from '../components/newsszzx.vue'
import news3 from '../components/newswd.vue'
import newsp from '../components/newsproduce.vue' 





export default {
   name:"new",
  data(){
       return{
 data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
            defaultProps: {
          children: 'children',
          label: 'label'
        },
     

        isshow:'newsb',
        ifshow:false,
         isShow1:false,
        isShow2:false,
        isShow3:false,
               
   };
  },
      components: {
         newsa,
         newsb,
         newsc,
         news1,
         news2,
         news3,
         newsp
    
  },
   
   methods:{
      
    handleNodeClick(data) {
        console.log(data);
      },
        changeWidth(){
            this.ifshow=!this.ifshow;
        },
        
         show1(){
          this.isShow1=!this.isShow1;
          this.isShow2=false;
          this.isShow3=false;
      
      },
      show2(){
          this.isShow2=!this.isShow2;
          this.isShow1=false;
          this.isShow3=false;
         
      },
      show3(){
          this.isShow3=!this.isShow4;
          this.isShow1=false;
          this.isShow2=false;
        
      },



    
   },
    created(){
   

    } 

    
}
</script>
<style lang="less" scoped>

 
        

</style>