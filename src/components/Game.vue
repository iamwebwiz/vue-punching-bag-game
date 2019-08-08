<template>
  <div>
    <!-- Image of bag -->
    <PunchingBag :percent="bagHealthStatus" />

    <!-- Bag health -->
    <BagHealth :state="bagHealthState" :percent="bagHealthStatus" />

    <!-- Game controls -->
    <GameControls :health.sync="bagHealthStatus" />
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
      bagHealthState: "success"
    }),
    methods: {
      //
    }
  };
</script>
