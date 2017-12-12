<template>
<div>
  <div class="good-list row">
    <div v-for="(item, index) in goods" class="col-sm-4 text-center">
      <router-link :to="{ name: 'FruitDetail', params: {id: index}}">
        <img src="../../../static/apple.jpg">
        <p>{{ item.name }}</p>
      </router-link>
      <strong>￥{{ item.price_sell }}</strong>
      <del>￥{{ item.price_origin }}</del>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'fruit-single',
  data () {
    return {
      goods: [
        {
          name: '旧书',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '旧书',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '旧书',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '旧书',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '旧书',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '旧书',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '旧书',
          price_sell: 6.66,
          price_origin: 8.88
        },
        {
          name: '旧书',
          price_sell: 6.66,
          price_origin: 8.88
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.good-list .col-sm-4 {
  padding:0px 20px 20px;
  background-color: rgba(255,255,255,0.4);
  border-radius: 4px;
  box-shadow: 0px 0px 5px gray;
  margin-bottom: 5%;
  margin-left: 7%;
  margin-right: 7%;
}
.good-list div img {
  height: 75%;
  padding-top: 4%;
}
.good-list div p {
  height: 15%;
  font-size: 200%;
}
.good-list div strong {
  font-size: 180%;
}
.good-list div del {
  text-decoration: line-through;
  font-size: 150%;
  color: grey;
}
</style>
