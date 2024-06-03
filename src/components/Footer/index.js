import React, { useState, useEffect } from 'react';
import '../../index.scss';
import '../Footer/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {

  return (
    <div className='footer'>
        <div className='container'>
            <div className='footer-info'>
                <p><i class="bi bi-envelope"></i> vladyslav.filimonchuk@gmail.com</p>
                <p><a href='https://github.com/vladyslavfiii' target="_blank"><i class="bi bi-github"></i> GitHub</a></p>
                <p><a href='https://t.me/vladyslavfiii' target="_blank"><i class="bi bi-telegram"></i> Telegram</a></p>
                <p><a href='https://x.com/vladyslavfiii' target="_blank"><i class="bi bi-twitter"></i> Twitter</a></p>
            </div>
        </div>
    </div>
  );
}