<template>
  <q-page class="flex flex-center">
    <div v-if="this.equipamento">
      <div v-for="(row, index) in this.equipamento" :key="index">
        <kp-cardinfo :data="row" :isPersonagem="false"></kp-cardinfo>
      </div>
    </div>
    <div v-else style="text-align: center">
      <spam>{{
        "nenhum personagem cadastrado clicke em '+' para cadastrar"
      }}</spam>
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
  name: "EquipamentoPageView",
  setup() {
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    const router = useRouter();

    return {
      fabPos,
      draggingFab,
      onClick() {
        router.push(`/equipamentos/form`);
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
    const savedCharacters = localStorage.getItem("equipamentos");
    this.equipamento = JSON.parse(savedCharacters);
  },
  data() {
    return {
      pers: this.equipamento,
    };
  },
};
</script>
  