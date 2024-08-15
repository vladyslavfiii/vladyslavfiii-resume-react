import React from "react";
import '../../index.scss';
import photo from '../img/photo.png'
import myPhoto from '../img/my-photo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

  return (
    <div className="header d-flex flex-row justify-content-center align-items-center">
      <div className="container d-flex flex-row justify-content-center align-items-center">
        <div className="content d-flex justify-content-center align-items-center">
          <div>
            <h1 className="title">Filimonchuk <span>Vladyslav</span></h1>
            <h3><span>front-end</span> developer</h3>
            {/* <h6 className="skills">html, css, js, react, bootstrap, sass</h6> */}
            <div className="link-section d-flex flex-row">
              <span className="link"><a href="https://github.com/vladyslavfiii" target="_blank"><i className="bi bi-github"></i></a></span>
              <span className="link"><a href="https://t.me/vladyslavfiii" target="_blank"><i className="bi bi-telegram"></i></a></span>
            </div>
          </div>
          <div className="my-photo-block">
            <img className="my-photo" src={myPhoto} />
          </div>
        </div>
      </div>
      <div className="down"><a href="#portfolio"><i className="bi bi-chevron-double-down"></i></a></div>
    </div>
  );
}