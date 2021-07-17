import { useState, FormEvent } from 'react'

import './styles.scss'

import { validateEmail } from '../../utils/validate'

export default function Form() {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!validateEmail(value)) {
      setError(true)

     return 
    }

    window.localStorage.setItem('lojaTudoBaratoEmail', JSON.stringify(value))
    alert('Obrigado!')

    setValue('')
    setError(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Receba nossas promoções antecipadamente!</h2>
      <input type="email" placeholder="Email" value={value} onChange={(e) => setValue(e.target.value)}/>
      {error && <span className="error">Digite um email válido.</span>}
      <button type="submit">Confirmar</button>
    </form>
  )
}