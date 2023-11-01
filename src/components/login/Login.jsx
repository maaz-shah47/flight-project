import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  InputAdornment,
  Box,
  Stack,
  IconButton,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Logo from '../../assets/logo.png'
import config from "../../config";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const state = location.state;
  const [snackbarStates, setSnackbarStates] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);


  const formatErrorMessages = (errors) => {
    return Object.entries(errors).map(([key, value]) => {
      const errorMessage = value.join(", ");
      return `${key}: ${errorMessage}`;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const fields = ["email", "password"];
    const formElements = e.target.elements;
    const formValues = fields
      .map((field) => ({
        [field]: formElements.namedItem(field).value,
      }))
      .reduce((current, next) => ({ ...current, ...next }));

    console.log(formValues)
    let registerRequest;
    try {
      registerRequest = await axios.post(
        `${config.SERVER_URL}/login`,
        {
          email: formValues.email,
          password: formValues.password,
        }
      );
      const { data: registerRequestData } = registerRequest;
      console.log("RegisterRequestData", registerRequestData);
      if (registerRequestData) {
        setLoader(false);
        localStorage.setItem(
          "token",
          registerRequestData.jwt
        );

        const decodedToken = jwtDecode(registerRequestData.jwt);
        localStorage.setItem("user", JSON.stringify(decodedToken));

        console.log("decodedToken", decodedToken);
        navigate("/dashboard");
      }
    } catch ({ response }) {
      registerRequest = response;

      setLoader(false);
    }
  };

  return (
    <>
      <Stack style={{ backgroundColor: "black", height: '100vh', width: '100vw', color: 'white !important' }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alginItem="center"
          sx={{
            height: "100vh",
          }}
        >
          <Grid item display="flex">
            <Card
              sx={{
                padding: "40px",
                margin: "auto",
                backgroundColor: "inherit",
                color: 'white !important',
                width: { xs: "80%", sm: "45%", md: "30%", lg: "25%" },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Avatar
                    src={Logo}
                    sx={{ width: "200px", height: "200px" }}
                  ></Avatar>
                </Box>
                <Typography
                  variant="h4"
                  align="center"
                >
                  Welcome! Log In
                </Typography>

                <Typography
                  variant="body2"
                  textAlign={"center"}
                >
                  Enter your credentials
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    margin: '20px 0'
                  }}>

                    <TextField
                      helperText={<span style={{ color: "red" }}>{ }</span>}
                      placeholder="Enter email"
                      name="email"
                      type="email"
                      size="small"
                      fullWidth
                      required
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                        }
                      }}
                    />
                    <TextField
                      placeholder="Enter password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      fullWidth
                      size="small"
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  </Box>
                  {!loader ? (
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      style={{
                        backgroundColor: '#787878', color: 'white'
                      }}
                    >
                      Login
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      fullWidth
                    >
                      <CircularProgress />
                    </Button>
                  )}
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Login;
