import React from 'react'
import { useState } from 'react'
import styles from './Colorset.module.css'

export default function Colorset() {

    const [colors, setColors] = useState(['red', 'blue'])

    return (
        <div className={styles.container}>
            {colors.map(color => (
                <div className={styles.color_container}>
                    <div className={styles.color_option} style={{ backgroundColor: color }}></div>
                </div>
            ))}
        </div>
    )
}
