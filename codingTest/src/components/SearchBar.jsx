import React, { useState } from 'react'
import SB from '../assets/SvgIcons/search.svg'

const SearchBar = () => {

    const [showBar, setShowBar] = useState(true)

    function handleClick() {
        setShowBar(() => !showBar)
        console.log(showBar);

    }

    return (
        <div className='searchbar'>
            <img src={SB}></img>
            <p>SEARCH</p>
        </div>
    )
}

export default SearchBar