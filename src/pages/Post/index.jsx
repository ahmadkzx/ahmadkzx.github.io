import './index.scss'
import { Link } from 'react-router-dom'

export default function PostPage() {
  return (
    <div className="post-page">
      <div className="container">

        <div className="post-page-body">
          <div className="post-page-body-header">
            <span className="post-page-body-header__publish-date"><i className="ti-calendar"></i> Aug 10</span>
            <span className="post-page-body-header__read-duration"><i className="ti-time"></i> 10 min</span>
          </div>

          <h2 className="post-page-body__title">Back to Fiction: What I'm Reading This Summer</h2>

          <div className="post-page-body__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className="post-page-body-footer">
            <div className="post-page-body-footer-share">
              <button className="post-page-body-footer-share__btn"><i className="ti-linkedin"></i></button>
              <button className="post-page-body-footer-share__btn"><i className="ti-facebook"></i></button>
              <button className="post-page-body-footer-share__btn"><i className="ti-link"></i></button>
            </div>
          </div>
        </div>

        <div className="post-page-related">
          <div className="post-page-related-header">
            <span className="post-page-related-header__title">RECENT POSTS</span>
            <Link to="/posts" className="post-page-related-header__seeall">See All</Link>
          </div>

          <div className="row">
            <div className="col-4">
              <div className="post-page-related-post">
                <Link to="/post/54/test" className="post-page-related-post__photo">
                  <img src="https://static.wixstatic.com/media/c22c23_b8eb71c2f20244a484c34e129f752983~mv2.png/v1/fit/w_450%2Ch_253%2Cal_c/file.png" alt="" />
                </Link>
                <Link to="/post/54/test" className="post-page-related-post__title"><h6>Movies That Need to Be Seen on the Big Screen</h6></Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}