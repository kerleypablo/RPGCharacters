<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal class="d-flex">
        <q-img class="imagecard" src="https://cdn.quasar.dev/img/mountains.jpg">
          <div class="absolute-bottom text-subtitle2 text-center">Title</div>
        </q-img>

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_left' : 'keyboard_arrow_right'"
          @click="expanded = !expanded"
        />

        <transition name="slide-horizontal">
          <div v-if="expanded" class="infoexpanded">
            <q-separator vertical />
            <q-card-section>
              {{ "lorem" }}
            </q-card-section>
          </div>
        </transition>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const expanded = ref(false);
    return {
      expanded,
    };
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.imagecard {
  width: 200px;
  object-fit: cover;
  height: 150px;
}

.infoexpanded {
  display: flex;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, max-width 0.3s ease-in-out;
  transform: translateX(0);
  max-width: 100vh;
}
</style>
