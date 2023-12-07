import React from 'react';
import background from './images/homepage.jpg';
import './Home.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Home() {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            height: '100vh',
       }}>
            <div>
                <h1>Welcome To The Rain App</h1>
                <p>
                    Heres a convienent way to keep track of your local precipitation. 
                </p>
            </div>
       </div>
    )
}