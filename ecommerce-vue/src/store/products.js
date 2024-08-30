import { defineStore } from "pinia";

export const useProductsStore = defineStore('products',{
    state: ()=>({
        order: '',
        categoryId: null,
        _products: []
    }),
    getters:{
        products(state){
            let products = null
            //filter
            if(state.categoryId){
                products = state._products.filter(p => p.categoryId === state.categoryId)
            }  else{
                products = state._products;
            }
            //order
            if(state.order === ''){
                return products
            }
            if(state.order ===  'price'){
                return products.sort((a,b) => a.price - b.price )
            }
            if(state.order === 'name'){
                return products.sort((a,b) => a.name.localeCompare(b.name))
            }
          
        }
    },
    actions: {
        fetchProducts(){
            fetch('/public/data/products.json')
            .then(response => response.json())
            .then((data) => {
                this._products = data
            })
        },
        selectCategory(categoryId){
            this.categoryId = categoryId
        },
        orderByPrice(){
            this.order = 'price'
        },
        orderByName(){
            this.order = 'name'
        }
    }
})