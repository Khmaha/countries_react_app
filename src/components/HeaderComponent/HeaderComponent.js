import React, { useState } from 'react';
import './HeaderComponent.scss'

const HeaderComponent = ({ changeMode, themeMode, themes }) => {
    return (
        <div className="header">
            <h3 className="header-title">Countries List</h3>
            <div className='header-mode'>
                {
                    themes && themes.length && themes.map(theme => {
                        return (
                            <div key={theme.id} className={"header-mode__icon header-mode__icon--" + theme.class} onClick={(e) => changeMode(theme)} >
                                <input type="radio" id={theme.name} name={theme.name} value={theme.name} checked={themeMode === theme.name} />
                            </div>
                        )
                    })
                }
                <i className={'header-mode__icon header-mode__icon--left header-mode__icon-theme ' + (themeMode === 'light' ? `icon-dark-sun` : `icon-dark-moon`)}></i>
                <span className="header-mode__icon header-mode__icon--left header-mode__switcher"></span>
            </div>
        </div>
    )
}

export default HeaderComponent
