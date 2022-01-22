import React from 'react';
import './CollectionOver.css';
import FirstSection from './CollectionOver_files/FirstSection';
import SecondSection from './CollectionOver_files/SecondSection';
import ThirdSection from './CollectionOver_files/ThirdSection';

function CollectionOver() {
  return (<>
  {/* all required components for CollectionOver is in the CollectionOver_files directory */}
            <div className='collection-container'>
                <div className='wrapper'>
                    <div className='collection-content'>
                        <div className='first-section'>
                        <FirstSection/>
                        </div>
                        <div className='second-section'>
                        <SecondSection/>
                        </div>
                        <div className='third-section'>
                        <ThirdSection/>
                        </div>
                    </div>
                </div>
            </div>


         </>);
}

export default CollectionOver;
