import { ref } from 'vue'

type Props = {
  title: string
}

const props = defineProps<Props>()

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

const CounterChild = () => (
  <div class="flex gap-2">
    <button
      onClick={decrement}
      class="flex h-6 w-6 items-center justify-center rounded bg-stone-500 text-white"
    >
      -
    </button>
    <span class="min-w-[32px] text-center">{count.value}</span>
    <button
      onClick={increment}
      class="flex h-6 w-6 items-center justify-center rounded bg-stone-500 text-white"
    >
      +
    </button>
  </div>
)

export default () => (
  <>
    <h2 class="font-bold">{props.title}</h2>
    <CounterChild class="mt-2" />
  </>
)
