<template>
<!-- <div>11111</div> -->
<div class="share_icon">
  <a href="#" class="facebook-btn" id="share-facebook" @click="fbClick" >
    <svg id="fb" t="1612081826216" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7234" width="200" height="200"><path d="M967.4752 0H56.5248C25.2928 0 0 25.2928 0 56.5248v910.9504C0 998.7072 25.2928 1024 56.5248 1024h490.3936v-396.544H413.4912V472.9344h133.4272V358.912c0-132.3008 80.7936-204.288 198.8096-204.288 56.5248 0 105.0624 4.1984 119.2448 6.0928v138.24h-81.8176c-64.2048 0-76.5952 30.5152-76.5952 75.264v98.6624h153.0368l-19.968 154.5216h-133.12V1024h260.9664c31.232 0 56.5248-25.2928 56.5248-56.5248V56.5248C1024 25.2928 998.7072 0 967.4752 0z" fill="#2c2c2c" p-id="7235"></path></svg>
  </a>

  <a href="#" class="instagram-btn" @click="igClick">
    <svg id='ig' t="1612082220448" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3311" width="200" height="200"><path d="M512 85.333333c115.925333 0 130.389333 0.426667 175.872 2.56 45.44 2.133333 76.373333 9.258667 103.594667 19.84 28.16 10.837333 51.882667 25.514667 75.605333 49.194667a209.408 209.408 0 0 1 49.194667 75.605333c10.538667 27.178667 17.706667 58.154667 19.84 103.594667 2.005333 45.482667 2.56 59.946667 2.56 175.872 0 115.925333-0.426667 130.389333-2.56 175.872-2.133333 45.44-9.301333 76.373333-19.84 103.594667a208.341333 208.341333 0 0 1-49.194667 75.605333 209.706667 209.706667 0 0 1-75.605333 49.194667c-27.178667 10.538667-58.154667 17.706667-103.594667 19.84-45.482667 2.005333-59.946667 2.56-175.872 2.56-115.925333 0-130.389333-0.426667-175.872-2.56-45.44-2.133333-76.373333-9.301333-103.594667-19.84a208.64 208.64 0 0 1-75.605333-49.194667 209.237333 209.237333 0 0 1-49.194667-75.605333c-10.581333-27.178667-17.706667-58.154667-19.84-103.594667C85.888 642.389333 85.333333 627.925333 85.333333 512c0-115.925333 0.426667-130.389333 2.56-175.872 2.133333-45.482667 9.258667-76.373333 19.84-103.594667a208.213333 208.213333 0 0 1 49.194667-75.605333A208.938667 208.938667 0 0 1 232.533333 107.733333c27.221333-10.581333 58.112-17.706667 103.594667-19.84C381.610667 85.888 396.074667 85.333333 512 85.333333z m0 213.333334a213.333333 213.333333 0 1 0 0 426.666666 213.333333 213.333333 0 0 0 0-426.666666z m277.333333-10.666667a53.333333 53.333333 0 0 0-106.666666 0 53.333333 53.333333 0 0 0 106.666666 0zM512 384a128 128 0 1 1 0 256 128 128 0 0 1 0-256z" p-id="3312" fill="#2c2c2c"></path></svg>
  </a>

  <a href="#" class="twitter-btn" id="share-twitter" @click="twClick">
    <svg id='tw' t="1612082251932" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4123" width="200" height="200"><path d="M1024.192 226.4a414.112 414.112 0 0 1-120.608 32.992 211.232 211.232 0 0 0 92.384-116.192 422.72 422.72 0 0 1-133.408 51.008A210.08 210.08 0 0 0 709.152 128a210.016 210.016 0 0 0-210.016 210.016c0 16.384 1.792 32.384 5.408 47.808A596.32 596.32 0 0 1 71.552 166.24a209.92 209.92 0 0 0-28.384 105.6 209.824 209.824 0 0 0 93.408 174.816 210.08 210.08 0 0 1-95.2-26.208v2.592a210.08 210.08 0 0 0 168.608 205.984 210.368 210.368 0 0 1-94.976 3.584 210.816 210.816 0 0 0 196.192 146.016 421.44 421.44 0 0 1-311.2 87.008 594.176 594.176 0 0 0 322.208 94.4c386.4 0 597.792-320.192 597.792-597.792 0-9.184-0.192-18.208-0.608-27.2A422.912 422.912 0 0 0 1024.192 226.432z" p-id="4124" fill="#2c2c2c"></path></svg>
  </a>
  

  <a href="#" class="linkedin-btn" @click="liClick">
    <svg id='li' t="1612082272022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4939" width="200" height="200"><path d="M896 64H127.8C92.6 64 64 93 64 128.6v766.8C64 931 92.6 960 127.8 960H896c35.2 0 64-29 64-64.6V128.6c0-35.6-28.8-64.6-64-64.6zM334.8 832H202V404.4h133V832z m-66.4-486c-42.6 0-77-34.6-77-77S225.8 192 268.4 192c42.4 0 77 34.6 77 77 0 42.6-34.4 77-77 77z m564.2 486h-132.8V624c0-49.6-1-113.4-69-113.4-69.2 0-79.8 54-79.8 109.8V832h-132.8V404.4h127.4v58.4h1.8c17.8-33.6 61.2-69 125.8-69 134.4 0 159.4 88.6 159.4 203.8V832z" p-id="4940" fill="#2c2c2c"></path></svg>
  </a>
  

</div>
</template>

<script>
export default {
  name:'Facebook',
  data(){
   return {

   }
  },
  methods: {
    fbClick:function(){
      this.$emit(window.open('https://www.facebook.com/sharer/sharer.php?u=https://www.pixcap.com/','nyWindow','width=600,Height=400,screenX=350,screenY=150'));
    },
    twClick:function(){
      window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.pixcap.com%2F&text=I am%20using%20pixcap~','nyWindow','width=600,Height=400,screenX=350,screenY=150');
    },
    liClick:function(){
      window.open('https://www.linkedin.com/shareArticle?mini=true&url=https://www.pixcap.com/&title=&summary=&source=','nyWindow','width=600,Height=400,screenX=350,screenY=150');
    },
    igClick:function(){

    },

  },
}
// export default {
//   name:'Facebook',
//   data(){
//    return {

//    }
//   },
//   methods: {
//     fbClick:function(){
//       this.$emit(window.open('https://www.facebook.com/sharer/sharer.php?u=https://www.pixcap.com/','nyWindow','width=600,Height=400,screenX=350,screenY=150'));
//     },
    
//   },
// }
// export default {
//   name:'Facebook',
//   data(){
//    return {

//    }
//   },
//   methods: {
//     fbClick:function(){
//       this.$emit(window.open('https://www.facebook.com/sharer/sharer.php?u=https://www.pixcap.com/','nyWindow','width=600,Height=400,screenX=350,screenY=150'));
//     },
    
//   },
// }
// igClick(){

    // },
    
    
</script>

<style >
.icon{
  padding: 0 10px;
  margin: 0 20px;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;


}
a{
  display: inline-block;
  width: 60px;
  margin: 0 10px;
}
.share_icon{
  position:absolute;
  margin: 230px 450px;
  z-index: 999;
}

</style>