<template>
  <q-page>
    <div>
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
          <q-tab name="atributos" label="Equipamentos" />
          <q-tab name="pericias" label="Perícias" />
          <q-tab name="outros" label="Background" />
        </q-tabs>
        <q-tab-panels v-model="tab" animated class="text-white">
          <q-tab-panel name="infos">
            <panel>
              <div class="tabInfochar">
                <div class="fotochar">foto</div>
                <diiv>
                  <spam class="infoTitle">NOME: </spam>
                  <spam class="info">{{ this.character.characterName }}</spam>
                </diiv>
                <diiv>
                  <spam class="infoTitle">RAÇA: </spam>
                  <spam class="info">{{ this.character.race }}</spam>
                </diiv>
                <diiv>
                  <spam class="infoTitle">ORIGEM: </spam>
                  <spam class="info">{{ this.character.origin }}</spam>
                </diiv>
                <diiv>
                  <spam class="infoTitle">CLASEE: </spam>
                  <spam class="info">{{ this.character.characterClass }}</spam>
                </diiv>
                <diiv>
                  <spam class="infoTitle">LEVEL: </spam>
                  <spam class="info">{{ this.character.level }}</spam>
                </diiv>
                <diiv>
                  <spam class="infoTitle">deity: </spam>
                  <spam class="info">{{ this.character.deity }}</spam>
                </diiv>
              </div>
            </panel>
            <panel>
              <div class="panelAtributes">
                <div class="flex q-ma-sm" style="width: 25%">
                  <q-knob
                    disable
                    max="20"
                    v-model="this.character.attributes.strength"
                    show-value
                    size="96px"
                    :thickness="0.22"
                    color="red"
                    track-color="red-3"
                    class="text-primary"
                  />
                  <spam style="width: 100%; text-align: center; color: black">
                    strength
                  </spam>
                </div>
                <div class="flex q-ma-sm" style="width: 25%">
                  <q-knob
                    disable
                    max="20"
                    v-model="this.character.attributes.dexterity"
                    show-value
                    size="96px"
                    :thickness="0.22"
                    color="red"
                    track-color="red-3"
                    class="text-primary"
                  />
                  <spam style="width: 100%; text-align: center; color: black">
                    dexterity
                  </spam>
                </div>
                <div class="flex q-ma-sm" style="width: 25%">
                  <q-knob
                    disable
                    max="20"
                    v-model="this.character.attributes.constitution"
                    show-value
                    size="96px"
                    :thickness="0.22"
                    color="red"
                    track-color="red-3"
                    class="text-primary"
                  />
                  <spam style="width: 100%; text-align: center; color: black">
                    constitution
                  </spam>
                </div>
                <div class="flex q-ma-sm" style="width: 25%">
                  <q-knob
                    disable
                    max="20"
                    v-model="this.character.attributes.intelligence"
                    show-value
                    size="96px"
                    :thickness="0.22"
                    color="red"
                    track-color="red-3"
                    class="text-primary"
                  />
                  <spam style="width: 100%; text-align: center; color: black">
                    intelligence
                  </spam>
                </div>
                <div class="flex q-ma-sm" style="width: 25%">
                  <q-knob
                    disable
                    max="20"
                    v-model="this.character.attributes.wisdom"
                    show-value
                    size="96px"
                    :thickness="0.22"
                    color="red"
                    track-color="red-3"
                    class="text-primary"
                  />
                  <spam style="width: 100%; text-align: center; color: black">
                    wisdom
                  </spam>
                </div>
                <div class="flex q-ma-sm" style="width: 25%">
                  <q-knob
                    disable
                    max="20"
                    v-model="this.character.attributes.charisma"
                    show-value
                    size="96px"
                    :thickness="0.22"
                    color="red"
                    track-color="red-3"
                    class="text-primary"
                  />
                  <spam style="width: 100%; text-align: center; color: black">
                    charisma
                  </spam>
                </div>
              </div>
            </panel>
            <panel>
              <div
                class="q-pa-md flex flex-center"
                style="width: 100%; color: black"
              >
                <div class="flex q-ma-sm" style="width: 30%">
                  <q-knob
                    disable
                    max="20"
                    v-model="this.character.attributes.charisma"
                    show-value
                    size="90px"
                    :thickness="0.22"
                    color="green"
                    track-color="green-3"
                    class="text-primary"
                  />
                  <spam style="width: 100%; text-align: center; color: black">
                    Pontos de Vidas
                  </spam>
                </div>

                <div class="flex q-ma-sm" style="width: 30%">
                  <q-knob
                    readonly
                    max="20"
                    v-model="this.character.attributes.charisma"
                    show-value
                    size="90px"
                    :thickness="0.22"
                    color="primary"
                    track-color="blue-3"
                    class="text-orange"
                  />
                  <spam style="width: 100%; text-align: center; color: black">
                    Pontos de Mana
                  </spam>
                </div>
              </div>
            </panel>
            <panel>
              <div
                class="q-pa-md flex flex-center"
                style="width: 100%; color: black"
              >
                <div class="q-pa-md flex flex-center" style="width: 50%">
                  <q-knob
                    disable
                    max="20"
                    v-model="this.character.attributes.charisma"
                    show-value
                    size="90px"
                    :thickness="0.22"
                    color="orange"
                    track-color="orange-3"
                    class="text-primary q-ma-md"
                  />
                  <spam style="width: 50%; text-align: center"> Defesa </spam>
                </div>
              </div>
            </panel>
          </q-tab-panel>
          <q-tab-panel name="atributos">
            <q-card-section> </q-card-section>
          </q-tab-panel>
          <q-tab-panel name="pericias">
            <q-card-section style="color: black">
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
                  disable
                  label-class="checkbox-label"
                />
                <div class="boxValue">
                  {{ character.skills[skillName].level }}
                </div>
                <div class="boxValue">
                  {{ character.skills[skillName].modAtributo }}
                </div>
                <div class="boxValue">
                  {{ character.skills[skillName].proficiency || 0 }}
                </div>
                <div class="boxValue">
                  {{ character.skills[skillName].other }}
                </div>
                <div style="color: red; font-size: 18px">
                  {{
                    `=${
                      character.skills[skillName].other ||
                      0 + character.skills[skillName].proficiency ||
                      character.skills[skillName].modAtributo +
                        character.skills[skillName].level
                    } `
                  }}
                </div>
              </div>
            </q-card-section>
          </q-tab-panel>
          <q-tab-panel name="outros">
            <q-card-section>
              <panel title="background">
                <div>{{ character.background }}</div>
              </panel>
            </q-card-section>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
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
import { peronagens } from "../index";
import panel from "../../components/panel.vue";

