import React from 'react';
import './AmazeNFT.css';

function AmazeNFT() {
    return (
        <div>
            <div className='amaze-container'>
                <div className='wrapper'>
                    <div className='item1'>
                     The amazing NFT art of the world here
                    </div>
                    <div className='item2'>
                     <ul>
                         <li className='label'><img src='./images/fast_transaction.png' alt='loading...'/> Fast Transaction</li>
                         <li className='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</li>
                     </ul>
                    </div>
                    <div className='item2'>
                     <ul>
                         <li className='label'><img src='./images/growth_transaction.png' alt='loading...'/> Growth Transaction</li>
                         <li className='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus</li>
                     </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AmazeNFT
