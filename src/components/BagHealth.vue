<template>
  <div>
    <sui-progress :state="state" :percent="percent" progress />
  </div>
</template>

<script>
  export default {
    name: "BagHealth",
    props: ["percent", "state"]
  };
</script>

<style scoped>
  div {
    margin: 0.5em auto;
    width: 300px;
  }
</style>
