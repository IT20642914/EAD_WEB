export const exceptionHandler = async (error: any): Promise<string> => {
  return new Promise((resolve) => {
    let errorMsg = 'Ops! Something went wrong.'
    if (error) {
      switch (error.status) {
        case 0:
          errorMsg = error.data.message || 'Network Failer Detected'
          break
        case 404:
          errorMsg = error.data.message || 'URL Not Found'
          break
        case 500:
          errorMsg = error.data.message || 'Internal Server error'
          break
        case 504:
          errorMsg = error.data.message || 'Network Failer Detected'
          break
        default:
          errorMsg = error.data.message || 'Ops! Something went wrong'
      }
    }
    resolve(errorMsg)
  })
}
