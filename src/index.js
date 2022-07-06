import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Services from './components/Services';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation logoTitle="DJANGO REACT" />
                <Header />
                <Services />
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));