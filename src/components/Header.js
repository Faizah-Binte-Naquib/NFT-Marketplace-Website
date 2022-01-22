import React from 'react';
import './Header.css';

function Header() {
    return (
        <>
           <div className='header-container'>
               <div className='wrapper'>
                   <header>
                   <div className='header-details'>
                        <div className='title'>
                            DISCOVER, AND COLLECT <br/>DIGITAL ART NFTS
                        </div>
                        <div className='details'>
                            Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
                        </div>
                        <div className='grid'>
                            <img src='./images/Dot.png'alt="loading.."/>
                        </div>
                        <div className='stat-and-button'>
                        <div className='button'>Explore Now</div>
                        <ul className='stat'>
                            <div className='stat_item'>
                            <li className='number'>98k+</li>
                            <li className='label'>Artwork</li>
                            </div>
                            <div className='stat_item'>
                            <li className='number'>12k+</li>
                            <li className='label'>Auction</li>
                            </div>
                            <div className='stat_item'>
                            <li className='number'>15k+</li>
                            <li className='label'>Artist</li>
                            </div>
                        </ul>
                        </div>
                   </div>
                   <div className='header-cards-container'>
                   <img src='./images/stacked_cards.png' alt='loading..'/>
                   <img src='./images/live_auction.png' className='stamp' alt='loading..'/>
                   
                   <div className='top-wrapper'>
                            <div className='title'>Abstr Gradient NFT</div>
                            <div className='person'>
                                <img src='./images/arkhan17.png' alt='loading...'/>
                                 Arkhan17
                            </div>
                        </div>
                        <div className='wrapper'>
                            <div className='content'>
                                <ul className='item'>
                                <li className='bid-info-label'>Current Bid</li>
                                <li className='bid-info'><img src='./images/bid symbol.png' alt='loading'/> 0.25 ETH</li>
                                </ul>
                                <ul className='item'>
                                <li className='bid-info-label'>Ends in</li>
                                <li className='bid-info'>12h 43m 42s</li>
                                </ul>
                            </div>
                        </div>
                   </div>
                   </header>
               </div>
            </div> 
        </>
    )
}

export default Header
