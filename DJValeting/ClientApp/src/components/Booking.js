import React, { Component } from 'react';

export class Booking extends Component {
    static displayName = Booking.name;

    static renderApproved(approved) {
        return approved
            ? (
                <td>Approved</td>
            )
            : (
                <td><button type="button" className="btn btn-success btn-sm">Approve</button></td>
            )
    }

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
                    {Booking.renderApproved(this.props.booking.approved)}
                </tr>
            </div>
        )
    }
}
