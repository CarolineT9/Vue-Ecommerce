.<template>
    <v-list-subheader>Ordem</v-list-subheader>
    <v-list-item color="grey-lighten-4" link @click="orderByPrice" :active="order === 'price'">


        <v-list-title>Por preço </v-list-title>


    </v-list-item>
    <v-list-item color="grey-lighten-4" link @click="orderByName" :active="order === 'name'">

        <v-list-title>Por nome </v-list-title>
    </v-list-item>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useProductsStore } from '../../store/products'

export default {

    methods:{
        ...mapActions(useProductsStore, ['orderByName', 'orderByPrice'])
    },
    computed:{
        ...mapState(useProductsStore, ['order'])
    }
}
</script>

<style></style>