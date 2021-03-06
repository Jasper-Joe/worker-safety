import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <ul style={navBarStyle}>
            <Link style={linkStyle} to="/"> <li style={navItemStyle}>Home</li> </Link> | 
            <Link style={linkStyle} to="/learn-more"> <li style={navItemStyle}>Learn more</li> </Link> | 
            <Link style={linkStyle} to="/know-your-rights"> <li style={navItemStyle}>Know Your Rights</li> </Link> | 
        </ul>
    )
}

const linkStyle = {
    textDecoration: 'none',
}

const navBarStyle = {
    margin: '0px',
    padding: '10px',
    background: '#333',
    listStyle: 'none',
    textAlign: 'left',
    fontSize: '18px',
    color: 'white'
    
}

const navItemStyle = {
    display: 'inline',
    color: 'white'
}


export default NavBar;