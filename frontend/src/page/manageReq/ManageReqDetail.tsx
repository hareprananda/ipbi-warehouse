import React, { useEffect, useRef, useState } from "react";
import * as Model from "@/req/request/request.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "@/hooks/useRedux";
import requestApi from "@/req/request";
import action from "@/redux/reduceraction";
import useCommonStyle from "@/component/style/common.style";
import { idDayJs } from "@/config/helper";
import StatusFlag from "@/component/status/StatusFlag";
import Button from "@/component/button/Button";

interface Props {
  activeData: Model.RequestData;
  onResetData: () => void;
  onChangeStatus: () => void;
}

const ManageReqDetail: React.FC<Props> = ({ activeData, onResetData, onChangeStatus }) => {
  const [openModal, setOpenModal] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const exitButtonRef = useRef<HTMLButtonElement>(null);
  const { classes: commonClass } = useCommonStyle();
  const [detailData, setDetailData] = useState({} as Model.RequestDetail);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!activeData.uuid) return;
    setOpenModal(true);
    fetchRequestDetail();
  }, [activeData]);

  useEffect(() => {
    if (openModal) buttonRef.current?.click();
  }, [openModal]);

  useEffect(() => {
    $("#reqDetailModal").on("hide.bs.modal", function () {
      setOpenModal(false);
      onResetData();
      setDetailData({} as Model.RequestDetail);
    });
    $("#reqDetailModal").on("shown.bs.modal", function () {
      const backdrop = document.querySelector(".modal-backdrop") as HTMLDivElement;
      backdrop.style.zIndex = "100";
      this.style.zIndex = "999";
    });
  }, []);

  const fetchRequestDetail = () => {
    dispatch(action.ui.showLoading());
    dispatch(requestApi.requestDetail(activeData.uuid)).then((res) => {
      dispatch(action.ui.dismissLoading());
      if (res.data) setDetailData(res.data);
      else dispatch(action.ui.showStatusModal({ message: res.message[0], type: "error" }));
    });
  };

  const changeRequestStatus = (status: Model.RequestStatus) => {
    // dispatch(action.ui.showStatusModal({ type: "success", message: "mantap" }));
    // return;
    dispatch(action.ui.showLoading());
    dispatch(requestApi.changeStatus(activeData.uuid, status)).then((res) => {
      dispatch(action.ui.dismissLoading());
      if (res.data) {
        exitButtonRef.current?.click();
        setOpenModal(false);
        onResetData();
        setDetailData({} as Model.RequestDetail);
        onChangeStatus();
        dispatch(action.ui.showStatusModal({ type: "success", message: "Perubahan status request berhasil" }));
      } else dispatch(action.ui.showStatusModal({ type: "error", message: res.message[0] }));
    });
  };

  const changeStatusConfirm = (status: Model.RequestStatus) => {
    dispatch(
      action.ui.showConfirmation({
        message: `Apakah anda yakin ingin mengubah status request ${activeData.requestby} ini?`,
        onConfirm: () => {
          changeRequestStatus(status);
        },
      })
    );
  };

  const renderButton = () => {
    if (activeData.status === "PENDING") {
      return (
        <>
          <Button
            onClick={() => changeStatusConfirm("REJECT")}
            className="btn btn-outline-danger"
            style={{ border: "none" }}
          >
            Reject
          </Button>
          <Button onClick={() => changeStatusConfirm("APPROVE")} className="btn btn-info">
            Approve
          </Button>
        </>
      );
    } else if (activeData.status === "APPROVE") {
      if (activeData.type === "BORROW")
        return (
          <Button onClick={() => changeStatusConfirm("ONGOING")} className="btn btn-info">
            Dipinjam
          </Button>
        );
      else
        return (
          <Button onClick={() => changeStatusConfirm("FINISH")} className="btn btn-info">
            Selesai
          </Button>
        );
    } else if (activeData.status === "ONGOING") {
      return (
        <Button onClick={() => changeStatusConfirm("FINISH")} className="btn btn-info">
          Selesai
        </Button>
      );
    } else {
      return (
        <Button className="btn btn-info" data-bs-dismiss="modal">
          Ok
        </Button>
      );
    }
  };

  const renderDetailBody = () => {
    return (
      <>
        <div className="row gx-4 gy-2" style={{ margin: 0 }}>
          <div className={`col-6 ${commonClass.commonTd} `}>
            <p className="m-0">Tanggal Ambil</p>
            <p className="m-0">{idDayJs(detailData.takeDate).format("DD MMMM YYYY")}</p>
          </div>
          {detailData.type === "BORROW" && (
            <div className={`col-6 ${commonClass.commonTd} `}>
              <p className="m-0">Tanggal Kembali</p>
              <p className="m-0">{idDayJs(detailData.returnDate).format("DD MMMM YYYY")}</p>
            </div>
          )}
          <div className={`col-6 ${commonClass.commonTd} `}>
            <p className="m-0">Status</p>
            <StatusFlag status={detailData.status} />
          </div>
          <div className={`col-6 ${commonClass.commonTd} `}>
            <p className="m-0">Request by</p>
            <p className="m-0">{detailData.requesterName}</p>
          </div>
          <div className={`col-6 ${commonClass.commonTd} `}>
            <p className="m-0">Assign by</p>
            <p className="m-0">{detailData.assignee}</p>
          </div>
        </div>
        <p className="mb-0 mt-3" style={{ fontWeight: 500, padding: "0 12px" }}>
          Barang:
        </p>
        <table className="table mb-0">
          <tbody>
            {detailData.goods.map((v, key) => (
              <tr key={key}>
                <td className={commonClass.commonTd}>
                  <p className="m-0">Item</p>
                  <p className="m-0">{v.name}</p>
                </td>
                <td className={commonClass.commonTd}>
                  <p className="m-0">Jumlah</p>
                  <p className="m-0">{Math.abs(parseInt(v.quantity))}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  const clickContact = () => {
    const contact = detailData.requesterPhone.replace(/^0(?=8)/g, "62");
    window.open(`https://wa.me/${contact}`);
  };

  return (
    <>
      <div>
        <button
          style={{ display: "none" }}
          type="button"
          ref={buttonRef}
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#reqDetailModal"
        />

        <div className="modal fade" id="reqDetailModal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className={`modal-header border-bottom`}>
                <h5 className="modal-title" style={{ fontWeight: 500 }}>
                  Detail Request
                </h5>
                <button
                  type="button"
                  className="close"
                  style={{ backgroundColor: "transparent", border: "none" }}
                  data-bs-dismiss="modal"
                  ref={exitButtonRef}
                  aria-label="Close"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <div className="modal-body" style={{ padding: 0 }}>
                {detailData.uuid ? renderDetailBody() : null}
              </div>
              <div className="modal-footer" style={{ padding: "6px 12px" }}>
                {activeData.uuid && activeData.status !== "FINISH" && (
                  <Button
                    onClick={clickContact}
                    className="btn btn-success d-flex align-items-center"
                    style={{ border: "none", justifySelf: "flex-start", gap: "5px", marginRight: "auto" }}
                  >
                    <FontAwesomeIcon icon={faPhone} />
                    <p className="m-0">Contact</p>
                  </Button>
                )}
                {renderButton()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageReqDetail;
