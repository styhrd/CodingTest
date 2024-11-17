import React, { useEffect, useState } from 'react'
import SliderImg from '../assets/GameLogo/Frame18.webp'
import SliderImg2 from '../assets/GameLogo/slide.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Carousell.css'

const Carousell = () => {
    const [currentindex, setCurrentIndex] = useState(0)
    const images = [
        SliderImg, SliderImg2, SliderImg, SliderImg2
    ]


    useEffect(() => {
        if (currentindex == images.length - 1) {
            setCurrentIndex(0)
        }

        else if (currentindex == -1) {
            setCurrentIndex(0)
        }
    }, [currentindex])


    return (<>
        <div className='carousell'>
            <img src={images[currentindex]}></img>
            <div className='carbutt'>
                <i onClick={() => setCurrentIndex(currentindex - 1)} className="bi bi-caret-left-fill"></i>
                <i onClick={() => setCurrentIndex(currentindex + 1)} className="bi bi-caret-right-fill"></i>
            </div>

        </div>

    </>)
}

export default Carousell