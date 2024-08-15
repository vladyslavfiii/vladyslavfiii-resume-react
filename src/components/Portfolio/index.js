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
import mockup6 from '../img/mockup-6.png';
import mockup7 from '../img/mockup-7.png';

import art1 from '../img/art-1.png';
import art2 from '../img/art-2.png';
import art3 from '../img/art-3.png';
import art4 from '../img/art-4.png';
import art5 from '../img/art-5.png';
import art6 from '../img/art-6.png';
import art7 from '../img/art-7.png';
import art8 from '../img/art-8.png';

export default function Portfolio() {
  const [showArt, setShowArt] = useState(false);

  function setArtSection(){
    (showArt === false ? setShowArt(true) : setShowArt(false));
  }

  return (
    <div className='portfolio'>

    <p className='section-title'>web</p>

      <div className='list'>

        <div className='demonstration demonstration-web' style={{backgroundImage: "url(" + mockup1 +")"}}> 
          <div className='description'>
            <div className='info-section'>
              <p>Public Organisation "MYROTVORETS"</p>
              <p className='techniques-info'>
                Techniques:<span> JS, HTML, CSS, Bootstrap, SASS</span>
              </p>
              <div className='links-section'>
                <span className="link"><a href="https://github.com/vladyslavfiii/po-mpc-myrotvorets" target="_blank"><i className="bi bi-github"></i></a></span>
                <span className="link"><a href="https://mpcmyrotvorets.github.io/" target="_blank"><i class="bi bi-globe"></i></a></span>
              </div>
            </div>
          </div>
        </div>

        <div className='demonstration demonstration-web' style={{backgroundImage: "url(" + mockup2 +")"}}> 
          <div className='description'>
            <div className='info-section'>
              <p>Burning man festival</p>
              <p className='techniques-info'>
                Techniques:<span> JS, HTML, CSS, SASS, Bootstrap</span>
              </p>
              <div className='links-section'>
                <span className="link"><a href="https://vladyslavfiii.github.io/burning-man-landing-tt-1.1" target="_blank"><i className="bi bi-github"></i></a></span>
                <span className="link"><a href="https://vladyslavfiii.github.io/" target="_blank"><i class="bi bi-globe"></i></a></span>
              </div>
            </div>
          </div>
        </div>

        <div className='demonstration demonstration-web' style={{backgroundImage: "url(" + mockup3 +")"}}> 
          <div className='description'>
            <div className='info-section'>
              <p>Portfolio Page</p>
              <p className='techniques-info'>
                Techniques:<span> REACT, JS, HTML, CSS, SASS, Bootstrap</span>
              </p>
              <div className='links-section'>
                <span className="link"><a href="https://github.com/vladyslavfiii/vladyslavfiii-resume-react" target="_blank"><i className="bi bi-github"></i></a></span>
                <span className="link"><a href="https://vladyslavfiii.github.io/vladyslavfiii-resume-react/" target="_blank"><i class="bi bi-globe"></i></a></span>
              </div>
            </div>
          </div>
        </div>

        <div className='demonstration demonstration-web' style={{backgroundImage: "url(" + mockup4 +")"}}> 
          <div className='description'>
            <div className='info-section'>
              <p>Lamp Controler</p>
              <p className='techniques-info'>
                Techniques:<span> REACT, JS, HTML, CSS, SASS, Bootstrap</span>
              </p>
              <div className='links-section'>
                <span className="link"><a href="https://github.com/vladyslavfiii/lighter-react" target="_blank"><i className="bi bi-github"></i></a></span>
                <span className="link"><a href="https://vladyslavfiii.github.io/lighter-react/" target="_blank"><i class="bi bi-globe"></i></a></span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="demonstration demonstration-web">
            <img className="mockup mockup-web" src={mockup5} />
            <p className='description'>
              Landing page for my Favourite Musician.<br />
              <br />In this project I used bootstrap and experimented with animation.<br />
              Demonstration non-commercial project.
            </p>
            <div className='info-section'>
              <p>music band website</p>
              <div className='links-section'>
                <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i className="bi bi-github"></i></a></span>
                <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i class="bi bi-globe"></i></a></span>
              </div>
          </div>
        </div>  */}

        <div className='demonstration demonstration-web' style={{backgroundImage: "url(" + mockup5 +")"}}> 
          <div className='description'>
            <div className='info-section'>
              <p>My Fav Artist</p>
              <p className='techniques-info'>
                Techniques:<span> JS, HTML, CSS, Bootstrap</span>
              </p>
              <div className='links-section'>
                <span className="link"><a href="https://vladyslavfiii.github.io/landing-for-a-music-band/" target="_blank"><i className="bi bi-github"></i></a></span>
                <span className="link"><a href="https://github.com/vladyslavfiii/landing-for-a-music-band" target="_blank"><i class="bi bi-globe"></i></a></span>
              </div>
            </div>
          </div>
        </div>

        <div className='demonstration demonstration-web' style={{backgroundImage: "url(" + mockup6 +")"}}> 
          <div className='description'>
            <div className='info-section'>
              <p>Stopwatch</p>
              <p className='techniques-info'>
                Techniques:<span> JS, HTML, CSS, Bootstrap</span>
              </p>
              <div className='links-section'>
                <span className="link"><a href="https://github.com/vladyslavfiii/stopwatch" target="_blank"><i className="bi bi-github"></i></a></span>
                <span className="link"><a href="https://vladyslavfiii.github.io/stopwatch/" target="_blank"><i class="bi bi-globe"></i></a></span>
              </div>
            </div>
          </div>
        </div>

        <div className='demonstration demonstration-web' style={{backgroundImage: "url(" + mockup7 +")"}}> 
          <div className='description'>
            <div className='info-section'>
              <p>Tic Tac Toe</p>
              <p className='techniques-info'>
                Techniques:<span> JS, HTML, CSS, Bootstrap</span>
              </p>
              <div className='links-section'>
                <span className="link"><a href="https://github.com/vladyslavfiii/tic-tac-toe" target="_blank"><i className="bi bi-github"></i></a></span>
                <span className="link"><a href="https://vladyslavfiii.github.io/tic-tac-toe/" target="_blank"><i class="bi bi-globe"></i></a></span>
              </div>
            </div>
          </div>
        </div>

      </div>

    <p className='section-title'>art <button className='art-collapse art-collapse-button' onClick={setArtSection}>+</button></p>

    <Collapse isOpened={showArt} className="art-collapse">
      <div className='list'>

        <div className="demonstration demonstration-art">
          <img className="mockup" src={art1} />
        </div>
        <div className="demonstration demonstration-art">
          <img className="mockup" src={art2} />
        </div>
        <div className="demonstration demonstration-art">
          <img className="mockup" src={art3} />
        </div>
        <div className="demonstration demonstration-art">
          <img className="mockup" src={art4} />
        </div>
        <div className="demonstration demonstration-art">
          <img className="mockup" src={art5} />
        </div>
        <div className="demonstration demonstration-art">
          <img className="mockup" src={art6} />
        </div>
        <div className="demonstration demonstration-art">
          <img className="mockup" src={art7} />
        </div>
        <div className="demonstration demonstration-art">
          <img className="mockup" src={art8} />
        </div>

      </div>
    </Collapse>

    </div>
  );
}