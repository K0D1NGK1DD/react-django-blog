import React, {Component} from 'react';

import Background from '../assets/img/urban-fog.jpg';

import '../styles/Header.css';

const portfolioStyle = {
    backgroundImage: `url( ${Background} )`,
    height: '100vh',
    backgroundSize: 'cover'
};

class Header extends Component {
    render() {
        return (
            <header style={portfolioStyle}></header>
        )
    };
};

export default Header;