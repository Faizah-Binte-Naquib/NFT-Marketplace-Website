import React from 'react';
import './SecondSection.css';
import {bid_options} from '../StaticArrays';

function SecondSection() {
  return (<>


  <div className='second-section-container'>
      <div className='wrapper'>
          {
              bid_options.map(option=>

          <div className='item'>
              <div className='image'>
                 <img src={option.painting} alt="loading..."/>
              </div>
              <div className='content'>
                  <div className='name'>
                    {option.title}
                  </div>
                  <div className='details'>
                        <img className='profile-icon' src={option.icon} alt='loading'/>
                        <button><img src='./images/green bid symbol.png' alt='loading...'/>{option.amount}</button>
                        <div className='out-of'>{option.outof}</div>
                  </div>
                  <button>Place a bid</button>
              </div>
          </div>
                          )
                        }
      </div>
  </div>
  
  
  
  
  </>);
}

export default SecondSection;
