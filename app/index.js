import React from 'react'
import ReactDom from 'react-dom'
import 'babel-polyfill'
import './styles/main.css'

import Routes from './routes'

ReactDom.render(
    <Routes />,
    document.getElementById('app')
)
