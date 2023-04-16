import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import action from "@/redux/reduceraction";
import { faBoxesStacked, faEllipsisVertical, faEnvelope, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import logo from "@/assets/images/logo.png";
const DashboardLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.auth);

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
                    <i data-feather="arrow-left-circle" className="feather-sm"></i>
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <i data-feather="bell" className="feather-sm"></i>
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

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark"
                    href="#"
                    id="2"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <i data-feather="mail" className="feather-sm"></i>
                    <div className="notify">
                      <span className="heartbit"></span> <span className="point"></span>
                    </div>
                  </a>
                  <div
                    className="dropdown-menu mailbox dropdown-menu-start dropdown-menu-animate-up"
                    aria-labelledby="2"
                  >
                    <ul className="list-style-none">
                      <li>
                        <div className="border-bottom rounded-top py-3 px-4">
                          <div className="mb-0 font-weight-medium fs-4">You have 4 new messages</div>
                        </div>
                      </li>
                      <li>
                        <div className="message-center message-body position-relative" style={{ height: "230px" }}>
                          <a className="message-item d-flex align-items-center border-bottom px-3 py-2">
                            <span className="user-img position-relative d-inline-block">
                              <img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/1.jpg"
                                alt="user"
                                className="rounded-circle w-100"
                              />
                              <span className="profile-status rounded-circle online"></span>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Pavan kumar</h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate fw-normal mt-1">
                                Just see the my admin!
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">9:30 AM</span>
                            </div>
                          </a>

                          <a className="message-item d-flex align-items-center border-bottom px-3 py-2">
                            <span className="user-img position-relative d-inline-block">
                              <img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/2.jpg"
                                alt="user"
                                className="rounded-circle w-100"
                              />
                              <span className="profile-status rounded-circle busy"></span>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Sonu Nigam</h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate">
                                I've sung a song! See you at
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">9:10 AM</span>
                            </div>
                          </a>

                          <a className="message-item d-flex align-items-center border-bottom px-3 py-2">
                            <span className="user-img position-relative d-inline-block">
                              <img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/3.jpg"
                                alt="user"
                                className="rounded-circle w-100"
                              />
                              <span className="profile-status rounded-circle away"></span>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Arijit Sinh</h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate">I am a singer!</span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">9:08 AM</span>
                            </div>
                          </a>

                          <a className="message-item d-flex align-items-center border-bottom px-3 py-2">
                            <span className="user-img position-relative d-inline-block">
                              <img
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/4.jpg"
                                alt="user"
                                className="rounded-circle w-100"
                              />
                              <span className="profile-status rounded-circle offline"></span>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Pavan kumar</h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate">
                                Just see the my admin!
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">9:02 AM</span>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a className="nav-link border-top text-center text-dark pt-3">
                          <b>See all e-Mails</b> <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item dropdown mega-dropdown">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <span className="">
                      <i data-feather="grid" className="feather-sm"></i>
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-animate-up">
                    <div className="mega-dropdown-menu row">
                      <div className="col-lg-3 col-xl-2 mb-4">
                        <h4 className="mb-3">CAROUSEL</h4>

                        <div
                          id="carouselExampleControls"
                          className="carousel slide carousel-dark"
                          data-bs-ride="carousel"
                        >
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img
                                className="d-block img-fluid"
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/big/img1.jpg"
                                alt="First slide"
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                className="d-block img-fluid"
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/big/img2.jpg"
                                alt="Second slide"
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                className="d-block img-fluid"
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/big/img3.jpg"
                                alt="Third slide"
                              />
                            </div>
                          </div>
                          <a
                            className="carousel-control-prev"
                            href="#carouselExampleControls"
                            role="button"
                            data-bs-slide="prev"
                          >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                          </a>
                          <a
                            className="carousel-control-next"
                            href="#carouselExampleControls"
                            role="button"
                            data-bs-slide="next"
                          >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <h4 className="mb-3">ACCORDION</h4>

                        <div className="accordion accordion-flush" id="accordionFlushExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-controls="flush-collapseOne"
                              >
                                Accordion Item #1
                              </button>
                            </h2>
                            <div
                              id="flush-collapseOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingOne"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-controls="flush-collapseTwo"
                              >
                                Accordion Item #2
                              </button>
                            </h2>
                            <div
                              id="flush-collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingTwo"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-controls="flush-collapseThree"
                              >
                                Accordion Item #3
                              </button>
                            </h2>
                            <div
                              id="flush-collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="flush-headingThree"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <h4 className="mb-3">CONTACT US</h4>

                        <form>
                          <div className="mb-3 form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputname1"
                              placeholder="Enter Name"
                            />
                            <label>Enter Name</label>
                          </div>
                          <div className="mb-3 form-floating">
                            <input type="email" className="form-control" placeholder="Enter email" />
                            <label>Enter Email address</label>
                          </div>
                          <div className="mb-3 form-floating">
                            <textarea
                              className="form-control"
                              id="exampleTextarea"
                              rows={3}
                              placeholder="Message"
                            ></textarea>
                            <label>Enter Message</label>
                          </div>
                          <button type="submit" className="btn px-4 rounded-pill btn-info">
                            Submit
                          </button>
                        </form>
                      </div>
                      <div className="col-lg-3 col-xlg-4 mb-4">
                        <h4 className="mb-3">List style</h4>

                        <ul className="list-style-none">
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i data-feather="check-circle" className="feather-sm text-success me-2"></i>
                              You can give link
                            </a>
                          </li>
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i data-feather="check-circle" className="feather-sm text-success me-2"></i>
                              Give link
                            </a>
                          </li>
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i data-feather="check-circle" className="feather-sm text-success me-2"></i>
                              Another Give link
                            </a>
                          </li>
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i data-feather="check-circle" className="feather-sm text-success me-2"></i>
                              Forth link
                            </a>
                          </li>
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i data-feather="check-circle" className="feather-sm text-success me-2"></i>
                              Another fifth link
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <ul className="navbar-nav">
                <li className="nav-item search-box d-none d-md-flex align-items-center">
                  <div className="nav-link">
                    <form className="app-search">
                      <input type="text" className="form-control rounded-pill border-0" placeholder="Search for..." />
                      <a className="srh-btn">
                        <i data-feather="search" className="feather-sm fill-white mt-n1"></i>
                      </a>
                    </form>
                  </div>
                </li>

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
                        <h4 className="mb-0 text-white">Marken Doe</h4>
                        <p className="mb-0">deo@gmail.com</p>
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

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    <i className="flag-icon flag-icon-us"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up">
                    <a className="dropdown-item" href="#">
                      <i className="flag-icon flag-icon-in"></i> India
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="flag-icon flag-icon-fr"></i> French
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="flag-icon flag-icon-cn"></i> China
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="flag-icon flag-icon-de"></i> Dutch
                    </a>
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
                <li className="sidebar-item selected">
                  <a className="sidebar-link waves-effect waves-dark active">
                    <FontAwesomeIcon style={{ padding: "0 8px 0 5px" }} icon={faHome} className="feather-icon" />
                    <span className="hide-menu">Home</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link waves-effect waves-dark">
                    <FontAwesomeIcon
                      style={{ padding: "0 8px 0 5px" }}
                      icon={faBoxesStacked}
                      className="feather-icon"
                    />
                    <span className="hide-menu">Barang</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link waves-effect waves-dark">
                    <FontAwesomeIcon style={{ padding: "0 8px 0 5px" }} icon={faEnvelope} className="feather-icon" />
                    <span className="hide-menu">Request</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link waves-effect waves-dark">
                    <FontAwesomeIcon style={{ padding: "0 8px 0 5px" }} icon={faUsers} className="feather-icon" />
                    <span className="hide-menu">Peminta</span>
                  </a>
                </li>
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
