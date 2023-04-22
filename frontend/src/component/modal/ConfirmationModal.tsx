import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import action from "@/redux/reduceraction";
import { faQuestionCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const ConfirmationModal: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const { confirmationMessage, onOkConfirmation, openConfirmation } = useAppSelector((state) => state.ui);

  useEffect(() => {
    $("#confirmModal").on("hide.bs.modal", function () {
      dispatch(action.ui.dismissConfirmation());
    });
  }, []);

  useEffect(() => {
    // @ts-ignore
    const confirmModal = new bootstrap.Modal(document.getElementById("confirmModal"), {
      keyboard: false,
    });

    if (openConfirmation) {
      confirmModal.show();
    } else {
      confirmModal.hide();
    }
  }, [openConfirmation]);

  const clickOk = () => {
    onOkConfirmation();
    closeButton.current?.click();
  };

  return (
    <div>
      <button
        style={{ display: "none" }}
        type="button"
        ref={buttonRef}
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#confirmModal"
      />

      <div
        className="modal fade"
        id="confirmModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className={`modal-header border-bottom`}>
              <h5 className="modal-title" style={{ fontWeight: 500 }}>
                Konfirmasi
              </h5>
              <button
                type="button"
                className="close"
                style={{ backgroundColor: "transparent", border: "none" }}
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeButton}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="modal-body d-flex align-items-center" style={{ gap: "10px" }}>
              <FontAwesomeIcon icon={faQuestionCircle} style={{ flexShrink: 0, fontSize: "20px" }} />
              <p className="m-0">{confirmationMessage}</p>
            </div>
            <div className="modal-footer border-top" style={{ padding: "6px 12px" }}>
              <button
                type="button"
                className={`btn btn-outline-info`}
                data-bs-dismiss="modal"
                style={{ padding: "6px 25px", border: "none" }}
              >
                Batal
              </button>
              <button type="button" onClick={clickOk} className={`btn btn-info`} style={{ padding: "6px 25px" }}>
                Yaa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
