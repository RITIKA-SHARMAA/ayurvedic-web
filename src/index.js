import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './LandingPage/mainPage';
import App1 from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./Components/Header";
import StickyFooter from "./Components/Footer";
import {Stack} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
//import App1 from './App.test';

const root = ReactDOM.createRoot(document.getElementById('root'));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

root.render(
  <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
          <Stack>
              <Header/>
              <App/>
              <App1/>
              <StickyFooter/>
          </Stack>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



