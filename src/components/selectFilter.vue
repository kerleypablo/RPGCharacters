<template>
  <div>
    <q-select
      class="q-pt-sm"
      :model-value="modelValue"
      :options="filteredOptions"
      :color="color"
      filled
      @filter="filterFn"
      @update:model-value="input"
      :label="label"
      bottom-slot
      use-input
      input-debounce="0"
    >
    </q-select>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
  name: "selectFilter",
  props: {
    op: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number, Object, Array, Boolean],
      default: null,
    },
    color: {
      type: String,
      default: "primary",
    },
  },
  setup(props, { emit }) {
    const options = ref([...props.op]);
    const filterValue = ref("");

    watch(
      () => props.op,
      (newVal) => {
        options.value = [...newVal];
      },
      { immediate: true }
    );

    const filteredOptions = computed(() => {
      if (filterValue.value === "") {
        return options.value;
      }
      const needle = filterValue.value.toLowerCase();
      return options.value.filter((v) => v.toLowerCase().includes(needle));
    });

    const filterFn = (val, update) => {
      filterValue.value = val;
      update(() => {
        // No need to do anything here as filteredOptions will reactively update
      });
    };

    const input = (val) => {
      emit("update:modelValue", val);
      emit("change", val);
    };

    return {
      filteredOptions,
      filterFn,
      input,
    };
  },
  emits: ["update:modelValue", "change"],
};
</script>

<style scoped>
</style>
