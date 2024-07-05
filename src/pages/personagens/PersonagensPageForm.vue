<template>
  <q-page>
    <v-slot name="com-id" v-if="hasId">
      <personagem-page-form-id />
    </v-slot>
    <v-slot name="form" v-else>
      <div class="q-pa-md">
        <div class="q-gutter-y-md" style="max-width: 600px">
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              class="bg-grey-2 text-grey-7"
              active-color="primary"
              indicator-color="purple"
              align="justify"
            >
              <q-tab name="infos" label="info" />
              <q-tab name="atributos" label="Atributos" />
              <q-tab name="pericias" label="Perícias" />
              <q-tab name="outros" label="Outros" />
            </q-tabs>
            <q-tab-panels v-model="tab" animated class="text-white">
              <q-tab-panel name="infos">
                <image-picker-vue v-model="character.selectedImage" />
                <q-input
                  clearable
                  filled
                  color="orange"
                  v-model="character.characterName"
                  label="Nome do Personagem"
                  class="q-pt-sm"
                />
                <select-filter
                  :op="racas"
                  v-model="character.race"
                  color="orange"
                  label="Raça"
                />
                <q-input
                  clearable
                  filled
                  color="orange"
                  v-model="character.origin"
                  label="Origem"
                  class="q-pt-sm"
                />
                <select-filter
                  :op="classes"
                  v-model="character.characterClass"
                  color="orange"
                  label="Classes"
                />
                <q-input
                  clearable
                  filled
                  color="orange"
                  type="number"
                  v-model.number="character.level"
                  label="Nível"
                  class="q-pt-sm"
                />
                <q-input
                  clearable
                  filled
                  color="orange"
                  v-model="character.deity"
                  label="Divindade"
                  @input="handleChange('deity', $event)"
                  class="q-pt-sm"
                />
              </q-tab-panel>
              <q-tab-panel name="atributos">
                <q-card-section>
                  <q-input
                    clearable
                    filled
                    color="orange"
                    v-for="(value, attr) in character.attributes"
                    :key="attr"
                    outlined
                    type="number"
                    :label="attr.charAt(0).toUpperCase() + attr.slice(1)"
                    v-model.number="character.attributes[attr]"
                    @input="handleAttributeChange(attr, $event)"
                    :max="20"
                    :min="0"
                    :readonly="false"
                  />
                </q-card-section>
              </q-tab-panel>
              <q-tab-panel name="pericias">
                <q-card-section>
                  <div class="periciaboxtitle">
                    <label class="title-label">Treinado</label>
                    <label class="title-label">Nível 1/2</label>
                    <label class="title-label">Mod. Atributo</label>
                    <label class="title-label">Trino</label>
                    <label class="title-label">Outro</label>
                  </div>
                  <div
                    style="margin-left: -20px"
                    class="periciasclass"
                    v-for="(skill, skillName) in character.skills"
                    :key="skillName"
                  >
                    <label
                      style="
                        color: black;
                        width: 30px;
                        font-size: 12px;
                        padding-right: 70px;
                      "
                      >{{
                        skillName.charAt(0).toUpperCase() + skillName.slice(1)
                      }}</label
                    >
                    <q-checkbox
                      v-model="character.skills[skillName].trained"
                      @input="handleSkillChange(skillName, 'trained', $event)"
                      label-class="checkbox-label"
                    />
                    <q-input
                      outlined
                      style="width: 50px"
                      type="number"
                      v-model.number="character.skills[skillName].level"
                      readonly
                    />
                    <q-input
                      outlined
                      style="width: 50px"
                      type="number"
                      v-model.number="character.skills[skillName].modAtributo"
                      readonly
                    />
                    <q-input
                      outlined
                      style="width: 50px"
                      type="number"
                      v-model.number="character.skills[skillName].proficiency"
                      @input="
                        handleSkillChange(skillName, 'proficiency', $event)
                      "
                    />
                    <q-input
                      outlined
                      style="width: 50px"
                      type="number"
                      v-model.number="character.skills[skillName].other"
                      @input="handleSkillChange(skillName, 'other', $event)"
                    />
                  </div>
                </q-card-section>
              </q-tab-panel>
              <q-tab-panel name="outros">
                <q-card-section>
                  <h2>Outras Informações</h2>
                  <q-input
                    outlined
                    type="number"
                    v-model.number="character.defenses"
                    label="Defesas"
                    readonly
                  />
                  <q-input
                    outlined
                    type="textarea"
                    v-model="character.abilities"
                    label="Habilidades"
                    @input="handleChange('abilities', $event)"
                  />
                  <q-input
                    outlined
                    type="textarea"
                    v-model="character.equipment"
                    label="Equipamentos"
                    @input="handleChange('equipment', $event)"
                  />
                  <q-input
                    outlined
                    type="textarea"
                    v-model="character.background"
                    label="Histórico"
                    @input="handleChange('background', $event)"
                  />
                  <q-input
                    outlined
                    type="textarea"
                    v-model="character.spells"
                    label="Magias"
                    @input="handleChange('spells', $event)"
                  />
                  <q-input
                    outlined
                    type="textarea"
                    v-model="character.attacks"
                    label="Ataques"
                    @input="handleChange('attacks', $event)"
                  />
                </q-card-section>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
      <q-card class="fixed-card">
        <q-card-actions align="right">
          <q-btn
            color="primary"
            label="Salvar"
            type="submit"
            @click="handleSubmit"
          />
        </q-card-actions>
      </q-card>
    </v-slot>
  </q-page>
</template>

