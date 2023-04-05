import { ref } from 'vue'
import Counter from './components/Counter.setup'
import Form from './components/Form.setup'

export const App = defineSetupComponent(() => {
  const inputText = ref('')

  const formHandler = (e: Event & { target: { value: string } }) => {
    inputText.value = e.target.value
    console.log(e.target.value)
    console.log(inputText.value)
  }
  return () => (
    <div class="bg-stone-200 p-10">
      <h1 class="text-xl font-bold">setupSFC</h1>
      <div class="mt-4">
        <Counter title={'counter'} />
      </div>

      <div class="mt-8 flex flex-col gap-2">
        <p class="font-bold">input : {inputText.value}</p>
        <Form formHandler={formHandler} />
      </div>
    </div>
  )
})
