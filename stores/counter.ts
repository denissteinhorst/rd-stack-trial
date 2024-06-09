/**
 * Defines a Pinia store named 'counter'.
 *
 * This store contains state variables, computed properties, and actions
 * related to a simple counter functionality.
 *
 * @returns [{ count, name, doubleCount, increment }]
 * @see https://pinia.esm.dev/core-concepts/stores.html#store-definition
 */
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)

  /**
   * Action to increment the counter value by 1.
   */
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})
