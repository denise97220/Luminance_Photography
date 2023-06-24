import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  const logo = new URL('../assets/logo.png', import.meta.url).href
  const logoDesktop = new URL('../assets/0.web-logo-v2.png', import.meta.url).href

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoBox}>
          <Link to='/'>
            <img className={styles.logo} src={logo} />
          </Link>
        </div>
        {/* 桌機版 logo */}
        <div className={styles.logoBox__desktop}>
          <Link to='/'>
            <img className={styles.logo} src={logoDesktop} />
          </Link>
        </div>
        <input className={styles.toggle} type='checkbox' id='navbar-toggle' />
        <nav className={styles.nav}>
          <ul className={styles.nav__ul}>
            <Link to='/'>
              <li className=''>主頁</li>
            </Link>
            <Link to='/about'>
              <li className=''>關於</li>
            </Link>
            <Link to='/service'>
              <li className=''>服務內容</li>
            </Link>
            <Link to='/portfolio'>
              <li className=''>作品集</li>
            </Link>
            <Link to='/contact'>
              <li className=''>聯繫我們</li>
            </Link>
          </ul>
        </nav>
        <label className={styles.hamburgerContainer} htmlFor='navbar-toggle'>
          <span className={styles.hamburger}></span>
        </label>
        {/* 桌機版 header */}
        <nav className={styles.nav__desktop}>
          <ul className={styles.desktop__ul}>
            <Link to='/'>
              <li className=''>主頁</li>
            </Link>
            <Link to='/about'>
              <li className=''>關於</li>
            </Link>
            <Link to='/service'>
              <li className=''>服務內容</li>
            </Link>
            <Link to='/portfolio'>
              <li className=''>作品集</li>
            </Link>
            <Link to='/contact'>
              <li className=''>聯繫我們</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
