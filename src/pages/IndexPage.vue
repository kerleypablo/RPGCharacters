<template>
  <q-page c>
    <div style="text-align: center; padding: 10px 0px">
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      />
    </div>
    <panel>
      <button-menu title="Campanha" link="/campanhas/form" icon="public" />
      <button-menu
        title="Personagens"
        link="/personagens/view"
        icon="settings_accessibility"
      />
      <button-menu title="Equipamentos" link="/equipamentos/view" icon="eco" />
      <button-menu
        title="Configurações"
        link="/personagens/view"
        icon="settings"
      />
    </panel>
  </q-page>
</template>

<script setup>
import panel from "../components/panel.vue";
import buttonMenu from "../components/buttonMenu.vue";

defineOptions({
  name: "IndexPage",
});
</script>
