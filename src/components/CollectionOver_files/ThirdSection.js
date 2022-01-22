import React from 'react';
import './ThirdSection.css';
import {top_collection} from '../StaticArrays'

function ThirdSection() {
  return( 
  <>
  <div className='third-section-container'>
    <div className='wrapper'>
      <div className='title'>
      Top Collections over
      </div>
      <div className='days'>
        Last 7 days
      </div>
      {
      top_collection.map(collection=>
      <div className='bound-item'>
      <div className='items'>
        <div className='serial'>{collection.serial}</div>
        <img className={collection.tick} src='./images/tick.png' alt='loading...'/>
        <img className='painting_icon' src={collection.icon} alt='loading...'/>
        <div className='details'>
          <div className='name'>{collection.title}</div>
          <div className='amount'><img src='./images/black bid symbol.png' alt='loading'/>{collection.amount}</div>
        </div>
        <div className={collection.color}>{collection.percent}</div>
      </div>
      <div className='border'></div>
      </div>
      ) }
    </div>
  </div>
  
  
  </>);
}

export default ThirdSection;
