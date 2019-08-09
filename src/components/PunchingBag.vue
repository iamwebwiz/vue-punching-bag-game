<template>
  <div>
    <div id="bag" :class="{ burst: gameEnded }"></div>
  </div>
</template>

<script>
  export default {
    name: "PunchingBag",
    props: ["gameEnded"]
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

  #bag.burst {
    background-image: url("../assets/bag-burst.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;
  }
</style>
