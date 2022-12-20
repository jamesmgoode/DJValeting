import React, { Component } from 'react';

export class Booking extends Component {
    static displayName = Booking.name;

    constructor(props) {
        super(props);

        this.approveBooking = this.approveBooking.bind(this);
    }

    renderApproved(approved) {
        return approved
            ? (
                <td>Approved</td>
            )
            : (
                <td><button type="button" className="btn btn-success btn-sm" onClick={this.approveBooking}>Approve</button></td>
            )
    }

    async approveBooking() {
        console.log("Approving");

        const bookingToApprove = {
            bookingId: this.props.booking.bookingId
        }

        const settings = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingToApprove)
        }

        try {
            const response = await fetch("booking/approvebooking", settings);
            // Check 200 response and update to true if successful
        } catch (e) {
            // Handle error
        }
    }

    render() {
        return (
            <tr>
                <td>Id: {this.props.booking.bookingId}</td>
                <td>Name: {this.props.booking.name}</td>
                <td>Booking Date: {this.props.booking.bookingDate}</td>
                <td>Flexibility: {this.props.booking.flexibility}</td>
                <td>Vehicle Size: {this.props.booking.vehicleSize}</td>
                <td>Contact Number: {this.props.booking.contactNumber}</td>
                <td>Email Address: {this.props.booking.emailAddress}</td>
                {this.renderApproved(this.props.booking.approved)}
            </tr>
        )
    }
}
