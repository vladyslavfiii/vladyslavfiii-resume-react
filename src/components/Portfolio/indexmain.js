import React, { useState, useEffect } from 'react';
import '../../index.scss';
import '../Portfolio/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Collapse} from 'react-collapse';

import mockup1 from '../img/mockup-1.png';
import mockup2 from '../img/mockup-2.png';
import mockup3 from '../img/mockup-3.png';
import mockup4 from '../img/mockup-4.png';
import mockup5 from '../img/mockup-5.png';

import art1 from '../img/art-1.png';
import art2 from '../img/art-2.png';
import art3 from '../img/art-3.png';
import art4 from '../img/art-4.png';
import art5 from '../img/art-5.png';
import art6 from '../img/art-6.png';
import art7 from '../img/art-7.png';
import art8 from '../img/art-8.png';
import art9 from '../img/art-9.png';
import art10 from '../img/art-10.png';

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
          {/* <div className="portfolio-button-section d-flex flex-row align-items-center">
            <button className={webActiveSection} onClick={setWebSection}><h3><i class="bi bi-globe"></i> web </h3></button>
            <button className={artActiveSection} onClick={setArtSection}><h3><i class="bi bi-easel"></i> art </h3></button>
          </div> */}
          {/* <p className="counter">Total: <span>{currentSectionChildCout}</span></p>  */}

          <h2>Portfolio</h2>
          <div className="scroll-menu">

{/* -------------------------------------------- */}

<div className="mockup-container web-count">
  <img className="mockup" src={mockup1} />
  <div className='info-section'>
    <p>Music Band Website</p>
    <div className='links-section'>
      <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i className="bi bi-github"></i></a></span>
      <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i class="bi bi-globe"></i></a></span>
    </div>
  </div>
</div>

{/* -------------------------------------------- */}

<div className="mockup-container web-count">
  <img className="mockup" src={mockup1} />
  <div className='info-section'>
    <p>Music Band Website</p>
    <div className='links-section'>
      <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i className="bi bi-github"></i></a></span>
      <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i class="bi bi-globe"></i></a></span>
    </div>
  </div>
</div>
{/* -------------------------------------------- */}

<div className="mockup-container web-count">
  <img className="mockup" src={mockup1} />
  <div className='info-section'>
    <p>Music Band Website</p>
    <div className='links-section'>
      <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i className="bi bi-github"></i></a></span>
      <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i class="bi bi-globe"></i></a></span>
    </div>
  </div>
</div>

{/* -------------------------------------------- */}

<div className="mockup-container web-count">
  <img className="mockup" src={mockup1} />
  <div className='info-section'>
    <p>Music Band Website</p>
    <div className='links-section'>
      <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i className="bi bi-github"></i></a></span>
      <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i class="bi bi-globe"></i></a></span>
    </div>
  </div>
</div>

</div>
          
          {/* <div className="portfolio-section">
            <Collapse isOpened={showWebsite} className="website-collapse">
              <div className="website-section d-flex flex-column">

                <div className="mockup-section d-flex justify-content-around">
                  <div className="mockup-container web-count">
                    <img className="mockup" src={mockup1} />
                    <div className='info-section'>
                      <p>Music Band Website</p>
                      <div className='links-section'>
                        <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i className="bi bi-github"></i></a></span>
                        <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i class="bi bi-globe"></i></a></span>
                      </div>
                      </div>
                  </div>
                  
                  <div className="mockup-container web-count">
                    <img className="mockup" src={mockup2} />
                    <div className='info-section'>
                      <p>Public Organisation "MYROTVORETS"</p>
                      <div className='links-section'>
                        <span className="link"><a href="https://github.com/vladyslavfiii/po-mpc-myrotvorets" target="_blank"><i className="bi bi-github"></i></a></span>
                        <span className="link"><a href="https://mpcmyrotvorets.github.io/" target="_blank"><i class="bi bi-globe"></i></a></span>
                      </div>
                    </div>
                  </div>
                  
                </div>

                <div className="mockup-section d-flex justify-content-around ">

                  <div className="mockup-container web-count">
                    <img className="mockup" src={mockup3} />
                    <div className='info-section'>
                      <p>burning man festival</p>
                      <div className='links-section'>
                        <span className="link"><a href="https://github.com/vladyslavfiii/burning-man-landing-tt-1.1" target="_blank"><i className="bi bi-github"></i></a></span>
                        <span className="link"><a href="https://vladyslavfiii.github.io/" target="_blank"><i class="bi bi-globe"></i></a></span>
                      </div>
                    </div>
                  </div>

                  <div className="mockup-container web-count">
                    <img className="mockup" src={mockup4} />
                    <div className='info-section'>
                    <p>landing for a lamps seller</p>
                    <div className='links-section'>
                      <span className="link"><a href="https://github.com/vladyslavfiii/lighter-react" target="_blank"><i className="bi bi-github"></i></a></span>
                      <span className="link"><a href="https://vladyslavfiii.github.io/lighter-react/" target="_blank"><i class="bi bi-globe"></i></a></span>
                    </div>
                  </div>
                  </div>
                </div>

                <div className="mockup-section d-flex justify-content-around">
                  <div className="mockup-container web-count">
                    <img className="mockup" src={mockup5} />
                    <div className='info-section'>
                    <p>myself page</p>
                    <div className='links-section'>
                      <span className="link"><a href="https://github.com/vladyslavfiii/vladyslavfiii-resume-react" target="_blank"><i className="bi bi-github"></i></a></span>
                      <span className="link"><a href="https://vladyslavfiii.github.io/vladyslavfiii-resume-react/" target="_blank"><i class="bi bi-globe"></i></a></span>
                    </div>
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
                  </div>
                  <div className="mockup-container art-count">
                    <img className="mockup" src={art2} />
                  </div>

                </div>
                <div className="mockup-section d-flex justify-content-between">

                  <div className="mockup-container art-count">
                    <img className="mockup" src={art3} />
                  </div>
                  <div className="mockup-container art-count">
                    <img className="mockup" src={art4} />
                  </div>

                </div>
                <div className="mockup-section d-flex justify-content-between">

                  <div className="mockup-container art-count">
                    <img className="mockup" src={art5} />
                  </div>
                  <div className="mockup-container art-count">
                    <img className="mockup" src={art6} />
                  </div>
                
                </div>
                <div className="mockup-section d-flex justify-content-between">

                  <div className="mockup-container art-count">
                    <img className="mockup" src={art7} />
                  </div>
                  <div className="mockup-container art-count">
                    <img className="mockup" src={art8} />
                  </div>
                
                </div>
                <div className="mockup-section d-flex justify-content-between">

                  <div className="mockup-container art-count">
                    <img className="mockup" src={art9} />
                  </div>
                  <div className="mockup-container art-count">
                    <img className="mockup" src={art10} />
                  </div>

                
                </div>

              </div>
            </Collapse> 
          </div> */}

        </div>
      </div>
    </div>
  );
}