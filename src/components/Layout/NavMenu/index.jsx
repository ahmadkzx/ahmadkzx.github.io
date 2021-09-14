import styles from './index.module.scss'
import Link from 'next/link'
import { navigation, socialLinks } from '../../../config'

export default function NavMenu(props) {
  return (
    <div className={`${styles['nav-menu']} ${props.isShow ? 'show' : 'hide'}`}>
      <nav className={styles['nav-menu-items']}>
        { navigation.map(nav => (
          <Link href={ nav.path } className={styles['nav-menu-items__link']}><a>{ nav.title }</a></Link>
        )) }
      </nav>

      <div className={styles['nav-menu-socials']}>
        { socialLinks.map((social, index) => (
          <Link href={social.link} className={styles['nav-menu-socials__link']} key={'social-header-nav-' + index}>
            <a rel="nofollow">
              <i className={ social.icon }></i>
            </a>
          </Link>
        )) }
      </div>
    </div>
  )
}