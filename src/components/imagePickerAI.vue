<template>
  <div class="image-picker">
    <input
      type="file"
      @change="onFileChange"
      ref="fileInput"
      accept="image/*"
      hidden
    />
    <div class="image-container" @click="selectImage">
      <img :src="imageSrc" v-if="imageSrc" class="preview-image" />
      <div v-else class="placeholder">Clique para selecionar uma imagem</div>
    </div>
    <q-input
      v-model="imageDescription"
      label="Descrição da Imagem"
      filled
      class="q-pt-sm"
    />
    <q-btn label="Gerar Imagem" @click="generateImage" class="q-mt-sm" />
  </div>
</template>

<script>
export default {
  name: "ImagePicker",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      imageSrc: this.modelValue || null,
      imageDescription: "",
    };
  },
  watch: {
    modelValue(newVal) {
      this.imageSrc = newVal;
    },
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageSrc = e.target.result;
          this.$emit("update:modelValue", this.imageSrc);
        };
        reader.readAsDataURL(file);
      }
    },
    async generateImage() {
      try {
        const response = await this.callImageGenerationAPI(
          this.imageDescription
        );
        this.imageSrc = response.output_url;
        this.$emit("update:modelValue", this.imageSrc);
      } catch (error) {
        console.error("Error generating image:", error);
      }
    },
    async callImageGenerationAPI(description) {
      const response = await fetch("https://api.deepai.org/api/text2img", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": "YOUR_API_KEY",
        },
        body: JSON.stringify({ text: description }),
      });
      return response.json();
    },
  },
};
</script>
