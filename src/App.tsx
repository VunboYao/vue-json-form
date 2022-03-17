// eslint-disable-next-line @typescript-eslint/no-var-requires
const src = require('./assets/logo.png')
import HelloWorld from './components/HelloWorld.vue'

function renderHello(num:number) {
  return <HelloWorld age={num} />
}
export default defineComponent({
  setup() {
    const number = ref(10)

    return () => {
      // TODO:赋值在这里
      const msg = number.value

      return (
        <div>
          <img src={src} alt="Vue Logo" />
          <h1>{msg}</h1>
          <h1>
            {msg > 20 ? renderHello(number.value) : ''}
            <input type="text" v-model={number.value} />
          </h1>
        </div> 
      )
    }
  },
})
