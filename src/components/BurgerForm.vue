<template>
  <div class="burger-form">
    <div class="input-container">
      <label for="name">Nome do cliente: </label>
      <input name="name" id="name" type="text" v-model="name" />
    </div>
    <div class="input-container">
      <label for="bread">Tipo de pão: </label>
      <select name="bread" id="bread" v-model="bread">
        <option disabled>Selecione o tipo de pão</option>
        <option v-for="bread in foodData.paes" :key="bread.id">
          {{ bread.tipo }}
        </option>
      </select>
    </div>
    <div class="input-container">
      <label for="beef">Tipo de carne: </label>
      <select name="beef" id="beef" v-model="beef">
        <option disabled>Selecione o tipo de carne</option>
        <option v-for="beef in foodData.carnes" :key="beef.id">
          {{ beef.tipo }}
        </option>
      </select>
    </div>
    <div class="input-checkbox-container">
      <label for="">Opicionais: </label>
      <div
        v-for="opitional in foodData.opcionais"
        :key="opitional.id"
        class="checkbox-container"
      >
        <input type="checkbox" :value="opitional.tipo" v-model="opitionals" />
        <span>{{ opitional.tipo }}</span>
      </div>
    </div>
    <div class="input-container">
      <input
        @click="createBurger($event)"
        type="submit"
        value="Make My Burger"
      />
    </div>
  </div>
  <div v-if="Messages.wasError" id="errors">
    <h4 v-for="error in Messages.errors" :key="error.path">
      {{ error.message }}
    </h4>
  </div>
</template>

<script>
import axios from "axios";
import burger from "../assets/js/validate";
import App from "../App.vue";

export default {
  name: "BurgerForm",
  extends: {
    App,
  },
  data() {
    return {
      name: "",
      bread: "",
      beef: "",
      opitionals: [],
      foodData: {},
      Messages: {
        wasError: false,
        errors: [],
      },
    };
  },
  methods: {
    async getFoodData() {
      try {
        let { data } = await axios.get("http://localhost:3000/ingredientes");
        this.foodData = data;
      } catch (error) {
        this.errorAPIAlert("Consulte o desenvolvedor:");
        console.error(error);
      }
    },
    async createBurger(e) {
      e.preventDefault();

      if (this.validateData()) {
        const data = {
          nome: this.name.toUpperCase(),
          carne: this.beef,
          pao: this.bread,
          opicionais: Array.from(this.opitionals),
          status: "Solicitado",
        };

        try {
          let { data: response } = await axios.post(
            "http://localhost:3000/burgers",
            data
          );

          this.clear();

          this.$swal({
            title: `Hamburger Nº ${response.id} solicitado com sucesso!`,
            position: "center",
            icon: "success",
            color: "#FFF",
            background: "#1f1f1f",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          this.errorAPIAlert("Consulte o desenvolvedor:");
          console.error(error);
        }
      } else {
        return false;
      }
    },
    validateData() {
      this.Messages.wasError = false;

      let name = this.name;
      let bread = this.bread;
      let beef = this.beef;

      let errors = burger.validate({ name, bread, beef });

      if (errors.length !== 0) {
        this.Messages.wasError = true;
        this.Messages.errors = errors;
        return false;
      }

      return true;
    },
    clear() {
      this.name = "";
      this.bread = "";
      this.beef = "";
      this.opitionals = [];
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
    this.getFoodData();
  },
};
</script>

<style>
.input-container {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}
.input-container input,
select {
  height: 50px;
  font-size: 18px;
}
.input-container input[type="submit"] {
  border: 3px solid #fcba03;
  background-color: #1f1f1f;
  border-radius: 8px;
  transition: 0.3s;
  color: #fff;
  font-weight: bold;
}
.input-container input[type="submit"]:hover {
  cursor: pointer;
  background-color: #fcba03;
  color: #1f1f1f;
}

  label {
  font-weight: bold;
  border-left: 5px solid #fcba03;
  padding: 5px 8px;
  margin: 10px 0px;
}
#errors {
  text-align: center;
  background-color: #ad1f15;
  padding: 15px;
  color: #fff;
  border-radius: 8px;
}

.checkbox-container {
  margin: 8px;
}

.checkbox-container span {
  margin-left: 8px;
}
</style>