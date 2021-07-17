import { useState, FormEvent } from 'react'

import './styles.scss'

import { validateEmail } from '../../utils/validate'

export default function Form() {
  const [value, setValue] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!validateEmail(value)) return

    window.localStorage.setItem('lojaTudoBaratoEmail', JSON.stringify(value))
    alert('Obrigado!')

    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Receba nossas promoções antecipadamente!</h2>
      <input type="email" placeholder="Email" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button type="submit">Confirmar</button>
    </form>
  )
}