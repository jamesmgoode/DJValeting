import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { name: "", date: new Date(), flexibility: "1", vehicleSize: "Small", contactNumber: "", emailAddress: "" };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleFlexibilityChange = this.handleFlexibilityChange.bind(this);
        this.handleVehicleSizeChange = this.handleVehicleSizeChange.bind(this);
        this.handleContactNumberChange = this.handleContactNumberChange.bind(this);
        this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value })
    }

    handleDateChange(e) {
        this.setState({ date: e.target.value })
    }

    handleFlexibilityChange(e) {
        this.setState({ flexibility: e.target.value })
    }

    handleVehicleSizeChange(e) {
        this.setState({ vehicleSize: e.target.value })
    }

    handleContactNumberChange(e) {
        this.setState({ contactNumber: e.target.value })
    }

    handleEmailAddressChange(e) {
        this.setState({ emailAddress: e.target.value })
    }

    async handleSubmit() {
        const bookingSubmission = {
            name: this.state.name,
            date: this.state.date,
            flexibility: this.state.flexibility,
            vehicleSize: this.state.vehicleSize,
            contactNumber: this.state.contactNumber,
            emailAddress: this.state.emailAddress
        }

        const settings = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingSubmission)
        }

        try {
            const response = await fetch("booking/submitbooking", settings);
            // Check 200 response
            // Display message or progress user to "thankyou for your booking" screen
        } catch (e) {
            // Handle error
        }
    }

    render() {
        return (
            <div>
                <h1>Create Booking</h1>
                <div className="form-group row mt-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" id="name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label htmlFor="date" className="col-sm-2 col-form-label">Booking Date</label>
                    <div className="col-sm-2">
                        <input type="date" className="form-control" id="date" value={this.state.date} onChange={this.handleDateChange} />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label htmlFor="flexibility" className="col-sm-2 col-form-label">Flexibility</label>
                    <div className="col-sm-2">
                        <select
                            id="flexibility"
                            className="form-select"
                            value={this.state.flexibility}
                            onChange={this.handleFlexibilityChange}
                        >
                            <option value="1">+/- 1 Day</option>
                            <option value="2">+/- 2 Days</option>
                            <option value="3">+/- 3 Days</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label htmlFor="vehicle-size" className="col-sm-2 col-form-label">Vehicle Size</label>
                    <div className="col-sm-2">
                        <select
                            id="vehicle-size"
                            className="form-select"
                            value={this.state.vehicleSize}
                            onChange={this.handleVehicleSizeChange}
                        >
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="Van">Van</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label htmlFor="contact-number" className="col-sm-2 col-form-label">Contact Number</label>
                    <div className="col-sm-3">
                        <input type="tel" className="form-control" id="contact-number" placeholder="Contact Number" value={this.state.contactNumber} onChange={this.handleContactNumberChange} />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email Address</label>
                    <div className="col-sm-3">
                        <input type="email" className="form-control" id="email" placeholder="Email address" value={this.state.emailAddress} onChange={this.handleEmailAddressChange} />
                    </div>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={this.handleSubmit}>Submit Booking</button>
            </div>
        );
    }
}
