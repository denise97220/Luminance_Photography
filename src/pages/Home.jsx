import { Link } from 'react-router-dom'
import styles from './Home.module.scss'

const Home = () => {
  const serviceImg1 = new URL('../assets/1.home-2.jpg', import.meta.url).href
  const serviceImg2 = new URL('../assets/1.home-3.jpeg', import.meta.url).href

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <div className={styles.textContainer}>
          <h1 className={styles.text}>
            <span className={styles.primaryMain}>向光生長 攝影工作室</span>
            <span className={styles.primarySub}>Luminance photography studio</span>
          </h1>
        </div>
      </div>
      <div className={styles.slogan}>
        <div className={styles.textContainer}>
          <span>我們都會往前行進</span>
          <br />
          <span>只要我們發現</span>
          <br />
          <span>身邊的女人有多堅強</span>
          <br />
          <span>多麼突出</span>
          <br />
          <span className={styles.poet}>Milk and Honey ◎露琵‧考爾 Rupi Kaur</span>
        </div>
      </div>
      <div className={styles.service}>
        <h1 className={styles.service__title}>服務內容</h1>
        <div className={styles.service__card}>
          <div className={styles.service__content}>
            <h3 className={styles.content__title}>
              自信綻放<br></br>個人形象照
            </h3>
            <p className={styles.content__description}>
              從激烈的市場中脫穎而出，<br></br>增加大眾對你的第一印象
            </p>
            <p className={styles.content__note}>
              推薦適用情境：<br></br>官方數位載體、業務開發、表演宣傳、專訪照等
            </p>
          </div>
          <div className={styles.service__img}>
            <img src={serviceImg1} />
          </div>
        </div>
        <div className={styles.service__card}>
          <div className={styles.service__content}>
            <h3 className={styles.content__title}>
              向光生長<br></br>輕沙龍
            </h3>
            <p className={styles.content__description}>
              告別鏡頭前的緊張心情，<br></br>紀錄下自在樣貌
            </p>
            <p className={styles.content__note}>
              推薦適用情境：
              <br></br>日常生活的數位載體、大頭貼、節日紀錄等
            </p>
          </div>
          <div className={styles.service__img}>
            <img src={serviceImg2} />
          </div>
        </div>
      </div>
      <Link to='/service'>
        <button className={styles.moreBtn}>了解更多</button>
      </Link>
    </div>
  )
}

export default Home
