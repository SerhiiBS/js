// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./engine/init/store";
// Style
import './main.css';
// Parts
import Wrapper from './ui/containers/Wrapper';
import Footer from "./ui/components/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Wrapper/>
        <Footer/>
    </Provider>
);