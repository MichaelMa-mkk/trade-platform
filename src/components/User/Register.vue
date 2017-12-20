<template>
<section class="container">
  <head-bar headtext="用户注册"></head-bar>
  <form class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-2 control-label">用户名</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="username" placeholder="User">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-2 control-label">密码</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="password" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-2 control-label">确认密码</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="repeat" placeholder="Password Again">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" @click="register" class="btn btn-default">提交</button>
    </div>
  </div>
</form>
</section>
</template>

<script>
import HeadBar from '@/components/components/head-bar'

export default {
  name: 'register',
  components: {
    HeadBar
  },
  methods: {
    register () {
      var pwd = document.getElementById('password').value
      var repeat = document.getElementById('repeat').value
      var name = document.getElementById('username').value
      if (repeat !== pwd) alert('两次密码输入不一致')
      else {
        if (pwd !== '' && name !== '') {
          var len = this.datum.UserList.length
          this.datum.UserList.push({
            id: len,
            name: name,
            pwd: pwd,
            contact: ''
          })
          var url = window.location.href
          url = url.substring(0, url.length - 8)
          window.location.href = url + 'login'
        }
      }
    }
  }
}
</script>

<style scoped>
</style>

