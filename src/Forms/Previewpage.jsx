// Import React and Component
import React, { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Confirmation.css";
import { brown } from "@mui/material/colors";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetDataLocalstorage } from "../Components/Helper";

//---------- components ---------
function Preview(props) {
const[ data,setData]=useState({})
const [registrationData , setRegistrationData] = useState({})
const [isValidation , setIsIsValidation]=React.useState(false)
  useEffect(()=>{
    GetDataLocalstorage("registration").then((value) => {
      console.log("registration",value);
      if (value) {
        setRegistrationData(value)
      }
    });
    GetDataLocalstorage("contactDetails").then((value) => {
      console.log("value",value);
      if (value) {
        setData({...data,...value})
      }
    });
  },[])

  console.log("++++++++",data);
  //---------- main view
  return (
    <div>
      <div className="container">
        <div className="inner">
          <div className="heading">
            <h2>Preview</h2>
          </div>
          <div className="table2">
            <table>
              <tr>
                <th>Brand Registration</th>
                <th></th>
                <th></th>
                <th>Data</th>
              </tr>
              <tr>
                <td>Legal Business Name</td>
                <td className=" td3"></td>
                <td className=" td3"></td>
                <td className=" td3"> {registrationData?.businessName||''}</td>
              </tr>
              <tr>
                <td>Federal business ID</td>
                <td className=" td3"></td>
                <td className=" td3"></td>
                <td className=" td3">{registrationData?.businessID||''}</td>
              </tr>
              <tr>
                <td>Vertical</td>
                <td className=" td3"></td>
                <td className=" td3"></td>
                <td className=" td3">{registrationData?.vertical||''}</td>
              </tr>
              <tr>
                <td>Stock Symbol</td>
                <td className=" td3"></td>
                <td className=" td3"></td>
                <td className=" td3">{registrationData?.tocksymbol||''}</td>
              </tr>
              {/* <tr>
                <td>Business Type</td>
                <td className=" td3"></td>
                <td className=" td3"></td>
                <td className=" td3">{data?.business_address||''}</td>

              </tr> */}
            </table>
            <br />
            <table>
              <tr>
                <th>Address & Contact Details</th>
                <th>Data</th>
                <th>City,State</th>
                <th>Postal Code</th>
              </tr>
              <tr>
                <td> Business address</td>
                <td className=" td3"> {data?.business_address||''}</td>
                <td className=" td3">{data?.State||""}</td>
                <td className=" td3">{data?.Postal_code||""}</td>
              </tr>
              <tr>
                <td>Primary business phone</td>
                <td className=" td3">{data?.phone_number||""}</td>
                <td className=" td3"></td>
                <td className=" td3"></td>
              </tr>
              <tr>
                <td>Support phone number</td>
                <td className=" td3">{data?.primary_phone||""}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Business website</td>
                <td className=" td3">{data?.website||""}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Support email</td>
                <td className=" td3">{data?.email||""}</td>
                <td></td>
                <td></td>
              </tr>
            </table>
            <br />
            <div className="table2">
            <table>
              <tr>
                <th>Brand Registration Payment Confirmation</th>
                <th></th>
                <th></th>
                <th>Rates</th>
              </tr>
              <tr>
                <td>One time charge</td>
                <td className=" td3"></td>
                <td className=" td3"></td>
                <td className=" td3">$4.00</td>
              </tr>
              <tr>
                <td>State & Local Taxes</td>
                <td className=" td3"></td>
                <td className=" td3"></td>
                <td className=" td3">$0.60</td>
              </tr>
              <tr>
                <th>Total Charges</th>
                <th></th>
                <th></th>
                <th>$4.60</th>
              </tr>
            </table>
              <div />
              <br />
              <div>
                <p>
                  All charges will appear on your statement this way Phone.com.
                  We'll use this p processed on a secure server. I understand
                  that my use of the services is governed by the Terms of
                  Service{" "}
                </p>
                <hr></hr>
              </div>
            </div>
          </div>
          <div className="input3">
            <div className="inputfield">
            <div className="checkbox" >
                {/* <FormGroup style={{flexDirection:"row"}}> */}
                  <FormControlLabel control={<Checkbox  />} 
                    checked={isValidation}
                    onChange={(check) => setIsIsValidation( check?.target.checked)}
                  style={{margin:0,alignItems:"baseline"}}/>
                  <p style={{ bottom: "20px" }}>
                    {" "}
                    I understand that my use of the services is governed by the{" "}
                    <span style={{ color: "green", fontWeight: "500" }}>
                      Terms of Service
                    </span>{" "}
                    or Master Services Agreement,{" "}
                    <span style={{ color: "green", fontWeight: "500" }}>
                      Accepted Use Policy
                    </span>
                    , and
                    <span style={{ color: "green", fontWeight: "500" }}>
                      {" "}
                      <span style={{ color: "green", fontWeight: "500" }}>
                        SMS Message Policy
                      </span>
                    </span>
                    .
                  </p>
                {/* </FormGroup> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;

const data = {
  columns: [
    {
      label: "Heading",
      field: "heading0",
      sort: "asc",
    },
    {
      label: "Heading",
      field: "heading1",
      sort: "asc",
    },
    {
      label: "Heading",
      field: "heading2",
      sort: "asc",
    },
    {
      label: "Heading",
      field: "heading3",
      sort: "asc",
    },
    {
      label: "Heading",
      field: "heading4",
      sort: "asc",
    },
  ],
  rows: [
    {
      heading0: "Cell",
      heading1: "Cell",
      heading2: "Cell",
      heading3: "Cell",
    },
    {
      heading0: "Cell",
      heading1: "Cell",
      heading2: "Cell",
      heading3: "Cell",
    },
    {
      heading0: "Cell",
    },
  ],
};
