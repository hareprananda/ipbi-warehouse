import { useAppDispatch } from "@/hooks/useRedux";
import userApi from "@/req/user";
import React, { useEffect, useState } from "react";
import useStyle from "./Request.styles";
import logo from "@/assets/images/logo.png";
import Button from "@/component/button/Button";
import action from "@/redux/reduceraction";
import { Navigate, useLocation } from "react-router-dom";
import routes from "@/const/routes";

const RequestSuccess: React.FC = () => {
  const dispatch = useAppDispatch();
  const { classes } = useStyle();
  const { state } = useLocation();
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    if (!state?.uuid) return;
    dispatch(action.ui.showLoading());
    dispatch(userApi.adminContact()).then((res) => {
      dispatch(action.ui.dismissLoading());
      if (res.data) {
        setPhoneNumber(res.data.phone);
      } else dispatch(action.ui.showStatusModal({ type: "error", message: res.message[0] }));
    });
  }, []);

  const clickConfirm = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Halo, saya telah melakukan request barang`);
  };

  if (!state?.uuid) return <Navigate to={routes.request} replace />;

  return (
    <div className={`${classes.container}`}>
      <div className={`card  ${classes.topCard} ${classes.card}`}>
        <div className="card-body">
          <div className="d-flex">
            <div style={{ flexShrink: 0 }}>
              <img src={logo} alt="logo" style={{ width: "120px" }} />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <h2>IPBI Warehouse</h2>
              <p>
                Request anda berhasil dikirim ke manager gudang, Anda bisa melakukan konfirmasi bahwa anda telah
                melakukan request dengan klik tombol berikut
              </p>
              <div className="d-flex justify-content-end">
                <Button className="btn btn-info" onClick={clickConfirm}>
                  Konfirmasi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestSuccess;
