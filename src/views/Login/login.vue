<template>
  <div>
    <h1>Login</h1>
    <p>{{ store.state.name }}</p>
    <button class="btn">登录</button>
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

<style lang="scss" scoped>
.btn {
  @apply bg-red-300 p-4 rounded-lg hover: (bg-green-400) transition-all duration-150;
}
</style>
