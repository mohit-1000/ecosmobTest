// Import React and Component
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { GetDataLocalstorage } from "../Components/Helper";

//---------- components ---------
function ContactDetails({ isValidation, setDatadataForm }) {

  //---------- state, redux state, veriable and hooks
  const [data, setData] = React.useState({});
  const [webSite, setWebSite] = React.useState(false);
  //---------- life cycles section
  useEffect(() => {
    GetDataLocalstorage("contactDetails").then((data) => {
      if (data) {
        setData(data)
      }
    });
  }, [])
  useEffect(() => {
    const re = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g
    let velidate = re.test(data?.website)
    console.log("++++++",data?.website);
    if (velidate) {
    setDatadataForm(data)
    setWebSite(false)

    }else{
      setWebSite(true)
    }
  }, [data])

  //---------- helpers : other and users action
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
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
                    value={data?.business_address}
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
                    value={data?.State|| " "}
                  >

                    <MenuItem value={"Andhra Pradesh"}>Andhra Pradesh</MenuItem>
                    <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
                    <MenuItem value={"Uttar Pradesh"}>Uttar Pradesh</MenuItem>
                    <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                    <MenuItem value={"Karnataka"}>Karnataka</MenuItem>
                    <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                  </Select>
                  {!data?.State && isValidation && <p className="errText">Please select state</p>}
                </FormControl>
                <div style={{ width: "100%" }}>
                  <TextField
                    style={{ width: "100%" }}
                    label="Postal code"
                    variant="filled"
                    value={data?.Postal_code}
                    sx={{ width: "50%" }}
                    name='Postal_code'
                    size="small"
                    onChange={handleChange}
                    type={"number"}
                    inputProps={{
                      type: "number", // Restrict input to numeric values
                      pattern: "[0-9]*", // Optionally, add a pattern to further restrict input
                    }}
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
                value={data?.primary_phone}
                name='primary_phone'
                onChange={handleChange}
                type={"number"}
                size="small"
                inputProps={{
                  type: "number", // Restrict input to numeric values
                  pattern: "[0-9]*", // Optionally, add a pattern to further restrict input
                }}
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
                onChange={handleChange}
                value={data?.phone_number}
                type={"number"}
                size="small"
                inputProps={{
                  type: "number", // Restrict input to numeric values
                  pattern: "[0-9]*", // Optionally, add a pattern to further restrict input
                }}
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
                value={data?.website}
                // onChange={(e) => {
                //   const re = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g
                //   let velidate = re.test(e.target.value)
                //   if (velidate) {
                //     handleChange(e)
                //   }
                // }}
                onChange={handleChange}
                size="small"
              />
              {(!data?.website||webSite) && (isValidation|| webSite) && <p className="errText">Please enter valid Website</p>}

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
                value={data?.email}
                onChange={(e) => {
                  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                  let velidate = re.test(e.target.value)
                  console.log(velidate);
                  if (velidate) {
                    handleChange(e)
                  }
                }}
                size="small"
                type={'email'}
                inputProps={{
                  type: "url", // Restrict input to URLs
                  pattern: "https?://.+",
                  title: "Enter a valid URL",
                }}              
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
