import React from 'react';
import SearchComponent from '../SearchComponent/SearchComponent.js'
import SelectComponent from '../SelectComponent/SelectComponent.js';
import './NavbarComponent.scss'
const NavbarComponent = ({ filterCountryListByName, filterCountryListByRegion, filtredRegion, filtredKeyword }) => {
    return (
        <div className="navbar">
            <SearchComponent filterCountryListByName={filterCountryListByName} filtredKeyword={filtredKeyword}></SearchComponent>
            <SelectComponent filterCountryListByRegion={filterCountryListByRegion} filtredRegion={filtredRegion}></SelectComponent>
        </div>
    )
}

export default NavbarComponent
