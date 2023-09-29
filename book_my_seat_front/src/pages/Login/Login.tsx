import React from "react";
// import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import styles from "./Login.module.scss";

// import { maslogo } from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {
  ALERT_ACTION_TYPES,
  APP_ROUTES,
  USER_ROLES,
} from "../../utilities/constants";
import { useNavigate } from "react-router-dom";
import { AlertDto, ApplicationStateDto } from "../../utilities/models";
// import { loginRequest } from "../../core/authConfig";
// import { alertActions, authActions } from "../../redux/actions";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
const Login = () => {
//   const { instance, accounts } = useMsal();
//   //const isAuthenticated = true;
//    const isAuthenticated = useIsAuthenticated()
  const navigate = useNavigate();
  const dispatch = useDispatch();

//   const userAuthorizing = useSelector(
//     (state: ApplicationStateDto) => state.authUser.userAuthorizing
//   );
//   const authorizedUser = useSelector(
//     (state: ApplicationStateDto) => state.authUser.authorizedUser
//   );

  const _generalUser = 'navindu@gmail.com' 
  const _lineManager = 'dasun.perera@acentura.com'
  const _transportManager = 'ishara.manage@acentura.com'
  const _tdu = 'tdu@gmail.com' // TRANSPORT DIVISION USER
  const _sbu = 'sbu@gmail.com' //SBU MANAGER
  const _osa = 'osa@gmail.com' //SUPER ADMIN

 // React.useEffect(() => {
//
//     console.log("isAuthenticated",isAuthenticated);
//     if (isAuthenticated) {
//       if (accounts[0]) {
//         dispatch(authActions.authorizedUser(accounts[0].username));
//         instance.setActiveAccount(accounts[0]);
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isAuthenticated]);

//   React.useEffect(() => {
//     if (!userAuthorizing.isLoading && userAuthorizing.isAuthorized) {
//       authorizedUser.data.roleId === USER_ROLES.REGULAR_USER
//         ? navigate(APP_ROUTES.GU_DASHBOARD)
//         : authorizedUser.data.roleId === USER_ROLES.LINE_MANAGER
//         ? navigate(APP_ROUTES.LM_DASHBOARD)
//         : navigate(APP_ROUTES.TM_DASHBOARD);
//     } else {
//       if (!userAuthorizing.isLoading && !!userAuthorizing.error) {
//         console.log("userAuthorizing.error", userAuthorizing.error);
//         const alert: AlertDto = {
//           message: userAuthorizing.error,
//           type: ALERT_ACTION_TYPES.TRIGGER_ALERT,
//           options: {
//             key: new Date().getTime() + Math.random(),
//             persist: true,
//             varient: "error",
//             anchorOrigin: {
//               horizontal: "center",
//             },
//           },
//         };
//         dispatch(alertActions.triggerAlert(alert));
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [userAuthorizing]);

  const handleLogin = () => {
    navigate(APP_ROUTES.TRAVELLER_MANAGEMENT)
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


  return (
    <section
      className={`${styles.container} content-padding container layout-row layout-wrap layout-align-center center`}
    >
      <section className={`${styles.login} layout-row`}>
        <aside className={styles.logincard}>
          <aside className={styles.loginActions}>
            <aside>
              
              <h1>Welcome to BOOK MY Seat - Ticket Reservation  System</h1>
            </aside>
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
              Login with masholdings.com
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
