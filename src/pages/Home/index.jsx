import './index.scss'
import PostItem from '../../components/Global/PostItem'
import FeaturedPost from '../../components/Home/FeaturedPost'

export default function HomePage() {
  return (
    <div className="home">
      <div className="container">
        <FeaturedPost />

        <span className="home__section-title">LATEST POSTS</span>

        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  )
}