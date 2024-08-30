.<template>
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
</template>

<script>
import { mapState } from 'pinia'
import { useCategoriesStore } from '../../store/categories'

export default {


    computed: {
        ...mapState(useCategoriesStore, ['categories'])
    },

    methods: {
        goToCaterogy(categoryId) {
            this.$router.push({
                name: 'category',
                params: { categoryId }
            })
        },
        clearCaterogy() {
            this.$router.push({
                name: 'home'
            })
        },


    }
}
</script>

<style></style>