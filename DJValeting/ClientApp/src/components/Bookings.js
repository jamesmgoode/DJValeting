import React, { Component } from 'react';

export class Bookings extends Component {
    static displayName = Bookings.name;

    constructor(props) {
        super(props);
        this.state = { bookings: [], loading: true };
    }

    render() {
        return (
            <div>
                <h1>Bookings</h1>
                <table>
                </table>
            </div>
        );
    }
}
