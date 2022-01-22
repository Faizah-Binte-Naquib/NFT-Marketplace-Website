import React from 'react';
import './FirstSection.css';

function FirstSection() {
  return (<>
  <div className='first-section-container'>
    <img className='painting' src='./images/paintings/painting4.jpg' alt='loading...'/>
    <div className='details'>
      <img className='profile-icon' src='./images/arkhan17.png' alt='loading...'/>
      <div className='name-amount'>
        <div className='name'>The Futr Abtsr</div>
        <div className='amount'>10 in stock</div>
      </div>
      <div className='bid'>
        <div className='label'>Highest Bid</div>
        <div className='bid-amount'><img src='./images/gray bid symbol.png' alt='loading...'/>0.25 ETH</div>
      </div>
    </div>

  </div>
  </>);
}

export default FirstSection;
