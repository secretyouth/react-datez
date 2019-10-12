import React from 'react'
import ReactDom from 'react-dom'
import './styles/main.scss'
import Routes from './routes'

ReactDom.render(
    <Routes />,
    document.getElementById('app')
)
