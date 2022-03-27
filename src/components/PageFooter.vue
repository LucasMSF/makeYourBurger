<template>
  <footer>
    <h4>Make your Burger &copy; {{ nowYear }}</h4>
    <h5>Desenvolvido por : Lucas Mathias</h5>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
  data() {
    return {
      nowYear: new Date().getFullYear(),
    };
  },
  props: {
    logoLink: String,
  },
};
</script>

<style scoped>

footer {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #262626;
  padding: 10px 20px;
  color: #fcba03;
  border-top: 5px solid black;
  position: absolute;
  bottom: 0;
  left: 0;
}

h5 {
  color: #FFF;
}
</style>