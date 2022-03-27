<template>
  <nav>
    <router-link to="/" id="logo-link"><img :src="logoLink" alt="logo" id="logo"/></router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/orders">Pedidos</router-link>
  </nav>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    logoLink: String,
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #262626;
  padding: 10px 20px;
  border-bottom: 5px solid black;
}

#logo-link {
  margin: auto;
  margin-left: 0;
}

#logo {
  width: 80px;
  height: 80px;
}

nav a {
  color: #FCBA03;
  text-decoration: none;
  margin-left: 15px;
  transition: 0.3s;

}

nav a:hover {
  color: #FFF;
 

}
</style>