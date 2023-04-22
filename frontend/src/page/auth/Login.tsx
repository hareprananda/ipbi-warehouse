import Form from "@/component/form/Form";
import TextField from "@/component/form/TextField/TextField";
import { useAppDispatch } from "@/hooks/useRedux";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import action from "@/redux/reduceraction";
import authApi from "@/req/auth";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as yup from "yup";
import logo from "@/assets/images/logo.png";
import useStyle from "./Login.style";

const validationObj = yup.object({
  phoneNumber: yup.string().required("Nomor telepon harus diisi").typeError("Nomor telepon harus diisi"),
  password: yup.string().required("Password harus diisi"),
});

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");
  const { classes } = useStyle();
  const submitLogin = (val: { phoneNumber: string; password: string }) => {
    dispatch(action.ui.showLoading());
    dispatch(authApi.login(val)).then((res) => {
      dispatch(action.ui.dismissLoading());
      if (res.data) {
        dispatch(action.auth.changeAuthForm(res.data));
      } else {
        setError(res.message[0]);
      }
    });
  };
  const onForgotPassword = () => {
    dispatch(
      action.ui.showStatusModal({
        message: "Mohon hubungi admin untuk mereset ulang password anda",
        type: "info",
      })
    );
  };

  return (
    <div>
      <div
        className={`
          auth-wrapper
          d-flex
          no-block
          justify-content-center
          align-items-center
          ${classes.container}
        `}
      >
        <div className={classes.backgroundOverflow} />
        <div className="auth-box p-4 bg-white rounded" style={{ zIndex: 2 }}>
          <div id="loginform">
            <div className="logo">
              <div className="d-flex justify-content-center">
                <img src={logo} alt="logo" style={{ width: "155px" }} />
              </div>
              <h3 className="box-title mb-3">Sign In</h3>
            </div>
            {error && (
              <div className="d-flex justify-content-center">
                <span className="text-danger">
                  <small>{error}</small>
                </span>
              </div>
            )}
            <div className="row">
              <div className="col-12">
                <Form validation={validationObj} onSubmit={submitLogin} className="form-horizontal mt-3 form-material">
                  <div className="form-group mb-3">
                    <div className="">
                      <TextField
                        field="phoneNumber"
                        type="number"
                        className="form-control"
                        placeholder="Nomor Telepon"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <div className="">
                      <TextField field="password" className="form-control" type="password" placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="d-flex">
                      <div className="ms-auto">
                        <div
                          role="button"
                          onClick={onForgotPassword}
                          className="link font-weight-medium d-flex align-items-center"
                        >
                          <FontAwesomeIcon icon={faLock} />
                          <span
                            className="text-secondary"
                            style={{ marginLeft: "5px", fontSize: "14px", fontWeight: 600 }}
                          >
                            Lupa Password?
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group text-center mt-4 mb-3">
                    <div className="col-xs-12">
                      <button
                        className="
                          btn btn-info
                          d-block
                          w-100
                          waves-effect waves-light
                        "
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                  <div className="form-group mb-0 mt-4">
                    <div className="col-sm-12 justify-content-center d-flex">
                      <p style={{ fontSize: "14px" }}>Hubungi Admin jika belum memiliki akun</p>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
