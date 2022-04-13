import React from 'react';
import './NewsCard.css';
import NewsCardSettings from '../NewsSettings/NewsCardSettings';
import articleImagePath from '../../images/article-image_1.jpg';
import { options } from '../NewsSettings/consts'
import newsCardsList from '../../service/newsCardsList';


function NewsCard(props) {
  const [categoryColor, setCategoryColor] = React.useState(options[0].value);
  const [categoryName, setCategoryName] = React.useState(newsCardsList[0].category);




  function handleNameChange(e) {
    setCategoryName(e.target.value);
  }

  function handleColorChange(e) {
    setCategoryColor(e.target.value);
  }

  function addDefaultSrc(e) {
    e.target.src = articleImagePath;
  }

  return(
    <>
      <div className='card'>
        <div className='card__image-container'>
          <img  onError={addDefaultSrc} className="card__image" src={newsCardsList[0].imageLink} alt={newsCardsList[0].imageAlt}/>
        </div>
        <div className='card__text-container'>
          <span className='card__category' style={{backgroundColor: categoryColor}}>{categoryName}</span>
          <h2 className='card__title'>{newsCardsList[0].title}</h2>
          <h3 className='card__subtitle'>{newsCardsList[0].subtitle}</h3>
          <p className='card__author'>{newsCardsList[0].author}</p>
        </div>
      </div>
      <NewsCardSettings
        handleColorChange={handleColorChange}
        handleNameChange={handleNameChange}
        categoryColor={categoryColor}
        categoryName={categoryName}
      />
    </>
  )
}

export default NewsCard;