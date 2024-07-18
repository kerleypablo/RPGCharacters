<template>
  <form-page name-storage="equipamentos" :model-value="this.equipamento">
    <template v-slot:default>
      <panel>
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
                  <q-checkbox
                    v-model="equipamento.isMagic"
                    label="È magico?"
                    color="teal"
                  />
                </div>
              </div>
            </panel>
            <panel v-if="isEscudo || isArmadura">
              <div>
                <q-input
                  clearable
                  filled
                  color="orange"
                  type="number"
                  v-model.number="equipamento.defesa"
                  label="Defesa"
                  class="q-pt-sm"
                />
                <q-input
                  clearable
                  filled
                  color="orange"
                  type="number"
                  v-model.number="equipamento.penalidade"
                  label="Penalidade"
                  class="q-pt-sm"
                />
                <div class="typeBox">
                  <label>Tipo:</label>
                  <div v-for="tp in PESO.OPTIONS" :key="tp.order">
                    <q-radio
                      keep-color
                      v-model="equipamento.tipo"
                      :val="tp.value"
                      :label="tp.label"
                      :color="tp.color"
                    />
                  </div>
                  <q-checkbox
                    v-model="equipamento.isMagic"
                    label="È magico?"
                    color="teal"
                  />
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
                <div>
                  <q-checkbox
                    v-model="equipamento.ischangeAtributes"
                    label="Altera Atributo?"
                    color="teal"
                  />
                  <div v-if="ischangeAtributes">
                    <q-input
                      outlined
                      type="number"
                      v-model.number="equipamento.changeAtributes.strength"
                      label="Força"
                    />
                    <q-input
                      outlined
                      type="number"
                      v-model="equipamento.changeAtributes.dexterity"
                      label="Defesa"
                    />
                    <q-input
                      outlined
                      type="number"
                      v-model="equipamento.changeAtributes.constitution"
                      label="Constituição"
                    />
                    <q-input
                      outlined
                      type="number"
                      v-model="equipamento.changeAtributes.intelligence"
                      label="Inteligencia"
                    />
                    <q-input
                      outlined
                      type="number"
                      v-model="equipamento.changeAtributes.wisdom"
                      label="Sabedoria"
                    />
                    <q-input
                      outlined
                      type="number"
                      v-model="equipamento.changeAtributes.charisma"
                      label="Carisma"
                    />
                  </div>
                </div>
              </div>
            </panel>
          </div>
        </div>
      </panel>
    </template>
    <template v-slot:View> <equipamento-page-form-id /></template>
  </form-page>
</template>

<script>
import panel from "src/components/panel.vue";
import { TIPO_EQUIPAMENTO, TIPO_MAOS, PESO } from "./index";
import { DADOS_RPG } from "../index";
import SelectFilter from "src/components/selectFilter.vue";
import ImagePickerVue from "src/components/ImagePicker.vue";
import EquipamentoPageFormId from "./EquipamentoPageFormId.vue";
import FormPage from "src/components/FormPage.vue";

export default {
  components: {
    panel,
    SelectFilter,
    ImagePickerVue,
    EquipamentoPageFormId,
    FormPage,
  },
  name: "EquipamentosPageForm",
  setup() {
    return {};
  },

  data() {
    return {
      PESO,
      TIPO_EQUIPAMENTO,
      DADOS_RPG,
      TIPO_MAOS,
      hasid: false,
      equipamento: {
        name: "",
        type: "",
        isMagic: false,
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
        ischangeAtributes: false,
        changeAtributes: {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0,
        },
      },
    };
  },

  computed: {
    hasId() {
      return Object(this.$route.query).hasOwnProperty("id");
    },
    isArmor() {
      return this.equipamento.type === TIPO_EQUIPAMENTO.ARMA;
    },
    isArmadura() {
      return this.equipamento.type === TIPO_EQUIPAMENTO.ARMADURA;
    },
    isEscudo() {
      return this.equipamento.type === TIPO_EQUIPAMENTO.ESCUDO;
    },
    hasEfect() {
      return this.equipamento.hasEfect;
    },
    hasDamageEfect() {
      return this.equipamento.hasDamageEfect;
    },
    ischangeAtributes() {
      return this.equipamento.ischangeAtributes;
    },
  },
  watch: {
    "equipamento.type"() {
      this.limpaDados();
    },
  },
  methods: {
    limpaDados() {
      (this.equipamento.hasEfect = false),
        (this.equipamento.hasDamageEfect = false),
        (this.equipamento.isMagic = false),
        (this.equipamento.ischangeAtributes = false),
        (this.equipamento.damageData = ""),
        (this.equipamento.efectDescription = ""),
        (this.equipamento.hands = ""),
        (this.equipamento.peso = ""),
        (this.equipamento.changeAtributes = {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0,
        });
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