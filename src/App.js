import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import MainComponent from './components/MainComponent/MainComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PreviewCountryComponent from './components/PreviewCountryComponent/PreviewCountryComponent';
import eventHub from './eventHub';

function App() {
  const [filtredKeyword, setFiltredKeyword] = useState("")
  const [filtredRegion, setFiltredRegion] = useState("")
  const [countriesList, setAllCountries] = useState([])
  const [filtredCountryList, setFiltredCountryList] = useState([])
  const [themeMode, setThemeMode] = useState("light")
  const [country, setCountry] = useState({})
  const [bordersCountry, setBorderCountries] = useState({})
  let themes = [
    {
      id: 0,
      name: 'light',
      class: 'left'
    },
    {
      id: 1,
      name: 'dark',
      class: 'right'
    },
  ]
  useEffect(() => {
    let hasThemeMode = localStorage.getItem('theme-mode');
    let selectedTheme = themes.find(theme => theme.name === hasThemeMode)
    changeMode(selectedTheme ? selectedTheme : {
      id: 0,
      name: 'light',
      class: 'left'
    })
    axios.get("https://restcountries.eu/rest/v2/all")
      .then(data => {
        console.log("data", data)
        setAllCountries(data.data)
      })
      .catch(err => console.log("err", err))

    eventHub.on("get-country", ({ countryView, borders }) => {
      setCountry(countryView)
      setBorderCountries(borders)
    })
  }, [])

  const handleFilterCountryListByName = (keyword) => {
    setFiltredKeyword(keyword)
    let filtredData = countriesList.filter(event => filtredRegion ? event.region.includes(filtredRegion) && event.name.toLowerCase().includes(keyword.toLowerCase()) : event.name.toLowerCase().includes(keyword.toLowerCase()))
    setFiltredCountryList(filtredData)
  }
  const handleFilterCountryListByRegion = (region) => {
    setFiltredRegion(region)
    let filtredData = countriesList.filter(event => filtredKeyword ? event.name.toLowerCase().includes(filtredKeyword.toLowerCase()) && event.region.includes(region) : event.region.includes(region))
    setFiltredCountryList(filtredData)
  }
  const changeMode = (theme) => {
    setThemeMode(theme.name)
    let appEl = document.querySelector('.App')
    let switcher = document.querySelector('.header-mode__switcher')
    let iconTheme = document.querySelector('.header-mode__icon-theme')
    if (switcher) switcher.style.left = (((theme.id) * 35) + 4) + 'px';
    if (iconTheme) iconTheme.style.left = (((theme.id) * 35) + 4) + 'px';
    if (appEl) {
      appEl.className = 'App';
      appEl.classList.add(theme.name + '-mode')
    }
    localStorage.setItem('theme-mode', theme.name)
  }
  const clickCountry = (countryName) => {
    let country = countriesList.find(country => country.name.toLowerCase() === countryName.toLowerCase())
    let borders = [];
    country.borders.forEach(border => {
      let filtredBorderCountryList = countriesList.filter(country => country.alpha3Code === border)
      if (filtredBorderCountryList && filtredBorderCountryList.length) {
        borders.push(filtredBorderCountryList[0].name)
      }
    })
    eventHub.trigger("get-country", { countryView: country, borders })
  }
  return (
    <Router>
      <div className="App">
        <HeaderComponent changeMode={changeMode} themeMode={themeMode} themes={themes}></HeaderComponent>
        <Switch>
          <Route exact path="/">
            <MainComponent
              countriesList={(filtredCountryList && filtredCountryList.length) || (filtredRegion || filtredKeyword) ? filtredCountryList : countriesList}
              handleFilterCountryListByName={(e) => handleFilterCountryListByName(e)}
              handleFilterCountryListByRegion={(e) => handleFilterCountryListByRegion(e)}
              filtredRegion={filtredRegion}
              filtredKeyword={filtredKeyword}
              clickCountry={(e) => clickCountry(e)}
            ></MainComponent>
          </Route>
          <Route exact path="/countryview">
            <PreviewCountryComponent country={country} bordersCountry={bordersCountry} changeCountryPreview={clickCountry}></PreviewCountryComponent>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
