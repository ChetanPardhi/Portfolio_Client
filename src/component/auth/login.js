import {React, useState} from "react";
// import Lottie from "react-lottie";
// import animationData from "../animations/login/login.json";
import { Box, Button, ListItem, Stack, TextField } from "@mui/material";
import logo from "../images/buy_it.png";
import "./login.css";
import { useNavigate } from 'react-router-dom';

export default function Login() {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validRegistration, setValidRegistration] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  // const navigate = useNavi
  // const navigate = useNavigate("/")
  
  const handleUserLoginSubmit = (e) => {
    e.preventDefault();
    // // Register logic
    // axios.get(`http://localhost:8080/login?password=admin&email=abc@gmail.com`)
    //     .then((res)=>{
    //       console.log(res);
    //       setValidRegistration(true);
    //     });
    
        fetch(`http://localhost:8080/login?password=admin&email=abc@gmail.com`,{
          method:'GET',
          
          
      }).then((res)=>{
        if(!res.ok){
          console.log("error")
        }
        
        return res.json();
      //   console.log(res)
      //   return res;
      }).then((data)=>{
        console.log(data)
        sessionStorage.setItem("email",data.userEmail)
        sessionStorage.setItem("id",data.userId)
      })

  };

  return (
    <Box style={{ margin: "40px 80px 20px 80px" , boxShadow: "2px 2px 10px black" , height : "530px"}}>
        <Stack direction="row" >
      <ListItem >
        <Stack
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <ListItem>
            <img
              src={logo}
              style={{
                height: "100px",
                width: "100px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            ></img>
          </ListItem>
          <ListItem
            style={{
              display: "contents",
              textAlign: "center",
              fontFamily: "Jost",
            }}
          >
            <h1>Hello Again!</h1>
            <h4 style={{ marginTop: "-10px" }}>
              Welcome to Know me Better 🐱‍🏍😎!!!
            </h4>
          </ListItem>
          <ListItem
            style={{
              rowGap: "11px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TextField
            id="outlined"
            label ="Email"
            onChange={(e) => setEmail(e.target.value)}
              style={{ fontFamily: "Jost", width: "50%" }}
            ></TextField>
            <TextField
            id="outlined"
            label ="Password"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
              style={{ fontFamily: "Jost", width: "50%" }}
            ></TextField>
            <Button variant="contained" color="error" style={{width : "50%"}}
            onClick={handleUserLoginSubmit}>Login</Button>
          </ListItem>
        </Stack>
      </ListItem>
      <ListItem >
      <img
              src={logo}
              style={{
                height: "200px",
                width: "200px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            ></img>
        {/* <Lottie
          style={{ marginTop: "50px" }}
          options={defaultOptions}
          height={400}
          width={400}
        /> */}
      </ListItem>
    </Stack>
    </Box>
  );
}