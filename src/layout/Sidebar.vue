<script>
export default {
  emits: ['check'],

  data() {
    return {
      selected: false,
    }
  },
  methods: {
    toggleRadio() {
      this.selected = !this.selected
      this.$emit('check', this.selected) 
    },
  },
  created() {
    this.$emit('check')
  },
}
</script>
<template>
  <VNavigationDrawer expand-on-hover :rail="!selected">
    <VList class="flex">
      <VListItem
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="sandra@gmailcom"
        title="Sandra Adams"
      />
      <VRadio v-model="selected" :value="true" @click="toggleRadio" />
    </VList>

    <VDivider />

    <VList density="compact" nav>
      <VListItem prepend-icon="mdi-folder" title="My Files" value="myfiles" />
      <VListItem prepend-icon="mdi-account-multiple" title="Shared with me" value="shared" />
      <VListItem prepend-icon="mdi-star" title="Starred" value="starred" />
    </VList>
  </VNavigationDrawer>
</template>
