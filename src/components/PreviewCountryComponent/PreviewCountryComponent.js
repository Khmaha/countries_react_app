import React, { useState, useEffect } from 'react';
import './PreviewCountryComponent.scss';
import { Redirect, Link } from 'react-router-dom'

const PreviewCountryComponent = ({ country, bordersCountry, changeCountryPreview }) => {
    useEffect(() => {
        console.log("preview component country", country)
        console.log("preview component bordersCountry", bordersCountry)
    }, [])
    const getListCountry = (list) => {
        let newList = []
        list.map(x => x.name ? newList.push(x.name) : newList.push(x));
        return newList.join(',')
    }
    return (
        <div className="preview-country">
            <Link to="/" className="link-back"><button className="link-back--btn"><i className="icon-arrow"></i>back</button></Link>
            <div className="country-card">
                {
                    country && Object.keys(country).length ?
                        <>
                            <div className="country-card-image"><img className="country-card-img" src={country.flag}></img></div>
                            <div className="country-card-description">
                                <h2 className="country-card-name">{country.name}</h2>

                                <div className="country-card-list">
                                    <div className="country-card-list--1">
                                        <div><span className="country-card-title">Native Name : </span><span className="country-card-value">{country.nativeName}</span></div>
                                        <div><span className="country-card-title">Population : </span><span className="country-card-value">{country.population}</span></div>
                                        <div><span className="country-card-title">Region : </span><span className="country-card-value">{country.region}</span></div>
                                        <div><span className="country-card-title">Sub region : </span><span className="country-card-value">{country.subregion}</span></div>
                                        <div><span className="country-card-title">Capital : </span><span className="country-card-value">{country.capital}</span></div>
                                    </div>
                                    <div className="country-card-list--2">
                                        <div><span className="country-card-title">Top Level Domain : </span><span className="country-card-value">{getListCountry(country.topLevelDomain)}</span></div>
                                        <div><span className="country-card-title">Currencies : </span><span className="country-card-value">{getListCountry(country.currencies)}</span></div>
                                        <div><span className="country-card-title">Languages : </span><span className="country-card-value">{getListCountry(country.languages)}</span></div>

                                    </div>
                                </div>

                                {
                                    bordersCountry && bordersCountry.length > 0 && <div className="country-card-border">
                                        <span className="country-card-title--border">Border countries : </span>
                                        {
                                            bordersCountry.map(border => {
                                                return (
                                                    <span className="country-card-value--border" onClick={() => changeCountryPreview(border)}>{border}</span>
                                                )
                                            })
                                        }
                                    </div>
                                }

                            </div>
                        </>
                        : <Redirect to='/'></Redirect>
                }
            </div>

        </div>
    )
}

export default PreviewCountryComponent
