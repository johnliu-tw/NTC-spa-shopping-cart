import { createStore } from 'vuex'

export default createStore({
  state: {
    serverPath: 'http://localhost:8000',
    userId: 12,
    cart: []
  },
  getters:{
    currentQuantiy(state){
      return state.cart.reduce((productNumber, product) => parseInt(productNumber) + product.number, 0)
    }
  },
  mutations: {
    addCart(state, data){
      let isNewProduct = true
      state.cart.map(function(product){
        if(product.id == data.product.id){
          product.number += data.number
          isNewProduct = false
        }
        return product
      })

      if(isNewProduct){
        let newProduct = data.product
        newProduct.number = data.number
        state.cart.push(newProduct)
      }
    }
  },
})
