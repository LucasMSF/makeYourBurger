<template>
  <div class="table">
    <div v-if="orders.length == 0"><h3>Não há pedidos...</h3></div>
    <table v-else>
      <thead>
        <tr>
          <th>ID:</th>
          <th>Nome:</th>
          <th>Pão:</th>
          <th>Carne:</th>
          <th>Opicionais:</th>
          <th>Estado:</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>
            <strong>{{ order.id }}</strong>
          </td>
          <td>{{ order.nome }}</td>
          <td>{{ order.pao }}</td>
          <td>{{ order.carne }}</td>
          <td>
            <ul>
              <li v-for="opicional in order.opicionais" :key="opicional">
                - {{ opicional }}
              </li>
            </ul>
          </td>
          <td>
            <select
              @change="changeStatus(order.id, order.status)"
              v-model="order.status"
            >
              <option disabled>Selecione o estado do pedido:</option>
              <option v-for="state in status" :key="state.id">
                {{ state.tipo }}
              </option>
            </select>
            <button class="btnCancel" @click="cancelOrder(order.id)">
              Cancelar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OrderTable",
  data() {
    return {
      orders: [],
      status: [],
    };
  },
  methods: {
    async getOrders() {
      try {
        let { data } = await axios.get("http://localhost:3000/burgers");
        this.orders = data;
      } catch (error) {
        this.errorAPIAlert("Consulte o desenvolvedor:");
      }
    },
    async getStatus() {
      let { data } = await axios.get("http://localhost:3000/status");
      this.status = data;
    },
    async changeStatus(id, status) {
      await axios.patch("http://localhost:3000/burgers/" + id, { status });
    },
    async cancelOrder(id) {
      let resp = await this.$swal({
        title: "Você tem certeza que quer remover o pedido Nº " + id + " ?",
        text: "Isso irá remover o pedido do cliente!",
        icon: "warning",
        background: "#1f1f1f",
        showCancelButton: true,
        confirmButtonColor: "#fcba03",
        cancelButtonColor: "#fa0505",
        confirmButtonText: "Sim, desejo exlcuir o pedido",
        cancelButtonText: "Cancelar",
      });

      if (resp.isConfirmed) {
        await axios.delete("http://localhost:3000/burgers/" + id);
        this.getOrders();
      } else {
        return false;
      } 
    },
    teste() {
      alert("teste");
    },
    errorAPIAlert(msg) {
      this.$swal({
        icon: "error",
        title: "Erro na API",
        html:
          msg +
          '<br><a href="https://github.com/LucasMSF">github.com/LucasMSF</a>',
        confirmButtonText: "Entendi",
        confirmButtonColor: "#fa0505",
      });
    },
  },
  mounted() {
    this.getOrders();
    this.getStatus();
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

table {
  background: #fcba03;
  border-collapse: collapse;
}

thead {
  background-color: #1f1f1f;
  color: #fff;
}

td,
th {
  border: 1px solid #dedede;
}

table th,
td {
  padding: 8px;
}

ul {
  list-style: none;
}

.btnCancel {
  margin-left: 10px;
  padding: 10px;
  border: none;
  background-color: #9c0c05;
  border-radius: 8px;
  font-weight: bold;
  transition: 0.3s;
}

.btnCancel:hover {
  background-color: #bd0f06;
  cursor: pointer;
}
</style>