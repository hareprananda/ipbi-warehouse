import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import action from "@/redux/reduceraction";
import { faArrowLeft, faBell, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import layoutHelper from "./layoutHelper";

const DashboardLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { name, phoneNumber, level } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const scriptArr: string[] = [
      "/assets/js/app.min.js",
      "/assets/js/app-style-switcher.js",
      "/assets/js/perfect-scrollbar.jquery.min.js",
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
                <i className="ti-menu ti-close"></i>
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
                className="topbartoggler d-block d-md-none waves-effect waves-light"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-label="Toggle navigation"
              >
                <i className="ti-more"></i>
              </a>
            </div>

            <div className="navbar-collapse collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto">
                <li className="nav-item d-none d-md-block">
                  <a className="nav-link sidebartoggler waves-effect waves-light" data-sidebartype="mini-sidebar">
                    <FontAwesomeIcon icon={faArrowLeft} className="feather-sm navicon" />
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <FontAwesomeIcon icon={faBell} className="feather-sm navicon" />
                    <div className="notify">
                      <span className="heartbit"></span> <span className="point"></span>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-start mailbox dropdown-menu-animate-up">
                    <ul className="list-style-none">
                      <li>
                        <div className="border-bottom rounded-top py-3 px-4">
                          <div className="mb-0 font-weight-medium fs-4">Notifications</div>
                        </div>
                      </li>
                      <li>
                        <div className="message-center notifications position-relative" style={{ height: "230px" }}>
                          <a className="message-item d-flex align-items-center border-bottom px-3 py-2">
                            <span className="btn btn-light-danger text-danger btn-circle">
                              <i data-feather="link" className="feather-sm fill-white"></i>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Luanch Admin</h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">
                                Just see the my new admin!
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">9:30 AM</span>
                            </div>
                          </a>

                          <a className="message-item d-flex align-items-center border-bottom px-3 py-2">
                            <span className="btn btn-light-success text-success btn-circle">
                              <i data-feather="calendar" className="feather-sm fill-white"></i>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Event today</h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">
                                Just a reminder that you have event
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">9:10 AM</span>
                            </div>
                          </a>

                          <a className="message-item d-flex align-items-center border-bottom px-3 py-2">
                            <span className="btn btn-light-info text-info btn-circle">
                              <i data-feather="settings" className="feather-sm fill-white"></i>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Settings</h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">
                                You can customize this template as you want
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">9:08 AM</span>
                            </div>
                          </a>

                          <a className="message-item d-flex align-items-center border-bottom px-3 py-2">
                            <span className="btn btn-light-primary text-primary btn-circle">
                              <i data-feather="users" className="feather-sm fill-white"></i>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Pavan kumar</h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">
                                Just see the my admin!
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">9:02 AM</span>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a className="nav-link border-top text-center text-dark pt-3">
                          <strong>Check all notifications</strong>
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>

              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <img
                      src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/5.jpg"
                      alt="user"
                      width="30"
                      className="profile-pic rounded-circle"
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end user-dd animated flipInY">
                    <div className="d-flex no-block align-items-center p-3 bg-info text-white mb-2">
                      <div className="">
                        <img
                          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/5.jpg"
                          alt="user"
                          className="rounded-circle"
                          width="60"
                        />
                      </div>
                      <div className="ms-2">
                        <h4 className="mb-0 text-white">{name}</h4>
                        <p className="mb-0">{phoneNumber}</p>
                      </div>
                    </div>
                    <a className="dropdown-item" href="#">
                      <i data-feather="user" className="feather-sm text-info me-1 ms-1"></i>
                      My Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i data-feather="credit-card" className="feather-sm text-info me-1 ms-1"></i>
                      My Balance
                    </a>
                    <a className="dropdown-item" href="#">
                      <i data-feather="mail" className="feather-sm text-success me-1 ms-1"></i>
                      Inbox
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      <i data-feather="settings" className="feather-sm text-warning me-1 ms-1"></i>
                      Account Setting
                    </a>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-item" onClick={() => dispatch(action.auth.reset())}>
                      <i data-feather="log-out" className="feather-sm text-danger me-1 ms-1"></i>
                      Logout
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="pl-4 p-2">
                      <a href="#" className="btn d-block w-100 btn-info rounded-pill">
                        View Profile
                      </a>
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
