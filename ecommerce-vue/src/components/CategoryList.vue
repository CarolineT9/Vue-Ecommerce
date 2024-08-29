.<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-item v-for="category in categories" :key="category.id" link>
                <v-list-item-title>
                    {{ category.name }}
                </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item color="grey-lighten-4" title="Order By Price" link>

            </v-list-item>
        </v-list>
    </v-sheet>
</template>

<script>
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
                description:'Itens para seu escritório.'
             }
            ]
        }
    }
}
</script>

<style></style>