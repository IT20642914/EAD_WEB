import React, { useState } from "react";
// import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import styles from "./Login.module.scss";

// import { maslogo } from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {
  ALERT_ACTION_TYPES,
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
const Login = () => {


const INITIAL_LOGIN_FORM:LoginFormDto={
  userName:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
  passWord:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
}

  const [LoginForm, setLoginForm] = useState(INITIAL_LOGIN_FORM);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [helperText, setHelperText] = useState(true);


 
  const handleLogin = async () => {
    const [validateData, isValid] = await validateFormData(LoginForm);
    setLoginForm(validateData);
    if (isValid) {

      navigate(APP_ROUTES.TRAVELLER_MANAGEMENT)

    }
 
    // console.log("instance", instance);
    // console.log("loginRequest", loginRequest);
    // instance.loginRedirect(loginRequest).catch((error: string) => {
    //   console.log("error", error);
    //   const alert: AlertDto = {
    //     message: error,
    //     type: ALERT_ACTION_TYPES.TRIGGER_ALERT,
    //     options: {
    //       key: new Date().getTime() + Math.random(),
    //       persist: true,
    //       varient: "error",
    //       anchorOrigin: {
    //         horizontal: "center",
    //       },
    //     },
    //   };
    //   dispatch(alertActions.triggerAlert(alert));
    // });

 
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
