<template>
  <div>
    <div id="bag"></div>
  </div>
</template>

<script>
  export default {
    name: "PunchingBag",
    props: ["percent"]
  };
</script>

<style scoped>
  #bag {
    width: 200px;
    height: 500px;
    margin: 0 auto;
    background-image: url("../assets/bag.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;
  }
</style>
