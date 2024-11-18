import React from 'react'
import fave from '../assets/SvgIcons/FAVE.svg'
import '../styles/Footer.css'

export const Footer = ({ activeCat, onCategoryChange }) => {
    return (
        <>
            <div
                className={`category ${activeCat === "fave" ? "active" : ""}`}
                onClick={() => onCategoryChange("fave")}>
                <img src={fave}></img>
                <p>Favorites</p>
            </div>
        </>
    )
}
