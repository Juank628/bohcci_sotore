import React from 'react'
import styles from './Carousel.module.css'
import promo_0001 from "../../assets/photos/art/promo_0001.png";

export default function Carousel() {
    return (
        <div className={styles.container}>
            <div>
                <img class="mobile_view" src={promo_0001} alt="" />
                <img class="tablet_view" src="" alt="" />
                <img class="desktop_view" src="" alt="" />
            </div>
        </div>
    )
}
