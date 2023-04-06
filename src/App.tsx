import { ref } from 'vue'
import Counter from './components/Counter.setup'
import Form from './components/Form.setup'
import View from './components/View.setup'

export const App = defineSetupComponent(() => {
  const inputText = ref('')

  const formHandler = (e: Event & { target: { value: string } }) => {
    inputText.value = e.target.value
    console.log(e.target.value)
    console.log(inputText.value)
  }
  return () => (
    <div>
      <div class="bg-stone-200 p-10">
        <h1 class="text-xl font-bold">setupSFC</h1>
        <div class="mt-4">
          <Counter title={'size'} />
        </div>

        <div class="mt-8">
          <Form title={'text'} formHandler={formHandler} />
        </div>
      </div>

      <div class=" m-10">
        <View text={inputText.value} type={'note'} />
      </div>
    </div>
  )
})
