<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ year }}</h2>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  foo: string
  msg: string
  bar?: number
}>()
defineEmits(['change', 'update'])
const year = ref<number>(2020)
year.value = 1994
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
