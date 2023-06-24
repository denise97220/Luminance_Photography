import styles from './PortfolioCard.module.scss'
import { ReactComponent as ArrowIcon } from '../assets/arrow.svg'
import { Link } from 'react-router-dom'

const PortfolioCard = ({ card }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{card.title}</div>
      <div className={styles.photo}>
        <img src={card.img} className={styles.content__img}></img>
        <div className={styles.content}>
          <div className={styles.content__title}>{card.contentTitle}</div>
          <div className={styles.content__description}>{card.description}</div>
        </div>
        <div className={styles.button}>
          <Link to={card.url}>
            <ArrowIcon className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
