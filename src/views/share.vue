<template>
<div class="social_shares">
    <div class="elementor">
        <p>Share PixCap on any social media and you'll get 60 more seconds for FREE!!</p>
        <p id='select'>Select Now</p>
    </div>
    <Share-Icons ></Share-Icons>

    <!-- <div class="share_icon">    </div> -->
    


</div>
</template>

<script>
import ShareIcons from '../components/shareIcons.vue'


export default {
    
  name:'',
  data(){
   return {

   }
  },
  components:{
    ShareIcons
    
    },
}
</script>

<style  scope>
*{
    margin: 0;
    padding: 0;
    text-decoration:none;
    /* font-family: Arial, Helvetica, sans-serif; */
    font-family: "Gill Sans", sans-serif;
    box-sizing: border-box;
}

body{
    min-height: 100vh;
    background-image: linear-gradient(120deg,#16a085,#e67e22);
}
.elementor{
    width: 500px;
    background: #f1f1f1;
    height: 220px;
    padding: 30px 30px 10px 40px;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%; 
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    z-index: 1;
}

p{
    margin: 0 10px;
    padding: 8px 0;
    font-size: 22px;
    font-weight: lighter;
    
}
#select{
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: normal;

}


</style>
