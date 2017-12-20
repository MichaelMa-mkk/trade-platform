<template>
<section>
  <head-bar headtext="宝贝详情"></head-bar>
  <div class="box">
      <h1>{{ good.name }}</h1>
      <h2>{{ good.advertising }}</h2>
      <p class="inline">￥{{ good.price_sell }}</p>
      <span>左右</span>
      <router-link :to="{ name: 'Message' }">
        <button type="button" class="btn btn-default pull-right" @click="addmessage">联系卖家</button>
      </router-link>
  </div>
  <div class="container">
    <img :src="'../../../static/' + good.name + '.jpg'" class="center-block">
    <div class="comment">
      <h1><strong>评论</strong></h1>
    </div>
    <form class="form-horizontal">
      <div class="form-group">
        <label class="col-sm-1 control-label">我说一句</label>
        <div class="col-sm-8">
          <textarea class="form-control" rows="3" id="comment-content" placeholder="请文明评论"></textarea>
        </div>
        <button type="button" @click="addcomment" class="btn btn-info col-sm-1 btn-comment">发表<br/>评论</button>
      </div>
    </form>
    <table class="table table-hover">
      <tbody>
        <tr v-for="comment in comments">
          <td class="name">{{ comment.name }}</td>
          <td>{{ comment.content }}</td>
        </tr>
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
      good: this.datum.GoodList[this.$route.params.id],
      comments: [
        {
          name: '马轲',
          content: '这东西海星'
        },
        {
          name: '宋逸凡',
          content: '这玩意太辣鸡'
        }
      ]
    }
  },
  methods: {
    addcomment () {
      var content = document.getElementById('comment-content')
      if (content.value !== '') {
        this.comments.push({
          name: this.datum.UserList[1].name,
          content: content.value
        })
        content.value = ''
      }
    },
    addmessage () {
      console.log('addmessage')
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
.btn-comment{
  font-size: 120%;
  padding: 1.3%;
}
td{
  word-wrap: break-word;
  margin-top: 10px;
}
</style>
