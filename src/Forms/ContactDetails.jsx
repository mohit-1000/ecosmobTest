// Import React and Component
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//---------- components ---------
function ContactDetails({ isValidation, setDatadataForm }) {

  //---------- state, redux state, veriable and hooks
  const [data, setData] = React.useState({});
  const [postal , setPostal] = React.useState('');
  const [phone1 , setPhone1] = React.useState('');
  const [phone2, setPhone2] = React.useState('');
  //---------- life cycles section
  useEffect(() => {
    setDatadataForm(data)
  }, [data])

  //---------- helpers : other and users action
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const phoneNumber = (e) => {
    const result = e.target.value.replace(/\D/g, '');
    setPostal(result);
  }
  const phoneNumber1 = (e) => {
    const result1 = e.target.value.replace(/\D/g, '');
    setPhone1(result1);
  }
  const phoneNumber2 = (e) => {
    const result2 = e.target.value.replace(/\D/g, '');
    setPhone2(result2);
  }

  //---------- main view
  return (
    <div>
      <div className="container">
        <div className="inner">
          <div className="heading" style={{ marginBottom: 40 }}>
            <h2>Address & Contact Details</h2>
            <div className="Image" />
          </div>
          <div className="input">
            <div className="inputfield">
              <h5 className="lebleBrand">
                Business Address :{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </h5>
              <div className="main">
                <div style={{ width: "100%" }}>
                  <TextField
                    label="Enter legal business address"
                    variant="filled"
                    sx={{ width: "100%" }}
                    name='business_address'
                    onChange={handleChange}
                    size="small"

                  />
                  {!data?.business_address && isValidation && <p className="errText"
                  >Please enter legal business address</p>}
                </div>

                <FormControl
                  style={{ width: "100%" }}
                  variant="filled"
                  sx={{ width: "50%" }}
                size="small"
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    Enter city,State
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    name='State'
                    onChange={handleChange}
                  >
               
                    <MenuItem value={10}>Andhra Pradesh</MenuItem>
                    <MenuItem value={20}>Rajasthan</MenuItem>
                    <MenuItem value={30}>Uttar Pradesh</MenuItem>
                    <MenuItem value={30}>Maharashtra</MenuItem>
                    <MenuItem value={30}>Karnataka</MenuItem>
                    <MenuItem value={30}>Gujarat</MenuItem>
                  </Select>
                  {!data?.State && isValidation && <p className="errText">Please select state</p>}
                </FormControl>
                <div style={{ width: "100%" }}>
                  <TextField
                    style={{ width: "100%" }}
                    label="Postal code"
                    variant="filled"
                    value={postal}
                    sx={{ width: "50%" }}
                    name='Postal_code'
                    size="small"
                    onChange={phoneNumber}
                  />
                  {!data?.Postal_code && isValidation && <p className="errText"
                  >Please enter Postal code</p>}
                </div>
              </div>
            </div>
          </div>
          <div className="input2">
            <div className="inputfield">
              <h5 className="lebleBrand">
                Primary Business Phone :{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </h5>
              <p className="lebleText">(For business verification purposes)</p>
              <TextField
                label="Enter legal business phone"
                variant="filled"
                sx={{ width: "100%" }}
                value={phone1}
                name='primary_phone'
                onChange={phoneNumber1}
                size="small"
              />
              {!data?.primary_phone && isValidation && <p className="errText">Please enter Primary business phone</p>}

            </div>

            <div className="inputfield">
              <h5 className="lebleBrand">
                Support Phone Number :{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </h5>
              <p className="lebleText">(Give alternate phone number)</p>
              <TextField
                label="Enter phone number"
                variant="filled"
                sx={{ width: "100%" }}
                name='phone_number'
                onChange={phoneNumber2}
                value={phone2}
                size="small"
              />
              {!data?.phone_number && isValidation && <p className="errText">Please enter business phone</p>}
            </div>
          </div>
          <div className="input3">
            <div className="inputfield">
              <h5 className="lebleBrand">
                Business Website : </h5>
              <TextField
                label="Enter business website"
                variant="filled"
                sx={{ width: "100%" }}
                name='website'
                onChange={handleChange}
                size="small"
              />
              {!data?.website && isValidation && <p className="errText">Please enter Website</p>}

            </div>
            <div className="inputfield">
              <h5 className="lebleBrand">
                Support Email : <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span></h5>
              <TextField
                label="Enter email ID"
                variant="filled"
                sx={{ width: "100%" }}
                name='email'
                onChange={handleChange}
                size="small"
              />
              {!data?.email && isValidation && <p className="errText">Please enter email ID</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
