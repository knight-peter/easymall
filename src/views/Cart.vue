<template>
<div>
  这里是购物车页面
  <span>query:{{$route.query.goodsId}}</span>
  <span>params:{{$route.params.cartId}}</span>
</div>
</template>
<script>
export default {
  data() {
    return {
      msg: "hello cart"
    };
  }
};
</script>
<style>

</style>
