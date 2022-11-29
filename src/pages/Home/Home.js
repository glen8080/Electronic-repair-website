import React from 'react'
import { NavLink } from 'react-router-dom'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';
import Hidden from '@mui/material/Hidden';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Divider } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './Home.css'

function Home() {
    
  const [open ,setOpen] = React.useState(false)
  return (
    <div>
        
        <nav>
            <div className="container">
                 <div className='logo'>
                      <p>Mi<span className='two'>2</span>TONICS  </p>
                 </div>
                 <Hidden smDown>
                 <div className="menuTab">
                      <NavLink to="/" className="link">Home</NavLink>
                      <NavLink to="About" className="link">About</NavLink>
                       <NavLink to="Services"className="link">Services</NavLink>
                       <NavLink to="News" className="link">News</NavLink>
                 </div>
                 <div className='socialMedia'>
                    <div className='icons'>
                        
                           <Link href="https://www.facebook.com/profile.php?id=100088125702282" target="_blank"  rel="noopener noreferrer"><IconButton><FacebookSharpIcon className='icon'/></IconButton></Link>
                        
                        
                           <Link href="http://www.google.com" target="_blank"  rel="noopener noreferrer"><IconButton><TwitterIcon className='icon'/></IconButton></Link>
                        
                        
                         <Link href="https://www.instagram.com/mi2tonics/" target="_blank" rel="noopener noreferrer"><IconButton><InstagramIcon className='icon'/></IconButton></Link>
                        
                     
                            
                        
                    </div>
                         

                </div>
                </Hidden>
                <Hidden smUp>
                  <IconButton onClick={()=>setOpen(true)}>
                      <MenuIcon/>
                  </IconButton>
               </Hidden>
               <SwipeableDrawer anchor='right' open={open} >
                   <div>
                   <IconButton onClick={()=>setOpen(false)}>
                      <ChevronLeftIcon />
                    </IconButton>
                   </div>
                    <Divider/>
                    <List>
                      <ListItem>
                       <NavLink to="/" className="link">Home</NavLink>
                      </ListItem>
                      <ListItem>
                      <NavLink to="About" className="link">About</NavLink>
                      </ListItem>
                      <ListItem>
                      <NavLink to="Services"className="link">Services</NavLink>
                      </ListItem>
                      <ListItem>
                      <NavLink to="News" className="link">News</NavLink>
                      </ListItem>
                        <ListItem>
                           
                        <Link href="https://www.facebook.com/profile.php?id=100088125702282" target="_blank"  rel="noopener noreferrer"><IconButton><FacebookSharpIcon className='icon'/></IconButton></Link>
                        
                        
                        <Link href="http://www.twitter.com" target="_blank"  rel="noopener noreferrer"><IconButton><TwitterIcon className='icon'/></IconButton></Link>
                     
                     
                      <Link href="https://www.instagram.com/mi2tonics/" target="_blank" rel="noopener noreferrer"><IconButton><InstagramIcon className='icon'/></IconButton></Link>
                        </ListItem>
             
                      
                    
                    </List>
                  
               </SwipeableDrawer>
            </div>
        </nav>
        <section>
            <div className="container">
                <div className="content">
                   <h1 className="title"> WE REPAIR ELECTRONIC DEVICES</h1>
                   <p className="paragraph">We are the best repair service provider and we have a lot of Electronic accesories for our customers to buy</p>
                  
                   <NavLink to="Services">
                   <button className='button'>Our Services</button>
                   </NavLink>

                </div>
                <div className="svg">
                   <img src="images/Light bulb.svg" alt="header" className='headingImage'/>
                </div>
            </div>
        </section>
        <div className='section2'>
            <div className="container">
            <div className="svg">
            <img src="images/contact us.svg" alt="header" className='headingImage'/>
            </div>
            <div className="content">
                <h1 className='title'>WE ARE THE SOLUTION TO YOUR SOFTWARE ISSUE </h1>
                <p className="paragraph">Our company has a vast experience of software issues and we will be glad to solve all your problem effeciently and effectively..</p>
            </div>
            </div>
        </div>
        <div className='section3'>
            <div className="container">
                <div className="content">
                   <h1 className="title"> YOUR SECURITY AND PRIVACY IS OUR CONCERN</h1>
                   <p className="paragraph">Security is our number one priority,we tend to store and keep our things and our customers stuff secured and private to avoid inconvenience </p>
                   
                </div>
                <div className="svg">
                   <img src="images/AppLocker Permission.svg" alt="header" className='headingImage'/>
                </div>
            </div>
        </div>
        <div className="section4">
            <div className="container">
                <img src="images/sssurface.svg" alt="svg" style={{height:300}} />
                 <div className="round">
                 <h2 className='roundHead'>WHY CHOOSE US</h2>
                 < p className='roundParagraph'>Because Good Services are granteed and you will not get disappointed at all.</p>
                 </div>
            </div>
        </div>
        <div className="section5">
            <div className="container">
                 
            </div>
        </div>
         
    </div>
  )
}

export default Home