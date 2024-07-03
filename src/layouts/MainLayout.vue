<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> RPG Personagens </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
        <router-link
          v-for="link in linksList"
          :key="link.title"
          :to="link.route"
          custom
        >
          <q-item clickable v-ripple @click="navigateTo(link.route)">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.title }}</q-item-label>
              <q-item-label caption>{{ link.caption }}</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

defineOptions({
  name: "MainLayout",
});

const router = useRouter();
const linksList = [
  {
    title: "HOME",
    icon: "star",
    route: "/", // Ajuste conforme necessário
  },
  {
    title: "Personagens",
    caption: "Gerenciar personagens",
    icon: "person",
    route: "/personagens/view",
  },
  {
    title: "Equipamentos",
    caption: "Gerenciar equipamentos",
    icon: "build",
    route: "/equipamentos", // Ajuste conforme necessário
  },
  {
    title: "Batalha",
    caption: "Simular batalhas",
    icon: "sports_kabaddi",
    route: "/batalha", // Ajuste conforme necessário
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function navigateTo(route) {
  router.push(route).then(() => {
    if (leftDrawerOpen.value) {
      leftDrawerOpen.value = false;
    }
  });
}
</script>

<style scoped>
/* Remove link styling */
router-link {
  text-decoration: none;
  color: inherit;
}
</style>
