import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
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
                  <img
                    src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/logo-icon.png"
                    alt="homepage"
                    className="dark-logo"
                  />

                  <img
                    src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/logo-light-icon.png"
                    alt="homepage"
                    className="light-logo"
                  />
                </b>

                <span className="logo-text">
                  <img
                    src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/logo-text.png"
                    alt="homepage"
                    className="dark-logo"
                  />

                  <img
                    src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/logo-light-text.png"
                    className="light-logo"
                    alt="homepage"
                  />
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

            <div
              className="navbar-collapse collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item d-none d-md-block">
                  <a
                    className="nav-link sidebartoggler waves-effect waves-light"
                    data-sidebartype="mini-sidebar"
                  >
                    <i
                      data-feather="arrow-left-circle"
                      className="feather-sm"
                    ></i>
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
                      <span className="heartbit"></span>{" "}
                      <span className="point"></span>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-start mailbox dropdown-menu-animate-up">
                    <ul className="list-style-none">
                      <li>
                        <div className="border-bottom rounded-top py-3 px-4">
                          <div className="mb-0 font-weight-medium fs-4">
                            Notifications
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="message-center notifications position-relative"
                          style={{ height: "230px" }}
                        >
                          <a className="message-item d-flex align-items-center border-bottom px-3 py-2">
                            <span className="btn btn-light-danger text-danger btn-circle">
                              <i
                                data-feather="link"
                                className="feather-sm fill-white"
                              ></i>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Luanch Admin
                              </h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">
                                Just see the my new admin!
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">
                                9:30 AM
                              </span>
                            </div>
                          </a>

                          <a className="message-item d-flex align-items-center border-bottom px-3 py-2">
                            <span className="btn btn-light-success text-success btn-circle">
                              <i
                                data-feather="calendar"
                                className="feather-sm fill-white"
                              ></i>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Event today
                              </h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">
                                Just a reminder that you have event
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">
                                9:10 AM
                              </span>
                            </div>
                          </a>

                          <a className="message-item d-flex align-items-center border-bottom px-3 py-2">
                            <span className="btn btn-light-info text-info btn-circle">
                              <i
                                data-feather="settings"
                                className="feather-sm fill-white"
                              ></i>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Settings
                              </h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">
                                You can customize this template as you want
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">
                                9:08 AM
                              </span>
                            </div>
                          </a>

                          <a className="message-item d-flex align-items-center border-bottom px-3 py-2">
                            <span className="btn btn-light-primary text-primary btn-circle">
                              <i
                                data-feather="users"
                                className="feather-sm fill-white"
                              ></i>
                            </span>
                            <div className="w-75 d-inline-block v-middle ps-3">
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Pavan kumar
                              </h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">
                                Just see the my admin!
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">
                                9:02 AM
                              </span>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a
                          className="nav-link border-top text-center text-dark pt-3"
                          href="javascript:void(0);"
                        >
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
                      <span className="heartbit"></span>{" "}
                      <span className="point"></span>
                    </div>
                  </a>
                  <div
                    className="dropdown-menu mailbox dropdown-menu-start dropdown-menu-animate-up"
                    aria-labelledby="2"
                  >
                    <ul className="list-style-none">
                      <li>
                        <div className="border-bottom rounded-top py-3 px-4">
                          <div className="mb-0 font-weight-medium fs-4">
                            You have 4 new messages
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="message-center message-body position-relative"
                          style={{ height: "230px" }}
                        >
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
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Pavan kumar
                              </h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate fw-normal mt-1">
                                Just see the my admin!
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">
                                9:30 AM
                              </span>
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
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Sonu Nigam
                              </h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate">
                                I've sung a song! See you at
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">
                                9:10 AM
                              </span>
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
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Arijit Sinh
                              </h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate">
                                I am a singer!
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">
                                9:08 AM
                              </span>
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
                              <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                                Pavan kumar
                              </h5>
                              <span className="fs-2 text-nowrap d-block time text-truncate">
                                Just see the my admin!
                              </span>
                              <span className="fs-2 text-nowrap d-block subtext text-muted">
                                9:02 AM
                              </span>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a
                          className="nav-link border-top text-center text-dark pt-3"
                          href="javascript:void(0);"
                        >
                          <b>See all e-Mails</b>{" "}
                          <i className="fa fa-angle-right"></i>
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
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </a>
                          <a
                            className="carousel-control-next"
                            href="#carouselExampleControls"
                            role="button"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-4">
                        <h4 className="mb-3">ACCORDION</h4>

                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-headingOne"
                            >
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
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-headingTwo"
                            >
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
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-headingThree"
                            >
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
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid.
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
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter email"
                            />
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
                          <button
                            type="submit"
                            className="btn px-4 rounded-pill btn-info"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                      <div className="col-lg-3 col-xlg-4 mb-4">
                        <h4 className="mb-3">List style</h4>

                        <ul className="list-style-none">
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i
                                data-feather="check-circle"
                                className="feather-sm text-success me-2"
                              ></i>
                              You can give link
                            </a>
                          </li>
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i
                                data-feather="check-circle"
                                className="feather-sm text-success me-2"
                              ></i>
                              Give link
                            </a>
                          </li>
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i
                                data-feather="check-circle"
                                className="feather-sm text-success me-2"
                              ></i>
                              Another Give link
                            </a>
                          </li>
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i
                                data-feather="check-circle"
                                className="feather-sm text-success me-2"
                              ></i>
                              Forth link
                            </a>
                          </li>
                          <li>
                            <a href="#" className="font-weight-medium">
                              <i
                                data-feather="check-circle"
                                className="feather-sm text-success me-2"
                              ></i>
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
                      <input
                        type="text"
                        className="form-control rounded-pill border-0"
                        placeholder="Search for..."
                      />
                      <a className="srh-btn">
                        <i
                          data-feather="search"
                          className="feather-sm fill-white mt-n1"
                        ></i>
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
                      <i
                        data-feather="user"
                        className="feather-sm text-info me-1 ms-1"
                      ></i>
                      My Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i
                        data-feather="credit-card"
                        className="feather-sm text-info me-1 ms-1"
                      ></i>
                      My Balance
                    </a>
                    <a className="dropdown-item" href="#">
                      <i
                        data-feather="mail"
                        className="feather-sm text-success me-1 ms-1"
                      ></i>
                      Inbox
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      <i
                        data-feather="settings"
                        className="feather-sm text-warning me-1 ms-1"
                      ></i>
                      Account Setting
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      <i
                        data-feather="log-out"
                        className="feather-sm text-danger me-1 ms-1"
                      ></i>
                      Logout
                    </a>
                    <div className="dropdown-divider"></div>
                    <div className="pl-4 p-2">
                      <a
                        href="#"
                        className="btn d-block w-100 btn-info rounded-pill"
                      >
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
                <li>
                  <div className="user-profile text-center position-relative pt-4 mt-1">
                    <div className="profile-img m-auto">
                      <img
                        src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/5.jpg"
                        alt="user"
                        className="w-100 rounded-circle"
                      />
                    </div>

                    <div className="profile-text py-1">
                      <a
                        href="#"
                        className="dropdown-toggle link u-dropdown"
                        data-bs-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        Markarn Doe <span className="caret"></span>
                      </a>
                      <div className="dropdown-menu animated flipInY">
                        <a className="dropdown-item" href="#">
                          <i
                            data-feather="user"
                            className="feather-sm text-info me-1 ms-1"
                          ></i>
                          My Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          <i
                            data-feather="credit-card"
                            className="feather-sm text-info me-1 ms-1"
                          ></i>
                          My Balance
                        </a>
                        <a className="dropdown-item" href="#">
                          <i
                            data-feather="mail"
                            className="feather-sm text-success me-1 ms-1"
                          ></i>
                          Inbox
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          <i
                            data-feather="settings"
                            className="feather-sm text-warning me-1 ms-1"
                          ></i>
                          Account Setting
                        </a>
                        <div className="dropdown-divider"></div>
                        <a
                          className="dropdown-item"
                          href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/authentication-login3.html"
                        >
                          <i
                            data-feather="log-out"
                            className="feather-sm text-danger me-1 ms-1"
                          ></i>
                          Logout
                        </a>
                        <div className="dropdown-divider"></div>
                        <div className="ps-4 p-2">
                          <button
                            type="button"
                            className="btn d-block w-100 btn-info rounded-pill"
                          >
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-small-cap">
                  <i className="mdi mdi-dots-horizontal"></i>
                  <span className="hide-menu">Personal</span>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="home" className="feather-icon"></i>
                    <span className="hide-menu">
                      Dashboard
                      <span className="badge badge-pill bg-success">5</span>
                    </span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/index.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-adjust"></i>
                        <span className="hide-menu"> Modern Dashboard </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/index2.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-adjust"></i>
                        <span className="hide-menu"> Awesome Dashboard </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/index3.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-adjust"></i>
                        <span className="hide-menu"> Classy Dashboard </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/index4.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-adjust"></i>
                        <span className="hide-menu">
                          {" "}
                          Analytical Dashboard{" "}
                        </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/index5.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-adjust"></i>
                        <span className="hide-menu"> Minimal Dashboard </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="sidebar" className="feather-icon"></i>
                    <span className="hide-menu">Sidebar Type </span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/sidebar-type-minisidebar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-view-quilt"></i>
                        <span className="hide-menu"> Minisidebar </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/sidebar-type-iconsidebar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-view-parallel"></i>
                        <span className="hide-menu"> Icon Sidebar </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/sidebar-type-overlaysidebar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-view-day"></i>
                        <span className="hide-menu"> Overlay Sidebar </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/sidebar-type-fullsidebar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-view-array"></i>
                        <span className="hide-menu"> Full Sidebar </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/sidebar-type-horizontalsidebar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-view-module"></i>
                        <span className="hide-menu"> Horizontal Sidebar </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="clipboard" className="feather-icon"></i>
                    <span className="hide-menu">Page Layouts </span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/layout-inner-fixed-left-sidebar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-format-align-left"></i>
                        <span className="hide-menu">
                          Inner Fixed Left Sidebar
                        </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/layout-inner-fixed-right-sidebar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-format-align-right"></i>
                        <span className="hide-menu">
                          Inner Fixed Right Sidebar
                        </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/layout-inner-left-sidebar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-format-float-left"></i>
                        <span className="hide-menu"> Inner Left Sidebar </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/layout-inner-right-sidebar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-format-float-right"></i>
                        <span className="hide-menu"> Inner Right Sidebar </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/page-layout-fixed-header.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-view-quilt"></i>
                        <span className="hide-menu"> Fixed Header </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/page-layout-fixed-sidebar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-view-parallel"></i>
                        <span className="hide-menu"> Fixed Sidebar </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/page-layout-fixed-header-sidebar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-view-column"></i>
                        <span className="hide-menu">
                          Fixed Header &amp; Sidebar
                        </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/page-layout-boxed-layout.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-view-carousel"></i>
                        <span className="hide-menu"> Box Layout </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-devider"></li>
                <li className="nav-small-cap">
                  <i className="mdi mdi-dots-horizontal"></i>
                  <span className="hide-menu">Apps</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/app-chats.html"
                  >
                    <i
                      data-feather="message-circle"
                      className="feather-icon"
                    ></i>
                    <span className="hide-menu">Chat Apps</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/app-calendar.html"
                  >
                    <i data-feather="calendar" className="feather-icon"></i>
                    <span className="hide-menu">Calender</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/app-taskboard.html"
                  >
                    <i data-feather="layout" className="feather-icon"></i>
                    <span className="hide-menu">Taskboard</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/app-notes.html"
                  >
                    <i data-feather="book" className="feather-icon"></i>
                    <span className="hide-menu">Notes</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/app-todo.html"
                  >
                    <i data-feather="check-circle" className="feather-icon"></i>
                    <span className="hide-menu">Todo</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/app-invoice.html"
                  >
                    <i data-feather="file-text" className="feather-icon"></i>
                    <span className="hide-menu">Invoice</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/app-contacts.html"
                  >
                    <i data-feather="phone" className="feather-icon"></i>
                    <span className="hide-menu">Contact</span>
                  </a>
                </li>

                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="mail" className="feather-icon"></i>
                    <span className="hide-menu">Inbox </span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/inbox-email.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-email"></i>
                        <span className="hide-menu"> Email </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/inbox-email-detail.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-email-alert"></i>
                        <span className="hide-menu"> Email Detail </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/inbox-email-compose.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-email-secure"></i>
                        <span className="hide-menu"> Email Compose </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="bookmark" className="feather-icon"></i>
                    <span className="hide-menu">Ticket </span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ticket-list.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-book-multiple"></i>
                        <span className="hide-menu"> Ticket List </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ticket-detail.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-book-plus"></i>
                        <span className="hide-menu"> Ticket Detail </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-devider"></li>
                <li className="nav-small-cap">
                  <i className="mdi mdi-dots-horizontal"></i>
                  <span className="hide-menu">UI</span>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="cpu" className="feather-icon"></i>
                    <span className="hide-menu">Ui Elements </span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-accordian.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-box-shadow"></i>
                        <span className="hide-menu"> Accordian</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-badge.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-application"></i>
                        <span className="hide-menu"> Badge</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-buttons.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-toggle-switch"></i>
                        <span className="hide-menu"> Buttons</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-modals.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-tablet"></i>
                        <span className="hide-menu"> Modals</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-tab.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-sort-variant"></i>
                        <span className="hide-menu"> Tab</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-tooltip-popover.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-image-filter-vintage"></i>
                        <span className="hide-menu">
                          {" "}
                          Tooltip &amp; Popover
                        </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-notification.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-message-bulleted"></i>
                        <span className="hide-menu"> Notification</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-progressbar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-poll"></i>
                        <span className="hide-menu"> Progressbar</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-typography.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-format-line-spacing"></i>
                        <span className="hide-menu"> Typography</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-bootstrap.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-bootstrap"></i>
                        <span className="hide-menu"> Bootstrap Ui</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-breadcrumb.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-equal"></i>
                        <span className="hide-menu"> Breadcrumb</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-lists.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-file-video"></i>
                        <span className="hide-menu"> Lists</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-grid.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-view-module"></i>
                        <span className="hide-menu"> Grid</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-carousel.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-view-carousel"></i>
                        <span className="hide-menu"> Carousel</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-scrollspy.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-application"></i>
                        <span className="hide-menu"> Scrollspy</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-offcanvas.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-content-copy"></i>
                        <span className="hide-menu"> offcanvas</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-toasts.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-credit-card-scan"></i>
                        <span className="hide-menu"> Toasts</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-spinner.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-apple-safari"></i>
                        <span className="hide-menu"> Spinner</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="copy" className="feather-icon"></i>
                    <span className="hide-menu">Cards</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-cards.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-layers"></i>
                        <span className="hide-menu"> Basic Cards</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-card-customs.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-credit-card-scan"></i>
                        <span className="hide-menu">Custom Cards</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-card-weather.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-weather-fog"></i>
                        <span className="hide-menu">Weather Cards</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-card-draggable.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-bandcamp"></i>
                        <span className="hide-menu">Draggable Cards</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="hard-drive" className="feather-icon"></i>
                    <span className="hide-menu">Components</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/component-sweetalert.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-layers"></i>
                        <span className="hide-menu"> Sweet Alert</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/component-nestable.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-credit-card-scan"></i>
                        <span className="hide-menu">Nestable</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/component-noui-slider.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-weather-fog"></i>
                        <span className="hide-menu">Noui slider</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/component-rating.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-bandcamp"></i>
                        <span className="hide-menu">Rating</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/component-toastr.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-poll"></i>
                        <span className="hide-menu">Toastr</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="grid" className="feather-icon"></i>
                    <span className="hide-menu">Widgets </span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/widgets-feeds.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-account-box"></i>
                        <span className="hide-menu"> Feed Widgets </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/widgets-apps.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-comment-processing-outline"></i>
                        <span className="hide-menu"> Apps Widgets </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/widgets-data.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-calendar"></i>
                        <span className="hide-menu"> Data Widgets </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/widgets-charts.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-bulletin-board"></i>
                        <span className="hide-menu"> Charts Widgets</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-devider"></li>
                <li className="nav-small-cap">
                  <i className="mdi mdi-dots-horizontal"></i>
                  <span className="hide-menu">Forms</span>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="layers" className="feather-icon"></i>
                    <span className="hide-menu">Form Elements</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-inputs.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-priority-low"></i>
                        <span className="hide-menu"> Forms Input</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-input-groups.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-rounded-corner"></i>
                        <span className="hide-menu"> Input Groups</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-input-grid.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-select-all"></i>
                        <span className="hide-menu"> Input Grid</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-custom-checkbox-radio.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-shape-plus"></i>
                        <span className="hide-menu">
                          Custom Checkboxes &amp; Radios
                        </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-checkbox-radio.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-shape-plus"></i>
                        <span className="hide-menu">
                          Checkboxes &amp; Radios
                        </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-bootstrap-touchspin.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-switch"></i>
                        <span className="hide-menu"> Bootstrap Touchspin</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-bootstrap-switch.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-toggle-switch-off"></i>
                        <span className="hide-menu"> Bootstrap Switch</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-select2.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-relative-scale"></i>
                        <span className="hide-menu"> Select2</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-dual-listbox.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-tab-unselected"></i>
                        <span className="hide-menu"> Dual Listbox</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="file-text" className="feather-icon"></i>
                    <span className="hide-menu">Form Layouts</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-basic.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-vector-difference-ba"></i>
                        <span className="hide-menu"> Basic Forms</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-material.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-vector-difference-ba"></i>
                        <span className="hide-menu"> Material Forms</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-horizontal.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-file-document-box"></i>
                        <span className="hide-menu"> Form Horizontal</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-actions.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-code-greater-than"></i>
                        <span className="hide-menu"> Form Actions</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-row-separator.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-code-equal"></i>
                        <span className="hide-menu"> Row Separator</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-bordered.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-flip-to-front"></i>
                        <span className="hide-menu"> Form Bordered</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-striped-row.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-content-duplicate"></i>
                        <span className="hide-menu"> Striped Rows</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-detail.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-cards-outline"></i>
                        <span className="hide-menu"> Form Detail</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="package" className="feather-icon"></i>
                    <span className="hide-menu">Form Addons</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-paginator.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-export"></i>
                        <span className="hide-menu"> Paginator</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-img-cropper.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-crop"></i>
                        <span className="hide-menu"> Image Cropper</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-dropzone.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-crosshairs-gps"></i>
                        <span className="hide-menu"> Dropzone</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-mask.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-box-shadow"></i>
                        <span className="hide-menu"> Form Mask</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-typeahead.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-cards-variant"></i>
                        <span className="hide-menu"> Form Typehead</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-custom-switch.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-toggle-switch-off"></i>
                        <span className="hide-menu">Custom Switch</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="check-square" className="feather-icon"></i>
                    <span className="hide-menu">Form Validation</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-bootstrap-validation.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-credit-card-scan"></i>
                        <span className="hide-menu"> Bootstrap Validation</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-custom-validation.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-credit-card-plus"></i>
                        <span className="hide-menu"> Custom Validation</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="droplet" className="feather-icon"></i>
                    <span className="hide-menu">Form Pickers</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-picker-colorpicker.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-calendar-plus"></i>
                        <span className="hide-menu"> Form Colorpicker</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-picker-datetimepicker.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-calendar-clock"></i>
                        <span className="hide-menu"> Form Datetimepicker</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-picker-bootstrap-rangepicker.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-calendar-range"></i>
                        <span className="hide-menu">
                          Form Bootstrap Rangepicker
                        </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-picker-bootstrap-datepicker.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-calendar-check"></i>
                        <span className="hide-menu">
                          Form Bootstrap Datepicker
                        </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-picker-material-datepicker.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-calendar-text"></i>
                        <span className="hide-menu">
                          Form Material Datepicker
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="edit" className="feather-icon"></i>
                    <span className="hide-menu">Form Editor</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-editor-ckeditor.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-drawing"></i>
                        <span className="hide-menu">Ck Editor</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-editor-quill.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-drupal"></i>
                        <span className="hide-menu">Quill Editor</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-editor-summernote.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-brightness-6"></i>
                        <span className="hide-menu">Summernote Editor</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-editor-tinymce.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-bowling"></i>
                        <span className="hide-menu">Tinymce Edtor</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-wizard.html"
                  >
                    <i data-feather="credit-card" className="feather-icon"></i>
                    <span className="hide-menu">Form Wizard</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/form-repeater.html"
                  >
                    <i data-feather="crop" className="feather-icon"></i>
                    <span className="hide-menu">Form Repeater</span>
                  </a>
                </li>
                <li className="nav-devider"></li>
                <li className="nav-small-cap">
                  <i className="mdi mdi-dots-horizontal"></i>
                  <span className="hide-menu">Tables</span>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="codepen" className="feather-icon"></i>
                    <span className="hide-menu">Bootstrap Tables</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/table-basic.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-border-all"></i>
                        <span className="hide-menu">Basic Table </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/table-dark-basic.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-border-start"></i>
                        <span className="hide-menu">Dark Basic Table </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/table-sizing.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-border-outside"></i>
                        <span className="hide-menu">Sizing Table </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/table-layout-coloured.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-border-bottom"></i>
                        <span className="hide-menu">Coloured Table Layout</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="hard-drive" className="feather-icon"></i>
                    <span className="hide-menu">Datatables</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/table-datatable-basic.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-border-vertical"></i>
                        <span className="hide-menu"> Basic Initialisation</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/table-datatable-api.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-blur-linear"></i>
                        <span className="hide-menu"> API</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/table-datatable-advanced.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-border-style"></i>
                        <span className="hide-menu">
                          Advanced Initialisation
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/table-jsgrid.html"
                  >
                    <i data-feather="disc" className="feather-icon"></i>
                    <span className="hide-menu">Table Jsgrid</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/table-responsive.html"
                  >
                    <i data-feather="smartphone" className="feather-icon"></i>
                    <span className="hide-menu">Table Responsive</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/table-footable.html"
                  >
                    <i data-feather="command" className="feather-icon"></i>
                    <span className="hide-menu">Table Footable</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/table-editable.html"
                  >
                    <i data-feather="edit-2" className="feather-icon"></i>
                    <span className="hide-menu">Table Editable</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/table-bootstrap.html"
                  >
                    <i data-feather="target" className="feather-icon"></i>
                    <span className="hide-menu">Table Bootstrap</span>
                  </a>
                </li>
                <li className="nav-devider"></li>
                <li className="nav-small-cap">
                  <i className="mdi mdi-dots-horizontal"></i>
                  <span className="hide-menu">Charts</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-morris.html"
                  >
                    <i data-feather="loader" className="feather-icon"></i>
                    <span className="hide-menu"> Morris Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-chart-js.html"
                  >
                    <i data-feather="pie-chart" className="feather-icon"></i>
                    <span className="hide-menu">Chartjs</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-sparkline.html"
                  >
                    <i data-feather="radio" className="feather-icon"></i>
                    <span className="hide-menu">Sparkline Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-chartist.html"
                  >
                    <i data-feather="trello" className="feather-icon"></i>
                    <span className="hide-menu">Chartist Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i className="mdi mdi-blur-radial"></i>
                    <span className="hide-menu">Apex Charts</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-apex-line.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-chart-line"></i>
                        <span className="hide-menu">Line Chart</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-apex-area.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-chart-areaspline"></i>
                        <span className="hide-menu">Area Chart</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-apex-bar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-chart-gantt"></i>
                        <span className="hide-menu">Bar Chart</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-apex-pie.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-chart-pie"></i>
                        <span className="hide-menu">Pie Chart</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-apex-radial.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-chart-arc"></i>
                        <span className="hide-menu">Radial Chart</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-apex-radar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-hexagon-outline"></i>
                        <span className="hide-menu">Radar Chart</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="slack" className="feather-icon"></i>
                    <span className="hide-menu">C3 Charts</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-c3-axis.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-arrange-bring-to-front"></i>
                        <span className="hide-menu">Axis Chart</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-c3-bar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-arrange-send-to-back"></i>
                        <span className="hide-menu">Bar Chart</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-c3-data.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-backup-restore"></i>
                        <span className="hide-menu">Data Chart</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-c3-line.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-backburger"></i>
                        <span className="hide-menu">Line Chart</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="bar-chart-2" className="feather-icon"></i>
                    <span className="hide-menu">Echarts</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-echart-basic.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-chart-line"></i>
                        <span className="hide-menu">Basic Charts</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-echart-bar.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-chart-scatterplot-hexbin"></i>
                        <span className="hide-menu">Bar Chart</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/chart-echart-pie-doughnut.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-chart-pie"></i>
                        <span className="hide-menu">
                          Pie &amp; Doughnut Chart
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-devider"></li>
                <li className="nav-small-cap">
                  <i className="mdi mdi-dots-horizontal"></i>
                  <span className="hide-menu">Sample Pages</span>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i
                      data-feather="shopping-cart"
                      className="feather-icon"
                    ></i>
                    <span className="hide-menu">Ecommerce Pages</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/eco-products.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-cards-variant"></i>
                        <span className="hide-menu">Products</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/eco-products-cart.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-cart"></i>
                        <span className="hide-menu">Products Cart</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/eco-products-edit.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-cart-plus"></i>
                        <span className="hide-menu">Products Edit</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/eco-products-detail.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-camera-burst"></i>
                        <span className="hide-menu">Product Details</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/eco-products-orders.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-chart-pie"></i>
                        <span className="hide-menu">Product Orders</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/eco-products-checkout.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-clipboard-check"></i>
                        <span className="hide-menu">Products Checkout</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="book-open" className="feather-icon"></i>
                    <span className="hide-menu">Sample Pages </span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/starter-kit.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-crop-free"></i>
                        <span className="hide-menu">Starter Kit</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/pages-animation.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-debug-step-over"></i>
                        <span className="hide-menu">Animation</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/pages-search-result.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-search-web"></i>
                        <span className="hide-menu">Search Result</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/pages-gallery.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-camera-iris"></i>
                        <span className="hide-menu">Gallery</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/pages-treeview.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-file-tree"></i>
                        <span className="hide-menu">Treeview</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/pages-block-ui.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-codepen"></i>
                        <span className="hide-menu">Block UI</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/pages-session-timeout.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-timer-off"></i>
                        <span className="hide-menu">Session Timeout</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/pages-session-idle-timeout.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-timer-sand-empty"></i>
                        <span className="hide-menu">Session Idle Timeout</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/pages-utility-classes.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-tune"></i>
                        <span className="hide-menu">Helper Classes</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/pages-maintenance.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-camera-iris"></i>
                        <span className="hide-menu">Maintenance Page</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="lock" className="feather-icon"></i>
                    <span className="hide-menu">Authentication</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/authentication-login1.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-account-key"></i>
                        <span className="hide-menu"> Login </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/authentication-login2.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-account-key"></i>
                        <span className="hide-menu"> Login 2 </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/authentication-login3.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-account-key"></i>
                        <span className="hide-menu"> Login 3 </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/authentication-register1.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-account-plus"></i>
                        <span className="hide-menu"> Register</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/authentication-register2.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-account-plus"></i>
                        <span className="hide-menu"> Register 2</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/authentication-lockscreen.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-account-off"></i>
                        <span className="hide-menu"> Lockscreen</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/authentication-recover-password.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-account-convert"></i>
                        <span className="hide-menu"> Recover password</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="users" className="feather-icon"></i>
                    <span className="hide-menu">Users</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-user-card.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-account-box"></i>
                        <span className="hide-menu"> User Card </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/pages-profile.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-account-network"></i>
                        <span className="hide-menu"> User Profile</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/ui-user-contacts.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-account-star-variant"></i>
                        <span className="hide-menu"> User Contact</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="paperclip" className="feather-icon"></i>
                    <span className="hide-menu">Invoice</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/pages-invoice.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-vector-triangle"></i>
                        <span className="hide-menu"> Invoice Layout </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/pages-invoice-list.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-vector-rectangle"></i>
                        <span className="hide-menu"> Invoice List</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="map" className="feather-icon"></i>
                    <span className="hide-menu">Maps</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/map-google.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-google-maps"></i>
                        <span className="hide-menu"> Google Map </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/map-vector.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-map-marker-radius"></i>
                        <span className="hide-menu"> Vector Map</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="feather" className="feather-icon"></i>
                    <span className="hide-menu">Icons</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/icon-feather.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-feather"></i>
                        <span className="hide-menu"> Feather Icons </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/icon-material.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-emoticon"></i>
                        <span className="hide-menu"> Material Icons </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/icon-fontawesome.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-emoticon-cool"></i>
                        <span className="hide-menu"> Fontawesome Icons</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/icon-themify.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-chart-bubble"></i>
                        <span className="hide-menu"> Themify Icons</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/icon-weather.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-weather-cloudy"></i>
                        <span className="hide-menu"> Weather Icons</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/icon-simple-lineicon.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi mdi-image-broken-variant"></i>
                        <span className="hide-menu"> Simple Line icons</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/icon-flag.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-flag-triangle"></i>
                        <span className="hide-menu"> Flag Icons</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="activity" className="feather-icon"></i>
                    <span className="hide-menu">Timeline</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/timeline-center.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-clock-fast"></i>
                        <span className="hide-menu"> Center Timeline </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/timeline-horizontal.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-clock-end"></i>
                        <span className="hide-menu"> Horizontal Timeline</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/timeline-left.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-clock-in"></i>
                        <span className="hide-menu"> Left Timeline</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/timeline-right.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-clock-start"></i>
                        <span className="hide-menu"> Right Timeline</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="mail" className="feather-icon"></i>
                    <span className="hide-menu">Email Template</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/email-templete-alert.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-message-alert"></i>
                        <span className="hide-menu"> Alert </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/email-templete-basic.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-message-bulleted"></i>
                        <span className="hide-menu"> Basic</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/email-templete-billing.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-message-draw"></i>
                        <span className="hide-menu"> Billing</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/email-templete-password-reset.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-message-bulleted-off"></i>
                        <span className="hide-menu"> Password-Reset</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i data-feather="user-x" className="feather-icon"></i>
                    <span className="hide-menu">Error Pages</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/error-400.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-alert-outline"></i>
                        <span className="hide-menu"> Error 400 </span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/error-403.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-alert-outline"></i>
                        <span className="hide-menu"> Error 403</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/error-404.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-alert-outline"></i>
                        <span className="hide-menu"> Error 404</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/error-500.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-alert-outline"></i>
                        <span className="hide-menu"> Error 500</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/error-503.html"
                        className="sidebar-link"
                      >
                        <i className="mdi mdi-alert-outline"></i>
                        <span className="hide-menu"> Error 503</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link has-arrow waves-effect waves-dark">
                    <i
                      data-feather="git-pull-request"
                      className="feather-icon"
                    ></i>
                    <span className="hide-menu">Multi level dd</span>
                  </a>
                  <ul className="collapse first-level">
                    <li className="sidebar-item">
                      <a className="sidebar-link">
                        <i className="mdi mdi-octagram"></i>
                        <span className="hide-menu"> item 1.1</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a className="sidebar-link">
                        <i className="mdi mdi-octagram"></i>
                        <span className="hide-menu"> item 1.2</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a className="has-arrow sidebar-link">
                        <i className="mdi mdi-playlist-plus"></i>
                        <span className="hide-menu">Menu 1.3</span>
                      </a>
                      <ul className="collapse second-level">
                        <li className="sidebar-item">
                          <a className="sidebar-link">
                            <i className="mdi mdi-octagram"></i>
                            <span className="hide-menu"> item 1.3.1</span>
                          </a>
                        </li>
                        <li className="sidebar-item">
                          <a className="sidebar-link">
                            <i className="mdi mdi-octagram"></i>
                            <span className="hide-menu"> item 1.3.2</span>
                          </a>
                        </li>
                        <li className="sidebar-item">
                          <a className="sidebar-link">
                            <i className="mdi mdi-octagram"></i>
                            <span className="hide-menu"> item 1.3.3</span>
                          </a>
                        </li>
                        <li className="sidebar-item">
                          <a className="sidebar-link">
                            <i className="mdi mdi-octagram"></i>
                            <span className="hide-menu"> item 1.3.4</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sidebar-item">
                      <a className="sidebar-link">
                        <i className="mdi mdi-playlist-check"></i>
                        <span className="hide-menu"> item 1.4</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-devider"></li>
                <li className="nav-small-cap">
                  <i className="mdi mdi-dots-horizontal"></i>
                  <span className="hide-menu">Extra</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/Documentation/document.html"
                  >
                    <i data-feather="edit-3" className="feather-icon"></i>
                    <span className="hide-menu">Documentation</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link waves-effect waves-dark sidebar-link"
                    href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/html/main/authentication-login1.html"
                  >
                    <i data-feather="log-out" className="feather-icon"></i>
                    <span className="hide-menu">Log Out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="sidebar-footer">
            <a
              href="#"
              className="link"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Settings"
            >
              <i className="ti-settings"></i>
            </a>

            <a
              href="#"
              className="link"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Email"
            >
              <i className="mdi mdi-gmail"></i>
            </a>

            <a
              href="#"
              className="link"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Logout"
            >
              <i className="mdi mdi-power"></i>
            </a>
          </div>
        </aside>

        <div className="page-wrapper">
          <div className="page-breadcrumb">
            <div className="row">
              <div className="col-md-5 align-self-center">
                <h3 className="page-title">Dashboard</h3>
                <div className="d-flex align-items-center">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Dashboard
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="col-md-7 justify-content-end align-self-center d-none d-md-flex">
                <div className="d-flex">
                  <div className="dropdown me-2">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                    >
                      January 2021
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          February 2021
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          March 2021
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          April 2021
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button className="btn btn-success">
                    <i
                      data-feather="plus"
                      className="fill-white feather-sm"
                    ></i>
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Daily Sales</h4>
                    <div className="text-end">
                      <h2 className="fw-light mb-0">
                        <i className="ti-arrow-up text-success"></i> $120
                      </h2>
                      <span className="text-muted">Todays Income</span>
                    </div>
                    <span className="text-success">80%</span>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        // role="progressbar"
                        role={"progressbar"}
                        style={{ width: "80%", height: "6px" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Weekly Sales</h4>
                    <div className="text-end">
                      <h2 className="fw-light mb-0">
                        <i className="ti-arrow-up text-info"></i> $5,000
                      </h2>
                      <span className="text-muted">Todays Income</span>
                    </div>
                    <span className="text-info">30%</span>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role={"progressbar"}
                        style={{ width: "30%", height: "6px" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Monthly Sales</h4>
                    <div className="text-end">
                      <h2 className="fw-light mb-0">
                        <i className="ti-arrow-up text-purple"></i> $8,000
                      </h2>
                      <span className="text-muted">Todays Income</span>
                    </div>
                    <span className="text-purple">60%</span>
                    <div className="progress">
                      <div
                        className="progress-bar bg-purple"
                        role="progressbar"
                        style={{ width: "60%", height: "6px" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Yearly Sales</h4>
                    <div className="text-end">
                      <h2 className="fw-light mb-0">
                        <i className="ti-arrow-down text-danger"></i> $12,000
                      </h2>
                      <span className="text-muted">Todays Income</span>
                    </div>
                    <span className="text-danger">80%</span>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "80%", height: "6px" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex flex-wrap">
                          <div>
                            <h4 className="card-title">Revenue Statistics</h4>
                            <h6 className="card-subtitle">January 2021</h6>
                          </div>
                          <div className="ms-auto">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <h6 className="text-muted">
                                  <i className="fa fa-circle me-1 text-success"></i>
                                  Product A
                                </h6>
                              </li>
                              <li className="list-inline-item">
                                <h6 className="text-muted">
                                  <i className="fa fa-circle me-1 text-info"></i>
                                  Product B
                                </h6>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div id="revenue-statistics"></div>
                      </div>
                      <div className="col-lg-3 col-md-6 mb-4 mt-3 text-center">
                        <h1 className="mb-0 fw-light">$54578</h1>
                        <h6 className="text-muted">Total Revenue</h6>
                      </div>
                      <div className="col-lg-3 col-md-6 mb-4 mt-3 text-center">
                        <h1 className="mb-0 fw-light">$43451</h1>
                        <h6 className="text-muted">Online Revenue</h6>
                      </div>
                      <div className="col-lg-3 col-md-6 mb-4 mt-3 text-center">
                        <h1 className="mb-0 fw-light">$44578</h1>
                        <h6 className="text-muted">Product A</h6>
                      </div>
                      <div className="col-lg-3 col-md-6 mb-4 mt-3 text-center">
                        <h1 className="mb-0 fw-light">$12578</h1>
                        <h6 className="text-muted">Product B</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="card w-100">
                  <div className="card-body">
                    <h4 className="card-title">Sales of the Month</h4>
                    <div id="sales-of-the-month" className="mt-3 mx-auto"></div>
                    <div className="round-overlap mt-2">
                      <i
                        data-feather="shopping-cart"
                        className="feather-lg"
                      ></i>
                    </div>
                    <ul className="list-inline mt-4 text-center pt-1">
                      <li className="list-inline-item">
                        <i className="fa fa-circle text-purple"></i> Item A
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-circle text-success"></i> Item B
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-circle text-info"></i> Item C
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Sales Prediction</h4>
                        <div className="row mt-3">
                          <div className="col-6 col-lg-6 col-xl-7 d-flex align-items-center">
                            <div>
                              <span className="display-6">$3528</span>
                              <h6 className="text-muted">(150-165 Sales)</h6>
                            </div>
                          </div>
                          <div className="col-6 col-lg-6 col-xl-5">
                            <div id="sales-prediction"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Sales Difference</h4>
                        <div className="row mt-3">
                          <div className="col-6 col-lg-6 col-xl-7 d-flex align-items-center">
                            <div>
                              <span className="display-6">$4316</span>
                              <h6 className="text-muted">(150-165 Sales)</h6>
                            </div>
                          </div>
                          <div className="col-6 col-lg-6 col-xl-5">
                            <div id="sales-difference"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="d-flex flex-row">
                      <div className="">
                        <img
                          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/1.jpg"
                          alt="user"
                          className="rounded-circle"
                          width="100"
                        />
                      </div>
                      <div className="ps-3">
                        <h3>Daniel Kristeen</h3>
                        <h6 className="text-muted fw-light">UIUX Designer</h6>
                        <button className="btn btn-light-info text-info">
                          Follow
                        </button>
                      </div>
                    </div>
                    <div className="row mt-4 pt-2">
                      <div className="col text-center border-end">
                        <h2 className="fw-light">14</h2>
                        <h6 className="text-muted">Photos</h6>
                      </div>
                      <div className="col text-center border-end">
                        <h2 className="fw-light">54</h2>
                        <h6 className="text-muted">Videos</h6>
                      </div>
                      <div className="col text-center">
                        <h2 className="fw-light">145</h2>
                        <h6 className="text-muted">Tasks</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-body border-top">
                    <p
                      className="text-center text-muted scrollable"
                      style={{
                        overflow: "hidden",
                        width: "auto",
                        height: "85px",
                      }}
                    >
                      Lorem ipsum dolor sit ametetur adipisicing elit, sed do
                      eiusmod tempor incididunt adipisicing elit, sed do eiusmod
                      tempor incididunLorem ipsum dolor sit ametetur adipisicing
                      elit, sed do eiusmod tempor incididuntt
                    </p>
                    <ul className="list-icons d-flex flex-item text-center list-style-none">
                      <li className="col my-1">
                        <a
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="social"
                          data-original-title="Website"
                        >
                          <i data-feather="globe" className="ps-2"></i>
                        </a>
                      </li>
                      <li className="col my-1">
                        <a
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="social"
                          data-original-title="twitter"
                        >
                          <i data-feather="twitter" className="ps-2"></i>
                        </a>
                      </li>
                      <li className="col my-1">
                        <a
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="social"
                          data-original-title="Facebook"
                        >
                          <i data-feather="facebook" className="ps-2"></i>
                        </a>
                      </li>
                      <li className="col my-1">
                        <a
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="social"
                          data-original-title="Youtube"
                        >
                          <i data-feather="youtube" className="ps-2"></i>
                        </a>
                      </li>
                      <li className="col my-1">
                        <a
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="social"
                          data-original-title="Linkd-in"
                        >
                          <i data-feather="linkedin" className="ps-2"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Recent Chats</h4>
                    <div
                      className="chat-box scrollable"
                      style={{ height: "375px" }}
                    >
                      <ul className="chat-list m-0 p-0">
                        <li className="mt-4">
                          <div className="chat-img d-inline-block align-top">
                            <img
                              src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/1.jpg"
                              alt="user"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="chat-content ps-3 d-inline-block">
                            <h6 className="text-muted text-nowrap">
                              James Anderson
                            </h6>
                            <div className="box mb-2 d-inline-block text-dark message fw-normal fs-3 bg-light-info">
                              Lorem Ipsum is simply dummy text of the printing &
                              type setting industry.
                            </div>
                          </div>
                          <div className="chat-time d-inline-block text-end text-muted">
                            10:56 am
                          </div>
                        </li>

                        <li className="mt-4">
                          <div className="chat-img d-inline-block align-top">
                            <img
                              src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/2.jpg"
                              alt="user"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="chat-content ps-3 d-inline-block">
                            <h6 className="text-muted text-nowrap">
                              Bianca Doe
                            </h6>
                            <div className="box mb-2 d-inline-block text-dark message fw-normal fs-3 bg-light-success">
                              It’s Great opportunity to work.
                            </div>
                          </div>
                          <div className="chat-time d-inline-block text-end text-muted">
                            10:57 am
                          </div>
                        </li>

                        <li className="odd mt-4">
                          <div className="chat-content ps-3 d-inline-block text-end">
                            <div className="box mb-2 d-inline-block text-dark message fw-normal fs-3 bg-light-inverse">
                              I would love to join the team.
                            </div>
                            <br />
                          </div>
                          <div className="chat-time d-inline-block text-end text-muted">
                            10:58 am
                          </div>
                        </li>

                        <li className="odd mt-4">
                          <div className="chat-content ps-3 d-inline-block text-end">
                            <div className="box mb-2 d-inline-block text-dark message fw-normal fs-3 bg-light-inverse">
                              Whats budget of the new project.
                            </div>
                            <br />
                          </div>
                          <div className="chat-time d-inline-block text-end text-muted">
                            10:59 am
                          </div>
                        </li>

                        <li className="mt-4">
                          <div className="chat-img d-inline-block align-top">
                            <img
                              src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/3.jpg"
                              alt="user"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="chat-content ps-3 d-inline-block">
                            <h6 className="text-muted text-nowrap">
                              Angelina Rhodes
                            </h6>
                            <div className="box mb-2 d-inline-block text-dark message fw-normal fs-3 bg-light-primary">
                              Well we have good budget for the project
                            </div>
                          </div>
                          <div className="chat-time d-inline-block text-end text-muted">
                            11:00 am
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body border-top">
                    <div className="row">
                      <div className="col-8">
                        <textarea
                          placeholder="Type your message here"
                          className="form-control border-0"
                        ></textarea>
                      </div>
                      <div className="col-4 text-end">
                        <button
                          type="button"
                          className="btn btn-info btn-circle btn-lg"
                        >
                          <i className="fas fa-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Recent Messages</h4>
                    <div
                      className="message-box scrollable"
                      style={{ height: "476px" }}
                    >
                      <div className="message-widget message-scroll">
                        <a
                          href="#"
                          className="d-flex align-items-center border-bottom p-3"
                        >
                          <div className="user-img position-relative d-inline-block mr-0 mr-md-3">
                            <img
                              src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/1.jpg"
                              alt="user"
                              className="rounded-circle w-100"
                            />
                            <span className="profile-status rounded-circle online"></span>
                          </div>
                          <div className="w-85 d-md-flex align-items-center v-middle ps-3">
                            <div className="w-85">
                              <h5 className="mb-0 mt-1 font-weight-medium">
                                Pavan kumar
                              </h5>
                              <span className="fs-3 text-nowrap d-block text-truncate mail-desc text-muted fw-normal">
                                Lorem Ipsum is simply dummy text of the printing
                                and type setting industry. Lorem Ipsum has been.
                              </span>
                            </div>
                            <span className="fs-2 text-nowrap ms-auto time fw-normal">
                              9:30 AM
                            </span>
                          </div>
                        </a>

                        <a
                          href="#"
                          className="d-flex align-items-center border-bottom p-3"
                        >
                          <div className="user-img position-relative d-inline-block mr-0 mr-md-3">
                            <img
                              src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/2.jpg"
                              alt="user"
                              className="rounded-circle w-100"
                            />
                            <span className="profile-status rounded-circle busy"></span>
                          </div>
                          <div className="w-85 d-md-flex align-items-center v-middle ps-3">
                            <div className="w-85">
                              <h5 className="mb-0 mt-1 font-weight-medium">
                                Sonu Nigam
                              </h5>
                              <span className="fs-3 text-nowrap d-block text-truncate mail-desc text-muted fw-normal">
                                I've sung a song! See you at
                              </span>
                            </div>
                            <span className="fs-2 text-nowrap ms-auto time fw-normal">
                              9:10 AM
                            </span>
                          </div>
                        </a>

                        <a
                          href="#"
                          className="d-flex align-items-center border-bottom p-3"
                        >
                          <div className="user-img position-relative d-inline-block mr-0 mr-md-3">
                            <span className="round bg-info d-inline-block text-white text-center rounded-circle">
                              A
                            </span>
                            <span className="profile-status rounded-circle away"></span>
                          </div>
                          <div className="w-85 d-md-flex align-items-center v-middle ps-3">
                            <div className="w-85">
                              <h5 className="mb-0 mt-1 font-weight-medium">
                                Arijit Sinh
                              </h5>
                              <span className="fs-3 text-nowrap d-block text-truncate mail-desc text-muted fw-normal">
                                Simply dummy text of the printing and
                                typesetting industry.
                              </span>
                            </div>
                            <span className="fs-2 text-nowrap ms-auto time fw-normal">
                              9:08 AM
                            </span>
                          </div>
                        </a>

                        <a
                          href="#"
                          className="d-flex align-items-center border-bottom p-3"
                        >
                          <div className="user-img position-relative d-inline-block mr-0 mr-md-3">
                            <img
                              src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/4.jpg"
                              alt="user"
                              className="rounded-circle w-100"
                            />
                            <span className="profile-status rounded-circle offline"></span>
                          </div>
                          <div className="w-85 d-md-flex align-items-center v-middle ps-3">
                            <div className="w-85">
                              <h5 className="mb-0 mt-1 font-weight-medium">
                                Pavan kumar
                              </h5>
                              <span className="fs-3 text-nowrap d-block text-truncate mail-desc text-muted fw-normal">
                                Just see the my admin!
                              </span>
                            </div>
                            <span className="fs-2 text-nowrap ms-auto time fw-normal">
                              9:02 AM
                            </span>
                          </div>
                        </a>

                        <a
                          href="#"
                          className="d-flex align-items-center border-bottom p-3"
                        >
                          <div className="user-img position-relative d-inline-block mr-0 mr-md-3">
                            <img
                              src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/1.jpg"
                              alt="user"
                              className="rounded-circle w-100"
                            />
                            <span className="profile-status rounded-circle online"></span>
                          </div>
                          <div className="w-85 d-md-flex align-items-center v-middle ps-3">
                            <div className="w-85">
                              <h5 className="mb-0 mt-1 font-weight-medium">
                                Pavan kumar
                              </h5>
                              <span className="fs-3 text-nowrap d-block text-truncate mail-desc text-muted fw-normal">
                                Welcome to the Elite Admin
                              </span>
                            </div>
                            <span className="fs-2 text-nowrap ms-auto time fw-normal">
                              9:30 AM
                            </span>
                          </div>
                        </a>

                        <a
                          href="#"
                          className="d-flex align-items-center border-bottom p-3"
                        >
                          <div className="user-img position-relative d-inline-block mr-0 mr-md-3">
                            <img
                              src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/2.jpg"
                              alt="user"
                              className="rounded-circle w-100"
                            />
                            <span className="profile-status rounded-circle busy"></span>
                          </div>
                          <div className="w-85 d-md-flex align-items-center v-middle ps-3">
                            <div className="w-85">
                              <h5 className="mb-0 mt-1 font-weight-medium">
                                Sonu Nigam
                              </h5>
                              <span className="fs-3 text-nowrap d-block text-truncate mail-desc text-muted fw-normal">
                                I've sung a song! See you at
                              </span>
                            </div>
                            <span className="fs-2 text-nowrap ms-auto time fw-normal">
                              9:10 AM
                            </span>
                          </div>
                        </a>

                        <a
                          href="#"
                          className="d-flex align-items-center border-bottom p-3"
                        >
                          <div className="user-img position-relative d-inline-block mr-0 mr-md-3">
                            <img
                              src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/3.jpg"
                              alt="user"
                              className="rounded-circle w-100"
                            />
                            <span className="profile-status rounded-circle away"></span>
                          </div>
                          <div className="w-85 d-md-flex align-items-center v-middle ps-3">
                            <div className="w-85">
                              <h5 className="mb-0 mt-1 font-weight-medium">
                                Arijit Sinh
                              </h5>
                              <span className="fs-3 text-nowrap d-block text-truncate mail-desc text-muted fw-normal">
                                I am a singer!
                              </span>
                            </div>
                            <span className="fs-2 text-nowrap ms-auto time fw-normal">
                              9:08 AM
                            </span>
                          </div>
                        </a>

                        <a href="#" className="d-flex align-items-center p-3">
                          <div className="user-img position-relative d-inline-block mr-0 mr-md-3">
                            <img
                              src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/4.jpg"
                              alt="user"
                              className="rounded-circle w-100"
                            />
                            <span className="profile-status rounded-circle offline"></span>
                          </div>
                          <div className="w-85 d-md-flex align-items-center v-middle ps-3">
                            <div className="w-85">
                              <h5 className="mb-0 mt-1 font-weight-medium">
                                Pavan kumar
                              </h5>
                              <span className="fs-3 text-nowrap d-block text-truncate mail-desc text-muted fw-normal">
                                Just see the my admin!
                              </span>
                            </div>
                            <span className="fs-2 text-nowrap ms-auto time fw-normal">
                              9:02
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="d-md-flex no-block">
                      <h4 className="card-title">Projects of the Month</h4>
                      <div className="ms-auto">
                        <select className="form-select">
                          <option>January</option>
                          <option value="1">February</option>
                          <option value="2">March</option>
                          <option value="3">April</option>
                        </select>
                      </div>
                    </div>
                    <div className="table-responsive mt-2">
                      <table className="table stylish-table mb-0 mt-2 no-wrap v-middle">
                        <thead>
                          <tr>
                            <th
                              className="fw-normal text-muted border-0 border-bottom"
                              colSpan={2}
                            >
                              Assigned
                            </th>
                            <th className="fw-normal text-muted border-0 border-bottom">
                              Name
                            </th>
                            <th className="fw-normal text-muted border-0 border-bottom">
                              Priority
                            </th>
                            <th className="fw-normal text-muted border-0 border-bottom">
                              Budget
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ width: "50px" }}>
                              <span className="round rounded-circle text-white d-inline-block text-center bg-info">
                                S
                              </span>
                            </td>
                            <td>
                              <h6 className="font-weight-medium mb-0 nowrap">
                                Sunil Joshi
                              </h6>
                              <small className="text-muted no-wrap">
                                Web Designer
                              </small>
                            </td>
                            <td>Elite Admin</td>
                            <td>
                              <span className="badge bg-light-success text-success">
                                Low
                              </span>
                            </td>
                            <td>$3.9K</td>
                          </tr>
                          <tr className="active">
                            <td>
                              <span className="round text-white d-inline-block text-center">
                                <img
                                  src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/2.jpg"
                                  alt="user"
                                  className="rounded-circle"
                                  width="50"
                                />
                              </span>
                            </td>
                            <td>
                              <h6 className="font-weight-medium mb-0 nowrap">
                                Andrew
                              </h6>
                              <small className="text-muted no-wrap">
                                Project Manager
                              </small>
                            </td>
                            <td>Real Homes</td>
                            <td>
                              <span className="badge bg-light-info text-info">
                                Medium
                              </span>
                            </td>
                            <td>$23.9K</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="round rounded-circle text-white d-inline-block text-center bg-success">
                                B
                              </span>
                            </td>
                            <td>
                              <h6 className="font-weight-medium mb-0 nowrap">
                                Bhavesh patel
                              </h6>
                              <small className="text-muted no-wrap">
                                Developer
                              </small>
                            </td>
                            <td>MedicalPro Theme</td>
                            <td>
                              <span className="badge bg-light-danger text-danger">
                                High
                              </span>
                            </td>
                            <td>$12.9K</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="round rounded-circle text-white d-inline-block text-center bg-primary">
                                N
                              </span>
                            </td>
                            <td>
                              <h6 className="font-weight-medium mb-0 nowrap">
                                Nirav Joshi
                              </h6>
                              <small className="text-muted no-wrap">
                                Frontend Eng
                              </small>
                            </td>
                            <td>Elite Admin</td>
                            <td>
                              <span className="badge bg-light-success text-success">
                                Low
                              </span>
                            </td>
                            <td>$10.9K</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="round rounded-circle text-white d-inline-block text-center bg-warning">
                                M
                              </span>
                            </td>
                            <td>
                              <h6 className="font-weight-medium mb-0 nowrap">
                                Micheal Doe
                              </h6>
                              <small className="text-muted no-wrap">
                                Content Writer
                              </small>
                            </td>
                            <td>Helping Hands</td>
                            <td>
                              <span className="badge bg-light-danger text-danger">
                                High
                              </span>
                            </td>
                            <td>$12.9K</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="round rounded-circle text-white d-inline-block text-center bg-danger">
                                N
                              </span>
                            </td>
                            <td>
                              <h6 className="font-weight-medium mb-0 nowrap">
                                Johnathan
                              </h6>
                              <small className="text-muted no-wrap">
                                Graphic
                              </small>
                            </td>
                            <td>Digital Agency</td>
                            <td>
                              <span className="badge bg-light-danger text-danger">
                                High
                              </span>
                            </td>
                            <td>$2.6K</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="round rounded-circle text-white d-inline-block text-center bg-info">
                                M
                              </span>
                            </td>
                            <td>
                              <h6 className="font-weight-medium mb-0 nowrap">
                                Micheal Doe
                              </h6>
                              <small className="text-muted no-wrap">
                                Content Writer
                              </small>
                            </td>
                            <td>Helping Hands</td>
                            <td>
                              <span className="badge bg-light-info text-info">
                                Medium
                              </span>
                            </td>
                            <td>$12.9K</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="d-md-flex no-block">
                      <h4 className="card-title">Weather Report</h4>
                      <div className="ms-auto">
                        <select className="form-select">
                          <option>Today</option>
                          <option value="1">Weekly</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex align-items-center flex-row mt-4">
                      <div className="p-2 display-5 text-info">
                        <i className="wi wi-day-showers"></i>
                        <span>
                          73<sup>°</sup>
                        </span>
                      </div>
                      <div className="p-2">
                        <h3 className="mb-0">Saturday</h3>
                        <small>Ahmedabad, India</small>
                      </div>
                    </div>
                    <table className="table table-borderless">
                      <tr>
                        <td>Wind</td>
                        <td className="font-weight-medium">ESE 17 mph</td>
                      </tr>
                      <tr>
                        <td>Humidity</td>
                        <td className="font-weight-medium">83%</td>
                      </tr>
                      <tr>
                        <td>Pressure</td>
                        <td className="font-weight-medium">28.56 in</td>
                      </tr>
                      <tr>
                        <td>Cloud Cover</td>
                        <td className="font-weight-medium">78%</td>
                      </tr>
                      <tr>
                        <td>Ceiling</td>
                        <td className="font-weight-medium">25760 ft</td>
                      </tr>
                    </table>
                    <ul className="list-unstyled row text-center city-weather-days border-top m-0 pt-3">
                      <li className="col col-6 col-md-3 text-center mt-2 pt-1">
                        <i className="d-block fs-6 text-info wi wi-day-sunny"></i>
                        <span className="d-block tetxt-muted text-nowrap pt-2">
                          09:30
                        </span>
                        <h3 className="fw-light mt-1">
                          70<sup>°</sup>
                        </h3>
                      </li>
                      <li className="col col-6 col-md-3 text-center mt-2 pt-1">
                        <i className="d-block fs-6 text-info wi wi-day-cloudy"></i>
                        <span className="d-block tetxt-muted text-nowrap pt-2">
                          11:30
                        </span>
                        <h3 className="fw-light mt-1">
                          72<sup>°</sup>
                        </h3>
                      </li>
                      <li className="col col-6 col-md-3 text-center mt-2 pt-1">
                        <i className="d-block fs-6 text-info wi wi-day-hail"></i>
                        <span className="d-block tetxt-muted text-nowrap pt-2">
                          13:30
                        </span>
                        <h3 className="fw-light mt-1">
                          75<sup>°</sup>
                        </h3>
                      </li>
                      <li className="col col-6 col-md-3 text-center mt-2 pt-1">
                        <i className="d-block fs-6 text-info wi wi-day-sprinkle"></i>
                        <span className="d-block tetxt-muted text-nowrap pt-2">
                          15:30
                        </span>
                        <h3 className="fw-light mt-1">
                          76<sup>°</sup>
                        </h3>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <img
                    className="card-img-top img-responsive"
                    src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/big/img1.jpg"
                    alt="Card"
                  />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3 fs-3 text-muted">
                      <span>20 May 2021</span>
                      <div className="ms-auto">
                        <a className="link fw-light text-muted">
                          <i
                            data-feather="message-circle"
                            className="feather-sm me-2"
                          ></i>
                          3 Comments
                        </a>
                      </div>
                    </div>
                    <h4>Featured Hydroflora Pots Garden &amp; Outdoors</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card">
                  <img
                    className="card-img-top img-responsive"
                    src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/big/img2.jpg"
                    alt="Card"
                  />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3 fs-3 text-muted">
                      <span>20 May 2021</span>
                      <div className="ms-auto">
                        <a className="link fw-light text-muted">
                          <i
                            data-feather="message-circle"
                            className="feather-sm me-2"
                          ></i>
                          1 Comment
                        </a>
                      </div>
                    </div>
                    <h4>Featured Hydroflora Pots Garden &amp; Outdoors</h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card">
                  <img
                    className="card-img-top img-responsive"
                    src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/big/img4.jpg"
                    alt="Card"
                  />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3 fs-3 text-muted">
                      <span>20 May 2021</span>
                      <div className="ms-auto">
                        <a className="link fw-light text-muted">
                          <i
                            data-feather="message-circle"
                            className="feather-sm me-2"
                          ></i>
                          5 Comments
                        </a>
                      </div>
                    </div>
                    <h4>Featured Hydroflora Pots Garden &amp; Outdoors</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Recent Comments</h4>
                  </div>

                  <div
                    className="comment-widgets scrollable position-relative mb-2"
                    style={{ height: "450px" }}
                  >
                    <div className="d-flex flex-row comment-row p-2 p-md-3">
                      <div className="p-1 p-md-2">
                        <span className="round text-white d-inline-block text-center">
                          <img
                            src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/1.jpg"
                            alt="user"
                            width="50"
                            className="rounded-circle"
                          />
                        </span>
                      </div>
                      <div className="comment-text w-100 py-1 py-md-3 pr-md-3 pl-md-4 px-2">
                        <h5>James Anderson</h5>
                        <p className="mb-1 fs-3 fw-light text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry. Lorem Ipsum has beenorem Ipsum
                          is simply dummy text of the printing and type setting
                          industry.
                        </p>
                        <div className="comment-footer d-md-flex align-items-center mt-2">
                          <span className="badge bg-light-info text-info">
                            Pending
                          </span>
                          <span className="action-icons">
                            <a className="ps-2 align-middle">
                              <i className="ti-pencil-alt"></i>
                            </a>
                            <a className="ps-2 align-middle">
                              <i className="ti-check"></i>
                            </a>
                            <a className="ps-2 align-middle">
                              <i className="ti-heart"></i>
                            </a>
                          </span>
                          <span className="text-muted ms-auto d-block text-end fs-2 fw-normal">
                            April 14, 2016
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row comment-row p-2 p-md-3 active">
                      <div className="p-1 p-md-2">
                        <span className="round text-white d-inline-block text-center">
                          <img
                            src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/2.jpg"
                            alt="user"
                            width="50"
                            className="rounded-circle"
                          />
                        </span>
                      </div>
                      <div className="comment-text active w-100 py-1 py-md-3 pr-md-3 pl-md-4 px-2">
                        <h5>Michael Jorden</h5>
                        <p className="mb-1 fs-3 fw-light text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry. Lorem Ipsum has beenorem Ipsum
                          is simply dummy text of the printing and type setting
                          industry..
                        </p>
                        <div className="comment-footer d-md-flex align-items-center mt-2">
                          <span className="badge bg-light-success text-success">
                            Approved
                          </span>
                          <span className="action-icons active">
                            <a className="ps-2 align-middle">
                              <i className="ti-pencil-alt"></i>
                            </a>
                            <a className="ps-2 align-middle">
                              <i className="icon-close"></i>
                            </a>
                            <a className="ps-2 align-middle">
                              <i className="ti-heart text-danger"></i>
                            </a>
                          </span>
                          <span className="text-muted ms-auto d-block text-end fs-2 fw-normal">
                            April 14, 2016
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row comment-row p-2 p-md-3">
                      <div className="p-1 p-md-2">
                        <span className="round text-white d-inline-block text-center">
                          <img
                            src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/3.jpg"
                            alt="user"
                            width="50"
                            className="rounded-circle"
                          />
                        </span>
                      </div>
                      <div className="comment-text w-100 py-1 py-md-3 pr-md-3 pl-md-4 px-2">
                        <h5>Johnathan Doeting</h5>
                        <p className="mb-1 fs-3 fw-light text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry. Lorem Ipsum has beenorem Ipsum
                          is simply dummy text of the printing and type setting
                          industry.
                        </p>
                        <div className="comment-footer d-md-flex align-items-center mt-2">
                          <span className="badge bg-light-danger text-danger">
                            Rejected
                          </span>
                          <span className="action-icons">
                            <a className="ps-2 align-middle">
                              <i className="ti-pencil-alt"></i>
                            </a>
                            <a className="ps-2 align-middle">
                              <i className="ti-check"></i>
                            </a>
                            <a className="ps-2 align-middle">
                              <i className="ti-heart"></i>
                            </a>
                          </span>
                          <span className="text-muted ms-auto d-block text-end fs-2 fw-normal">
                            April 14, 2016
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row comment-row p-2 p-md-3">
                      <div className="p-1 p-md-2">
                        <span className="round text-white d-inline-block text-center">
                          <img
                            src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/4.jpg"
                            alt="user"
                            width="50"
                            className="rounded-circle"
                          />
                        </span>
                      </div>
                      <div className="comment-text w-100 py-1 py-md-3 pr-md-3 pl-md-4 px-2">
                        <h5>James Anderson</h5>
                        <p className="mb-1 fs-3 fw-light text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          type setting industry. Lorem Ipsum has beenorem Ipsum
                          is simply dummy text of the printing and type setting
                          industry..
                        </p>
                        <div className="comment-footer d-md-flex align-items-center mt-2">
                          <span className="badge bg-light-info text-info">
                            Pending
                          </span>
                          <span className="action-icons">
                            <a className="ps-2 align-middle">
                              <i className="ti-pencil-alt"></i>
                            </a>
                            <a className="ps-2 align-middle">
                              <i className="ti-check"></i>
                            </a>
                            <a className="ps-2 align-middle">
                              <i className="ti-heart"></i>
                            </a>
                          </span>
                          <span className="text-muted ms-auto d-block text-end fs-2 fw-normal">
                            April 14, 2016
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <h4 className="card-title">To Do list</h4>
                      <div className="ms-auto">
                        <button
                          className="btn btn-sm btn-rounded btn-success"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                        >
                          Add Task
                        </button>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id="myModal"
                      tabIndex={-1}
                      role="dialog"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header d-flex align-items-center">
                            <h4 className="modal-title">Add Task</h4>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="mb-3">
                                <label>Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Your Name"
                                />
                              </div>
                              <div className="mb-3">
                                <label>Email address</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Enter email"
                                />
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-success"
                              data-bs-dismiss="modal"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="to-do-widget mt-3 scrollable"
                      style={{ height: "444px" }}
                    >
                      <ul
                        className="list-task todo-list list-group mb-0"
                        data-role="tasklist"
                      >
                        <li
                          className="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                          data-role="task"
                        >
                          <div className="form-check border-start border-2 border-info ps-1">
                            <input
                              type="checkbox"
                              className="form-check-input ms-2"
                              id="inputSchedule"
                              name="inputCheckboxesSchedule"
                            />
                            <label
                              htmlFor="inputSchedule"
                              className="form-check-label ps-2"
                            >
                              <span>Schedule meeting with</span>
                            </label>
                          </div>
                          <ul className="assignedto list-inline m-0 ps-4 ms-3 mt-2">
                            <li className="list-inline-item">
                              <img
                                className="rounded-circle"
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/1.jpg"
                                alt="user"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-original-title="Steave"
                              />
                            </li>
                            <li className="list-inline-item">
                              <img
                                className="rounded-circle"
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/2.jpg"
                                alt="user"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-original-title="Jessica"
                              />
                            </li>
                            <li className="list-inline-item">
                              <img
                                className="rounded-circle"
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/3.jpg"
                                alt="user"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-original-title="Priyanka"
                              />
                            </li>
                            <li className="list-inline-item">
                              <img
                                className="rounded-circle"
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/4.jpg"
                                alt="user"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-original-title="Selina"
                              />
                            </li>
                          </ul>
                        </li>
                        <li
                          className="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                          data-role="task"
                        >
                          <div className="form-check border-start border-2 border-danger ps-1 d-flex">
                            <input
                              type="checkbox"
                              className="form-check-input ms-2"
                              id="inputCall"
                              name="inputCheckboxesCall"
                            />
                            <label
                              htmlFor="inputCall"
                              className="form-check-label ps-2"
                            >
                              <span>Give Purchase report to</span>
                              <span className="badge bg-light-danger text-danger">
                                Today
                              </span>
                            </label>
                          </div>
                          <ul className="assignedto list-inline m-0 ps-4 ms-3 mt-2">
                            <li className="list-inline-item">
                              <img
                                className="rounded-circle"
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/3.jpg"
                                alt="user"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-original-title="Priyanka"
                              />
                            </li>
                            <li className="list-inline-item">
                              <img
                                className="rounded-circle"
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/4.jpg"
                                alt="user"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-original-title="Selina"
                              />
                            </li>
                          </ul>
                        </li>
                        <li
                          className="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                          data-role="task"
                        >
                          <div className="form-check border-start border-2 border-primary ps-1">
                            <input
                              type="checkbox"
                              className="form-check-input ms-2"
                              id="inputBook"
                              name="inputCheckboxesBook"
                            />
                            <label
                              htmlFor="inputBook"
                              className="form-check-label ps-2"
                            >
                              <span>Book flight for holiday</span>
                            </label>
                          </div>
                          <div className="item-date fs-2 ps-4 ms-3 text-muted d-inline-block">
                            26 jun 2021
                          </div>
                        </li>
                        <li
                          className="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                          data-role="task"
                        >
                          <div className="form-check border-start border-2 border-warning ps-1">
                            <input
                              type="checkbox"
                              className="form-check-input ms-2"
                              id="inputForward"
                              name="inputCheckboxesForward"
                            />
                            <label
                              htmlFor="inputForward"
                              className="form-check-label ps-2"
                            >
                              <span>Forward all tasks</span>
                              <span className="badge bg-light-warning text-warning">
                                2 weeks
                              </span>
                            </label>
                          </div>
                          <div className="item-date fs-2 ps-4 ms-3 text-muted d-inline-block">
                            26 jun 2021
                          </div>
                        </li>
                        <li
                          className="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                          data-role="task"
                        >
                          <div className="form-check border-start border-2 border-primary ps-1">
                            <input
                              type="checkbox"
                              className="form-check-input ms-2"
                              id="inputRecieve"
                              name="inputCheckboxesRecieve"
                            />
                            <label
                              htmlFor="inputRecieve"
                              className="form-check-label ps-2"
                            >
                              <span>Recieve shipment</span>
                            </label>
                          </div>
                          <div className="item-date fs-2 ps-4 ms-3 text-muted d-inline-block">
                            26 jun 2021
                          </div>
                        </li>
                        <li
                          className="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                          data-role="task"
                        >
                          <div className="form-check border-start border-2 border-info ps-1">
                            <input
                              type="checkbox"
                              className="form-check-input ms-2"
                              id="inputpayment"
                              name="inputCheckboxespayment"
                            />
                            <label
                              htmlFor="inputpayment"
                              className="form-check-label ps-2"
                            >
                              <span>Send payment today</span>
                            </label>
                          </div>
                          <div className="item-date fs-2 ps-4 ms-3 text-muted d-inline-block">
                            26 jun 2021
                          </div>
                        </li>
                        <li
                          className="list-group-item border-0 mb-0 py-3 pe-3 ps-0"
                          data-role="task"
                        >
                          <div className="form-check border-start border-2 border-success ps-1">
                            <input
                              type="checkbox"
                              className="form-check-input ms-2"
                              id="inputForward2"
                              name="inputCheckboxesd"
                            />
                            <label
                              htmlFor="inputForward2"
                              className="form-check-label ps-2"
                            >
                              <span>Important tasks</span>
                              <span className="badge bg-light-success text-success">
                                2 weeks
                              </span>
                            </label>
                          </div>
                          <ul className="assignedto list-inline m-0 ps-4 ms-3 mt-2">
                            <li className="list-inline-item">
                              <img
                                className="rounded-circle"
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/1.jpg"
                                alt="user"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-original-title="Assign to Steave"
                              />
                            </li>
                            <li className="list-inline-item">
                              <img
                                className="rounded-circle"
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/2.jpg"
                                alt="user"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-original-title="Assign to Jessica"
                              />
                            </li>
                            <li className="list-inline-item">
                              <img
                                className="rounded-circle"
                                src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/4.jpg"
                                alt="user"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-original-title="Assign to Selina"
                              />
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            All right reserved by Monster Admin.
          </footer>
        </div>
      </div>

      <aside className="customizer">
        <a className="service-panel-toggle">
          <i className="fa fa-spin fa-cog"></i>
        </a>
        <div className="customizer-body">
          <ul className="nav customizer-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                <i className="mdi mdi-wrench fs-6"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                href="#chat"
                role="tab"
                aria-controls="chat"
                aria-selected="false"
              >
                <i className="mdi mdi-message-reply fs-6"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <i className="mdi mdi-star-circle fs-6"></i>
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="p-3 border-bottom">
                <h5 className="font-weight-medium mb-2 mt-2">
                  Layout Settings
                </h5>

                <div className="form-check mt-2">
                  <input
                    type="checkbox"
                    className="sidebartoggler form-check-input"
                    name="collapssidebar"
                    id="collapssidebar"
                  />
                  <label className="form-check-label" htmlFor="collapssidebar">
                    <span>Collapse Sidebar</span>
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input
                    type="checkbox"
                    name="sidebar-position"
                    className="form-check-input"
                    id="sidebar-position"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="sidebar-position"
                  >
                    <span>Fixed Sidebar</span>
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input
                    type="checkbox"
                    name="header-position"
                    className="form-check-input"
                    id="header-position"
                  />
                  <label className="form-check-label" htmlFor="header-position">
                    <span>Fixed Header</span>
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input
                    type="checkbox"
                    name="boxed-layout"
                    className="form-check-input"
                    id="boxed-layout"
                  />
                  <label className="form-check-label" htmlFor="boxed-layout">
                    <span>Boxed Layout</span>
                  </label>
                </div>
              </div>
              <div className="p-3 border-bottom">
                <h5 className="font-weight-medium mb-2 mt-2">
                  Logo Backgrounds
                </h5>
                <ul className="theme-color m-0 p-0">
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-logobg="skin1"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-logobg="skin2"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-logobg="skin3"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-logobg="skin4"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-logobg="skin5"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-logobg="skin6"
                    ></a>
                  </li>
                </ul>
              </div>
              <div className="p-3 border-bottom">
                <h5 className="font-weight-medium mb-2 mt-2">
                  Navbar Backgrounds
                </h5>
                <ul className="theme-color m-0 p-0">
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-navbarbg="skin1"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-navbarbg="skin2"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-navbarbg="skin3"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-navbarbg="skin4"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-navbarbg="skin5"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-navbarbg="skin6"
                    ></a>
                  </li>
                </ul>
              </div>
              <div className="p-3 border-bottom">
                <h5 className="font-weight-medium mb-2 mt-2">
                  Sidebar Backgrounds
                </h5>
                <ul className="theme-color m-0 p-0">
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-sidebarbg="skin1"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-sidebarbg="skin2"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-sidebarbg="skin3"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-sidebarbg="skin4"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-sidebarbg="skin5"
                    ></a>
                  </li>
                  <li className="theme-item list-inline-item me-1">
                    <a
                      className="theme-link rounded-circle d-block"
                      data-sidebarbg="skin6"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="chat"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <ul className="mailbox list-style-none mt-3">
                <li>
                  <div className="message-center chat-scroll position-relative">
                    <a
                      className="message-item d-flex align-items-center border-bottom px-3 py-2"
                      id="chat_user_1"
                      data-user-id="1"
                    >
                      <span className="user-img position-relative d-inline-block">
                        <img
                          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/1.jpg"
                          alt="user"
                          className="rounded-circle w-100"
                        />
                        <span className="profile-status rounded-circle online"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1">Pavan kumar</h5>
                        <span className="fs-2 text-nowrap d-block text-muted text-truncate">
                          Just see the my admin!
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:30 AM
                        </span>
                      </div>
                    </a>

                    <a
                      className="message-item d-flex align-items-center border-bottom px-3 py-2"
                      id="chat_user_2"
                      data-user-id="2"
                    >
                      <span className="user-img position-relative d-inline-block">
                        <img
                          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/2.jpg"
                          alt="user"
                          className="rounded-circle w-100"
                        />
                        <span className="profile-status rounded-circle busy"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1">Sonu Nigam</h5>
                        <span className="fs-2 text-nowrap d-block text-muted text-truncate">
                          I've sung a song! See you at
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:10 AM
                        </span>
                      </div>
                    </a>

                    <a
                      className="message-item d-flex align-items-center border-bottom px-3 py-2"
                      id="chat_user_3"
                      data-user-id="3"
                    >
                      <span className="user-img position-relative d-inline-block">
                        <img
                          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/3.jpg"
                          alt="user"
                          className="rounded-circle w-100"
                        />
                        <span className="profile-status rounded-circle away"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1">Arijit Sinh</h5>
                        <span className="fs-2 text-nowrap d-block text-muted text-truncate">
                          I am a singer!
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:08 AM
                        </span>
                      </div>
                    </a>

                    <a
                      className="message-item d-flex align-items-center border-bottom px-3 py-2"
                      id="chat_user_4"
                      data-user-id="4"
                    >
                      <span className="user-img position-relative d-inline-block">
                        <img
                          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/4.jpg"
                          alt="user"
                          className="rounded-circle w-100"
                        />
                        <span className="profile-status rounded-circle offline"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1">Nirav Joshi</h5>
                        <span className="fs-2 text-nowrap d-block text-muted text-truncate">
                          Just see the my admin!
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:02 AM
                        </span>
                      </div>
                    </a>

                    <a
                      className="message-item d-flex align-items-center border-bottom px-3 py-2"
                      id="chat_user_5"
                      data-user-id="5"
                    >
                      <span className="user-img position-relative d-inline-block">
                        <img
                          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/5.jpg"
                          alt="user"
                          className="rounded-circle w-100"
                        />
                        <span className="profile-status rounded-circle offline"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1">Sunil Joshi</h5>
                        <span className="fs-2 text-nowrap d-block text-muted text-truncate">
                          Just see the my admin!
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:02 AM
                        </span>
                      </div>
                    </a>

                    <a
                      className="message-item d-flex align-items-center border-bottom px-3 py-2"
                      id="chat_user_6"
                      data-user-id="6"
                    >
                      <span className="user-img position-relative d-inline-block">
                        <img
                          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/6.jpg"
                          alt="user"
                          className="rounded-circle w-100"
                        />
                        <span className="profile-status rounded-circle offline"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1">
                          Akshay Kumar
                        </h5>
                        <span className="fs-2 text-nowrap d-block text-muted text-truncate">
                          Just see the my admin!
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:02 AM
                        </span>
                      </div>
                    </a>

                    <a
                      className="message-item d-flex align-items-center border-bottom px-3 py-2"
                      id="chat_user_7"
                      data-user-id="7"
                    >
                      <span className="user-img position-relative d-inline-block">
                        <img
                          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/7.jpg"
                          alt="user"
                          className="rounded-circle w-100"
                        />
                        <span className="profile-status rounded-circle offline"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1">Pavan kumar</h5>
                        <span className="fs-2 text-nowrap d-block text-muted text-truncate">
                          Just see the my admin!
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:02 AM
                        </span>
                      </div>
                    </a>

                    <a
                      className="message-item d-flex align-items-center border-bottom px-3 py-2"
                      id="chat_user_8"
                      data-user-id="8"
                    >
                      <span className="user-img position-relative d-inline-block">
                        <img
                          src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/8.jpg"
                          alt="user"
                          className="rounded-circle w-100"
                        />
                        <span className="profile-status rounded-circle offline"></span>
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1">
                          Varun Dhavan
                        </h5>
                        <span className="fs-2 text-nowrap d-block text-muted text-truncate">
                          Just see the my admin!
                        </span>
                        <span className="fs-2 text-nowrap d-block text-muted">
                          9:02 AM
                        </span>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div
              className="tab-pane fade p-3"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <h6 className="mt-3 mb-3">Activity Timeline</h6>
              <div className="steamline">
                <div className="sl-item">
                  <div className="sl-left bg-light-success text-success">
                    <i
                      data-feather="user"
                      className="feather-sm fill-white"
                    ></i>
                  </div>
                  <div className="sl-right">
                    <div className="font-weight-medium">
                      Meeting today <span className="sl-date"> 5pm</span>
                    </div>
                    <div className="desc">you can write anything</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left bg-light-info text-info">
                    <i
                      data-feather="camera"
                      className="feather-sm fill-white"
                    ></i>
                  </div>
                  <div className="sl-right">
                    <div className="font-weight-medium">
                      Send documents to Clark
                    </div>
                    <div className="desc">Lorem Ipsum is simply</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
                    <img
                      className="rounded-circle"
                      alt="user"
                      src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/2.jpg"
                    />
                  </div>
                  <div className="sl-right">
                    <div className="font-weight-medium">
                      Go to the Doctor{" "}
                      <span className="sl-date">5 minutes ago</span>
                    </div>
                    <div className="desc">Contrary to popular belief</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
                    <img
                      className="rounded-circle"
                      alt="user"
                      src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/1.jpg"
                    />
                  </div>
                  <div className="sl-right">
                    <div>
                      <a>Stephen</a>
                      <span className="sl-date">5 minutes ago</span>
                    </div>
                    <div className="desc">Approve meeting with tiger</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left bg-light-primary text-primary">
                    <i
                      data-feather="user"
                      className="feather-sm fill-white"
                    ></i>
                  </div>
                  <div className="sl-right">
                    <div className="font-weight-medium">
                      Meeting today <span className="sl-date"> 5pm</span>
                    </div>
                    <div className="desc">you can write anything</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left bg-light-info text-info">
                    <i
                      data-feather="send"
                      className="feather-sm fill-white"
                    ></i>
                  </div>
                  <div className="sl-right">
                    <div className="font-weight-medium">
                      Send documents to Clark
                    </div>
                    <div className="desc">Lorem Ipsum is simply</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
                    <img
                      className="rounded-circle"
                      alt="user"
                      src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/4.jpg"
                    />
                  </div>
                  <div className="sl-right">
                    <div className="font-weight-medium">
                      Go to the Doctor{" "}
                      <span className="sl-date">5 minutes ago</span>
                    </div>
                    <div className="desc">Contrary to popular belief</div>
                  </div>
                </div>
                <div className="sl-item">
                  <div className="sl-left">
                    <img
                      className="rounded-circle"
                      alt="user"
                      src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/monster-bootstrap/package/assets/images/users/6.jpg"
                    />
                  </div>
                  <div className="sl-right">
                    <div>
                      <a>Stephen</a>
                      <span className="sl-date">5 minutes ago</span>
                    </div>
                    <div className="desc">Approve meeting with tiger</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="chat-windows"></div>
    </div>
  );
}

export default App;
