<template>
  <div>
    <NavHeader></NavHeader>
    <NavBread><span>商品</span></NavBread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)" :class="{'cur':priceChecked=='all'}" v-on:click="priceChecked='all'">All</a></dd>
              <dd v-for="(price,index) of priceFilter" :key="index">
                <a @click="setPriceFilter(index)" v-bind:class="{'cur':priceChecked===index}" href="javascript:void(0)">{{price.startPrice}} - {{price.endPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="goods of goodsList" :key="goods.productId">
                  <div class="pic">
                    <a href="#"><img v-lazy="'/static/'+goods.prodcutImg" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{goods.productName}}</div>
                    <div class="price">{{goods.prodcutPrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 遮罩 -->
    <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
    <NavFooter></NavFooter>
  </div>
</template>
<script>
import "./../assets/css/base.css";
import "./../assets/css/product.css";
import NavHeader from "@/components/NavHeader";
import NavBread from "@/components/NavBread";
import NavFooter from "@/components/NavFooter";
import axios from "axios";

import goodsData from "../../mock/goods.json";
export default {
  data() {
    return {
      goodsList: [],
      priceFilter: [
        {
          startPrice: "0.00",
          endPrice: "500.00"
        },
        {
          startPrice: "500.00",
          endPrice: "1000.00"
        },
        {
          startPrice: "1000.00",
          endPrice: "2000.00"
        }
      ],
      priceChecked: "all",
      filterBy: false,
      overLayFlag: false
    };
  },
  methods: {},
  components: {
    NavHeader,
    NavBread,
    NavFooter
  },
  mounted() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      /* axios.get("../../mock/goods.json").then(res => {
        var res = res.data;
        this.goodsList = res.result;
      }); */
      this.goodsList = goodsData.result;
      console.log(this.goodsList);
    },
    showFilterPop() {
      this.filterBy = true;
      this.overLayFlag = true;
    },
    setPriceFilter(index) {
      this.priceChecked = index;
      this.closePop();
    },
    closePop() {
      this.filterBy = false;
      this.overLayFlag = false;
    }
  }
};
</script>
<style lang="scss">

</style>
