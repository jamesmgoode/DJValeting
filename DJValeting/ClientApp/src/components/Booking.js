import React, { Component } from 'react';

export class Booking extends Component {
    static displayName = Booking.name;

    render() {
        return (
            <div>
                <tr>
                    <td>Id: {this.props.booking.bookingId}</td>
                    <td>Name: {this.props.booking.name}</td>
                    <td>Booking Date: {this.props.booking.bookingDate}</td>
                    <td>Flexibility: {this.props.booking.flexibility}</td>
                    <td>Vehicle Size: {this.props.booking.vehicleSize}</td>
                    <td>Contact Number: {this.props.booking.contactNumber}</td>
                    <td>Email Address: {this.props.booking.emailAddress}</td>
                    <td>Approved: {this.props.booking.approved ? "Yes" : "No" }</td>
                </tr>
            </div>
        )
    }
}
