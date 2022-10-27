import React from 'react'
import styles from './Carousel.module.css'
import { useState, useEffect } from 'react'

export default function Carousel(props) {

    const [slides, setSlides] = useState([])
    const [counter, setCounter] = useState(0)

    const shiftRight = () => {
        setCounter(counter + 1)
        if(counter >= slides.length - 1) setCounter(0)
    }

    useEffect(() => {
        setSlides(props.imgArray)
    }, [])

    setTimeout(()=>{
        shiftRight()
    }, 5000)


    return (
        <div className={styles.container}>
            <div onClick={shiftRight}>
                <img src={slides[counter]} alt="" />
            </div>
        </div>
    )
}
