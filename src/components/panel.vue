<template>
  <div :class="panelClass" class="q-mt-md">
    <q-card class="panel no-shadow" :class="`border-card`">
      <div
        v-if="title"
        class="panelTitle"
        :style="`color: ${color} ; text-align: center`"
      >
        <spam style="font-size: 15px; font-weight: 800">{{ title }}</spam>
      </div>
      <q-card-section>
        <div
          class="row q-pa-none q-ma-none relative-position q-col-gutter-md"
          style="justify-content: center"
        >
          <slot />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "panelPage",
  emits: ["update:modelValue"],
  props: {
    componentHook: { type: String },
    modelValue: {},
    title: { type: String },
    color: { type: String, default: "black" },
  },
};
</script>

<style scoped>
.panel {
  min-height: 100%;
}
.border-card {
  height: 100%;
  border: solid 1px #e0e0e0;
  margin: 10px;
}

.panelTitle spam {
  border-bottom: 2px solid black;
}
</style>
