.<template>
  <v-card>
    <v-card-title>
        Resumo da compras
    </v-card-title>
   
    <v-card-subtitle>
      Total a pagar : {{ totalAmount }}
    </v-card-subtitle>
    <v-card-text>
        <v-btn  color="red">Realizar Pedido</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'pinia';
import { useCartStore } from '../../store/cart';
export default {
  computed:{
    ...mapState(useCartStore, ['totalAmount'])
  }
}
</script>

<style>

</style>