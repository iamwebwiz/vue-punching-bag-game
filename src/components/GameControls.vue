<template>
  <div>
    <div id="controls">
      <sui-button primary v-show="!gameEnded" @click="punch">Punch</sui-button>
      <sui-button negative @click="reset">Reset</sui-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GameControls",
    props: ["punch", "gameEnded", "reset"]
  };
</script>
