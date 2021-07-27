import React, { useEffect } from 'react';
import './SelectComponent.scss'

const SelectComponent = ({ filterCountryListByRegion, filtredRegion }) => {
    useEffect(() => {
        console.log("filtredRegion", filtredRegion)
    })
    const countriesRegionList = [
        {
            id: 0,
            name: 'All regions',
            value: ''
        },
        {
            id: 1,
            name: 'Africa',
            value: 'Africa'
        },
        {
            id: 2,
            name: 'America',
            value: 'America'
        },
        {
            id: 3,
            name: 'Asia',
            value: 'Asia'
        },
        {
            id: 4,
            name: 'Europe',
            value: 'Europe'
        },
        {
            id: 5,
            name: 'Oceania',
            value: 'Oceania'
        },
    ]
    return (
        <div className="list-region">
            <select onChange={(event) => filterCountryListByRegion(event.target.value)} >
                {
                    countriesRegionList.map(region => {
                        return (
                            <option id={region.id} value={region.value} key={region.id} selected={filtredRegion === region.value}>
                                {region.name}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default SelectComponent
