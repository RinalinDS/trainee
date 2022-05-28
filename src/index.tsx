import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {HashRouter} from 'react-router-dom';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }
`

const theme = {
  colors: {
    primary: 'green',
    secondary: 'yellow',
  },
  background: {
    dark: 'grey',
    light: 'yellow'
  },
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px) and (min-width: 425px)',
  }
}

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global/>
        <App/>
      </ThemeProvider>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);


reportWebVitals();
