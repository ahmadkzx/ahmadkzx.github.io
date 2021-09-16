import dayjs from 'dayjs'
import Link from 'next/link'
import styles from './index.module.scss'

export default function PostItem({ post, isWithoutFooter }) {
  const postLink = `/posts/${post.slug}-${post.id}`
  const postDate = dayjs(post.created_at).format('MMM D')

  return (
    <div className={styles['post-item']}>
      
      <Link href={postLink}>
        <a className={styles['post-item__photo']}>
          <img src={post.photo} alt={post.title} />
        </a>
      </Link>

      <div className={styles['post-item-content']}>
        <div className={styles['post-item-content-header']}>
          <span className={styles['post-item-content-header__publish-date']}><i className={styles['ti-calendar']}></i> {postDate}</span>
          <span className={styles['post-item-content-header__read-duration']}><i className={styles['ti-time']}></i> {post.read_duration} min</span>
        </div>

        <div>
          <Link href={postLink}>
            <a className={styles['post-item-content__title']}>
              <h6>{post.title}</h6>
            </a>
          </Link>

          <p className={styles['post-item-content__summary']}>{post.summary}</p>
        </div>

        {(!isWithoutFooter) ? (
          <div className={styles['post-item-content-footer']}>
            <span className={styles['post-item-content-footer__views']}>{post.views} views</span>
          </div>
        ) : null}
      </div>

    </div>
  )
}