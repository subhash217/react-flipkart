import React from 'react';
import './Footer.css';
import sellImage from './download-1.svg'
import Advertise from './download-2.svg'
import Giftcards from './download-3.svg'
import Helpcenter from './download-4.svg'
import Payments from './payment-methods.svg'

export default function Footer() {
    return (
        <>
        <footer className="footerContainer">
            <div className="footerTop">
                <div className='about'>
                      <div>ABOUT</div>
                      <span>Contact Us</span>
                      <span>About Us</span>
                      <span>Carrers</span>
                      <span>flipkart Stories</span>
                      <span>Press</span>
                </div>
                <div className='help'>
                <div>HELP</div>
                   
                    <span>Payments</span>
                    <span>Shipping</span>
                    <span>Cancellation &amp; Return</span>
                    <span>FAQ</span>
                    <span>Report</span>
                    
                </div>
                <div className='policy'>
                <div >POLICY</div>
                    <span>Return Policy</span>
                    <span>Terms Of Use</span>
                    <span>Security</span>
                    <span>Privacy</span>
                    <span>Sitemap</span>
                </div>
            
                <div className='social'>
                <div>SOCIAL</div>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Youtube</span>
                </div>
                <div className='mailBox' >
                    <div className='mail'>Mail Us:</div>
                    <p>Flipkart Internet Private Limited, </p>
                    <p> Buildings Alyssa, Begonia &amp; </p>
                    <p> Clove Embassy Tech Village, </p>
                    <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                    <p> Bengaluru, 560103, </p>
                    <p> Karnataka, India</p>
                </div>
                <div className='registeredBox'>
                    <div className='registered'>Registered Office Address:</div>
                    <p>Flipkart Internet Private Limited, </p>
                    <p> Buildings Alyssa, Begonia &amp; </p>
                    <p> Clove Embassy Tech Village, </p>
                    <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                    <p> Bengaluru, 560103, </p>
                    <p> Karnataka, India </p>
                    <p> CIN : U51109KA2012PTC066107 </p>
                    </div>
            </div>
            <div className="footerBottom">
                <div>
                    <img src={sellImage} alt="sell"/>
                    <span style={{marginLeft:'6px'}}>Sell On Flipkart</span>
                </div>
                <div>
                <img src={Advertise} alt="sell"/>
                <span style={{marginLeft:'6px'}}>Advertise</span>
                </div>
                <div>
                <img src={Giftcards} alt="sell"/>
                <span style={{marginLeft:'6px'}}>Gift Cards</span>
                </div>
                <div>
                <img src={Helpcenter} alt="sell"/>
                <span style={{marginLeft:'6px'}}>Help Center</span>
                </div>
                <div>
                <span>@2002-2020 Flipkart.com</span>
                </div>
                <div>
                <img src={Payments} alt="sell"/>
                </div>
            </div>
        </footer>
            
        </>
    )
}
