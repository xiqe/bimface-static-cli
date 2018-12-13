import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './less/loading.less';

export default class Loading extends Component {
    render() {
        const {tip} = this.props;
        return (
            <div className="loading-mask">
                <div className="loading-box">
                    <div className="loading-loader"></div>
                    {tip?<div className="loading-text">{tip}</div>:null}

                </div>
            </div>
        );
    }
}

Loading.propTypes = {
    tip: PropTypes.string,
};

Loading.newInstance = function newLoadingInstance(properties) {
    let props = properties || {};
    let div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(React.createElement(Loading, props), div);
    return {
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        },
    };
};