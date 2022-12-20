import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Create Booking</h1>
                <div className="form-group row mt-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" id="name" placeholder="Name" />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label htmlFor="date" className="col-sm-2 col-form-label">Booking Date</label>
                    <div className="col-sm-2">
                        <input type="date" className="form-control" id="date" />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label htmlFor="flexibility" className="col-sm-2 col-form-label">Flexibility</label>
                    <div className="col-sm-2">
                        <select id="flexibility" className="form-select">
                            <option value="1">+/- 1 Day</option>
                            <option value="2">+/- 2 Days</option>
                            <option value="3">+/- 3 Days</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label htmlFor="vehicle-size" className="col-sm-2 col-form-label">Vehicle Size</label>
                    <div className="col-sm-2">
                        <select id="vehicle-size" className="form-select">
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="van">Van</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label htmlFor="contact-number" className="col-sm-2 col-form-label">Contact Number</label>
                    <div className="col-sm-3">
                        <input type="tel" className="form-control" id="contact-number" placeholder="Contact Number" />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email Address</label>
                    <div className="col-sm-3">
                        <input type="email" className="form-control" id="email" placeholder="Email address" />
                    </div>
                </div>
            </div>
        );
    }
}
