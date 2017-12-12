<template>
<section class="container">
  <head-bar headtext="用户登录"></head-bar>
  <form class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-2 control-label">用户名</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="User">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-2 control-label">密码</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox-inline">
        <label>
          <input type="checkbox">记住我
        </label>
      </div>
      <a class="pull-right">
        Jaccount 登录
      </a>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <router-link :to="{ name: 'UserInfo' }" id="temp">
        <button type="submit" class="btn btn-default">登录</button>
      </router-link>
    </div>
  </div>
</form>
</section>
</template>

<script>
import HeadBar from '@/components/components/head-bar'

export default {
  name: 'login',
  components: {
    HeadBar
  }
}
</script>

<style scoped>
#temp{
  color: black;
}
</style>

