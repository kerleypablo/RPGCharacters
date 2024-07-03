<template>
  <router-link :to="link" class="custom-link">
    <div class="boxbutton">
      <q-card>
        <q-card-section class="border-card">
          <div class="row section">
            <q-icon :name="icon" style="color: #ccc" size="6em" />
            <div
              v-if="title"
              class="panelTitle"
              :style="`color: ${color} ; text-align: center`"
            >
              <spam style="font-size: 15px; font-weight: 800">{{ title }}</spam>
            </div>
            <slot />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "buttonMenu",
  emits: ["update:modelValue"],
  props: {
    componentHook: { type: String },
    modelValue: {},
    title: { type: String },
    color: { type: String, default: "grey" },
    icon: { type: String },
    link: { type: String },
  },
};
</script>

<style scoped>
.boxbutton {
  display: flex;
  width: 100%;
}
.panel {
  min-height: 100%;
}
.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.border-card {
  width: 33vw;
  border: solid 1px #e0e0e0;
  margin: 10px;
  box-shadow: 20 0 10px gray;
}

.border-card:hover {
  background: rgb(218, 214, 214);
}

.panelTitle {
  padding-top: 20px;
}

.custom-link {
  text-decoration: none;
  color: inherit;
  justify-items: center;
}
</style>
