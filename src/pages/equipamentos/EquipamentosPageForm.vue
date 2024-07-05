<template>
  <div class="main-container">
    <div class="content">
      <image-picker-vue v-model="equipamento.selectedImage" />
      <panel>
        <div>
          <q-input
            clearable
            filled
            color="orange"
            v-model="equipamento.name"
            label="Nome"
            class="q-pt-sm"
          />
          <div class="typeBox">
            <label>Tipo:</label>
            <div v-for="eqp in TIPO_EQUIPAMENTO.OPTIONS" :key="eqp.order">
              <q-radio
                keep-color
                v-model="equipamento.type"
                :val="eqp.value"
                :label="eqp.label"
                :color="eqp.color"
              />
            </div>
          </div>
        </div>
      </panel>
      <panel v-if="isArmor">
        <div>
          <q-input
            clearable
            filled
            color="orange"
            type="number"
            v-model.number="equipamento.Numberdata"
            label="numero de dados"
            class="q-pt-sm"
          />
          <select-filter
            :op="DADOS_RPG.OPTIONS"
            v-model="equipamento.dados"
            color="orange"
            label="Tipo de Dado"
          />
          <div class="typeBox">
            <label>Ocupa:</label>
            <div v-for="tp in TIPO_MAOS.OPTIONS" :key="tp.order">
              <q-radio
                keep-color
                v-model="equipamento.hands"
                :val="tp.value"
                :label="tp.label"
                :color="tp.color"
              />
            </div>
          </div>
        </div>
      </panel>
      <panel>
        <div class="q-pa-md">
          <q-checkbox
            v-model="equipamento.hasEfect"
            label="Possui Efeito"
            color="teal"
          />
          <div v-if="hasEfect">
            <q-input
              clearable
              filled
              autogrow
              color="orange"
              type="text"
              v-model.number="equipamento.efectDescription"
              label="Descreva o Efeito"
              class="q-pt-sm"
            />
            <q-checkbox
              v-model="equipamento.hasDamageEfect"
              label="Possui Dano"
              color="teal"
            />
          </div>
          <div v-if="hasDamageEfect">
            <q-input
              clearable
              filled
              color="orange"
              type="number"
              v-model.number="equipamento.damageNumberData"
              label="numero de dados"
              class="q-pt-sm"
            />
            <select-filter
              :op="DADOS_RPG.OPTIONS"
              v-model="equipamento.damageData"
              color="orange"
              label="Tipo de Dado"
            />
          </div>
        </div>
      </panel>
    </div>
  </div>
  <q-card class="fixed-button">
    <q-card-actions align="right">
      <q-btn
        color="primary"
        label="Salvar"
        type="submit"
        @click="handleSubmit"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import panel from "src/components/panel.vue";
import { TIPO_EQUIPAMENTO, TIPO_MAOS } from "./index";
import { DADOS_RPG } from "../index";
import SelectFilter from "src/components/selectFilter.vue";
import ImagePickerVue from "src/components/ImagePicker.vue";

export default {
  components: { panel, SelectFilter, ImagePickerVue },
  name: "EquipamentosPageForm",
  setup() {
    return {};
  },

  data() {
    return {
      TIPO_EQUIPAMENTO,
      DADOS_RPG,
      TIPO_MAOS,
      hasid: false,
      equipamento: {
        name: "",
        type: "",
        Numberdata: 1,
        dado: "",
        peso: "",
        hands: "",
        hasEfect: false,
        efectDescription: "",
        hasDamageEfect: false,
        damageData: "",
        damageNumberData: 1,
        selectedImage: "",
      },
    };
  },

  computed: {
    isArmor() {
      return this.equipamento.type === TIPO_EQUIPAMENTO.ARMA;
    },
    hasEfect() {
      return this.equipamento.hasEfect;
    },
    hasDamageEfect() {
      return this.equipamento.hasDamageEfect;
    },
  },
  methods: {
    clearForm() {
      this.equipamento = {
        equipamento: {
          name: "",
          type: "",
          Numberdata: 1,
          dado: "",
          peso: "",
          hands: "",
          hasEfect: false,
          efectDescription: "",
          hasDamageEfect: false,
          damageData: "",
          damageNumberData: 1,
          selectedImage: "",
        },
      };
    },
    handleSubmit() {
      const savedEquipamento = localStorage.getItem("equipamentos");
      if (savedEquipamento) {
        const equipamentos = JSON.parse(savedEquipamento);
        this.equipamento.id = savedEquipamento.length + 1;
        equipamentos.push(this.equipamento);
        localStorage.setItem("equipamentos", JSON.stringify(equipamentos));
        this.$router.push(`${this.$route.fullPath}?id=${this.equipamento.id}`);
        this.hasId = true;
        this.clearForm();
        return;
      }
      this.equipamento.id = 1;
      const save = [this.equipamento];
      localStorage.setItem("equipamentos", JSON.stringify(save));

      this.$router.push(`${this.$route.fullPath}?id=${this.equipamento.id}`);
      this.hasId = true;
      this.clearForm();
    },
  },
};
</script>

<style scoped>
.typeBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>