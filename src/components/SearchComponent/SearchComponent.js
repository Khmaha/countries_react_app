import React, { useEffect } from 'react';
import './SearchComponent.scss'
const SearchComponent = ({ filterCountryListByName, filtredKeyword }) => {
    useEffect(() => {
        console.log("filtredKeyword", filtredKeyword)
        if (filtredKeyword) {
            document.getElementById("search").value = filtredKeyword
        }
    }, [])
    return (
        <div className="search">
            <input type="search"
                id="search"
                className="input-search"
                placeholder="Search for a country.."
                onKeyUp={(ev) => filterCountryListByName(ev.target.value)} ></input>
            <i className="icon-search "></i>
        </div>
    )
}

export default SearchComponent
