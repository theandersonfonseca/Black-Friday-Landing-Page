import './styles.scss'

import blackFridayBG from '../../assets/black-friday-bg.jpg'
import Form from '../Form'

export default function EmailSection() {
  return (
    <main>
      <div className="wrapper image-wrapper">
        <img src={blackFridayBG} alt="Black Friday" />
      </div>

      <div className="wrapper form-wrapper">
        <Form />
      </div>
    </main>
  )
}