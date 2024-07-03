<template>
  <q-page class="flex flex-center">
    <div v-for="(row, index) in this.character" :key="index">
      <kp-cardinfo :personagem="row"></kp-cardinfo>
    </div>
    <q-page-sticky position="bottom-right" :offset="fabPos">
      <q-fab
        icon="add"
        direction="up"
        color="accent"
        class="q-pb-xl"
        :disable="draggingFab"
        v-touch-pan.prevent.mouse="moveFab"
      >
        <q-fab-action
          @click="onClick"
          color="primary"
          icon="person_add"
          :disable="draggingFab"
        />
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>



<script >
import KpCardinfo from "src/components/KpCardinfo.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  components: { KpCardinfo },
  name: "PersonagenPageView",
  title: "Contratos - Visualização",
  setup() {
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    const router = useRouter();

    return {
      fabPos,
      draggingFab,
      onClick() {
        router.push(`/personagens/form`);
      },
      moveFab(ev) {
        draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;

        fabPos.value = [
          fabPos.value[0] - ev.delta.x,
          fabPos.value[1] - ev.delta.y,
        ];
      },
    };
  },
  created() {
    const savedCharacters = localStorage.getItem("characters");
    this.character = JSON.parse(savedCharacters);
    console.log(this.character);
  },
  data() {
    return {
      pers: this.character,
    };
  },
};
</script>
