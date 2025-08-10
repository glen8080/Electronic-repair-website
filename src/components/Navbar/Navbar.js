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
import './Navbar.css'

function Navbar() {

  const [open ,setOpen] = React.useState(false)
  return (
    <nav>
        <div className="container">
             <div className='logo'>
                  <p>Mi<span className='two'>2</span>TONICS  </p>
             </div>
             <Hidden smDown>
             <div className="menuTab">
                  <NavLink to="/" className="link">Home</NavLink>
                  <NavLink to="/About" className="link">About</NavLink>
                   <NavLink to="/Services"className="link">Services</NavLink>
                   <NavLink to="/News" className="link">News</NavLink>
                   <NavLink to="/Contact" className="link">Contact</NavLink>
             </div>
             <div className='socialMedia'>
                <div className='icons'>

                       <Link href="https://www.facebook.com/profile.php?id=100088125702282" target="_blank"  rel="noopener noreferrer"><IconButton><FacebookSharpIcon className='icon'/></IconButton></Link>


                       <Link href="https://twitter.com/mi2tonics" target="_blank"  rel="noopener noreferrer"><IconButton><TwitterIcon className='icon'/></IconButton></Link>


                     <Link href="https://www.instagram.com/mi2tonics/" target="_blank" rel="noopener noreferrer"><IconButton><InstagramIcon className='icon'/></IconButton></Link>




                </div>


            </div>
            </Hidden>
            <Hidden smUp>
              <IconButton onClick={()=>setOpen(true)}>
                  <MenuIcon/>
              </IconButton>
           </Hidden>
           <SwipeableDrawer anchor='right' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
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
                  <NavLink to="/About" className="link">About</NavLink>
                  </ListItem>
                  <ListItem>
                  <NavLink to="/Services"className="link">Services</NavLink>
                  </ListItem>
                  <ListItem>
                  <NavLink to="/News" className="link">News</NavLink>
                  </ListItem>
                  <ListItem>
                  <NavLink to="/Contact" className="link">Contact</NavLink>
                  </ListItem>
                    <ListItem>

                    <Link href="https://www.facebook.com/profile.php?id=100088125702282" target="_blank"  rel="noopener noreferrer"><IconButton><FacebookSharpIcon className='icon'/></IconButton></Link>


                    <Link href="https://twitter.com/mi2tonics" target="_blank"  rel="noopener noreferrer"><IconButton><TwitterIcon className='icon'/></IconButton></Link>


                  <Link href="https://www.instagram.com/mi2tonics/" target="_blank" rel="noopener noreferrer"><IconButton><InstagramIcon className='icon'/></IconButton></Link>
                    </ListItem>



                </List>

           </SwipeableDrawer>
        </div>
    </nav>
  )
}

export default Navbar;
