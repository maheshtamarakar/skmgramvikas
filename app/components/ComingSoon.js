// components/ComingSoon.js
"use client";
import React from 'react';
import { useMyContext } from '../context/MyContext'

const ComingSoon = () => {
    const isMarathi = useMyContext();
    if(isMarathi){
        return (
          <div className="coming-soon">
            <h1>लवकरच येत आहे</h1>
            <p>आपल्यासाठी काहीतरी आश्चर्यकारक आणण्यासाठी आम्ही कठोर परिश्रम करीत आहोत. रहा!</p>
            {/* <button className="notify-button">Notify Me</button> */}
          </div>
        );

    }else {
        return (
          <div className="coming-soon">
            <h1>Coming Soon</h1>
            <p>We&apos;re working hard to bring something amazing for you. Stay tuned!</p>
            {/* <button className="notify-button">Notify Me</button> */}
          </div>
        );

    }
};

export default ComingSoon;
