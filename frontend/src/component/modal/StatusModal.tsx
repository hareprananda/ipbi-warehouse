import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import action from "@/redux/reduceraction";

const icons = {
  success: {
    component: <FontAwesomeIcon icon={faCheck} className="text-success" style={{ fontSize: "28px" }} />,
    title: "Sukses",
    bg: "bg-success",
    btn: "btn-success",
  },
  error: {
    component: <FontAwesomeIcon icon={faTimes} className="text-danger" style={{ fontSize: "30px" }} />,
    title: "Error",
    bg: "bg-danger",
    btn: "btn-danger",
  },

  info: {
    component: <FontAwesomeIcon icon={faInfoCircle} className="text-info" style={{ fontSize: "30px" }} />,
    title: "Info",
    bg: "bg-info",
    btn: "btn-info",
  },
};

const StatusModal: React.FC = () => {
  const { statusModal, statusModalMessage, statusModalType } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!statusModal || !buttonRef.current) return;

    buttonRef.current.click();
  }, [statusModal]);

  useEffect(() => {
    $("#statusModal").on("hide.bs.modal", function (e) {
      dispatch(action.ui.dismissStatusModal());
    });
  }, []);

  return (
    <div>
      <button
        style={{ display: "none" }}
        type="button"
        ref={buttonRef}
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#statusModal"
      />

      <div
        className="modal fade"
        id="statusModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className={`modal-header border-bottom ${icons[statusModalType].bg}`}>
              <h5 className="modal-title text-white" style={{ fontWeight: 600 }}>
                {icons[statusModalType].title}
              </h5>
              <button
                type="button"
                className="close"
                style={{ backgroundColor: "transparent", border: "none" }}
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faTimes} className="text-white" />
              </button>
            </div>
            <div className="modal-body d-flex">
              <div className="d-flex">{icons[statusModalType].component}</div>
              <div className="ml-2" style={{ marginLeft: "15px" }}>
                {statusModalMessage}
              </div>
            </div>
            <div className="modal-footer border-top" style={{ padding: "6px 12px" }}>
              <button
                type="button"
                className={`btn ${icons[statusModalType].btn}`}
                data-bs-dismiss="modal"
                style={{ padding: "6px 25px" }}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
