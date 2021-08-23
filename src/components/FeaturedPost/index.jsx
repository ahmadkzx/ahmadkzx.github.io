import './index.scss'
import { Link } from 'react-router-dom'

export default function FeaturedPost() {
  return (
    <div className="post">
      <span className="post__badge">FEATURED POST</span>

      <Link className="post__photo">
        <img src="https://static.wixstatic.com/media/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.jpg/v1/fill/w_1677,h_944,fp_0.50_0.50,q_90/c22c23_89024a2cd2e943a6b89d99404958e3bb~mv2.webp" alt="" />
      </Link>

      <div className="post-content">
        <div className="post-content-detail">
          <span className="post-content-detail__publish-date"><i className="ti-calendar"></i> Aug 10</span>
          <span className="post-content-detail__read-duration"><i className="ti-time"></i> 10 min</span>
        </div>

        <Link className="post-content__title">
          <h5 className="post-content__title">Back to Fiction: What I'm Reading This Summer</h5>
        </Link>

        <p className="post-content__summary">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
      </div>
    </div>
  )
}