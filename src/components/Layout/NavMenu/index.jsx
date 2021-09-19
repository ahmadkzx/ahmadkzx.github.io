import styles from './index.module.scss'
import Link from 'next/link'
import { navigation, socialLinks } from '../../../config'

export default function NavMenu(props) {
  return (
    <div className={`${styles['nav-menu']} ${props.isShow ? styles['show'] : styles['hide']}`}>
      <nav className={styles['nav-menu-items']}>
        {navigation.map((nav, index) => (
          <Link href={nav.path} key={'nav-menu-item' + index}>
            <a className={styles['nav-menu-items__link']}>{nav.title}</a>
          </Link>
        ))}
      </nav>

      <div className={styles['nav-menu-socials']}>
        {socialLinks.map((social, index) => (
          <Link href={social.link} key={'nav-menu-social-item' + index}>
            <a rel="nofollow" className={styles['nav-menu-socials__link']}>
              <i className={social.icon}></i>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}