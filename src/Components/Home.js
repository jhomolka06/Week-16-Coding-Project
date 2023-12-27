// Importing React, background image, styles, and necessary components
import React from 'react';
import background from './images/homepage.jpg';
import './Home.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// Functional component for the Home page
export default function Home() {
    return (
        // Styling the background image
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            height: '100vh',
       }}>
            <div style={
                // Styling the container for the Home page
                {
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    height: '100vh',
                    textAlign: 'center',
                    paddingTop: '10%',
                    paddingLeft: '10%',
                    paddingRight: '10%',
                    paddingBottom: '10%',
                    fontFamily: 'sans-serif',
                    color: 'black',
                    fontSize: '20px',
                }
            
            }>
                {/* Heading and description for the Home page */}
                <h1>Welcome To The Rain App</h1>
                <p>
                    Heres a convienent way to keep track of your local precipitation. 
                </p>
            </div>
       </div>
    )
}