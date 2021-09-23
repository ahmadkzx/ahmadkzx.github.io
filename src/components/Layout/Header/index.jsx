import styles from './index.module.scss'
import { useEffect, useState } from 'react'
import NavMenu from '../NavMenu'
import Link from 'next/link'
import { navigation, socialLinks } from '../../../config'

export default function Header() {
  const [isShowNavMenu, setIsShowNavMenu] = useState(false)

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.overflowY = isShowNavMenu ? 'hidden' : 'auto'
  }, [isShowNavMenu])

  return (
    <header className={styles['header']}>

      <div className={styles['header-mobile-top']}>
        <div className="container">
          <div className={styles['header-mobile-top-nav']}>
            <button className={styles['header-mobile-top-nav__btn']} onClick={() => setIsShowNavMenu(!isShowNavMenu)}>
              {isShowNavMenu ? <i className="ti-close"></i> : <i className="ti-menu"></i>}
            </button>

            <NavMenu isShow={isShowNavMenu} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles['header-heading']}>
          <h4 className={styles['header-heading__subtitle']}>EVERY THING HERE IS ABOUT PROGRAMMING.</h4>
          <Link href="/"><a className={styles['header-heading__title']}><h2>Ahmad Karimzade</h2></a></Link>
        </div>
      </div>

      <div className={styles['header-nav']}>
        <div className="container">
          <div className={`row ${styles['header-nav-items']}`}>
            
            {navigation.map((nav, index) => (
              <div key={'nav-header-' + index} className={`col-3 ${styles['header-nav-items-block']}`}>
                <Link href={nav.path}>
                  <a className={styles['header-nav-items-block__link']}>{nav.title}</a>
                </Link>
              </div>
            ))}

            {/* <div className={`col-3 search ${styles['header-nav-items-block']}`}>
              <input type="text" placeholder="Search..." className={styles['header-nav-items-block__search-input']} />
              <i className="ti-search"></i>
            </div> */}

            <div className={`col-3 ${styles['header-nav-items-block']}`}>
              {socialLinks.map((social, index) => (
                <a
                  rel="nofollow"
                  href={social.link}
                  key={'social-header-' + index}
                  className={`${styles['social-icon']} ${styles['header-nav-items-block__link']}`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}