import { defineStore } from "pinia";

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: []
    
  }),
  
  getters: {
  
  },

  actions: {
    fetchCategories(){
      fetch('/public/data/categories.json')
      .then(response => response.json())
      .then((data) => {this.categories = data})
    }
  },
});
