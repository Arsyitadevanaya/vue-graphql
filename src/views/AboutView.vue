<template>
  <div class="about">
    <h1 class="font-bold">This is an about pageee {{ nama }}</h1>
    <ul>
      <li v-for="user in folders" :key="user.id">{{ user.name }}</li>
    </ul>
    <CustomTextField v-model="valueField" :rules="[requiredRule, minLengthRule]" label="Isi Field" />
    {{ valueField }}
  </div>
</template>
<script>
import CustomTextField from '@/components/CustomTextField.vue'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      nama: 'naya',
      valueField: '',
      requiredRule: (v) => !!v || 'Wajib diisi',
      minLengthRule: (v) => v.length >= 3 || 'Minimal 3 karakter',
    }
  },
  components: { CustomTextField },
  computed: {
    ...mapState(['folders']),
  },
  created() {
    const filter = {
      sort: 'name',
      sortType: 'ASC',
      show_archived: '',
      my_folder: null,
    }

    const workspaceId = 3

    this.fetchFolders({ filter, workspaceId })
  },
  
  methods: {
    ...mapActions(['fetchFolders']),
  },
}
</script>
