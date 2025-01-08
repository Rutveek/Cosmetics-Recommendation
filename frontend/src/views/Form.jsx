// import React, { useState, useRef} from "react";
// import {useNavigate} from 'react-router-dom';
//
// // MUI
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
//
// // controllers
// import { putForm } from '../controllers/actions'
// import { useLocation } from 'react-router';
//
// const skinToneValues = [1, 2, 3, 4, 5, 6]
// const skinToneColors = ["rgb(249, 245, 236)",
//     "rgb(250, 245, 234)",
//     "rgb(240, 227, 171)",
//     "rgb(206, 172, 104)",
//     "rgb(105, 59, 41)",
//     "rgb(33, 28, 40)",
// ]
// let data = {
//     tone: 5,
//     type: "Oily",
//     acne: "Moderate"
// }
// const skinTypes = ["All", "Oily", "Normal", "Dry"]
// const acnes = ['Low', 'Moderate', 'Severe']
// const otherConcerns = ['sensitive', 'fine lines', 'wrinkles', 'redness', 'pore', 'pigmentation', 'blackheads', 'whiteheads', 'blemishes', 'dark circles', 'eye bags', 'dark spots']
//
// const Form = () => {
//
//     const {state} = useLocation();
//     if(state !== null) {
//         data = state.data;
//         console.log(data)
//     }
//     console.log("After the condtional : ", data)
//     const {type, tone, acne} = data;
//     console.log("Prefill : ", type, tone, acne)
//
//     const [currType, setCurrType] = useState(type)
//     const [currTone, setCurrTone] = useState(parseInt(tone))
//     const [currAcne, setAcne] = useState(acne)
//     const [features, setFeatures] = useState({
//         "normal": false, "dry": false, "oily": false, "combination": false,
//         "acne": false, "sensitive": false, "fine lines": false, "wrinkles": false,
//         "redness": false, "dull": false, "pore": false, "pigmentation": false,
//         "blackheads": false, "whiteheads": false, "blemishes": false, "dark circles": false,
//         "eye bags": false, "dark spots": false
//     });
//     const handleChange = (event) => {
//         setFeatures({
//             ...features,
//             [event.target.name]: event.target.checked,
//         });
//         console.log(features)
//     };
//     const handleTone = (e) => {
//         setCurrTone(e.target.value)
//     }
//
//     const handleType = (e) => {
//         setCurrType(e.target.value)
//     }
//
//     const handleAcne = (e) => {
//         setAcne(e.target.value)
//     }
//     const navigate = useNavigate()
//     const handleSubmit = () => {
//         if (currType === 'All') {
//             features['normal'] = true;
//             features['dry'] = true;
//             features['oily'] = true;
//             features['combination'] = true;
//
//         }
//         else {
//             features[currType.toLowerCase()] = true;
//         }
//         if (currAcne != "Low") {
//             features['acne'] = true;
//         }
//         for (const [key, value] of Object.entries(features)) {
//             if (value === true) {
//                 features[key] = 1;
//             }
//             else {
//                 features[key] = 0;
//             }
//         }
//         console.log({"features": features, "type":currType, "tone":currTone})
//         putForm(features, currType, currTone, navigate)
//     }
//
//     return (
//         <>
//             <Container maxWidth="xs" sx={{ marginTop: "2vh" }} alignitems="center" width="inherit">
//                 <Typography variant="h5" component="div" textAlign="center">
//                     Results
//                 </Typography>
//                 {/*
//             <FormControl fullWidth>
//             </FormControl> */}
//
//                 <FormControl component="fieldset" sx={{ marginTop: "3vh" }}>
//                     <Grid container>
//                         <Grid item xs={9}>
//                             <InputLabel id="demo-simple-select-label">Tone</InputLabel>
//                             <Select
//                                 labelId="demo-simple-select-label"
//                                 id="demo-simple-select"
//                                 value={currTone}
//                                 label="Age"
//                                 onChange={handleTone}
//                                 fullWidth
//                                 defaultValue={tone}>
//                                 {skinToneValues.map((value) => {
//                                     return (<MenuItem value={value}>{value}</MenuItem>)
//                                 })}
//                             </Select>
//                         </Grid>
//                         <Grid item xs={3}>
//                             <div
//                                 style={{
//                                     height: "3rem",
//                                     width: "3rem",
//                                     backgroundColor: skinToneColors[tone-1],
//                                     margin: "0 auto",
//                                     justifySelf: "center",
//                                     borderRadius: "10%",
//                                 }}></div>
//                         </Grid>
//                     </Grid>
//                     <Grid marginTop="2vh">
//                         <FormLabel component="legend">Type</FormLabel>
//                         <RadioGroup
//                             row
//                             name="row-radio-buttons-group"
//                             defaultValue={type}
//                             onChange={handleType}
//                             value={currType}>
//                             <Grid container>
//                                 {skinTypes.map((type) => {
//                                     return (
//                                         <Grid item xs={6}>
//                                             <FormControlLabel
//                                                 value={type}
//                                                 control={<Radio />}
//                                                 label={type} />
//                                         </Grid>)
//                                 })}
//                             </Grid>
//                         </RadioGroup>
//                     </Grid>
//
//                     <Grid marginTop="2vh">
//                         <FormLabel component="legend">Acne</FormLabel>
//                         <RadioGroup
//                             row
//                             name="row-radio-buttons-group"
//                             onChange={handleAcne}
//                             defaultValue={acne}
//                             value={currAcne}>
//
//                             <Grid container>
//                                 {acnes.map((ac) => {
//                                     return (
//                                         <Grid item >
//                                             <FormControlLabel
//                                                 value={ac}
//                                                 control={<Radio />}
//                                                 label={ac} />
//                                         </Grid>)
//                                 })}
//                             </Grid>
//                         </RadioGroup>
//                     </Grid>
//
//                     <Grid marginTop="2vh">
//                         {/* <Typography variant="h6" component="div" textAlign="center">
//                     Specify other skin concerns
//             </Typography> */}
//                         <FormLabel component="legend">Specify other skin concerns</FormLabel>
//                         <Grid container>
//                             {otherConcerns.map((concern) => {
//                                 return (
//                                     <Grid item xs={6}>
//                                         <FormControlLabel control={<Checkbox checked={features[concern]} onChange={handleChange} name={concern} />}
//                                             value={concern}
//                                             label={concern.charAt(0).toUpperCase() + concern.slice(1)} />
//                                     </Grid>)
//                             })}
//                         </Grid>
//                     </Grid>
//
//                     <Grid marginTop="2vh" item xs={12}>
//                         <Button
//                             onClick={handleSubmit}
//                             variant="contained"
//                             fullWidth>
//                             Submit
//                         </Button>
//                     </Grid>
//                 </FormControl>
//             </Container>
//         </>
//     )
// }
//
//
//
//
// export default Form;
















