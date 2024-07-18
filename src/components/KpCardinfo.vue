<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <router-link :to="'/personagens/form?id=' + data.id" class="custom-link">
        <q-card-section v-if="isPersonagem">
          <div class="text-h6 q-mb-xs">{{ data.characterName }}</div>
          <div class="row no-wrap items-center">
            <span class="text-caption text-grey q-ml-sm">NIVEL:</span>
            <span class="text-caption text-grey q-ml-sm">{{ data.level }}</span>
            <span class="text-caption text-grey q-ml-sm">CLASSE:</span>
            <span class="text-caption text-grey q-ml-sm">{{
              data.characterClass
            }}</span>
          </div>
        </q-card-section>
        <q-card-section v-else>
          <div class="text-h6 q-mb-xs">{{ data.nome }}</div>
          <div class="row no-wrap items-center">
            <span class="text-caption text-grey q-ml-sm">{{
              data.isMagic ? "Item Magico" : " Nao Magico"
            }}</span>
            <span class="text-caption text-grey q-ml-sm">Dano:</span>
            <span class="text-caption text-grey q-ml-sm">{{
              `${data?.Numberdata || 0} ${data?.dados?.label || ""} `
            }}</span>
          </div>
        </q-card-section>
      </router-link>
      <q-card-actions>
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>
      <q-slide-transition v-if="isPersonagem">
        <div v-show="expanded">
          <q-card-section class="text-subtitle2">
            <span class="text-caption text-grey q-ml-sm">{{
              data.attributes.strength
            }}</span>
            <span class="text-caption text-grey q-ml-sm">dexterity:</span>
            <span class="text-caption text-grey q-ml-sm">{{
              data.attributes.dexterity
            }}</span>
            <span class="text-caption text-grey q-ml-sm">constitution:</span>
            <span class="text-caption text-grey q-ml-sm">{{
              data.attributes.constitution
            }}</span>
            <span class="text-caption text-grey q-ml-sm">intelligence:</span>
            <span class="text-caption text-grey q-ml-sm">{{
              data.attributes.intelligence
            }}</span>
            <span class="text-caption text-grey q-ml-sm">wisdom:</span>
            <span class="text-caption text-grey q-ml-sm">{{
              data.attributes.wisdom
            }}</span>
            <span class="text-caption text-grey q-ml-sm">charisma:</span>
            <span class="text-caption text-grey q-ml-sm">{{
              data.attributes.charisma
            }}</span>
          </q-card-section>
        </div>
      </q-slide-transition>
      <q-slide-transition v-else>
        <div v-show="expanded">
          <q-card-section class="text-subtitle2">
            <div
              class="row no-wrap items-center"
              style="display: flex; flex-wrap: wrap"
            >
              <span class="text-caption text-grey q-ml-sm">Dado:</span>
              <span class="text-caption text-grey q-ml-sm">
                {{ `${data.damageNumberData} ${data.damageData.label}` }}</span
              >
              <span class="text-caption text-grey q-ml-sm">Efeito:</span>
              <span class="text-caption text-grey q-ml-sm">{{
                data?.efectDescription || ""
              }}</span>
            </div>
          </q-card-section>
        </div>
      </q-slide-transition>

      <router-link
        :to="`/${isPersonagem ? 'personagens' : 'equipamentos'}/form?id=${
          data.id
        }`"
        class="custom-link"
      >
        <img :src="data.selectedImage || ''" class="imagecard" />
      </router-link>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    data: Object,
    isPersonagem: { Boolean, default: true },
  },
  setup() {
    return {
      expanded: ref(false),
    };
  },
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px

.custom-link
  text-decoration: none
  color: inherit

.imagecard
  width: 100%
  object-fit: cover
  max-width: 300px
  height: 150px
</style>
