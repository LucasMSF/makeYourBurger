<template>
  <div id="main-banner">
    <h1>Make Your Burger</h1>    
  </div>
</template>

<script>
export default {
  name: "HomeBanner"
};
</script>

<style scoped>
    #main-banner {
        height: 500px;
        background-image: url('../assets/img/burger.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
    }

    #main-banner h1 {
        color: #FFF;
        background-color: #fcba03;
        padding: 20px 40px;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    }
</style>