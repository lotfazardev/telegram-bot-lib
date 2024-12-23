export const createFormData = (payload: Record<string, any>): FormData => {
  const formData = new FormData()
  Object.entries(payload).forEach(([key, value]) => {
    if (value instanceof Blob || value instanceof File) {
      formData.append(key, value)
    } else {
      formData.append(key, value as string)
    }
  })
  return formData
}
