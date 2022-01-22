import React from 'react';
import './Footer.css';

function Footer() {
  return (<>
  <div className='footer-container'>
      <div className='wrapper'>
        <footer>
            <div className='main-body'>
                <div className='nfters-content'>
                    <div className='title'>NFTERS</div>
                    <div className='details'>
                    The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                    </div>
                    <div className='icons'>
                        <img src='./images/facebook.png' alt='loading...'/>
                        <img src='./images/twitter.png' alt='loading...'/>
                        <img src='./images/linkedin.png' alt='loading...'/>
                    </div>
                </div>
                <div className='market-place'>
                    <div className='title'>Market Place</div>
                    <ul>
                        <li>All NFTs</li>
                        <li>New Art</li>
                        <li>Art</li>
                        <li>Sports</li>
                        <li>Utility</li>
                        <li>Music</li>
                        <li>Domain Name</li>
                    </ul>
                </div>
                <div className='my-account'>
                <div className='market-place'>
                    <div className='title'>My Account</div>
                    <ul>
                        <li>Profile</li>
                        <li>Favorite</li>
                        <li>My Collections</li>
                        <li>Settings</li>
                    </ul>
                </div>
                </div>
                <div className='loop'>
                    <div className='title'>Stay In The Loop</div>
                    <div className='details'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</div>
                    <div className='search'>
                        <input placeholder='Enter your email address'></input>
                        <button>Subscribe now</button>
                    </div>
                </div>
            </div>
            <div className='copy-right'>
                Copyright © 2022 Avi Yansah
            </div>
        </footer>
      </div>
  </div>
  
  </>);
}

export default Footer;
