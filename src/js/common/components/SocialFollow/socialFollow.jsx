import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import styles from './socialFollow.css';


library.add(fab, faStroopwafel, faAddressBook)


const socialFollow = () => {
  return (
    <div>
      <ul className={styles.socialIcons}>
        <li>
          <a href="https://www.facebook.com/budapestrivercruise/">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>

        </li>
        <li>
          <a href="https://www.google.com/maps/place/Budapest+River+Cruises+-+Silverline/@47.4918256,19.0483903,17z/data=!3m1!4b1!4m11!1m5!8m4!1e2!2s104183252487697633908!3m1!1e1!3m4!1s0x4741dc46fc5d7ceb:0xf495c2d0c0f0f907!8m2!3d47.491822!4d19.050579">
            <FontAwesomeIcon icon={['fab', 'google']} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/silverline_cruises/">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default socialFollow;
