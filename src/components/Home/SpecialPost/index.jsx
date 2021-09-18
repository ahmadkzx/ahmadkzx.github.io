import dayjs from 'dayjs'
import Link from 'next/link'
import styles from './index.module.scss'

export default function SpecialPost({ post }) {
  const postLink = `/posts/${post.slug}`
  const postDate = dayjs(post.created_at).format('MMM D')

  return (
    <div className={styles['featured-post']}>
      <span className={styles['featured-post__badge']}>FEATURED POST</span>

      <Link href={postLink}>
        <a className={styles['featured-post__photo']}>
          <img src={post.photo} alt={post.title} />
        </a>
      </Link>

      <div className={styles['featured-post-content']}>
        <div className={styles['featured-post-content-detail']}>
          <span className={styles['featured-post-content-detail__publish-date']}><i className="ti-calendar"></i> {postDate}</span>
          <span className={styles['featured-post-content-detail__read-duration']}><i className="ti-time"></i> {post.read_duration} min</span>
        </div>

        <Link href={postLink}>
          <a className={styles['featured-post-content__title']}>
            <h5>{post.title}</h5>
          </a>
        </Link>

        <p className={styles['featured-post-content__summary']}>{post.summary}</p>
      </div>
    </div>
  )
}