export default {
  components: { panel },
  name: "PersonagensPageForm",
  data() {
    return {
      tab: ref("infos"),
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
      const index = peronagens.findIndex(
        (perso) => perso.id === Number(this.$route.query.id)
      );
      if (index !== -1) {
        this.character = peronagens[index];
      }
    }
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
      if (this.character.id) {
        const Personagem = peronagens.find(
          (perso) => person.id === this.character.id
        );
        Personagem = this.character;
        const index = peronagens.findIndex(
          (perso) => perso.id === this.character.id
        );
        if (index !== -1) {
          usperonagensers.splice(index, 1, Personagem);
        }
        this.$router.push(`${this.$route.fullPath}?id=${this.character.id}`);
        return;
      }
      this.character.id = peronagens.length + 1;
      peronagens.push(this.character);

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
.circle {
  background-color: rgb(231, 151, 151);
  display: flex;
  margin: 10px;
  border: 3px solid black;
  justify-content: center;
  align-items: center;
  color: white;
  height: 80px;
  width: 80px;
  border-radius: 50%;
}

.panelAtributes {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
  justify-content: center;
  align-items: center;
}
.labelCirclespam {
  color: black;
  font-size: 15px;
  padding-left: 20px;
  margin-top: 20px;
}

.tabInfochar {
  color: black;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 0;
}

.fotochar {
  width: 100%;
  display: block;
  text-align: center;
  padding: auto;
}

.infoTitle {
  font-size: 12px;
  padding-right: 10px;
  font-weight: bold;
}

.periciasclass {
  display: flex;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}

.title-label,
.checkbox-label {
  font-weight: bold;
  width: 90px;
}
.periciaboxtitle {
  display: flex;
  align-items: flex-end;
  margin-right: 5px;
  font-size: 15px;
  margin-left: 20px;
  margin-right: 30px;
}

.periciasclass label {
  margin-right: 20px;
}

.periciaboxtitle {
  display: flex;
  color: red;
}

.periciaboxtitle label {
  justify-content: flex-end;
  padding-left: 15px;
  text-align: center;
}

.boxValue {
  width: 50px;
  text-align: center;
  border: 1px solid black;
  margin: 2px;
}
</style>