<script>
const skillAttributes = {
  acrobatics: "dexterity",
  animalHandling: "charisma",
  athletics: "strength",
  performance: "charisma",
  ride: "dexterity",
  knowledge: "intelligence",
  heal: "wisdom",
  diplomacy: "charisma",
  deception: "charisma",
  fortitude: "constitution",
  insight: "wisdom",
  investigation: "intelligence",
  gambling: "charisma",
  thievery: "dexterity",
  fight: "strength",
  arcana: "intelligence",
  nobility: "intelligence",
  perception: "wisdom",
  piloting: "dexterity",
  archery: "dexterity",
  reflex: "dexterity",
  religion: "wisdom",
  survival: "wisdom",
  will: "wisdom",
  craft1: "", // Custom
  craft2: "", // Custom
};

import { ref } from "vue";
import { classes, racas } from "../index";
import PersonagemPageFormId from "./personagemPageFormId.vue";
import selectFilter from "../../components/selectFilter.vue";
import ImagePickerVue from "src/components/ImagePicker.vue";

export default {
  components: { PersonagemPageFormId, selectFilter, ImagePickerVue },
  name: "PersonagensPageForm",
  data() {
    return {
      tab: ref("infos"),
      classes,
      racas,
      character: {
        characterName: "",
        race: "",
        origin: "",
        characterClass: "",
        level: 1,
        deity: "",
        foto: "",
        selectedImage: "",
        attributes: {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0,
        },
        skills: Object.keys(skillAttributes).reduce((acc, skill) => {
          acc[skill] = {
            trained: false,
            level: 0,
            modAtributo: 0,
            other: 0,
            treino: 0,
            total: 0,
          };
          return acc;
        }, {}),
        abilities: [],
        equipment: [],
        background: [],
        spells: [],
        attacks: [],
        defenses: 10,
      },
    };
  },
  watch: {
    "character.level"() {
      this.calcLevelPoints();
    },
    "character.attributes": {
      deep: true,
      async handler(val) {
        this.handleAttributeChange(val);
      },
    },
  },
  created() {
    if (this.hasId) {
      const savedCharacters = localStorage.getItem("characters");
      const savePersonagem = JSON.parse(savedCharacters);
      const index = savePersonagem.findIndex(
        (perso) => perso.id === Number(this.$route.query.id)
      );
      if (index !== -1) {
        this.character = savePersonagem[index];
      }
    }
    this.resetForm();
  },
  computed: {
    hasId() {
      return Object(this.$route.query).hasOwnProperty("id");
    },
    skillModifiers() {
      return Object.keys(this.character.skills).reduce((acc, skillName) => {
        const attribute = skillAttributes[skillName];
        const attributeValue = this.character.attributes[attribute];
        acc[skillName] = Math.floor((attributeValue - 10) / 2); // Calcula o modificador do atributo
        return acc;
      }, {});
    },
  },
  methods: {
    filterFn(val, update, options) {
      if (val === "") {
        update(() => {
          options.value = stringOptions;
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        options.value = stringOptions.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    calcLevelPoints() {
      const points = Math.floor(this.character.level / 2);
      Object.keys(this.character.skills).forEach((skillName) => {
        this.character.skills[skillName].level = points;
      });
      return "";
    },
    handleAttributeChange(atributos) {
      Object.keys(skillAttributes).forEach((skillName) => {
        const attributeKey = skillAttributes[skillName];
        let attributeValue = 0;
        if (attributeKey) {
          this.character.skills[skillName].modAtributo =
            atributos[attributeKey];
        }
      });
    },
    handleSkillChange(skill, field, event) {
      const value =
        event.target.type === "checkbox"
          ? event.target.checked
          : parseInt(event.target.value);
      this.character.skills[skill][field] = value;
    },
    handleSubmit() {
      const savedCharacters = localStorage.getItem("characters");
      if (savedCharacters) {
        const personagens = JSON.parse(savedCharacters);
        this.character.id = savedCharacters.length + 1;
        personagens.push(this.character);
        localStorage.setItem("characters", JSON.stringify(personagens));
        this.$router.push(`${this.$route.fullPath}?id=${this.character.id}`);
        this.hasId = true;
        return;
      }
      this.character.id = 1;
      const save = [this.character];
      localStorage.setItem("characters", JSON.stringify(save));

      this.$router.push(`${this.$route.fullPath}?id=${this.character.id}`);
      this.hasId = true;
      //this.$emit("save", this.character);
    },
    resetForm() {
      this.character = {
        playerName: "",
        characterName: "",
        race: "",
        origin: "",
        characterClass: "",
        level: 1,
        deity: "",
        attributes: {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0,
        },
        skills: Object.keys(skillAttributes).reduce((acc, skill) => {
          acc[skill] = {
            trained: false,
            level: 0,
            modAtributo: 0,
            other: 0,
            treino: 0,
            total: 0,
          };
          return acc;
        }, {}),
        abilities: [],
        equipment: [],
        background: "",
        spells: [],
        attacks: "",
        defenses: 10,
      };
    },
  },
};
</script>

<style scoped>
.periciasclass {
  display: flex;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}
.title-label,
.checkbox-label {
  font-weight: bold;
}
.periciaboxtitle {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px 0;
  margin-right: 5px;
  font-size: 13px;

  border-bottom: 1px solid #ddd;
}

.periciasclass label {
  margin-right: 10px;
}

.periciaboxtitle {
  display: flex;
  color: red;
}

.periciaboxtitle label {
  justify-content: flex-end;
  padding-left: 19px;
  text-align: center;
}
</style>
