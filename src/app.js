import React, { Component, PropTypes } from 'react';
import KartenaMap from './map';

export default class App extends Component {
    render() {
        return (
            <div id="view">
                <KartenaMap />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element,
};
