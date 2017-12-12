<template>
<section class="container">
  <top-nav home="active"></top-nav>
  <router-view></router-view>
</section>
</template>

<script>
import TopNav from '@/components/components/top-nav'

export default {
  name: 'fruit-list',
  components: {
    TopNav
  }
}
</script>

<style scoped>
.container{
  margin-top: 100px;
}
</style>
