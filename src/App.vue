<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png" />
  <HelloWorld :age="24" />
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  components: {
    HelloWorld,
  },
  setup(props, other) {
    return {}
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
