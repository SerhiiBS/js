// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
// Style
import './main.css';
// Parts
import Wrapper from './ui/containers/Wrapper';
import ErrorBoundary from "./ui/containers/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
        <Wrapper/>
    </ErrorBoundary>
);