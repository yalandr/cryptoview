<template>
  <q-layout view="lHh Lpr lFf" dark>
    <q-header elevated class="frosted-glass">
      <q-toolbar class="container">
        <q-btn
          v-if="$route.path.includes('details')"
          flat
          round
          icon="mdi-chevron-left"
          @click="$router.go(-1)"
        ></q-btn>
        <q-toolbar-title class="text-yellow">
          CryptoView
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container class="container">
      <transition 
        mode="in-out" 
        enter-active-class="animate__animated animate__slideInLeft"
        leave-active-class="animate__animated animate__slideOutRight"
      >
        <router-view />
      </transition>
    </q-page-container>
    <q-footer class="frosted-glass">
      <q-toolbar>
        <q-toolbar-title>
          <div class="flex flex-center" style="font-size:.8rem">
            2022 CryptoView by <a href="https://yalandr.github.io/portfolio" target="__blank"> Yalandr</a>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: {},
})
</script>

<style>
a {
  color: rgb(135, 184, 240)
}
.container {
  width: 95%;
  max-width: 900px;
  margin: 0 auto;
}
.text-yellow {
  color: #181A20
}
.frosted-glass {
  backdrop-filter: blur(7px);
  background-color: #181A2099;
}
.q-dark {
  background-color: #282828;
}
.q-field__control {
  background-color: #383838;
  border-radius: 5px;
}
.q-field__native {
  padding: 5px 10px;
}
</style>
