import styles from './ImagePhoto.module.scss'

const photos = [
  { id: 1, img: new URL('../assets/5.PORTFOLIO-1.jpg', import.meta.url).href },
  { id: 2, img: new URL('../assets/5.PORTFOLIO-2.jpg', import.meta.url).href },
  { id: 3, img: new URL('../assets/5.PORTFOLIO-3.jpg', import.meta.url).href },
  { id: 4, img: new URL('../assets/5.PORTFOLIO-4.jpg', import.meta.url).href },
  { id: 5, img: new URL('../assets/5.PORTFOLIO.....jpg', import.meta.url).href },
  { id: 6, img: new URL('../assets/5.PORTFOLIO-6.jpg', import.meta.url).href },
  { id: 7, img: new URL('../assets/5.PORTFOLIO...jpg', import.meta.url).href },
  { id: 8, img: new URL('../assets/5.PORTFOLIO..jpg', import.meta.url).href }
]

const ImagePhoto = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.primaryMain}>自信綻放 </span>
        <br />
        <span className={styles.primarySub}>個人形象照</span>
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

export default ImagePhoto
