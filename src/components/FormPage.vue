<template>
  <template v-if="hasId">
    <slot name="View"> </slot>
  </template>
  <template v-else>
    <q-page>
      <q-page-container style="padding-top: 0px">
        <panel>
          <slot />
        </panel>
      </q-page-container>
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
    </q-page>
  </template>
</template>
  
  <script>
import panel from "src/components/panel.vue";

export default {
  components: { panel },
  name: "FormPage",
  setup() {
    return {};
  },
  props: {
    nameStorage: { type: String, default: "" },
    modelValue: { type: Object },
  },

  data() {
    return {
      form: {
        data: {},
      },
    };
  },
  created() {
    if (this.hasId) {
      const storage = localStorage.getItem(`${this.nameStorage}`);
      const storageSaved = JSON.parse(storage);
      const index = storageSaved.findIndex(
        (perso) => perso.id === Number(this.$route.query.id)
      );
      if (index !== -1) {
        this.form.data = storageSaved[index];
      }
    }
    this.clearForm();
  },

  computed: {
    hasId() {
      return Object(this.$route.query).hasOwnProperty("id");
    },
  },
  methods: {
    clearForm() {
      this.form.data = {};
    },
    handleSubmit() {
      debugger;
      this.form.data = this.modelValue;
      const saveStorage = localStorage.getItem(`${this.nameStorage}`);
      if (saveStorage) {
        const data = JSON.parse(saveStorage);
        this.form.data.id = saveStorage.length + 1;
        data.push(this.form.data);
        localStorage.setItem(`${this.nameStorage}`, JSON.stringify(data));
        this.$router.push(`${this.$route.fullPath}?id=${this.form.data.id}`);
        this.hasId = true;
        this.clearForm();
        return;
      }
      this.form.data.id = 1;
      const save = [this.form.data];
      localStorage.setItem(`${this.nameStorage}`, JSON.stringify(save));

      this.$router.push(`${this.$route.fullPath}?id=${this.form.data.id}`);
      this.hasId = true;
      this.clearForm();
    },
  },
};
</script>
  
  <style scoped>
</style>