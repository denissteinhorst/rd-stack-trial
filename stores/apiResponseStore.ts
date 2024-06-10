export const useApiResponseStore = defineStore('apiResponseStore', () => {
  const apiResponse = ref({})

  const setNewApiResponse = (msg: string, data: unknown) => {
    apiResponse.value = {
      message: msg,
      response: data,
    }
  }

  return {
    apiResponse,
    setNewApiResponse,
  }
})
