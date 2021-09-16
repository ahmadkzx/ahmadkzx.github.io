import styles from './index.module.scss'

export default function AboutPage() {
  const cvUrl = `${process.env.BASE_URL}/AhmadKarimzade-CV.pdf`

  return (
    <div className="container">
      <div className={styles['about']}>
        <div className={styles['about-content']}>
          <h2 className={styles['about-content__title']}>Hello World</h2>
          <p className={styles['about-content__description']}>I was born in 2003 and live in Iran. I bought my first computer when I was 8 years old. Working with it was a lot of fun for me, and I did a lot of things with it, like photo editing and media making. At the 14, I became acquainted with programming and realized that I was very interested in it. I started learning Android Programming with Google without going to a particular class or boot camp. At 15 I published my first Android apps in Iranian markets. They were successful. After about a year and a half, I got into Front-End programming and have been doing Front-End programming ever since. I learned programming without a class and just because of the interest and talent I had in it and I love my job.</p>
          <a href={cvUrl} className={styles['about-content__dl-cv']}>My CV</a>
        </div>
      </div>
    </div>
  )
}