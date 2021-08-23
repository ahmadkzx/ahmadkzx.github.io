import './index.scss'
import FeaturedPost from '../../components/FeaturedPost'

export default function HomePage() {
  return (
    <div className="home">
      <div className="container">
        <FeaturedPost />
      </div>
    </div>
  )
}