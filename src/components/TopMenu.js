import React from 'react';
import './TopMenu.css';


function TopMenu() {
    return (
        <>
            <div className='nav-container'>
                <div className='wrapper'>
                    <nav>
                        <div className='logo'>
                            NFTERS
                        </div>
                        <div className='line'>

                        </div>
                        <ul className='nav-items'>
                            <li><a href="#marketplace">Market Place</a></li>
                            <li><a href="#resource">Resource</a></li>
                            <li><a href="about">About</a></li>
                        </ul>
                        <div className='nav-search'>
                            <input placeholder='Search'></input>
                            <img src='./images/search_icon.png' alt='loading...'/>
                        </div>
                        <div className='nav-buttons'>
                            <button className='button_1'>Upload</button>
                            <button className='button_2'>Connect Wallet</button>
                        </div>
                    </nav>
                </div>
               
            </div>
            <div className='nav-end-line'></div>
           
        </>
    )
}

export default TopMenu
