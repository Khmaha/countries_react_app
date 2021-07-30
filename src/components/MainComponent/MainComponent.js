import React from 'react';
import NavbarComponent from '../NavbarComponent/NavbarComponent.js'
import CardListComponent from '../CardListComponent/CardListComponent.js';
import './MainComponent.scss'
const MainComponent = ({ countriesList, handleFilterCountryListByRegion, handleFilterCountryListByName, filtredKeyword, filtredRegion, clickCountry }) => {
    return (
        <div className="main-content">
            <NavbarComponent
                filterCountryListByName={handleFilterCountryListByName}
                filterCountryListByRegion={handleFilterCountryListByRegion}
                filtredKeyword={filtredKeyword}
                filtredRegion={filtredRegion}
            ></NavbarComponent>
            <CardListComponent
                countriesList={countriesList}
                clickCountry={clickCountry}
                filtredKeyword={filtredKeyword}
                filtredRegion={filtredRegion}
            ></CardListComponent>
        </div>
    )
}

export default MainComponent
