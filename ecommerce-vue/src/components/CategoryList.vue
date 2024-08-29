.<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-subheader>Categorias</v-list-subheader>
            <v-list-item>
                <v-list-item-title link @click="clearCaterogy()">
                    Todas
                </v-list-item-title>
            </v-list-item>
            <v-list-item v-for="category in categories" :key="category.id" link>
                <v-list-item-title @click="goToCaterogy(category.id)">
                    {{ category.name }}
                </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2"></v-divider>
            <v-list-subheader>Ordem</v-list-subheader>
            <v-list-item color="grey-lighten-4" link @click="orderByPrice">


                <v-list-title>Por preço </v-list-title>


            </v-list-item>
            <v-list-item color="grey-lighten-4" link @click="orderByName">

                <v-list-title>Por nome </v-list-title>
            </v-list-item>
        </v-list>
    </v-sheet>
</template>

<script>
import { mapActions } from 'pinia'
import { useProductsStore } from '../store/products'
export default {
    data() {
        return {
            categories: [{
                id: 1,
                name: 'Acessórios',
                description: 'Acessórios de informática.'

            },
            {
                id: 2,
                name: 'Escritório',
                description: 'Itens para seu escritório.'
            }
            ]
        }
    },

    methods: {
        goToCaterogy(categoryId) {
            this.$router.push({
                name: 'category',
                params: { categoryId}
            })
        },
        clearCaterogy() {
            this.$router.push({
                name: 'home'
            })
        },
        ...mapActions(useProductsStore, ['orderByName', 'orderByPrice'])

    }
}
</script>

<style></style>