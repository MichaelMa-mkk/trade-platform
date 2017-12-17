<template>
<section>
  <top-nav home="active"></top-nav>
  <ul class="nav nav-pills nav-stacked col-sm-1">
    <li role="presentation" class="active">
      <router-link :to="{ name: 'GoodAll' }">所有物品</router-link>
    </li>
    <li role="presentation">
      <router-link :to="{ name: '' }">分类1</router-link>
    </li>
    <li role="presentation">
      <router-link :to="{ name: '' }">分类2</router-link>
    </li>
    <li role="presentation">
      <router-link :to="{ name: '' }">分类3</router-link>
    </li>
  </ul>
  <div class="col-sm-11">
    <router-view/>
  </div>
</section>
</template>

<script>
import TopNav from '@/components/components/top-nav'

export default {
  name: 'good-list',
  components: {
    TopNav
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
section{
  margin-top: 100px;
}
</style>
