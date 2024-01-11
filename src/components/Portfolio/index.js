import React, { useState, useEffect } from 'react';
import '../../index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Collapse} from 'react-collapse';

import mockup1 from '../img/mockup-1.png';
import mockup2 from '../img/mockup-2.png';
import mockup3 from '../img/mockup-3.png';
import mockup4 from '../img/mockup-4.png';

import art1 from '../img/art-1.png';
import art2 from '../img/art-2.png';
import art3 from '../img/art-3.png';
import art4 from '../img/art-4.png';
import art5 from '../img/art-5.png';
import art6 from '../img/art-6.png';

export default function Portfolio() {
  const [webActiveSection, setWebActiveSection] = useState('active-section');
  const [artActiveSection, setArtActiveSection] = useState('inactive-section');
  const [showWebsite, setShowWebsite] = useState(true);
  const [showArt, setShowArt] = useState(false);
  const [currentSectionChildCout, setCurrentSectionChildCout] = useState('');

  function setWebSection(el){
    if (el.target.className !== 'active-section'){
      setWebActiveSection('active-section');
      setArtActiveSection('inactive-section');
      setShowWebsite(true);
      setShowArt(false);
    } 
  }

  function setArtSection(el){
    if (el.target.className !== 'active-section'){
      setWebActiveSection('inactive-section');
      setArtActiveSection('active-section');
      setShowWebsite(false);
      setShowArt(true);
    } 
  }

  useEffect(() => {
    let totalCount = 0;
    (webActiveSection === 'active-section' ? totalCount = document.querySelectorAll('.web-count').length : totalCount = document.querySelectorAll('.art-count').length)
    setCurrentSectionChildCout(totalCount);
  })

  return (
    <div className="portfolio d-flex flex-row justify-content-center align-items-center">
      <div className="container d-flex flex-row justify-content-center align-items-center" id='portfolio'>
        <div className="content d-flex justify-content-center align-items-center" >
          <div className="portfolio-button-section d-flex flex-row justify-content-center align-items-center">
            <h1 className={webActiveSection} onClick={setWebSection}>Website</h1>
            <h1 className={artActiveSection} onClick={setArtSection}>Art</h1>
          </div>

          <h3 className="counter">Total: <span>{currentSectionChildCout}</span></h3> 

          <div className="portfolio-section">
            <Collapse isOpened={showWebsite} className="website-collapse">
              <div className="website-section d-flex flex-column">

                <div className="mockup-section d-flex justify-content-between">
                  <div className="mockup-container web-count">
                    <img className="mockup" src={mockup1} />
                    <p>landing for a music band</p>
                    <div className="tag-section">
                      <p>html</p>
                      <p>css</p>
                      <p>javascript</p>
                      <p>bootstrap</p>
                    </div>
                    <div className='links-section'>
                      <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i className="bi bi-github"></i></a></span>
                      <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i class="bi bi-globe"></i></a></span>
                    </div>
                  </div>
                  <div className="mockup-container web-count">
                    <img className="mockup" src={mockup2} />
                    <p>landing for a public organisation</p>
                    <div className="tag-section">
                      <p>html</p>
                      <p>css</p>
                      <p>javascript</p>
                      <p>bootstrap</p>
                    </div>
                    <div className='links-section'>
                      <span className="link"><a href="https://github.com/vladyslavfiii/po-mpc-myrotvorets" target="_blank"><i className="bi bi-github"></i></a></span>
                      <span className="link"><a href="https://mpcmyrotvorets.github.io/" target="_blank"><i class="bi bi-globe"></i></a></span>
                    </div>
                  </div>
                </div>

                <div className="mockup-section d-flex justify-content-between ">
                  <div className="mockup-container web-count">
                    <img className="mockup" src={mockup3} />
                    <p>landing for a burning man festival</p>
                    <div className="tag-section">
                      <p>html</p>
                      <p>css</p>
                      <p>javascript</p>
                      <p>bootstrap</p>
                    </div>
                    <div className='links-section'>
                      <span className="link"><a href="https://github.com/vladyslavfiii/burning-man-landing-tt-1.1" target="_blank"><i className="bi bi-github"></i></a></span>
                      <span className="link"><a href="https://vladyslavfiii.github.io/" target="_blank"><i class="bi bi-globe"></i></a></span>
                    </div>
                  </div>
                  <div className="mockup-container web-count">
                    <img className="mockup" src={mockup4} />
                    <p>landing for a lamps seller</p>
                    <div className="tag-section">
                      <p>html</p>
                      <p>css</p>
                      <p>javascript</p>
                      <p>bootstrap</p>
                      <p>react</p>
                    </div>
                    <div className='links-section'>
                      <span className="link"><a href="https://github.com/vladyslavfiii/burning-man-landing-tt-1.1" target="_blank"><i className="bi bi-github"></i></a></span>
                      <span className="link"><a href="https://vladyslavfiii.github.io/" target="_blank"><i class="bi bi-globe"></i></a></span>
                    </div>
                  </div>
                </div>

              </div>
            </Collapse>
 
            <Collapse isOpened={showArt} className="art-collapse">
            <div className="art-section d-flex flex-column">

                <div className="mockup-section d-flex justify-content-between">

                  <div className="mockup-container art-count">
                    <img className="mockup" src={art1} />
                    <p>logo for myself</p>
                  </div>
                  <div className="mockup-container art-count">
                    <img className="mockup" src={art2} />
                    <p>logo for public organisation</p>
                  </div>

                </div>
                <div className="mockup-section d-flex justify-content-between">

                  <div className="mockup-container art-count">
                    <img className="mockup" src={art3} />
                    <p>banner for public organisation</p>
                  </div>
                  <div className="mockup-container art-count">
                    <img className="mockup" src={art4} />
                    <p>logo for example</p>
                  </div>

                </div>
                <div className="mockup-section d-flex justify-content-between">

                  <div className="mockup-container art-count">
                    <img className="mockup" src={art5} />
                    <p>logo for example</p>
                  </div>
                  <div className="mockup-container art-count">
                    <img className="mockup" src={art6} />
                    <p>logo for example</p>
                  </div>
                
                </div>

              </div>
            </Collapse> 
          </div>

        </div>
      </div>
    </div>
  );
}