import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

function Home() {

  return (
    <div>
        <section>
            <div className="container">
                <div className="content">
                   <h1 className="title"> WE REPAIR ELECTRONIC DEVICES</h1>
                   <p className="paragraph">We are the best repair service provider and we have a lot of Electronic accesories for our customers to buy</p>

                   <NavLink to="/services">
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
            <img src="images/Contact us.svg" alt="header" className='headingImage'/>
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
    </div>
  )
}

export default Home;
