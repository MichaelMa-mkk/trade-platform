<template>
<section>
  <head-bar headtext="宝贝详情"></head-bar>
  <div class="box">
      <h1>{{ good.name }}</h1>
      <h2>{{ good.advertising }}</h2>
      <p class="inline">￥{{ good.price_sell }}</p>
      <span>左右</span>
  </div>
  <div class="container">
    <img src="../../../static/apple.jpg" class="center-block">
    <div class="comment">
      <h1><strong>评论</strong></h1>
    </div>
    <form class="form-horizontal">
      <div class="form-group">
        <label class="col-sm-1 control-label">我也来说一句</label>
        <div class="col-sm-8">
          <textarea class="form-control" rows="3" placeholder="请文明评论"></textarea>
        </div>
        <button type="button" class="btn btn-info col-sm-1">发表<br/>评论</button>
      </div>
    </form>
    <table class="table table-hover">
      <tbody>
        <tr>
          <td class="name">Mark</td>
          <td>Otto</td>
        </tr>
        <br/>
        <tr>
          <td class="name">Jacob</td>
          <td>Thornton</td>
        </tr>
        <br/>
        <tr>
          <td class="name">Larry</td>
          <td>the Bird</td>
        </tr>
        <br/>
      </tbody>
    </table>
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
.box h2{
    color: gray;
    font-size: large;
}
.inline{
  display: inline;
  margin-right: 1%;
}
.comment{
  width: 100%;
  border-bottom: 1px solid grey;
}
.name{
  width: 15%;
}
.form-group{
  margin-top: 15px;
}
.form-group label{
  margin-left: 15px;
}
button{
  font-size: 120%;
  padding: 1.3%;
}
td{
  word-wrap: break-word;
}
</style>
