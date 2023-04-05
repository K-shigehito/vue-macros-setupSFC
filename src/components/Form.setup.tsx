import { ref } from 'vue'

type Props = {
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
    <input
      type="text"
      value={inputValue.value}
      onChange={onChangeHandler}
      class="w-fit border border-stone-400 px-2 py-1"
    />
  </>
)
