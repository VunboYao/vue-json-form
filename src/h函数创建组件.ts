import { createApp } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const src = require('./assets/logo.png')


const App = defineComponent({
  setup(){
    const number = ref(10)
    setInterval(() => {
      number.value++
    }, 1000)

    return () => {
      // TODO:赋值在这里
      const msg = number.value

      return h('div', [
        h('img', { alt: 'Vue Logo', src}),
        h('h1', msg),
        h(HelloWorld, {age: msg})
      ])
    }
  }
})

createApp(App).mount('#app')
