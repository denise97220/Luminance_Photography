import { useEffect, useState } from 'react'
import styles from './ContactUs.module.scss'
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg'
import { ReactComponent as MailIcon } from '../assets/mail.svg'
import Spinner from '../components/Spinner'

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    head.appendChild(script)
    setIsLoading(false)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <div className={styles.textContainer}>
          <h1 className={styles.text}>
            <span className={styles.primaryMain}>預約諮詢</span>
            <span className={styles.primarySub}>
              謝謝你來到這裡，攝影是你我之間的緣分，
              <br />
              期待在過程中成為你的夥伴，創造美好影像，陪伴你前往下一個目標。
            </span>
          </h1>
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div
          className={`calendly-inline-widget ${styles.calendly}`}
          data-url='https://calendly.com/luminance-photography-studio'
        ></div>
      )}

      <div className={styles.notice}>
        <div className={styles.notice__content}>
          <ul>
            <li>此表單預約諮詢，非正式下訂檔期。合作正式成立，將以訂金給付、合約書記載日期為準。</li>
            <li>若表單的時間，沒有你可以的時段，歡迎寫 email 或訊息 IG 告訴我 3 個日期、時間，我們一起安排。</li>
            <li>
              請以預計拿到成果照的時間點為基準，提前 5 週進行預約，有充裕時間討論溝通，一同創造更好的照片！例如：預計 3
              月初拿到新照片，需於 1 月底前預約諮詢。
            </li>
          </ul>
        </div>
        <div className={styles.notice__info}>
          <div className={styles.mail}>
            <MailIcon className={styles.icon} />
            <span>natsuki.chuyunhuang@gmail.com</span>
          </div>
          <div className={styles.ig}>
            <InstagramIcon className={styles.icon} />
            <span>chuyun__8140</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
