<template>
  <div class="row">
    <template v-for="product in products" :key="product.id">
      <ProductBox v-bind="product" :has_border="true" />
    </template>
  </div>
</template>
<script>
import axios from 'axios'
import ProductBox from '../components/ProductBox.vue'

export default {
  components: { ProductBox },
  data(){
    return{
      products:[],
      serverPath: this.$store.state.serverPath,
      userId: this.$store.state.userId
    }
  },
  mounted() {
    axios.get(`${this.serverPath}/products?user_id=${this.userId}`)
         .then(res => this.products = res.data)
  }
}
</script>
<style>
  div.row{
    flex-direction:row;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
  }
</style>