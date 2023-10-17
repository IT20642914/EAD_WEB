import React, { useEffect, useState } from "react";
// import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import styles from "./Login.module.scss";

// import { maslogo } from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {
  ALERT_ACTION_TYPES,
  APP_ACTION_STATUS,
  APP_ROUTES,
  USER_ROLES,
} from "../../utilities/constants";
import { useNavigate } from "react-router-dom";
import { AlertDto, ApplicationStateDto, LoginFormDto } from "../../utilities/models";
// import { loginRequest } from "../../core/authConfig";
// import { alertActions, authActions } from "../../redux/actions";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import { logo } from "../../assets/images";
import { StyledTextField } from "../../assets/theme/theme";
import { validateFormData } from "../../utilities/helpers";
import LoginFormComponet from "../../components/Login/LoginFormComponet";
import { TravelersAction } from "../../redux/action/traveler";
import { LoginDto, LoginResponseDto } from "../../utilities/models/travellor.model";
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {


const INITIAL_LOGIN_FORM:LoginFormDto={
  userName:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
  passWord:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
}

  const [LoginForm, setLoginForm] = useState(INITIAL_LOGIN_FORM);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [helperText, setHelperText] = useState(true);

  const LoginResponse = useSelector((state: ApplicationStateDto) => state.traveler.LoginRequest);

  useEffect(() => {
    console.log(LoginResponse)
    if(LoginResponse.status===APP_ACTION_STATUS.SUCCESS){
     console.log("LoginResponse.data.StatusCode",LoginResponse.data.statusCode)
      if(LoginResponse.data.statusCode===200){
        console.log("200")
        toast.success(`${LoginResponse.data.message + "  " + LoginResponse.data.statusCode }`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          navigate(APP_ROUTES.TRAVELLER_MANAGEMENT)
      }else
      if(LoginResponse.data.statusCode===401){
        console.log("401")
        toast.error(`${LoginResponse.data.message + "  " + LoginResponse.data.statusCode}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }else
      if(LoginResponse.data.statusCode===404){
        console.log("404")
        toast.error(`${LoginResponse.data.message+ "  " + LoginResponse.data.statusCode}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      }
  
    
  }, [ LoginResponse.status])
 
  const handleLogin = async () => {
    const [validateData, isValid] = await validateFormData(LoginForm);
    setLoginForm(validateData);
    if (isValid) {

      const payload:LoginDto={
        nic: LoginForm.userName.value,
        password: LoginForm.passWord.value
      }
      dispatch(TravelersAction.Login(payload))
      // 

    }
 
    


 
  };


  const handleInputFocus = (property: string, section: string) => {
    if (section === "GI")
    setLoginForm({
      ...LoginForm,
      [property]: {
        ...LoginForm[property as keyof typeof LoginForm],
        error: null,
      },
    });
  
}
const onInputHandleChange = (property: string, value: any) => {
  setHelperText(true);
    
  if (property === "userName") {
    setLoginForm({
        ...LoginForm,
        userName: {
          ...LoginForm.userName,
          value: value,
        },
      });
    }
    if (property === "passWord") {
      setLoginForm({
          ...LoginForm,
          passWord: {
            ...LoginForm.passWord,
            value: value,
          },
        });
      }

}

  return (
    <section
      className={`${styles.container} content-padding container layout-row layout-wrap layout-align-center center`}
    >
      <section className={`${styles.login} layout-row`}>
        <aside className={styles.logincard}>
          <aside className={styles.loginActions}>
            <aside>
            <img className={styles.logo} src={logo} alt="logo" />
              <h1>Welcome to BOOK MY Seat - Ticket Reservation  System</h1>
            </aside>

            <LoginFormComponet
                        helperText={helperText}
                        LoginForm={LoginForm}
                        onInputHandleChange={onInputHandleChange}
                        handleInputFocus={handleInputFocus}/>
         
            <Button
              className={`${styles.primaryBtn} `}
              startIcon={
              <CircularProgress size={18} />
              }
              variant="contained"
              disabled={
            false
              }
              onClick={() => handleLogin()}
            >
              Login with BookMySeat.com
            </Button>
            <div className={styles.loginFooter}>
              <p>
                Our comprehensive ticket reservation  System is designed to facilitate
                your transportation needs, ensuring your safety and comfort
                while also minimizing environmental impact.
              </p>
            </div>
          </aside>
        </aside>
      </section>
    </section>
  );
};

export default Login;
