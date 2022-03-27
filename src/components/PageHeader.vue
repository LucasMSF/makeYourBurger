<template>
  <nav>
    <router-link to="/"><img :src="logoLink" alt="logo"></router-link>
    <router-link to="/orders">Pedidos</router-link>
  </nav>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        logoLink: String
    }
}
</script>

<style scoped>
    nav {
        background-color: #262626;
    }
</style>