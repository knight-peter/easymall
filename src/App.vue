<template>
  <div id="app">
    <router-view class="main" />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" type="text/css">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @at-root &, .main {
    height: 100%;
  }
}
.main {
  display: flex;
  flex-direction: column;
}
.accessory-result-page {
  flex: 1;
}
</style>
