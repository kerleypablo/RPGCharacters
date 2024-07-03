<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <router-link
        :to="'/personagens/form?id=' + personagem.id"
        class="custom-link"
      >
        <q-card-section>
          <div class="text-h6 q-mb-xs">{{ personagem.characterName }}</div>
          <div class="row no-wrap items-center">
            <span class="text-caption text-grey q-ml-sm">NIVEL:</span>
            <span class="text-caption text-grey q-ml-sm">{{
              personagem.level
            }}</span>
            <span class="text-caption text-grey q-ml-sm">CLASSE:</span>
            <span class="text-caption text-grey q-ml-sm">{{
              personagem.characterClass
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

      <q-slide-transition>
        <div v-show="expanded">
          <q-card-section class="text-subtitle2">
            <div
              class="row no-wrap items-center"
              style="display: flex; flex-wrap: wrap"
            >
              <span class="text-caption text-grey q-ml-sm">strength:</span>
              <span class="text-caption text-grey q-ml-sm">{{
                personagem.attributes.strength
              }}</span>
              <span class="text-caption text-grey q-ml-sm">dexterity:</span>
              <span class="text-caption text-grey q-ml-sm">{{
                personagem.attributes.dexterity
              }}</span>
              <span class="text-caption text-grey q-ml-sm">constitution:</span>
              <span class="text-caption text-grey q-ml-sm">{{
                personagem.attributes.constitution
              }}</span>
              <span class="text-caption text-grey q-ml-sm">intelligence:</span>
              <span class="text-caption text-grey q-ml-sm">{{
                personagem.attributes.intelligence
              }}</span>
              <span class="text-caption text-grey q-ml-sm">wisdom:</span>
              <span class="text-caption text-grey q-ml-sm">{{
                personagem.attributes.wisdom
              }}</span>
              <span class="text-caption text-grey q-ml-sm">charisma:</span>
              <span class="text-caption text-grey q-ml-sm">{{
                personagem.attributes.charisma
              }}</span>
            </div>
          </q-card-section>
        </div>
      </q-slide-transition>
      <router-link
        :to="'/personagens/form?id=' + personagem.id"
        class="custom-link"
      >
        <img src="https://cdn.quasar.dev/img/mountains.jpg" class="imagecard" />
      </router-link>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    personagem: Object,
  },
  setup() {
    return {
      expanded: ref(false),
    };
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
  max-width: 300px
</style>
