import React from 'react'
import Bar from '../assets/SvgIcons/3BAR.svg'
import logo from '../assets/DeveloperLogo/F1M5_Logo.webp'
import Wallet from '../assets/SvgIcons/wallet.svg'
import userHead from '../assets/SvgIcons/userhead.svg'
import '../styles/Header.css'


const Header = () => {
    return (
        <nav>
            <div>
                <img src={Bar}></img>
                <img src={logo}></img>
            </div>
            <div>
                <img src={Wallet}></img>
                <p>$1,290</p>
                <img src={userHead}></img>
            </div>
        </nav>
    )
}

export default Header