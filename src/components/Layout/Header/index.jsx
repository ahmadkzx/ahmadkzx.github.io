import './index.scss'
import { Link } from 'react-router-dom'
import { navigation, socialLinks } from '../../../config'

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
          <div className="row header-nav-items">
            
            { navigation.map((nav, index) => (
              <div className="col-2 header-nav-items-block" key={ 'nav-header-' + index }>
                <Link to={ nav.path } className="header-nav-items-block__link">{ nav.title }</Link>
              </div>
            )) }

            <div className="col-2 header-nav-items-block search">
              <input type="text" placeholder="Search..." className="header-nav-items-block__search-input" />
              <i className="ti-search"></i>
            </div>

            <div className="col-2 header-nav-items-block">
              { socialLinks.map((social, index) => (
                <a
                  rel="nofollow"
                  href={ social.link }
                  key={ 'social-header-' + index }
                  className="header-nav-items-block__link social-icon"
                >
                  <i className={ social.icon }></i>
                </a>
              )) }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}