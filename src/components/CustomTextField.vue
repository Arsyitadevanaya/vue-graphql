<script>
export default {
  name: 'CustomTextField',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    errorMessages: {
      type: [String, Array],
      default: '',
    },
    prependIcon: {
      type: String,
      default: 'mdi-magnify',
    },
    appendIcon: {
      type: String,
      default: '',
    },
    density: {
      type: String,
      default: 'compact',
    },
    variant: {
      type: String,
      default: 'solo',
    },
    hideDetails: {
      type: Boolean,
      default: false,
    },
    singleLine: {
      type: Boolean,
      default:true,
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:modelValue', 'click:append-inner'],
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      },
    },
    computedErrorMessages() {
      const messages = []
      for (const rule of this.rules) {
        const result = rule(this.modelValue)
        if (result !== true) {
          messages.push(result)
        }
      }
      return messages.length > 0 ? messages : undefined
    }
  },
  methods: {
    onAppendClick() {
      this.$emit('click:append-inner')
    },
  },
}
</script>
<template>
    <VCardText>
        <div :class="{ 'error-border': hasError }">
            <VTextField
      v-model="inputValue"
      :label="label"
      :loading="loading"
      :rules="rules"
      :error-messages="errorMessages"
      :prepend-inner-icon="prependIcon"
      :append-inner-icon="appendIcon"
      :density="density"
      :variant="variant"
      :hide-details="hideDetails"
      :single-line="singleLine"
      @click:append-inner="onAppendClick"
      ></VTextField>
    </div>
    </VCardText>
</template>
<style scoped>
.error-border .v-input.v-input--variant-solo {
  box-shadow: 0 0 0 2px red;
  border-radius: 6px;
}
</style>