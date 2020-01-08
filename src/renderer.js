import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './components/App'
import MontserratRegularWoffTwo from './assets/fonts/montserrat-v14-latin-regular.woff2'
import MontserratRegularWoff from './assets/fonts/montserrat-v14-latin-regular.woff'
import FiraCodeRegularWoffTwo from './assets/fonts/FiraCode-Regular.woff2'
import FiraCodeRegularWoff from './assets/fonts/FiraCode-Regular.woff'

const settings = require('electron').remote.require('electron-settings')

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #292d3e;
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
      url('${MontserratRegularWoffTwo}') format('woff2'),
      url('${MontserratRegularWoff}') format('woff');
  }

  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 400;
    src: local('Fira Code Regular'), local('FiraCode-Regular'),
      url('${FiraCodeRegularWoffTwo}') format('woff2'),
      url('${FiraCodeRegularWoff}') format('woff');
  }

  .gutter {
    border-left: 1px solid #292d3e;
    cursor: pointer;
  }
`

ReactDOM.render(
  <>
    <GlobalStyle />
    <App prefs={settings.getAll()} />
  </>,
  document.getElementById('root')
)
