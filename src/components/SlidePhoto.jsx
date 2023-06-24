import styles from './SlidePhoto.module.scss'

const SlidePhoto = ({ photo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={photo.url} alt='' />
      </div>
      <div className={styles.opinion}>
        <div className={styles.opinion__title}>顧客回饋</div>
        <div className={styles.opinion__description}>{photo.description}</div>
        <div className={styles.opinion__customer}>{photo.customer}</div>
      </div>
    </div>
  )
}

export default SlidePhoto
