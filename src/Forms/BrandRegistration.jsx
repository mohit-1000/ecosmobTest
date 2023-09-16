// Import React and Component
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { GetDataLocalstorage } from "../Components/Helper";


//---------- components ---------
function BrandRegistration({ setDatadataForm, isValidation }) {

  //---------- state, redux state, veriable and hooks
  const [data, setData] = React.useState({});

  //---------- life cycles section

  useEffect(() => {
    GetDataLocalstorage("registration").then((data) => {
      if (data) {
        setData(data)
      }
    });
  }, [])
  useEffect(() => {
    setDatadataForm(data)
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
          <div className="heading">
            <h1>Brand Registration</h1>
            <div className="Image" />
          </div>
          <div className="note" style={{ marginBottom: 40 }}>
            <p className="note-text" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              odio quas alias aut magni vero placeat commodi, veritatis
              excepturi unde eligendi fugiat, cumque culpa harum nobis non
              error. Sunt, tempore!
            </p>
          </div>
          <div className="input">
            <div className="inputfield">
              <h5 className="lebleBrand">
                Legal Business Name :{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </h5>
              <p className="lebleText">(please make sure your business matches with IRS records)</p>
              <TextField
                label="Enter legal business name"
                variant="filled"
                sx={{ width: "100%" }}
                size="small"
                name="businessName"
                value={data?.businessName}
                onChange={handleChange}
              />
              {!data?.businessName && isValidation && <p className="errText">Please enter legal business name</p>}

            </div>
            <div className="inputfield">
              <h5 className="lebleBrand">
                Country Of Registration :{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </h5>
              <p className="lebleText">(please make sure you choose your right country)</p>
              <TextField
                size="small"
                label="Country Of Registration"
                variant="filled"
                sx={{ width: "100%" }}
                name='country'
                onChange={handleChange}
                value={data?.country}

              />
              {!data?.country && isValidation && <p className="errText">Please enter Country Of Registration</p>}
            </div>
          </div>
          <div className="input2">
            <div className="inputfield">
              <h5 className="lebleBrand">
                Federal Business ID :{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </h5>
              <p className="lebleText">(EIN for US,Corporation # for CA)</p>
              <TextField
                label="Federal Business ID"
                variant="filled"
                sx={{ width: "100%" }}
                name='businessID'
                onChange={handleChange}
                size="small"
                value={data?.businessID}

              />
              {!data?.businessID && isValidation && <p className="errText">Please enter Federal Business ID</p>}

            </div>
            <div className="inputfield">
              <h5 className="lebleBrand">
                Vertical :{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </h5>
              <p className="lebleText">Select One</p>
              <FormControl
                variant="filled"
                sx={{ width: "100%" }}
                size="small"
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Please select Vertical
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={data.vertical || " "}
                  name='vertical'
                  onChange={handleChange}
                >
                  <MenuItem value={"Aerospace (aircraft manufacturing)"}>Aerospace (aircraft manufacturing)</MenuItem>
                  <MenuItem value={"Chemical (manufacturing)"}>Chemical (manufacturing)</MenuItem>
                  <MenuItem value={"Computers"}>Computers</MenuItem>
                  <MenuItem value={"Education"}>Education</MenuItem>
                  <MenuItem value={"Transportation"}>	Transportation</MenuItem>
                  <MenuItem value={"Government"}>Government</MenuItem>
                  <MenuItem value={"Information Technology"}>Information Technology</MenuItem>

                </Select>
              </FormControl>
              {!data?.vertical > 0 && isValidation && <p className="errText">Please select Select One</p>}
            </div>
          </div>
          <div className="input3">
            <div className="inputfield">
              <h5 className="lebleBrand">Stock Symbol : </h5>
              <p className="lebleText">
                (
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *{" "}
                </span>
                For publicily traded company only)
              </p>
              <TextField
                label="Enter Stock Symbol"
                variant="filled"
                sx={{ width: "100%" }}
                name='tocksymbol'
                onChange={handleChange}
                size="small"
                value={data?.tocksymbol}
              />
              {!data?.tocksymbol && isValidation && <p className="errText">Please enter Stock Symbol</p>}

            </div>
            <div className="inputfield">
              <h5 className="lebleBrand">
                Business Type:{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  *
                </span>
              </h5>
              <p className="lebleText">(Select business type you own)</p>
              <div className="checkbox">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Publicily traded company"
                    checked={data?.PublicilyTradedCompany ? true : false}
                    onChange={(check) => setData({ ...data, PublicilyTradedCompany: check?.target.checked })}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Private company"
                    checked={data?.PrivateCompany ? true : false}
                    onChange={(check) => setData({ ...data, PrivateCompany: check?.target.checked })}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Non profit organisation"
                    checked={data?.NonProfit ? true : false}
                    onChange={(check) => setData({ ...data, NonProfit: check?.target.checked })}
                  />
                  <FormControlLabel control={<Checkbox />} label="Government"
                    checked={data?.Government ? true : false}
                    onChange={(check) => setData({ ...data, Government: check?.target.checked })}
                  />
                </FormGroup>
              </div>
              {/* {
                (!data?.PublicilyTradedCompany || !data?.PrivateCompany
                  || !data?.NonProfit || !data?.Government) && isValidation && <p className="errText">Please select Business Type</p>} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandRegistration;
