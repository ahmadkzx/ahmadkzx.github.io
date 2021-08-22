import './index.scss'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-heading">
          <h4 className="header-heading__subtitle">EVERY THING HERE IS ABOUT PROGRAMMING.</h4>
          <h2 className="header-heading__title">Ahmad Karimzade</h2>
        </div>
      </div>

      <div className="header-nav">
        <div className="container">
          <div className="row nav-items">
            <div className="col-2 header-nav-items-block">
              <a href="https://google.com" className="header-nav-items-block__link">Home</a>
            </div>
            <div className="col-2 header-nav-items-block">
              <a href="https://google.com" className="header-nav-items-block__link">About</a>
            </div>
            <div className="col-2 header-nav-items-block">
              <a href="https://google.com" className="header-nav-items-block__link">Posts</a>
            </div>
            <div className="col-2 header-nav-items-block">
              <a href="https://google.com" className="header-nav-items-block__link">Contact</a>
            </div>
            <div className="col-2 header-nav-items-block search">
              <input type="text" placeholder="Search..." className="header-nav-items-block__search-input" />
              <i className="ti-search"></i>
            </div>
            <div className="col-2 header-nav-items-block">
              <a href="https://google.com" className="header-nav-items-block__link social-icon"><i className="ti-linkedin"></i></a>
              <a href="https://google.com" className="header-nav-items-block__link social-icon"><i className="ti-github"></i></a>
              <a href="https://google.com" className="header-nav-items-block__link social-icon"><i className="ti-stack-overflow"></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}