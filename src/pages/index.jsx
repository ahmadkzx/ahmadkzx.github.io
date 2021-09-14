import styles from './index.module.scss'
import PostItem from '@/components/Global/PostItem'
import FeaturedPost from '@/components/Home/FeaturedPost'

export default function HomePage() {
  return (
    <div className={styles['home']}>
      <div className="container">
        <FeaturedPost />

        <span className={styles['home__section-title']}>LATEST POSTS</span>

        <div className="row">
          <div className="col-12 col-md-6"><PostItem /></div>
          <div className="col-12 col-md-6"><PostItem /></div>
          <div className="col-12 col-md-6"><PostItem /></div>
          <div className="col-12 col-md-6"><PostItem /></div>
        </div>
      </div>
    </div>
  )
}