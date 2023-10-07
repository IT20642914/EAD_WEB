import React, { useEffect, useState } from "react";
import styles from "./AppLayoutHeader.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from '@mui/icons-material/Logout';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";

import { ApplicationStateDto, AuthorizedUserDto } from "../../utilities/models";
// import { useMsal } from "@azure/msal-react";
// import { IPublicClientApplication } from "@azure/msal-browser";
import { useDispatch, useSelector } from "react-redux";

import { APP_ROUTES, APP_ACTION_STATUS } from "../../utilities/constants";
import { useNavigate } from "react-router-dom";

const AppLayoutHeader: React.FC<{
  authorizedUser: AuthorizedUserDto
}> = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [Count, setCount] = useState<number>();
 
  const handleClickPersonIcon = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setAnchorEl(null);
  };
  const openPersonPopover = Boolean(anchorEl);
  
  const handleSignOut = (instance: any) => {
    setAnchorEl(null);
    // instance.logoutRedirect().catch((e: any) => {
    //   // eslint-disable-next-line no-console
    //   console.error('Signout Error', e)
    // })
  }
  
  const handleClickedNotificationIcon=()=>{

    const TabValue=2
  //  navigate(APP_ROUTES.PROFILE_VIEW,{ state: { TabValue: TabValue } })

}
const hanndelprofileClicke=()=>{
  setAnchorEl(null);
  const TabValue=1
  // navigate(APP_ROUTES.PROFILE_VIEW,{ state: { TabValue: TabValue } })

}


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: 11 }} className={styles.headerRow}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {props.authorizedUser.firstName} {props.authorizedUser.lastName}
          </Typography>
          <Box
            // sx={{ display: { xs: 'none', md: 'flex' } }}
            className={styles.actionIcons}
          >
            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleClickPersonIcon}
            >
              <PersonIcon />
            </IconButton>
            <Popover
              open={openPersonPopover}
              anchorEl={anchorEl}
              onClose={handleCloseFilter}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{ maxHeight: '420px' }}
            >
              <section style={{ padding: '20px' }}>
                <section style={{ paddingBottom: '10px', paddingLeft: '10px' }}>
                  <section style={{ display: "flex", alignItems: 'center' }}>
                    <Avatar />
                    <section style={{ marginLeft: '20px' }}>
                      <Typography >{props.authorizedUser.firstName} {props.authorizedUser.lastName}</Typography>
                      <Typography>{props.authorizedUser.emailId}</Typography>
                    </section>
                  </section>
                </section>
                <List>
                  <React.Fragment>
                    <ListItem button onClick={() => {
                     
                     hanndelprofileClicke()
                     
                   }}>
                      <Person2OutlinedIcon />
                      <ListItemText primary={"Profile"} style={{ color: '#ffffff', paddingLeft: '10px' }} />
                    </ListItem>
                    <Divider style={{ backgroundColor: '#ffffff' }} />
                    <ListItem button onClick={(event) => handleSignOut("instance")}>
                    <LogoutIcon />
                      <ListItemText primary={"Logout"} style={{ color: '#ffffff', paddingLeft: '10px' }} />
                    </ListItem>
                  </React.Fragment>
                </List>
              </section>
            </Popover>
          </Box>
          <Box
            // sx={{ display: { xs: 'none', md: 'flex' } }}
            className={styles.actionIcons}
          >
            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleClickedNotificationIcon}
            >
              <Badge badgeContent={Count} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default AppLayoutHeader;
