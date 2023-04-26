import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import action from "@/redux/reduceraction";
import { faArrowLeft, faBars, faBell, faCog, faEllipsisVertical, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import layoutHelper from "./layoutHelper";
import routes from "@/const/routes";
import colors from "@/const/colors";
import useStyle from "./DashboardLayout.styles";

const DashboardLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const settingButtonRef = useRef<HTMLAnchorElement>(null);
  const { name, phoneNumber, level } = useAppSelector((state) => state.auth);
  const { classes } = useStyle();

  useEffect(() => {
    const scriptArr: string[] = [
      "/assets/js/app.min.js",
      "/assets/js/app-style-switcher.js",
      "/assets/js/jquery.sparkline.min.js",
      "/assets/js/sidebarmenu.js",
    ];
    const wrapper = document.createElement("div");
    scriptArr.forEach((v) => {
      const script = document.createElement("script");

      script.src = v;
      wrapper.appendChild(script);
    });

    document.body.appendChild(wrapper);

    return () => {
      wrapper.remove();
    };
  }, []);

  return (
    <div>
      <div id="main-wrapper">
        <header className="topbar">
          <nav className="navbar top-navbar navbar-expand-md navbar-dark">
            <div className="navbar-header">
              <a className="nav-toggler waves-effect waves-light d-block d-md-none">
                <FontAwesomeIcon icon={faBars} />
              </a>

              <a
                className="navbar-brand"
                href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/index.html"
              >
                <b className="logo-icon">
                  <img src={logo} alt="homepage" className="dark-logo" style={{ maxWidth: "60px" }} />
                </b>

                <span className="logo-text">
                  <h2 className="dark-logo text-secondary" style={{ fontWeight: 600, fontSize: "22px" }}>
                    Warehouse
                  </h2>
                </span>
              </a>

              <a
                className="topbartoggler d-block d-md-none nav-link dropdown-toggle waves-effect waves-dark"
                // data-bs-toggle="collapse"
                // data-bs-target="#navbarSupportedContent"
                // aria-controls="navbarSupportedContent"
                onClick={() => {
                  // setTimeout(() => {
                  //   settingButtonRef.current?.click();
                  // }, 100);
                  // setTimeout(() => {
                  //   settingButtonRef.current?.click();
                  // }, 200);
                }}
                aria-label="Toggle navigation"
              >
                <FontAwesomeIcon icon={faCog} />
              </a>
            </div>

            <div className="navbar-collapse collapse show" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto">
                <li className="nav-item d-none d-md-block">
                  <a className="nav-link sidebartoggler waves-effect waves-light" data-sidebartype="mini-sidebar">
                    <FontAwesomeIcon icon={faArrowLeft} className="feather-sm navicon" />
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav">
                <li className={`nav-item dropdown ${classes.navDropdown}`}>
                  <a
                    className={`nav-link dropdown-toggle waves-effect waves-dark ${classes.dropdown}`}
                    ref={settingButtonRef}
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <div className={`profile-pic rounded-circle ${classes.profilePic}`}>
                      <p
                        className="m-0"
                        style={{ lineHeight: "12px", fontWeight: 500, fontSize: "12px", color: colors.cyan }}
                      >
                        {name.slice(0, 1).toUpperCase()}
                      </p>
                    </div>
                    {/* <img
                      src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/5.jpg"
                      alt="user"
                      width="30"
                      className="profile-pic rounded-circle"
                    /> */}
                  </a>
                  <div className={`dropdown-menu dropdown-menu-end user-dd animated ${classes.settingDropdown}`}>
                    <div className="d-flex no-block align-items-center p-3 bg-info text-white mb-2">
                      <div className="">
                        <div
                          className="rounded-circle"
                          style={{
                            backgroundColor: colors["gray-100"],
                            height: 60,
                            width: 60,
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          <p className="m-0" style={{ fontWeight: 500, fontSize: "23px", color: colors.cyan }}>
                            {name.slice(0, 1).toUpperCase()}
                          </p>
                        </div>
                      </div>
                      <div className="ms-2">
                        <h4 className="mb-0 text-white">{name}</h4>
                        <p className="mb-0">{phoneNumber}</p>
                      </div>
                    </div>
                    <Link className="dropdown-item" to={routes.setting}>
                      <i data-feather="settings" className="feather-sm text-warning me-1 ms-1"></i>
                      Account Setting
                    </Link>
                    <div className="dropdown-item" onClick={() => dispatch(action.auth.reset())}>
                      <i data-feather="log-out" className="feather-sm text-danger me-1 ms-1"></i>
                      Logout
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <aside className="left-sidebar">
          <div className="scroll-sidebar">
            <nav className="sidebar-nav">
              <ul id="sidebarnav">
                <li className="nav-small-cap">
                  <FontAwesomeIcon
                    style={{ fontSize: "17px" }}
                    className="mdi mdi-dots-horizontal"
                    icon={faEllipsisVertical}
                  />
                  <span className="hide-menu">Menu</span>
                </li>
                {layoutHelper.getMenu(level).map((menu, idx) => (
                  <li className={`sidebar-item ${location.pathname === menu.path ? "selected" : ""}`} key={idx}>
                    <Link
                      to={menu.path}
                      className={`sidebar-link waves-effect waves-dark ${
                        location.pathname === menu.path ? "active" : ""
                      }`}
                    >
                      <FontAwesomeIcon style={{ padding: "0 8px 0 5px" }} icon={menu.icon} className="feather-icon" />
                      <span className="hide-menu">{menu.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <div className="page-wrapper">
          <div
            style={{
              minHeight: "calc(100vh - 125px)",
              maxWidth: "1300px",
              margin: "0 auto",
            }}
          >
            <Outlet />
          </div>

          <footer className="footer">All right reserved by IPBI Internasional</footer>
        </div>
      </div>

      <div className="chat-windows"></div>
    </div>
  );
};

export default DashboardLayout;
