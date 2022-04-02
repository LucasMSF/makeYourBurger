<template>
 <div class="main-container">
    <h1>Pedidos</h1>
    <OrdersTable />
  </div>
</template>

<script>
import OrdersTable from '../components/OrderTable.vue'

export default {
  name: 'OrdersView',
  components: {
    OrdersTable
  }
}
</script>
