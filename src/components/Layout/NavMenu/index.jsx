import './index.scss'
import { Link } from 'react-router-dom'
import { navigation, socialLinks } from '../../../config'

export default function NavMenu(props) {
  return (
    <div className={`nav-menu ${props.isShow ? 'show' : 'hide'}`}>
      <nav className="nav-menu-items">
        { navigation.map(nav => (
          <Link to={ nav.path } className="nav-menu-items__link">{ nav.title }</Link>
        )) }
      </nav>

      <div className="nav-menu-socials">
        { socialLinks.map((social, index) => (
          <a
            rel="nofollow"
            href={ social.link }
            key={ 'social-header-' + index }
            className="nav-menu-socials__link"
          >
            <i className={ social.icon }></i>
          </a>
        )) }
      </div>
    </div>
  )
}