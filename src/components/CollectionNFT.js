import React from 'react';
import './CollectionNFT.css';
import {featured_collection} from './StaticArrays';

function CollectionNFT() {
  return (<>
  <div className='collection-nft-container'>
      <div className='wrapper'>
      <div className='title'>Collection Featured NFTS</div>
      <div className='wrapped-items'>
          {
              featured_collection.map(collection=>

          <div className='item'>
              <div className='upper-image-section'>
                    <div className='main-painting'>
                        <img src={collection.paintings[0]} alt='loading...'/>
                    </div>
                    <div className='list-of-paintings'>
                        <img src={collection.paintings[1]} alt='loading...'/>
                        <img src={collection.paintings[2]} alt='loading...'/>
                        <img src={collection.paintings[3]} alt='loading...'/>
                    </div>
              </div>
              <div className='lower-detail-section'>
                    <div className='label'>Amazing Collection</div>
                    <div className='information'>
                        <div className='profile'>
                            <img src={collection.profile_icon} alt='loading...'/>
                             by {collection.name}
                        </div>
                        <button>total {collection.total_items} items</button>
                    </div>
              </div>
          </div>
                          )
                        }
        </div>
      </div>
  </div>
  
  </>);
}

export default CollectionNFT;
