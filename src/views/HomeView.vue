<template>
  <HomeBanner />
  <div class="main-container">
    <h1>Monte o seu lanche!</h1>
    <BurgerForm />
  </div>
</template>

<script>
import HomeBanner from '../components/HomeBanner.vue'
import BurgerForm from '../components/BurgerForm.vue'

export default {
  name: 'HomeView',
  components: {
    HomeBanner,
    BurgerForm
  }
}
</script>
