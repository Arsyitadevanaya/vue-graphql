<script setup>
import { ref } from 'vue'

import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './layout/Sidebar.vue'
const selected = ref()


const handleCheck=(value)=>{
  selected.value=value;
}
</script>

<template>
  <VApp>
    <VCard class="h-full">
      <VLayout class="h-full">
        <Sidebar  @check="handleCheck"/>
        <VMain >
          <!-- <header>
            <div class="wrapper">
              <nav class="flex justify-center gap-5 my-5 font-bold">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
              </nav>
            </div>
          </header> -->

          <VCard class="ma-5 pa-5">
            <!-- You can place card content here -->
            <RouterView />
          </VCard>
        </VMain>
      </VLayout>
    </VCard>
  </VApp>
</template>
