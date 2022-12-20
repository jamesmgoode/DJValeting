import React, { Component } from 'react';
import { Booking } from './Booking';

export class Bookings extends Component {
    static displayName = Bookings.name;

    constructor(props) {
        super(props);
        this.state = { bookings: [], loading: true };
    }

    componentDidMount() {
        this.populateBookingsData();
    }

    renderbookings() {
        return (
            <table>
                {this.state.bookings.map(booking =>
                    <Booking booking={booking} />
                )}
            </table>
        )
    }

    render() {
        const bookings = this.state.loading
            ? <p>Loading bookings...</p>
            : this.renderbookings();

        return (
            <div>
                <h1>Bookings</h1>
                {bookings}
            </div>
        );
    }

    async populateBookingsData() {
        const response = await fetch('booking/getbookings');
        const data = await response.json();
        this.setState({ bookings: data, loading: false });
    }
}
