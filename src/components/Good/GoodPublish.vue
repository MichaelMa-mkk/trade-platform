<template>
<section class="container">
  <head-bar headtext="发布宝贝"></head-bar>
  <form class="form-horizontal">
    <div class="form-group">
      <label class="col-sm-2 control-label">宝贝名称</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="名称">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">宝贝描述</label>
      <div class="col-sm-10">
        <textarea class="form-control" rows="5" placeholder="描述"></textarea>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">宝贝价格</label>
      <div class="col-sm-10">
        <div class="input-group col-sm-2">
          <div class="input-group-addon">￥</div>
          <input type="text" class="form-control" placeholder="价格">
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">宝贝图片</label>
      <div class="col-sm-10">
        <input type="file">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="button" class="btn btn-default">添加更多图片</button>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">宝贝分类</label>
      <div class="col-sm-10">
        <select class="form-control">
          <option>分类1</option>
          <option>分类2</option>
          <option>分类3</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <router-link :to="{ name: 'UserPublish' }">
          <button type="submit" class="btn btn-info">提交</button>
        </router-link>
      </div>
    </div>
  </form>
</section>
</template>

<script>
import HeadBar from '../components/head-bar'

export default {
  name: 'good-publish',
  components: {
    HeadBar
  }
}
</script>

<style scoped>
.form-group select{
  width: 11%;
}
</style>
