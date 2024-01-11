import React, { useState } from "react";
import '../../index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Collapse} from 'react-collapse';

import mockup1 from '../img/mockup-1.png';
import mockup2 from '../img/mockup-2.png';
import mockup3 from '../img/mockup-3.png';

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

  return (
    <div className="portfolio d-flex flex-row justify-content-center align-items-center">
      <div className="container d-flex flex-row justify-content-center align-items-center">
        <div className="content d-flex justify-content-center align-items-center">
          <div className="portfolio-button-section d-flex flex-row justify-content-center align-items-center">
            <h1 className={webActiveSection} onClick={setWebSection}>Website</h1>
            <h1 className={artActiveSection} onClick={setArtSection}>Art</h1>
          </div>

          <div className="portfolio-section">
            <Collapse isOpened={showWebsite} className="website-collapse">
              <div className="website-section d-flex flex-column">

                <div className="mockup-section d-flex justify-content-between ">
                  <div className="mockup-container">
                    <p><span>landing</span> for a music band</p>
                    <img className="mockup" src={mockup1} />
                    <div className="tag-section">
                      <p>html</p>
                      <p>css</p>
                      <p>javascript</p>
                      <p>bootstrap</p>
                    </div>
                  </div>
                  <div className="mockup-container">
                    <p><span>landing</span> for a burning man festival</p>
                    <img className="mockup" src={mockup2} />
                    <div className="tag-section">
                      <p>html</p>
                      <p>css</p>
                      <p>javascript</p>
                      <p>bootstrap</p>
                    </div>
                  </div>
                  <div className="mockup-container">
                    <p><span>landing</span> for a public organisation</p>
                    <img className="mockup" src={mockup3} />
                    <div className="tag-section">
                      <p>html</p>
                      <p>css</p>
                      <p>javascript</p>
                      <p>bootstrap</p>
                    </div>
                  </div>
                </div>

              </div>
            </Collapse>
 
            <Collapse isOpened={showArt} className="art-collapse">
            <div className="art-section d-flex flex-column">

                <div className="mockup-section d-flex justify-content-between">

                  <div className="mockup-container">
                    <img className="mockup" src={art1} />
                    <p><span>logo</span> for myself</p>
                  </div>
                  <div className="mockup-container">
                    <img className="mockup" src={art2} />
                    <p><span>logo</span> for public organisation</p>
                  </div>
                  <div className="mockup-container">
                    <img className="mockup" src={art3} />
                    <p><span>banner</span> for public organisation</p>
                  </div>

                </div>

                <div className="mockup-section d-flex justify-content-between">

                  <div className="mockup-container">
                    <img className="mockup" src={art4} />
                    <p><span>logo</span> for example</p>
                  </div>
                  <div className="mockup-container">
                    <img className="mockup" src={art5} />
                    <p><span>logo</span> for example</p>
                  </div>
                  <div className="mockup-container">
                    <img className="mockup" src={art6} />
                    <p><span>logo</span> for example</p>
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