import React from 'react'
import './About.css'
import Link from '@mui/material/Link';

function About() {
    // Using fixed seeds for consistent avatars
    const seed = "mitundwa";
    const seed1 = "nicodemus";
    const seed2 = "junior";

    return (
        <div>
            <section>
                <div className="aboutContainer">
                    <img src="/images/Blogging.svg" alt="Blogging" className='blogging' />
                    <div>
                        <h1 className='aboutHeading'>About Our Company</h1>
                    </div>
                </div>
            </section>
            <div className="content">
                <div className="aboutContainer content-inner">
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
            <div className="team-section">
                <div className="aboutContainer">
                    <div className="detail">
                        <div className="headDetail">
                            <h3 className='teamHeading'>Meet Our Knowledgable and Brilliant Support Team</h3>
                        </div>
                        <div className="detailImg">
                            <div className="imgContainer">
                                <img src={`https://avatars.dicebear.com/api/male/${seed}.svg`} alt="Mitundwa Saguda" style={{ height: 80, width: 80 }} className="team" />
                                <p className='small'>Mitundwa Saguda</p>
                                <p className='small'>+255745997041</p>
                            </div>
                            <div className="imgContainer">
                                <img src={`https://avatars.dicebear.com/api/male/${seed1}.svg`} alt="Nicodemus Peter" style={{ height: 80, width: 80 }} className="team" />
                                <p className='small'>Nicodemus Peter</p>
                                <p className='small'>+255759634687</p>
                            </div>
                            <div className="imgContainer">
                                <img src={`https://avatars.dicebear.com/api/male/${seed2}.svg`} alt="Junior Anderson" style={{ height: 80, width: 80 }} className="team" />
                                <p className='small'>Junior Anderson</p>
                                <p className='small'>+255685637420</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                <div className="aboutContainer">
                    <iframe title='map' width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=-6.190255,%2035.782139&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
            </div>
        </div>
    )
}

export default About;
