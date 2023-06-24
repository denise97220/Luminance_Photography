import styles from './Portfolio.module.scss'
import PortfolioCard from '../components/PortfolioCard'

const portfolio1 = new URL('../assets/4.SERVICE-1.jpg', import.meta.url).href
const portfolio2 = new URL('../assets/4.SERVICE-2.jpg', import.meta.url).href

const portfolioCards = [
  {
    title: '個人形象照',
    img: portfolio1,
    contentTitle: '自信綻放',
    description: '不同於高冷的商業形象照，展現專業親和力，拉近與客人之間距離，開拓工作機會。',
    url: '/portfolio/image-photo'
  },
  {
    title: '輕沙龍',
    img: portfolio2,
    contentTitle: '向光生長',
    description: '透過鏡頭發掘出與生俱來的美，紀錄下閃閃發光的現在，往後細細品味。',
    url: '/portfolio/salon'
  }
]

const Portfolio = () => {
  return (
    <div className={styles.container}>
      {portfolioCards.map((card) => (
        <PortfolioCard card={card} />
      ))}
    </div>
  )
}

export default Portfolio
