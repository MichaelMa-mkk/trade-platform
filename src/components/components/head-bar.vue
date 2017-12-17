<template>
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a onclick="history.back()" class="navbar-brand glyphicon glyphicon-menu-left"></a>
    </div>
    <p class="navbar-brand title text-center">{{headtext}}</p>
  </div>
</nav>
</template>

<script>
export default {
  name: 'head-bar',
  props: ['headtext']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  width: 95vw;
}
p{
  margin-bottom: 0px;
}
</style>
