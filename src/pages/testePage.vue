<template>
  <div>
    <kp-card-info-rtg :data="{ teste: 'teste' }"></kp-card-info-rtg>
  </div>
</template>

<script>
import KpCardInfoRtg from "src/components/KpCardInfoRtg.vue";

export default {
  name: "testePage",
  components: { KpCardInfoRtg },
};
</script>

<style>
</style>