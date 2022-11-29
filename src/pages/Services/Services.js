import React from 'react'
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom'
import './Services.css'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SecurityIcon from '@mui/icons-material/Security';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import LaptopIcon from '@mui/icons-material/Laptop';
import Link from '@mui/material/Link';
import Responsive from './Carousel';
function Services() {
  return (
    <div>
         <nav className='serviceNav'>
            <div className="serviceContainer">
            <NavLink to="/" >
                <IconButton>
                <ArrowBackIosSharpIcon/>
                </IconButton>
            </NavLink>
                
            </div>
        </nav>
        <div className="sectionOne">
            <div className="serviceContainer">
               <div className='servicey'>
               <h1 className="serviceHeading">Fast and affordable repair services</h1>
                <p className="paragraphService">We strive to meet the needs of our customers and provide you with quick and timely service.</p>
               </div>
                <div className="serviceContact">
                    <p className='name'>Name:Mitundwa Saguda</p>
                     <p className='name'>Phone:+255685637420</p>
                     <div className="social">
                        
                     <Link href="https://www.facebook.com/profile.php?id=100088125702282" target="_blank"  rel="noopener noreferrer"><IconButton><FacebookSharpIcon className='icony'/></IconButton></Link>
                        
                        
                        <Link href="http://www.twitter.com" target="_blank"  rel="noopener noreferrer"><IconButton><TwitterIcon className='icony'/></IconButton></Link>
                     
                     
                      <Link href="https://www.instagram.com/mi2tonics/" target="_blank" rel="noopener noreferrer"><IconButton><InstagramIcon className='icony'/></IconButton></Link>
                     </div>
                </div>
                <div className="listService">
                    <div className="listt">
                        <DoneIcon className='done'/>
                        <p className='p'>Quality Services</p>
                    </div>
                    <div className="listt">
                        <DoneIcon className='done'/>
                        <p className='p'>Quality Response</p>
                    </div>
                    <div className="listt">
                        <DoneIcon className='done'/>
                        <p className='p'>Always on the customer side</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="sectionTwo">
            <div className="serviceContainer">
                <div className="tool">
                     <TroubleshootIcon className='colorIcon'/>
                     <h3>Free diagnostics</h3>
                     <p className='detaill'>Our firm perform free and fast software and Hardware diagnostics in order to determine the issue</p>
                </div>
                <div className="tool">
                     <AccessTimeIcon className='colorIcon'/>
                     <h3>Fast Services</h3>
                     <p className='detaill'>In our company,we have experienced team with vast knowledge in both software and hardware which makes the service provided fast than ever</p>
                </div>
                <div className="tool">
                     <SecurityIcon className='colorIcon'/>
                     <h3>40 days warranty</h3>
                     <p className='detaill'>Our company is providing a truthful warranty of 40 days if the device repaired is not function has it should be</p>
                </div>
            </div>
        </div>
        <div className="sectionThree">
            <div className="serviceContainer">
            <div className="floats">
                <ThumbUpOffAltIcon className='colorIcon'/>
                <h1 className='letters'>100%</h1>
                <hr className='line'/>
                <p className='let'>Satisification Granteed</p>


            </div>
            <div className="floats">
                <CalendarMonthIcon className='colorIcon'/>
                <h1 className='letters'>3</h1>
                <hr className='line'/>
                <p className='let' >Years On The Market.</p>

            </div>
            <div className="floats">
              <GroupsIcon className='colorIcon'/>
                <h1 className='letters'>500+</h1>
                <hr className='line'/>
                <p className='let'>Happy Customer.</p>

            </div>
            <div className="floats">
                <LaptopIcon className='colorIcon'/>
                <h1 className='letters'>3000+</h1>
                 <hr className='line'/>
                <p className='let'>Items Repaired.</p>

            </div>
            </div>
        </div>
        <div className="sectionFour">
            <div className="serviceContainer">
                <div className="introduction">
                       <h1 className='intro'>But also we have accessories for purchase </h1>
                </div>
                <div className="carousel">
                        <Responsive/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services