import { Link } from 'react-router-dom'
import styles from './About.module.scss'

const About = () => {
  const aboutImg2 = new URL('../assets/2.about-2.jpg', import.meta.url).href

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <div className={styles.textContainer}>
          <h1 className={styles.text}>
            <span className={styles.primaryMain}>關於 向光生長 </span>
            <span className={styles.primarySub}>為追夢的藝文工作者提供獨特、溫暖、故事集合而成的形象照。</span>
          </h1>
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.title}>
          <div className={styles.title__containter}>
            <span className={styles.primaryMain}>我是筑筠，一位臺灣出版產業出身的攝影師。</span>
            <br />
            <span className={styles.primarySub}>
              我為藝文工作者創造以情感為導向的個人形象照，用來吸引到他們最理想的客群，提升自我認同感！
            </span>
          </div>
        </div>
        <div className={styles.photo}>
          <img src={aboutImg2} className={styles.photo_img} alt='' />
        </div>
        <div className={styles.description}>
          <span>我擁有4年拍攝經驗，擅長 #女性人像攝影 #街頭抓拍。</span>
          <br />
          <span>
            隨著按下快門次數的增加，我意識到我好喜歡於透過鏡頭幫助人們建立他們的個人形象，我喜歡看見人們透過照片重新認識自己的過程。拿起相機，我期待成在追夢路上你最給力的好夥伴。
          </span>
          <br />
          <span>點擊「預約諮詢」期待聽見你更多的故事！</span>
        </div>
        <Link to='/contact'>
          <button className={styles.button}>預約諮詢</button>
        </Link>
      </div>
    </div>
  )
}

export default About
