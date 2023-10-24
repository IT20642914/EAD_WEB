import React from "react";

import { APP_ROUTES, USER_ROLES } from "../../utilities/constants";
import { AppLayoutHeader } from "../index";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ApplicationStateDto, AuthorizedUserDto } from "../../utilities/models";
import { logo } from "../../assets/images";

const AppLayout: React.FC<{
  children: React.ReactNode;
  componentTitle: string;
}> = (props) => {


const first = localStorage.getItem('name')
const Last = localStorage.getItem('Lname')
const roles = localStorage.getItem('userRole')
const nic = localStorage.getItem('nic' )
const email = localStorage.getItem('email')


  const authorizedUser: AuthorizedUserDto = {
    userId: 1,
    firstName:first||'',
    lastName: Last||'',
    roleId: 2,
    roleName: roles||'',
    emailId: email||'',
    isActive: true,
    nic: nic||'',
    contactNumber: "+1234567890",
    homeContactNumber: "+9876543210",
    permissions: [
  
    ],
    plant: "Plant A",
    sbu: "SBU X",
    department: "Engineering",
    address: "123 Main Street, Cityville",
  };

  const role =localStorage.getItem('userRole')
  return (
    <React.Fragment>
      <div className={"layout-row authorizedContainer"}>
        <aside className={`layout-row sideNavigation `}>
          <aside className="navBar">
            <aside className={"layout-row"}>
              {/* <div className={`menuBox ${navClass}`}>
                <a className="menuIcon" onClick={() => toggleSideNav()}>
                  <span></span>
                </a>
              </div> */}
              <div className="contentGroup ">
                <img className="logo" src={logo} alt="BookMySeatlogo" />
              </div>
            </aside>

            <aside className={"links"}>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      isActive ? "layout-row is-active" : "layout-row"
                    }
                    to={APP_ROUTES.TRAVELLER_MANAGEMENT}
                  >
                    <div className={`navBarContent navLink layout-row`}>
                      <span>Traveler Management</span>
                    </div>
                  </NavLink>
                  </aside>
                  <aside className={"links"}>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      isActive ? "layout-row is-active" : "layout-row"
                    }
                    to={APP_ROUTES.TR_MANAGEMENT}
                  >
                    <div className={`navBarContent navLink layout-row`}>
                      <span>Ticket Management</span>
                    </div>
                  </NavLink>
                  </aside>
                  {roles === "3" ? (
  <aside className="links">
    <NavLink
      style={{ textDecoration: "none" }}
      className={({ isActive }) =>
        isActive ? "layout-row is-active" : "layout-row"
      }
      to={APP_ROUTES.TRAIN_MANAGEMENT}
    >
      <div className="navBarContent navLink layout-row">
        <span>Train Management</span>
      </div>
    </NavLink>
  </aside>
) : null}
           
          </aside>
        </aside>

        <aside className={"content"}>
          <aside className="content2">
            <AppLayoutHeader authorizedUser={authorizedUser} />
          </aside>
          <aside className={"content3"}>{props.children}</aside>
        </aside>
      </div>
    </React.Fragment>
  );
};

export default AppLayout;
