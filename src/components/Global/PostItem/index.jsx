import './index.scss'
import { Link } from 'react-router-dom'

export default function PostItem(props) {
  return (
    <div className="post-item">
      
      <Link to="/post/2535/test" className="post-item__photo">
        <img src="https://static.wixstatic.com/media/c22c23_5ab44dfe10f84b5e90e19db16bd06ae3~mv2.png/v1/fill/w_908,h_510,fp_0.50_0.50,q_95/c22c23_5ab44dfe10f84b5e90e19db16bd06ae3~mv2.webp" alt="" />
      </Link>

      <div className="post-item-content">
        <div className="post-item-content-header">
          <span className="post-item-content-header__publish-date"><i className="ti-calendar"></i> Aug 10</span>
          <span className="post-item-content-header__read-duration"><i className="ti-time"></i> 10 min</span>
        </div>

        <div>
          <Link to="/post/2535/test" className="post-item-content__title">
            <h6>Do Not Leave Tokyo Before Eating This Ramen</h6>
          </Link>

          <p className="post-item-content__summary">
            Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to contin
          </p>
        </div>

        {(!props.isWithoutFooter) ? (
          <div className="post-item-content-footer">
            <span className="post-item-content-footer__views">0 views</span>
          </div>
        ) : null}
      </div>

    </div>
  )
}