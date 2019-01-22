<template>
  <div class="newlife">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
@import './assets/css/rem';

.newlife {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
</style>
