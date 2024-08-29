import { defineStore } from "pinia";

export const useProductsStore = defineStore('products',{
    state: ()=>({
        order: '',
        categoryId: null,
        _products: [
        { id: 1, name: 'Cadeira', price: 700.00, image: '/public/cadeira_gamer.png', categoryId: 2 },
        { id: 2, name: 'Mouse', price: 10.00 , image: '/public/mouse.png', categoryId: 1},
        { id: 3, name: 'Monitor', price: 400.00, image: '/public/monitor.png', categoryId: 2},
        { id: 4, name: 'Tablet', price: 120.00, image: '/public/tablet.png', categoryId: 2 },
        { id: 5, name: 'Teclado', price: 450.00, image:'/public/teclado.png', categoryId: 1},
        { id: 6, name: 'Impressora', price: 900.00, image: '/public/impressora.png', categoryId: 2}
      ]
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