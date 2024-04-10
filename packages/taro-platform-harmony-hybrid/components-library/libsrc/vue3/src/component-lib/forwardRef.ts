import { getCurrentInstance } from 'vue3'

export function useForwardRef () {
  const instance = getCurrentInstance()
  function forwardRef (ref) {
    instance.exposed = ref
    instance.exposeProxy = ref
  }
  return forwardRef
}
