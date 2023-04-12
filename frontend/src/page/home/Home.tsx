import React from "react";

const Home: React.FC = () => {
  return (
    <div>
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
                  <li className="breadcrumb-item active" aria-current="page">
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
                <i data-feather="plus" className="fill-white feather-sm"></i>
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
                  <i data-feather="shopping-cart" className="feather-lg"></i>
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
                        <h6 className="text-muted text-nowrap">Bianca Doe</h6>
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
                            Lorem Ipsum is simply dummy text of the printing and
                            type setting industry. Lorem Ipsum has been.
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
                            Simply dummy text of the printing and typesetting
                            industry.
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
                          <small className="text-muted no-wrap">Graphic</small>
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
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has beenorem Ipsum is simply
                      dummy text of the printing and type setting industry.
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
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has beenorem Ipsum is simply
                      dummy text of the printing and type setting industry..
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
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has beenorem Ipsum is simply
                      dummy text of the printing and type setting industry.
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
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting industry. Lorem Ipsum has beenorem Ipsum is simply
                      dummy text of the printing and type setting industry..
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
    </div>
  );
};

export default Home;
