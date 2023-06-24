import styles from './Service.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SlidePhoto from '../components/SlidePhoto'
import Step from '../components/Step'
import Faq from '../components/Faq'

const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const photos = [
    {
      id: 1,
      url: new URL('../assets/3.SERVICE-5.jpg', import.meta.url).href,
      description: '筑擁有一雙能發現美的眼睛，能細膩、用心的引導被攝者找到自然而閃耀的瞬間。',
      customer: '—— Min｜高雄 人資管理'
    },
    {
      id: 2,
      url: new URL('../assets/3.SERVICE-6.jpg', import.meta.url).href,
      description: '我是個害怕鏡頭的女生，但藉由筑的引導與抓拍我的表情都自信、自然，很喜歡攝影風格及照片裡的自己！',
      customer: '—— Afra｜ 臺北 資深行銷策劃'
    },
    {
      id: 3,
      url: new URL('../assets/3.SERVICE-7.jpg', import.meta.url).href,
      description:
        '一開始覺得自己有點鏡頭尷尬症，怎麼看怎麼怪，但筑會耐心的引導氣氛和鼓勵，讓拍攝者放鬆並展現自然的一面。我很滿意那時自己的狀態，慶幸有留下紀錄！讓我可以一再回味。整體的經驗非常美好！激推！',
      customer: '—— 柯｜ 高雄 外商專員'
    },
    {
      id: 4,
      url: new URL('../assets/3.SERVICE-8.jpg', import.meta.url).href,
      description:
        '筑能以明確的指示引導拍攝，不論是眼神方向、下巴高度，都會以被拍攝者最適合的方式指引。更驚喜的是能從照片中看見自己不曾發現的一面，與隨著成長所展現不同的面貌！超級推！',
      customer: '—— Hannah｜ 臺中 獨立攝影師'
    }
  ]

  const steps = [
    { id: 1, title: '預約諮詢', content: '很期待聽到你的故事，請先預約諮詢，讓我們更認識彼此！' },
    { id: 2, title: '進行諮詢', content: '透過會議進一步瞭解、對焦你形象照使用需求。' },
    { id: 3, title: '預約成立', content: '繳付訂金、簽立合約後，代表預約成立。十分榮幸成為你追夢路上的好夥伴！' },
    { id: 4, title: '前置作業', content: '邀請你填寫問卷，更認識你的藝術專業、服務亮點，作為拍攝規劃的重要資料。' },
    { id: 5, title: '拍攝當天', content: '這是屬於你的大日子，向來如此努力、美麗的你，請好好享受拍攝！' },
    { id: 6, title: '領取照片', content: '拍攝後 14 個工作天，以雲端交付照片。期待你看到照片成果的喜悅！' }
  ]

  const faqs = [
    {
      id: 1,
      question: '預約拍攝的時間',
      answer:
        '以預計拿到成果照的時間點為基準，提前 5 週進行預約，有充裕時間討論溝通，一同創造更好的照片！例如：預計 3 月初 拿到新照片，需於 1 月底 前預約諮詢。'
    },
    {
      id: 2,
      question: '我不確定自己適合哪一個方案',
      answer: '依照你拍攝需求及用途，於諮詢後提供最合適的方案給您。'
    },
    {
      id: 3,
      question: '拍攝場景',
      answer: '以外景為主，依照你的風格選擇場地，若因租借場地所衍生之費用， 由委託者負擔。'
    },
    {
      id: 4,
      question: '拍攝地區',
      answer: '彰化、臺中公共交通可抵達場所不另收車馬費，其他地區按照交通方式實報實銷車資。'
    },
    {
      id: 5,
      question: '拍攝當天天氣',
      answer: '每種天氣都有獨特的氛圍，若因天候需改期，我們再一同討論評估。'
    },
    {
      id: 6,
      question: '可以改拍攝日期、時間嗎？',
      answer:
        '(1)若因不可抗力之因素（氣候、災害）可一次免費延後， 若欲再次延後，本次   合作將視為取消，訂金恕不退還。(2)因個人因素欲延期或取消，訂金恕不退還。'
    },
    {
      id: 7,
      question: '拍攝風格',
      answer: '每個人都有獨特風格，將依照你照片的實際用途進行規劃。示意圖的意境、動作皆為參考使用。'
    },
    {
      id: 8,
      question: '拍攝籌備要填寫問卷，問卷內容會很多嗎？',
      answer:
        '填寫的目的是透過問答，發掘你與眾不同的亮點。表單填寫約 1 小時，需要靜下心梳理現階段的狀態、分享你藝術創作的初衷。'
    },
    {
      id: 9,
      question: '相片檔案及修片',
      answer: '相片為jpge.檔案並以雲端交付，修圖依場景與整體氛圍搭配合適的風格色調。'
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <div className={styles.textContainer}>
          <h1 className={styles.text}>
            <span className={styles.primaryMain}>打造個人座標，定位市場形象</span>
            <span className={styles.primarySub}>為藝文工作者拍攝一組展現個人風格的形象照。</span>
          </h1>
        </div>
      </div>

      {/* 說明 */}
      <div className={styles.description}>
        <div className={styles.description__situation}>
          <h3>你現在遇到的狀況</h3>
          <ul>
            <li>目前形象照讓客戶無法看出我的專業，導致大家對我的形象定位不明確！</li>
            <li>我不知道拍攝一組形象照對事業發展是否有加分效果。</li>
            <li>我位於服務升級 2.0 的階段中，正煩惱著如何展現專業水準，來提高服務定價，吸引我理想顧客！</li>
            <li>我正準備以藝術技能展開斜槓、接案身份，擴展額外的收入來源。</li>
          </ul>
          <h3 className={styles.highlight}>是時候將煩惱交給一位瞭解你的攝影師了！</h3>
        </div>
        <div className={styles.description__promotion}>
          <div className={styles.promotion__content}>
            <h3>你的專業是獨一無二的藝術品</h3>
            <p>形象照不僅僅是照片，它恰到好處地襯托出你專業形象和個人風格，定位你在市場上獨一無二的形象！</p>
          </div>
        </div>
        <div className={styles.description__purpose}>
          <h3>當你在市場上定位你的專業形象時，將會...</h3>
          <ul>
            <li>與理想夥伴有新的連結，讓他們對你的專業產生共鳴、信任感。</li>
            <li>將服務內容、定價提升到新階段，因為客戶感受到你專業的價值！</li>
            <li>更有動力投入工作，工作中獲得自信，打從心底擁抱自己的身份。</li>
          </ul>
        </div>
      </div>

      {/* 相片輪播 */}
      <div className={styles.slide__container}>
        <div className={styles.slide}>
          <Slider {...settings}>
            {photos.map((photo) => (
              <SlidePhoto key={photo.id} photo={photo} />
            ))}
          </Slider>
        </div>
      </div>

      {/* 服務方案 */}
      <div className={styles.plan}>
        <h1 className={styles.title}>服務方案</h1>
        <div className={styles.plan__description}>
          <h3>適合這樣專業的你</h3>
          <ul>
            <li>
              你是一家以藝術服務為主的一人工作室，提供的服務內容、教學課程為主要收入。例如：畫室、陶藝、花藝工作室。
            </li>
            <li>你是一位以創作為媒介的藝術家，藝術表演、創作輸出為主要收入。例如：街頭藝人、視覺藝術家、作家。</li>
          </ul>
        </div>
        <div className={styles.card__container}>
          <div className={styles.card}>
            <div className={styles.card__front}>
              <h3>個人拍攝</h3>
              <h2>輕量版</h2>
            </div>
            <div className={styles.card__back}>
              <h4>方案適用對象</h4>
              <p>剛入行、發展未滿 1 年，正在建立穩定客源、合作機會。</p>
              <h4>方案包含</h4>
              <p>
                ✓ 15 張相片（精修 *5 + 毛片 *10） <br />✓ 拍攝 60 分鐘 <br />✓ 個性化景點
                <br /> ✓ 客製化拍攝風格簡報
                <br /> ✓ 依個人風格，建議 1 款適合的妝髮造型
              </p>
            </div>
          </div>

          <div className={styles.card__2}>
            <div className={styles.card__2__front}>
              <h3>個人拍攝</h3>
              <h2>多元版</h2>
            </div>
            <div className={styles.card__2__back}>
              <h4>方案適用對象</h4>
              <p>發展 2 年以上，目前服務品質、規模已超出剛入行時的狀態。</p>
              <h4>方案包含</h4>
              <p>
                ✓ 30 張相片（精修 *15 + 毛片 *15） <br />✓ 拍攝 120 分鐘 <br />✓ 個性化景點 <br />✓ 客製化拍攝風格簡報
                <br />✓ 依個人風格，建議 1 款適合的妝髮造型
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 進行方式 */}
      <div className={styles.steps}>
        <h1 className={styles.title}>進行方式</h1>
        <div className={styles.container}>
          {steps.map((step) => (
            <Step key={step.id} step={step} />
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className={styles.faq}>
        <div className={styles.faq__container}>
          <h1 className={styles.faq_title}>FAQs</h1>
          {faqs.map((faq) => (
            <Faq key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service
