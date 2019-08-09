<template>
  <div>
    <!-- Image of bag -->
    <PunchingBag :gameEnded="gameEnded" />

    <!-- Bag health -->
    <BagHealth :state="bagHealthState" :health="bagHealthStatus" />

    <!-- Game controls -->
    <GameControls
      :punch="handleBagPunch"
      :gameEnded="gameEnded"
      :reset="handleReset"
    />
  </div>
</template>

<script>
  import PunchingBag from "./PunchingBag";
  import BagHealth from "./BagHealth";
  import GameControls from "./GameControls";

  export default {
    name: "PunchingBagGame",
    components: { PunchingBag, BagHealth, GameControls },
    data: () => ({
      bagHealthStatus: 100,
      bagHealthState: "success",
      gameEnded: false
    }),
    methods: {
      handleBagPunch() {
        this.bagHealthStatus -= 10;
      },
      handleReset() {
        this.bagHealthStatus = 100;
        this.gameEnded = false;
        this.bagHealthState = "success";
      }
    },
    watch: {
      bagHealthStatus(value) {
        if (value >= 30 && value <= 50) this.bagHealthState = "warning";
        if (value < 30) this.bagHealthState = "error";
        if (value === 0) this.gameEnded = true;
      }
    }
  };
</script>