//New

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI Components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

// Styling with MUI
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const skinToneValues = [1, 2, 3, 4, 5, 6];
const skinToneColors = [
  "rgb(249, 245, 236)",
  "rgb(250, 245, 234)",
  "rgb(240, 227, 171)",
  "rgb(206, 172, 104)",
  "rgb(105, 59, 41)",
  "rgb(33, 28, 40)",
];
const skinTypes = ["All", "Oily", "Normal", "Dry"];
const acnes = ["Low", "Moderate", "Severe"];
const otherConcerns = [
  "Sensitive",
  "Fine lines",
  "Wrinkles",
  "Redness",
  "Pore",
  "Pigmentation",
  "Blackheads",
  "Whiteheads",
  "Blemishes",
  "Dark circles",
  "Eye bags",
  "Dark spots",
];

const Form = () => {
  const navigate = useNavigate();

  const [currType, setCurrType] = useState("Normal");
  const [currTone, setCurrTone] = useState(3);
  const [currAcne, setAcne] = useState("Moderate");
  const [currGender, setGender] = useState("");
  const [currAge, setAge] = useState("");
  const [features, setFeatures] = useState(
    otherConcerns.reduce((acc, concern) => {
      acc[concern.toLowerCase()] = false;
      return acc;
    }, {})
  );

  const handleChange = (event) => {
    setFeatures({
      ...features,
      [event.target.name]: event.target.checked,
    });
  };

  const handleTone = (e) => setCurrTone(e.target.value);
  const handleType = (e) => setCurrType(e.target.value);
  const handleAcne = (e) => setAcne(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleAge = (e) => setAge(e.target.value);

  const handleSubmit = () => {
    if (currType === "All") {
      features["normal"] = true;
      features["dry"] = true;
      features["oily"] = true;
    } else {
      features[currType.toLowerCase()] = true;
    }
    if (currAcne !== "Low") features["acne"] = true;

    for (const [key, value] of Object.entries(features)) {
      features[key] = value ? 1 : 0;
    }

    console.log({ features, type: currType, tone: currTone, gender: currGender, age: currAge });
    navigate("/results", {
      state: { features, type: currType, tone: currTone, gender: currGender, age: currAge },
    });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: "5vh",
        padding: "3vh",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        sx={{ marginBottom: "4vh", color: "#333", fontWeight: "bold" }}
      >
        Skin Analysis Form
      </Typography>
      <FormControl component="fieldset" sx={{ width: "100%" }}>
        {/* Skin Tone Selection */}
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <InputLabel id="tone-select-label" sx={{ fontWeight: "bold" }}>
              Skin Tone
            </InputLabel>
            <Select
              labelId="tone-select-label"
              id="tone-select"
              value={currTone}
              onChange={handleTone}
              fullWidth
              sx={{
                backgroundColor: "#f8f8f8",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              {skinToneValues.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
            <Box
              sx={{
                height: "50px",
                width: "50px",
                backgroundColor: skinToneColors[currTone - 1],
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </Grid>
        </Grid>

        {/* Skin Type */}
        <Grid container marginTop="3vh">
          <FormLabel
            component="legend"
            sx={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1vh" }}
          >
            Skin Type
          </FormLabel>
          <RadioGroup row value={currType} onChange={handleType}>
            {skinTypes.map((type) => (
              <FormControlLabel
                key={type}
                value={type}
                control={<Radio />}
                label={type}
              />
            ))}
          </RadioGroup>
        </Grid>

        {/* Acne */}
        <Grid container marginTop="3vh">
          <FormLabel
            component="legend"
            sx={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1vh" }}
          >
            Acne
          </FormLabel>
          <RadioGroup row value={currAcne} onChange={handleAcne}>
            {acnes.map((ac) => (
              <FormControlLabel key={ac} value={ac} control={<Radio />} label={ac} />
            ))}
          </RadioGroup>
        </Grid>

        {/* Gender Selection */}
        <Grid container marginTop="3vh">
          <FormLabel
            component="legend"
            sx={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1vh" }}
          >
            Gender
          </FormLabel>
          <RadioGroup row value={currGender} onChange={handleGender}>
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
          </RadioGroup>
        </Grid>

        {/* Age Group Selection */}
        <Grid container marginTop="3vh">
          <FormLabel
            component="legend"
            sx={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1vh" }}
          >
            Age Group
          </FormLabel>
          <RadioGroup row value={currAge} onChange={handleAge}>
            <FormControlLabel value="12-18" control={<Radio />} label="12-18 years" />
            <FormControlLabel value="18-60" control={<Radio />} label="18-60 years" />
            <FormControlLabel value="above 60" control={<Radio />} label="Above 60 years" />
          </RadioGroup>
        </Grid>

        {/* Other Concerns */}
        <Grid container marginTop="3vh">
          <FormLabel
            component="legend"
            sx={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1vh" }}
          >
            Other Skin Concerns
          </FormLabel>
          <Grid container spacing={2}>
            {otherConcerns.map((concern) => (
              <Grid key={concern} item xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={features[concern.toLowerCase()]}
                      onChange={handleChange}
                      name={concern.toLowerCase()}
                    />
                  }
                  label={concern}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Grid marginTop="4vh" item xs={12}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#007bff",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              padding: "1vh",
              borderRadius: "5px",
              "&:hover": { backgroundColor: "#0056b3" },
            }}
          >
            Submit
          </Button>
        </Grid>
      </FormControl>
    </Container>
  );
};

export default Form;



