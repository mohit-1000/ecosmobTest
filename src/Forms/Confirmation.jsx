// Import React and Component
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import './Confirmation.css'
import { brown } from "@mui/material/colors";
import 'bootstrap/dist/css/bootstrap.min.css';

//---------- components ---------
function Confirmation(props) {


    //---------- main view
    return (
        <div>
            <div className="container">
                <div className="inner">
                    <div className="heading">
                        <h2>Brand Registration Payment Confirmation</h2>
                    </div>
                    <div className="note">
                        <p className="note-text">
                            TCR fees are non-refundable and are set by mobile carriers and their registrar.
                            Phone.com is not charging any additional fees or TCS registration and pays a portion
                            of the per-message carrier fees for our customer.
                        </p>
                    </div>
                    <div className="table2" >
                        <table>
                            <tr><th>Period</th><th>Charges & Credits</th><th>Unit Price</th><th>Amount</th><th>Quantity</th></tr>
                            <tr><td>One time charge</td><td>100LE SMS FOR Registration-Standard brand</td><td>
                                $4.00</td> <td>1</td>   <td className=" td3">$4.00</td></tr>
                            <tr>
                                <td>Charges after Discounts and Pro-</td><td></td><td></td><td></td><td className=" td3">$4.00</td></tr>
                        </table>
                        <br />
                        <table style={{}}>
                            <tr style={{ backgroundColor: brown }}><td style={{ width: '90%' }} >Taxes</td> <td style={{ width: '5px' }}>Amount</td></tr>
                            <tr style={{ backgroundColor: 'white' }}><td >State and local taxes (View breakup)</td><td >$4.00</td></tr>
                            <tr><td >State and Local taxes</td> <td className=" td3" >$4.00</td></tr>
                        </table>
                        <br />
                        <div className="table2" >
                            <table>
                                <tr style={{ backgroundColor: 'white' }}>
                                    <td style={{ width: '90%' }}>Charges after Discounts and Pro-rates:</td> <td className=" td3">$4.60</td></tr>
                                <tr style={{ backgroundColor: 'white' }}> <td>State and Local taxes:</td><td className=" td3">$4.60</td></tr>
                                <tr style={{ backgroundColor: 'white' }} ><td>Subtotal</td><td className=" td3">$4.60</td></tr>
                                <tr style={{ backgroundColor: 'white', fontWeight: "700" }}> <td>Total charges to Credit Card:</td><td className=" td3">$4.60</td></tr>
                            </table>
                            <div />
                            <br />
                            <div>
                                <p>
                                    All charges will appear on your statement this way Phone.com. We'll use this p

                                    processed on a secure server.

                                    I understand that my use of the services is governed by the Terms of Service  </p>
                                <hr></hr>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="input3">
                        <div className="inputfield">
                            <div className="checkbox" style={{}}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                    />
                                    <p style={{ bottom: '20px' }} > I understand that my use of the services is governed by the <span style={{ color: 'green', fontWeight: '500' }}>Terms of Service</span> or Master Services Agreement, <span style={{ color: 'green', fontWeight: '500' }}>Accepted Use Policy</span>, and<span style={{ color: 'green', fontWeight: '500' }}> <span style={{ color: 'green', fontWeight: '500' }}>SMS Message Policy</span></span>.</p>
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;



const data = {
    columns: [

        {
            label: 'Heading',
            field: 'heading0',
            sort: 'asc'
        },
        {
            label: 'Heading',
            field: 'heading1',
            sort: 'asc'
        },
        {
            label: 'Heading',
            field: 'heading2',
            sort: 'asc'
        },
        {
            label: 'Heading',
            field: 'heading3',
            sort: 'asc'
        },
        {
            label: 'Heading',
            field: 'heading4',
            sort: 'asc'
        },

    ],
    rows: [
        {

            'heading0': 'Cell',
            'heading1': 'Cell',
            'heading2': 'Cell',
            'heading3': 'Cell',

        },
        {

            'heading0': 'Cell',
            'heading1': 'Cell',
            'heading2': 'Cell',
            'heading3': 'Cell',

        },
        {

            'heading0': 'Cell',


        }
    ]
}