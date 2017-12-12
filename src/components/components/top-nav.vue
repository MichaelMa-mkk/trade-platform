<template>
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li :class="home"><router-link :to="{ name: 'Index' }">
                    <i class="glyphicon glyphicon-home"></i>
                    <p>首页</p>
                </router-link>
                </li>
                <li :class="news"><a href="#">
                    <i class="glyphicon glyphicon-comment"></i>
                    <p>消息</p>
                </a>
                </li>
                <li :class="personal"><router-link :to="{ name: 'Login' }">
                    <i class="glyphicon glyphicon-user"></i>
                    <p>我的</p>
                </router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'top-nav',
  props: [
    'home',
    'news',
    'personal'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-nav i{
    font-size: 200%;
}
.navbar-nav li{
    width: 10vw;
    text-align: center;
}
.navbar-nav p{
    margin-bottom: 0px;
}
</style>
