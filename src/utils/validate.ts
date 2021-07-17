export function validateEmail(email: string) {
  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  const isValid = emailRegex.test(email)

  return isValid
} 