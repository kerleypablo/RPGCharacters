<template>
  <form-page name-storage="teste">
    <template v-slot:default>
      {{ "teste fomr slot" }}
    </template>
    <template v-slot:View>
      <panel>
        {{ " teste com id" }}
      </panel>
    </template>
  </form-page>
</template>


<script>
import FormPage from "src/components/FormPage.vue";
import Panel from "src/components/panel.vue";

export default {
  name: "campanhaPageForm",
  components: { FormPage, Panel },
};
</script>

<style>
</style>