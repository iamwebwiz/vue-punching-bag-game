<template>
  <div>
    <div id="controls">
      <sui-button primary @click="punchBag">Punch</sui-button>
      <sui-button negative>Reset</sui-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GameControls",
    props: ["health"],
    methods: {
      punchBag() {
        this.$emit("update:health", (this.health -= 10));
      }
    }
  };
</script>
