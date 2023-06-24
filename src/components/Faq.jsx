import styles from './Faq.module.scss'
import { ReactComponent as ArrowIcon } from '../assets/arrow-down.svg'
import { useState } from 'react'

const Faq = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.container}>
      <div className={styles.question__container}>
        <div className={styles.question}>{faq.question}</div>
        <ArrowIcon className={styles.arrow} onClick={toggleDropdown} />
      </div>

      {isOpen && (
        <div className={styles.answer}>
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  )
}

export default Faq
