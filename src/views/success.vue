<template>
    <div class="success">
<div class="success-banner">
    <img src="../../public/img/cg1.png"/>
</div>

   <div class="works-item-title">
    <span class="works-items-box">
      <span class="span-cps"><router-link to="/success">成功案例</router-link></span>
      <span class="works-items-text-span">SUCCESSFUL CASES</span>
    </span>   
  </div>

<div class="success-main" v-bind:class="{changeheight:a}" >
 
   <div class="success-items">
       <ul class="success-item" >
       

      <!--     <div v-for="(data,index) in imgdata"  :key="index">
         <img alt="加载中..."  :src="require('../../public/img/'+data.url)"/>
         </div> -->

             <li>
               <img src="../../public/img/hz/hz1.png"/>
           </li>
             <li>
               <img src="../../public/img/hz/hz2.png"/>
           </li>
             <li>
               <img src="../../public/img/hz/hz3.png"/>
           </li>
            <li>
               <img src="../../public/img/hz/hz5.jpg"/>
           </li>
             <li>
               <img src="../../public/img/hz/hz4.jpg"/>
           </li>
    
             <li>
               <img src="../../public/img/hz/hz6.png"/>
           </li>
             <li>
               <img src="../../public/img/hz/hz7.png"/>
           </li>
             <li>
               <img src="../../public/img/hz/hz8.png"/>
           </li>
     
          
           <li>
               <img src="../../public/img/hz/hz10.png"/>
           </li>
            <li>
               <img src="../../public/img/hz/hz11.jpg"/>
           </li>
             <li>
               <img src="../../public/img/hz/hz12.jpg"/>
           </li>
                   <li>
               <img src="../../public/img/hz/hz9.jpg"/>
           </li>
            <li>
               <img src="../../public/img/hz/hz13.jpg"/>
           </li>
            <li>
               <img src="../../public/img/hz/hz14.jpg"/>
           </li>
              <li>
               <img src="../../public/img/hz/hz15.png"/>
           </li>
              <li>
               <img src="../../public/img/hz/hz16.png"/>
           </li>
              <li>
               <img src="../../public/img/hz/hz17.png"/>
           </li>
              <li>
               <img src="../../public/img/hz/hz18.png"/>
           </li>
         
           
       </ul>
   </div>

</div>

<div class="show-more">
    <div class="show-box">
        <span>显示更多</span>
    <div v-on:click="a=!a"  class="show-box-hover">
          <span >显示更多</span>
    </div>
    </div>
    
</div>



    </div>
</template>
<script>
export default {
    name:"success",
    data(){
        return{
         a:false
            
        }
    },
    methods:{
     showMore(){
     this.heights=1200;
  

     }


    }
}
</script>
<style lang="less" scoped>
.changeheight{
  height:auto;
}
</style>