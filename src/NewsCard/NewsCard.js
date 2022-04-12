import React from 'react';
import './NewsCard.css';
import articleImagePath from '../images/article-image_1.jpg'


function NewsCard(props) {
  const [categoryColor, setCategoryColor] = React.useState('red');
  const [categoryName, setCategoryName] = React.useState('אוכל');


  const options = [
    {
      label: "אדום",
      value: "red",
    },
    {
      label: "שחור",
      value: "black",
    },
    {
      label: "ירוק",
      value: "green",
    },
    {
      label: "אפור",
      value: "grey",
    },
  ];

  function handleNameChange(e) {
    setCategoryName(e.target.value);
  }

  function handleColorChange(e) {
    setCategoryColor(e.target.value);
  }

  return(
    <>
      <div className='card'>
        <div className='card__image-container'>
          <img className="card__image" src={articleImagePath} alt='an image of the article'/>
        </div>
        <div className='card__text-container'>
          <span className='card__category' style={{backgroundColor: categoryColor}}>{categoryName}</span>
          <h2 className='card__title'>סיור קולינרי בין המסעדות הערביות הכי טובות בחיפה</h2>
          <h3 className='card__subtitle'>
            גם אני, שעסוק כל השבוע, מתפנה לצפות בטלוויזיה רק בסופי השבוע, ונוכחתי שרוב תוכניות
            הטלוויזיה בכל הערוצים הן תוכניות אוכל.
          </h3>
          <p className='card__author'>שירית גל</p>
        </div>
      </div>
      <div className='settings'>
        <div className='settings__inputs-container'>
          <label className='settings__input-title'>צבע רקע - שם קטגוריה</label>
          <select onChange={handleColorChange} value={categoryColor || 'red'} className='settings__input'>
            {options.map((option, i) => (
                  <option key={i} value={option.value}>{option.label}</option>
                ))}
          </select>
          <label className='settings__input-title'>שם קטגוריה</label>
          <input onChange={handleNameChange} value={categoryName || ''} className='settings__input'></input>
        </div>
      </div>
    </>
  )
}

export default NewsCard;