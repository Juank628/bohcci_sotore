import React from 'react'
import styles from './Carousel.module.scss'

export default function Carousel() {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.mobile_view} src="./photos/art/promo_0001.png" alt="" />
                <img className="tablet_view" src="" alt="" />
                <img className="desktop_view" src="" alt="" />
            </div>
        </div>
    )
}
