<template>
  <PageHeader :logoLink="logoLink" />
  <router-view />
  <PageFooter />
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      logoLink: "/img/logo.png",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

html,
body {
  width: 100%;
  height: 100%;
}

.main-container {
  min-height: 250px;
  margin: 20px;
}
.main-container h1 {
  text-align: center;
}

</style>
