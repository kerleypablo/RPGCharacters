.<template>
  <q-page>
    <panel>
      <div class="fotochar">
        <img :src="this.equipamento.selectedImage" class="imagecard" />
      </div>
    </panel>
  </q-page>
</template>

<script>
import panel from "src/components/panel.vue";

export default {
  components: { panel },
  name: "EquipamentoPageFormId",

  created() {
    if (this.hasId) {
      debugger;
      const storage = localStorage.getItem("equipamentos");
      const savedEquipamento = JSON.parse(storage);
      const index = savedEquipamento.findIndex(
        (perso) => perso.id === Number(this.$route.query.id)
      );
      if (index !== -1) {
        this.equipamento = savedEquipamento[index];
      }
    }
  },

  data() {},

  computed: {
    hasId() {
      return Object(this.$route.query).hasOwnProperty("id");
    },
  },
};
</script>

<style>
.fotochar {
  display: block;
  text-align: center;
  padding: auto;
}
</style>