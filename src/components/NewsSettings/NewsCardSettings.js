import React from 'react';
import './NewsCardSettings.css';
import { options } from './consts'

function NewsCardSettings(props) {


  return (
    <div className='settings'>
      <div className='settings__inputs-container'>
        <label className='settings__input-title'>צבע רקע - שם קטגוריה</label>
        <select onChange={props.handleColorChange} value={props.categoryColor || 'red'} className='settings__input'>
          {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
        </select>
        <label className='settings__input-title'>שם קטגוריה</label>
        <input onChange={props.handleNameChange} value={props.categoryName || ''} className='settings__input'></input>
      </div>
    </div>
  )
}

export default NewsCardSettings;