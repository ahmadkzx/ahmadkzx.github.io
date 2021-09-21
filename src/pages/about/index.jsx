import styles from './index.module.scss'

export default function AboutPage() {
  const cvUrl = `${process.env.BASE_URL}/AhmadKarimzade-FrontEnd-CV.pdf`

  return (
    <div className="container">
      <div className={styles['about']}>
        <div className={styles['about-content']}>
          <h2 className={styles['about-content__title']}>Hello World</h2>
          <p className={styles['about-content__description']}>
            I was born in 2003 in Iran. I bought my first computer when 
            I was 8 years old. I was very interested in it and did interesting 
            things like photo editing with it. At the age of 14, I became 
            acquainted with programming and felt that this was what I was 
            talented at,so I started learning Android programming only 
            through Google and without a teacher or bootcamp. After a while, 
            I developed and published several apps. But after about two years because 
            of more interest in JavaScript Idecided to change my stack. 
            I have been working and enjoying Front-End for about two years now.
          </p>
          <a href={cvUrl} className={styles['about-content__dl-cv']}>My CV</a>
        </div>
      </div>
    </div>
  )
}