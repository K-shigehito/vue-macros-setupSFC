type Props = {
  text: string
  type: 'note' | 'caution' | 'warning'
}
const props = defineProps<Props>()

const Note = () => (
  <>
    <div class="rounded-md border border-teal-600 bg-teal-100 px-4 py-2 text-teal-600">
      {props.text}
    </div>
  </>
)
const Caution = () => (
  <>
    <div class="rounded-md border border-yellow-600 bg-yellow-100 px-4 py-2 text-yellow-600">
      {props.text}
    </div>
  </>
)
const Warning = () => (
  <>
    <div class="rounded-md border border-red-600 bg-red-100 px-4 py-2 text-red-600">
      {props.text}
    </div>
  </>
)

export default () => (
  <>
    {props.text && (
      <>
        {props.type === 'note' ? (
          <Note />
        ) : props.type === 'caution' ? (
          <Caution />
        ) : (
          <Warning />
        )}
      </>
    )}
  </>
)
