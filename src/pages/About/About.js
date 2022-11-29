import React, { useEffect,useRef } from 'react'
import './About.css'
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import emailjs from '@emailjs/browser';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import Link from '@mui/material/Link';
import Message from './Message';

function About() {
    const [seed,setSeed] = React.useState("")
    const [seed1,setSeed1] = React.useState("")
    const [seed2,setSeed2] = React.useState("")
    const [success,setSuccess]= React.useState(false)     
   

    useEffect(()=>{
           setSeed(Math.floor(Math.random()*1000))
           setSeed1(Math.floor(Math.random()*2000))
           setSeed2(Math.floor(Math.random()*3000))
    },[])

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm( 'service_wvpr27c', "template_haegbl4", form.current, "ZnlGNFrkxDVv7vHDE")
        .then((result) => {
            console.log(result.text)
           setSuccess(true)
           setTimeout(() => {
            setSuccess(false)
            }, 4000);
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset()
    };
  return (
    <div>
        <nav className='aboutNav'>
            <div className="aboutContainer">
            <NavLink to="/" >
                <IconButton>
                <ArrowBackIosSharpIcon/>
                </IconButton>
            </NavLink>
                
            </div>
        </nav>
        <section>
                <div className="aboutContainer">
                    <img src="images/Blogging.svg" alt="" className='blogging'/>
                    <div>
                        <h1 className='aboutHeading'>About Our Company</h1>
                    </div>
                </div>
        </section>
        <div className="content">
            <div className="aboutContainer">
                <img  src={`https://avatars.dicebear.com/api/male/:${seed}.svg`} alt=""  className='image'  />
                <div className="contentParagraph">
                    <p className='paragraphContent'>At Mi<span className='two'>2</span>TONICS, we believe to have solution to all your Hardware and Software related issues across different devices like 
                      <span className="devices">laptop</span>,
                      <span className="devices">Television</span>,
                      <span className="devices">Desktops</span>,
                      <span className="devices">Electric jug</span>,
                      <span className="devices">Rice Cooker</span>,
                      <span className="devices">Mixer and Speaker</span> 
                       and <span className="devices">Oven</span>.Our firm also configure and solve                       <span className="devices">Electricity</span> at Home and Offices.At Our Company there are various accesories like <span className="devices">Brand New Laptops & Refurbished</span>,
                       <span className="devices">Protectors</span> of all kinds
                       <span className="devices">Phone Cover</span>,
                       <span className="devices">Headphone and EarPhone</span>,
                       <span className="devices">Radio</span>,
                       <span className="devices">Bluetooth Devices</span>,
                       <span className="devices">Phone Charger</span>,
                       <span className="devices">Adapters and PC chargers</span>,which you can buy at an affordable price.
                      
                      
                      </p>
                </div>
            </div>
        </div>
        <div className="contactForm">
            <div className="aboutContainer">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='full name' name='user_name'/>
                    <input type="email" placeholder='email' name='user_email' />
                    <textarea name='message' placeholder='write your message '  cols="40.5" rows="10" className='textArea' ></textarea>
                    <button className='contactButton' value="Send">Submit</button>
                </form>
                {success && <Message/>}
                <div className="detail">
                    <div className="headDetail">
                        <h3 className='teamHeading'>Meet Our knowledgable and Brilliant Support Team</h3>
                    </div>
                    <div className="detailImg">
                          <div className="imgContainer">
                                <img  src={`https://avatars.dicebear.com/api/male/:${seed}.svg`} alt=""style={{height:50,width:50}} className="team"/>
                                 <p className='small'>Mitundwa Saguda</p>
                                 <p className='small'>+255745997041</p>
                            </div>   
                            <div className="imgContainer">
                                <img  src={`https://avatars.dicebear.com/api/male/:${seed1}.svg`} alt="" style={{height:50,width:50}} className="team"/>
                                 <p className='small'>Nicodemus Peter</p>
                                 <p className='small'>+255759634687</p>
                            </div>                      
                            <div className="imgContainer">
                                <img  src={`https://avatars.dicebear.com/api/male/:${seed2}.svg`} alt=""style={{height:50,width:50}} className="team"/>
                                 <p className='small'>Junior Anderson</p>
                                 <p className='small'>+255685637420</p>
                            </div> 
                            
                    </div>
                    <div className="social">
                    <div className='icons'>
                           
                    <Link href="https://www.facebook.com/profile.php?id=100088125702282" target="_blank"  rel="noopener noreferrer"><IconButton><FacebookSharpIcon className='iconz'/></IconButton></Link>
                        
                        
                        <Link href="http://www.google.com" target="_blank"  rel="noopener noreferrer"><IconButton><TwitterIcon className='iconz'/></IconButton></Link>
                     
                     
                      <Link href="https://www.instagram.com/mi2tonics/" target="_blank" rel="noopener noreferrer"><IconButton><InstagramIcon className='iconz'/></IconButton></Link>
                     
                            
                        
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="map">
            <div className="aboutContainer">
            <iframe title='map' width="1000" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=-6.190255,%2035.782139&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
        </div>
  )
}

export default About