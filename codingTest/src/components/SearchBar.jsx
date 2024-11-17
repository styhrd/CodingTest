import React, { useState } from 'react'
import SB from '../assets/SvgIcons/search.svg'
import '../styles/Searchbar.css'

const SearchBar = () => {

    const [showBar, setShowBar] = useState(false)

    function handleClick() {
        setShowBar((prevstate) => !prevstate)
    }


    return (<>
        <div onClick={handleClick} className={` searchbar ${showBar ? 'active' : ""} `}>
            <img src={SB}></img>
            <p>SEARCH</p>
        </div>
        {console.log(showBar)}
        {setShowBar && (
            <p>asdkljsad</p>
        )}
    </>)
}

export default SearchBar