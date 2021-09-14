import styles from './index.module.scss'
import Link from 'next/link'

export default function FeaturedPost() {
  return (
    <div className={styles['featured-post']}>
      <span className={styles['featured-post__badge']}>FEATURED POST</span>

      <Link href="/">
        <a className={styles['featured-post__photo']}>
          <img src="https://static.wixstatic.com/media/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg/v1/fill/w_1677,h_944,fp_0.50_0.50,q_90/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.webp" alt="" />
        </a>
      </Link>

      <div className={styles['featured-post-content']}>
        <div className={styles['featured-post-content-detail']}>
          <span className={styles['featured-post-content-detail__publish-date']}><i className={styles['ti-calendar']}></i> Aug 10</span>
          <span className={styles['featured-post-content-detail__read-duration']}><i className={styles['ti-time']}></i> 10 min</span>
        </div>

        <Link href="/">
          <a className={styles['featured-post-content__title']}>
            <h5>Back to Fiction: What I'm Reading This Summer</h5>
          </a>
        </Link>

        <p className={styles['featured-post-content__summary']}>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
      </div>
    </div>
  )
}