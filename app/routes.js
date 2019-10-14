import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { asyncSessionStorage } from 'redux-persist/storages'

import reducer from './reducers'

import Home from './views/home'

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
), autoRehydrate())

class Routes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rehydrated: false
        }

        this.onUpdate = this.onUpdate.bind(this)
    }

    componentWillMount() {
        persistStore(store, { storage: asyncSessionStorage }, () => {
            this.setState({ rehydrated: true })
        })
    }

    onUpdate() {
        window.scrollTo(0, 0)
    }

    render() {
        const { rehydrated } = this.state

        if (rehydrated) {
            return (
                <Provider store={store}>
                    <Router history={browserHistory} onUpdate={() => this.onUpdate()}>
                        <Route path="/" component={Home} />
                    </Router>
                </Provider>
            )
        }

        return <div />
    }
}

export default Routes
