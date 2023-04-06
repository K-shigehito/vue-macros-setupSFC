import { ref } from 'vue'

type Props = {
  title: string
  formHandler: (e: Event & { target: { value: string } }) => void
}

const props = defineProps<Props>()

const inputValue = ref('')

const onChangeHandler = (e: Event) => {
  e.preventDefault()
  props.formHandler(e as Event & { target: { value: string } })
}

export default () => (
  <>
    <h2 class="font-bold">{props.title}</h2>
    <input
      type="text"
      value={inputValue.value}
      onChange={onChangeHandler}
      class="mt-2 w-full border border-stone-400 px-2 py-1"
    />
  </>
)
