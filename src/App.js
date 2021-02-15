import React, {Component} from 'react';
import Header from "./components/Header/Header/Header";
import Navbar from "./components/Navbar/Navbar/Navbar";
import Main from "./components/Main/Main/Main";
import Footer from "./components/Footer/Footer/Footer";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className={'app-wrapper'}>
                <Header />
                <Navbar />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;