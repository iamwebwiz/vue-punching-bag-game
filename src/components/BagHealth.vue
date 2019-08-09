<template>
  <div>
    <sui-progress :state="state" :percent="health" progress />
  </div>
</template>

<script>
  export default {
    name: "BagHealth",
    props: ["health", "state"]
  };
</script>

<style scoped>
  div {
    margin: 0.5em auto;
    width: 300px;
  }
</style>
