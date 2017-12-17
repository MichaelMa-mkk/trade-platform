<template>
<section>
  <head-bar headtext="物品详情"></head-bar>
  <div class="box">
      <h1>{{ good.name }}</h1>
      <a>{{ good.advertising }}</a>
      <p>￥{{ good.price_sell }}</p>
  </div>
  <div class="container text-center">
    <img src="../../../static/apple.jpg">
  </div>

</section>
</template>

<script>
import HeadBar from '../components/head-bar'
export default {
  name: 'detail',
  components: {
    HeadBar
  },
  data () {
    return {
      good: {
        name: '旧书',
        advertising: '宝贝描述凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数凑字数',
        price_sell: 6.66
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    margin: 20px auto;
    width: 90%;
    min-height: 100px;
    padding: 15px;
    padding-left: 5%;
    padding-right: 5%;
    position:relative;
    background: -webkit-gradient(linear, 100% 100%, 50% 10%, from(#fff), to(#f3f3f3), color-stop(.1,#fff));
    border: 1px solid #ccc;
    -webkit-box-shadow: 1px 1px 4px rgba(0,0,0, 0.1);
    -webkit-border-bottom-right-radius: 60px 5px;
}
.box:before{
    width: 98%;
    z-index:-1;
    height: 100%;
    padding: 0 0 1px 0;
    position: absolute;
    bottom:0; right:0;
    background: -webkit-gradient(linear, 0% 20%, 0% 92%, from(#fff), to(#f9f9f9), color-stop(.1,#fff));
    border: 1px solid #ccc;
    -webkit-box-shadow: 1px 1px 8px rgba(0,0,0, 0.1);
    -webkit-border-bottom-right-radius: 60px 5px;
    -webkit-transform: skew(2deg,2deg)
                        translate(3px,8px)
}
.box:after{
    width: 98%;
    z-index:-1;
    height: 98%;
    padding: 0 0 1px 0;
    position: absolute;
    bottom:0; right:0;
    background: -webkit-gradient(linear, 0% 20%, 0% 100%, from(#f3f3f3), to(#f6f6f6), color-stop(.1,#fff));
    border: 1px solid #ccc;
    -webkit-box-shadow: 0px 0px 8px rgba(0,0,0, 0.1);
    -webkit-transform: skew(2deg,2deg)
                        translate(-1px,2px)
}
.box p{
  color: orange;
  font-size: 200%;
}
.box a{
    color: gray;
    font-size: large;
}
.box h1{
  
}
</style>
