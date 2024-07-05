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
  },
};
</script>
  
  <style scoped>
.image-picker {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  width: 150px;
  height: 150px;
  border: 2px dashed #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.preview-image {
  max-width: 100%;
  max-height: 100%;
}

.placeholder {
  color: #ccc;
  text-align: center;
}
</style>
  