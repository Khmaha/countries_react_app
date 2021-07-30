import React from 'react';
import './CardListComponent.scss';
import { Link } from 'react-router-dom';
import eventHub from '../../eventHub'
const CardListComponent = ({ countriesList, clickCountry, filtredKeyword, filtredRegion }) => {
    const isEmpty = (filtredKeyword || filtredRegion) && !countriesList.length;
    return (
        <div className={"card-list " + (isEmpty ? ' isEmpty' : '')}>
            {countriesList && countriesList.length > 0 ? countriesList.map((card, index) => {
                return (
                    <Link className="card-item" key={index} to={"/countryview"} onClick={() => clickCountry(card.name)}>
                        <div className="card-image"><img className="card-img" src={card.flag}></img></div>
                        <div className="card-description">
                            <span className="card-name">{card.name}</span>
                            <div><span className="card-title">Population :</span><span className="card-value">{card.population}</span></div>
                            <div><span className="card-title">Region :</span><span className="card-value">{card.region}</span></div>
                            <div><span className="card-title">Capital :</span><span className="card-value">{card.capital}</span></div>
                        </div>
                    </Link>
                )
            }) : isEmpty && <span className="card-list__no-videos">No Videos</span>}
        </div>
    )
}

export default CardListComponent
