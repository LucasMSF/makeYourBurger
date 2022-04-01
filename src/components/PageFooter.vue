<template>
  <footer>
    <h4>Make your Burger &copy; {{ nowYear }}</h4>
    <h5>Desenvolvido por : Lucas Mathias</h5>
    <h5><a href="https://github.com/LucasMSF">github.com/LucasMSF</a></h5>
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
  margin: auto;
  bottom: 0;
}

h5 {
  color: #fff;
}

h5 a{
  color: #fff;
  text-decoration: none;
}
h5 a:hover{
  color: #fcba03;
  
}
</style>