import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/WithClass';
import classes from './Person.css'

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} year old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input key="i3"
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </Aux>
        );
    }
}

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);