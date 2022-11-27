import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// theme

/**
 * 
 * background: #FF0000;
 */
const theme = {
  // default: {
  //   text: {

  //   }
  // }
  mobile: '768PX',
  primary: {
    colors: {
      default: '#00FFE0',
      dark: '#008D96',
      deepdark: '#005656',
    },
    text:  {
      white: '#ffffff',
      dark: '#1C3245',
      tint: '#00FFE0',
    },
    bgColor: {
      dark: '#0A0D14',
      dark_60: 'rgba(10, 13, 20, 0.6)',
      transition: 'rgba(28, 50, 69, 0.6)',
    }
  },
  role: {
    sm: '#D355FF',
    sm_dark: '#4C0071',
    sm_tint: '#FF00F5',
    team1: '#FFC700',
    team2: '#FF5C00',
    team_dark: '#933500',
    sm_linear: `rgba(211, 85, 255, 0) 0%
      rgba(211, 85, 255, 0.05) 60%
      rgba(211, 85, 255, 0.2) 80%
      rgba(211, 85, 255, 0.6) 100%
    `,
    team1_linear: `
      rgba(255, 199, 0, 0) 0%
      rgba(255, 199, 0, 0.05) 60%
      rgba(255, 199, 0, 0.2) 80%
      rgba(255, 199, 0, 0.6) 100%
    `,
    team2_linear: `
      rgba(255, 122, 0, 0) 0%
      rgba(255, 122, 0, 0.05) 60%
      rgba(255, 122, 0, 0.2) 80%
      rgba(255, 122, 0, 0.6) 100%
    `
  },
  // colors: {
    // primary: '#00FFE0',
    // primary_dark: '#008D96',
    // Primary_deepdark: '#005656',
    // white: '#ffffff',
    // text_dark: '#1C3245',
   

    // bg_dark: '#0A0D14',
    // bg_dark_60: 'rgba(10, 13, 20, 0.6)',
    // bg_transition: 'rgba(28, 50, 69, 0.6)',
  // } 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <HashRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </HashRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
