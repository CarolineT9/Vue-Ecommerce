import { defineStore } from "pinia";

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [
      {
        id: 1,
        name: 'Acessórios',
        description: 'Acessórios de informática.',
      },
      {
        id: 2,
        name: 'Escritório',
        description: 'Itens para seu escritório.',
      },
    ],
    
  }),
  
  getters: {
  
  },

  actions: {
  
  },
});
