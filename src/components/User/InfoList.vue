<template>
<section>
  <top-nav personal="active"></top-nav>
  <!--<img src="" class="img-circle">-->
  <ul class="nav nav-pills nav-stacked col-sm-2">
    <li role="presentation" class="active">
      <router-link :to="{ name: 'UserInfo' }">我的信息</router-link>
    </li>
    <li role="presentation">
      <router-link :to="{ name: 'UserStar' }">我的收藏</router-link>
    </li>
    <li>
      <li @click="toggle">
        <a class="dropdown-toggle">我的宝贝
        <span class="caret"></span>
        </a>
      </li>
      <ul class="nav nav-pills nav-stacked mini hide">
        <li role="presentation">
          <router-link :to="{ name: 'UserTraded' }">交易成功</router-link>
        </li>
        <!--<li role="presentation">
          <router-link :to="{ name: 'UserTrading' }">交易中</router-link>
        </li>-->
        <li role="presentation">
          <router-link :to="{ name: 'GoodPublish' }">我要发布</router-link>
        </li>
        <li role="presentation">
          <router-link :to="{ name: 'UserPublish' }">发布成功</router-link>
        </li>
      </ul>
    </li>
    <li role="presentation">
      <router-link :to="{ name: 'UserEval' }">我的评价</router-link>
    </li>
    <li role="presentation">
      <router-link :to="{ name: 'UserComment' }">我的评论</router-link>
    </li>
  </ul>
  <div class="col-sm-8">
    <router-view/>
  </div>
</section>
</template>

<script>
import TopNav from '@/components/components/top-nav'

export default {
  name: 'user-info',
  components: {
    TopNav
  },
  methods: {
    toggle () {
      var ul = document.getElementsByClassName('hide')[0]
      if (ul) {
        ul.classList.remove('hide')
      } else {
        ul = document.getElementsByClassName('mini')[0]
        ul.classList.add('hide')
      }
    }
  },
  mounted () {
    var list = document.getElementsByTagName('li')
    for (let i = 0; i < list.length; i++) {
      const item = list[i]
      if (item.getAttribute('role')) {
        item.onclick = function () {
          var temp = document.getElementsByClassName('active')
          for (const item of temp) {
            if (item.getAttribute('role')) {
              item.classList.remove('active')
            }
          }
          item.classList.add('active')
        }
      }
    }
  }
}
</script>

<style scoped>
img{
  width:140px;
  height:140px;
}
.nav-stacked{
  padding-right: 5%;
}
.mini li a{
  color: purple;
  font-size: smaller;
}
.col-sm-8{
  margin-top: 30px;
}
</style>

