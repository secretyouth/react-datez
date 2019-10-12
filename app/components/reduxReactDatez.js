import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import ReactDatez from './reactDatez'

class ReduxReactDatez extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const { meta: { touched, error } } = this.props

        const showError = classnames('rdatez', {
            error: touched && error
        })

        return (
            <div className={showError}>
                <ReactDatez {...this.props} isRedux />
                {touched && error && <div className="help-text error">{error}</div>}
            </div>
        )
    }
}

ReduxReactDatez.propTypes = {
    meta: PropTypes.object
}

export default ReduxReactDatez
