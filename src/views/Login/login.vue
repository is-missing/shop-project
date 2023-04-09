<template>
  <div>
    Login
    {{ store.state.name }}
  </div>
</template>

<script setup>
// import { ref, reactive, toRefs } from 'vue'
// import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
// const router = useRouter()
// const route = useRoute()
</script>

<style scoped></style>
