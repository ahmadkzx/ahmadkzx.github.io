import styles from './index.module.scss'
import Link from 'next/link'

export default function PostItem(props) {
  return (
    <div className={styles['post-item']}>
      
      <Link href="/post/2535/test">
        <a className={styles['post-item__photo']}>
          <img src="https://static.wixstatic.com/media/c22c23_5ab44dfe10f84b5e90e19db16bd06ae3~mv2.png/v1/fill/w_908,h_510,fp_0.50_0.50,q_95/c22c23_5ab44dfe10f84b5e90e19db16bd06ae3~mv2.webp" alt="" />
        </a>
      </Link>

      <div className={styles['post-item-content']}>
        <div className={styles['post-item-content-header']}>
          <span className={styles['post-item-content-header__publish-date']}><i className={styles['ti-calendar']}></i> Aug 10</span>
          <span className={styles['post-item-content-header__read-duration']}><i className={styles['ti-time']}></i> 10 min</span>
        </div>

        <div>
          <Link href="/post/2535/test">
            <a className={styles['post-item-content__title']}>
              <h6>Do Not Leave Tokyo Before Eating This Ramen</h6>
            </a>
          </Link>

          <p className={styles['post-item-content__summary']}>
            Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to contin
          </p>
        </div>

        {(!props.isWithoutFooter) ? (
          <div className={styles['post-item-content-footer']}>
            <span className={styles['post-item-content-footer__views']}>0 views</span>
          </div>
        ) : null}
      </div>

    </div>
  )
}