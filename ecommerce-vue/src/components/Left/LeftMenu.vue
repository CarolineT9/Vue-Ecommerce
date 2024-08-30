.<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <category-options/>

            <v-divider class="my-2"></v-divider>
           
            <order-options/>
        </v-list>
    </v-sheet>
</template>

<script>
import CategoryOptions from '../../components/Left/CategoryOptions.vue'

import orderOptions from '../Left/orderOptions.vue'

export default {
  components: { orderOptions, CategoryOptions }
    
   
}
</script>

<style></style>