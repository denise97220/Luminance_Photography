import styles from './Salon.module.scss'

const photos = [
  { id: 1, img: new URL('../assets/5.PORTFOLIO-9.jpg', import.meta.url).href },
  { id: 2, img: new URL('../assets/5.PORTFOLIO-10.jpg', import.meta.url).href },
  { id: 3, img: new URL('../assets/5.PORTFOLIO-11.jpg', import.meta.url).href },
  { id: 4, img: new URL('../assets/5.PORTFOLIO-12.jpeg', import.meta.url).href },
  { id: 5, img: new URL('../assets/3.SERVICE-5.jpg', import.meta.url).href },
  { id: 6, img: new URL('../assets/5.PORTFOLIO-14.jpg', import.meta.url).href },
  { id: 7, img: new URL('../assets/5.PORTFOLIO-15.jpeg', import.meta.url).href },
  { id: 8, img: new URL('../assets/5.PORTFOLIO-16.jpeg', import.meta.url).href }
]

const Salon = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.primaryMain}>向光生長</span>
        <br />
        <span className={styles.primarySub}>輕沙龍</span>
      </h1>
      <div className={styles.waterfall}>
        {photos.map((photo) => (
          <div className={styles.photo}>
            <img key={photo.id} src={photo.img} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Salon
