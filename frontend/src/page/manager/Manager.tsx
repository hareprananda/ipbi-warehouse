import PagedNumber, { PagedNumberRef } from "@/component/pagednumber/PagedNumber";
import { useAppDispatch } from "@/hooks/useRedux";
import managerApi from "@/req/manager";
import React, { useRef, useState } from "react";
import * as Model from "@/req/manager/manager.model";
import useCommonStyle from "@/component/style/common.style";
import Button from "@/component/button/Button";
import { idDayJs } from "@/config/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEllipsisV, faTimes } from "@fortawesome/free-solid-svg-icons";
import action from "@/redux/reduceraction";
import useStyle from "./Manager.styles";
import Form from "@/component/form/Form";
import * as yup from "yup";
import TextField from "@/component/form/TextField/TextField";

const validationObj = yup.object({
  name: yup.string().required(),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^[0-9]+$/g),
});

const Manager: React.FC = () => {
  const dispatch = useAppDispatch();
  const { classes: commonClass } = useCommonStyle();
  const pagedRef = useRef<PagedNumberRef>(null);
  const { classes } = useStyle();
  const [popover, setPopover] = useState(-1);
  const [formRerender, setFormRerender] = useState(1);
  const closeModalRef = useRef<HTMLButtonElement>(null);

  const fetchManager = (metadata: { limit: number; page: number }) => {
    return dispatch(managerApi.recentGoods(metadata));
  };

  const setAsContact = (data: Model.Manager) => {
    dispatch(action.ui.showLoading());
    dispatch(managerApi.setContact(data.uuid)).then((res) => {
      dispatch(action.ui.dismissLoading());
      if (res.data) {
        pagedRef.current?.saveFilter({});
        dispatch(
          action.ui.showStatusModal({ type: "success", message: `${data.name} telah diset sebagai kontak admin` })
        );
      } else dispatch(action.ui.showStatusModal({ type: "error", message: res.message[0] }));
    });
  };

  const changeLevelConfirm = (data: Model.Manager, level: "APPROVER" | "ADMIN") => {
    setPopover(-1);
    dispatch(
      action.ui.showConfirmation({
        message: `Apakah anda yakin ingin mengubah status ${data.name} ?`,
        onConfirm: () => changeLevel(data, level),
      })
    );
  };

  const changeLevel = (data: Model.Manager, level: "APPROVER" | "ADMIN") => {
    dispatch(action.ui.showLoading());
    dispatch(managerApi.changeLevel(data.uuid, level)).then((res) => {
      dispatch(action.ui.dismissLoading());
      if (res.data) {
        pagedRef.current?.saveFilter({});
        dispatch(action.ui.showStatusModal({ type: "success", message: `Level ${data.name} berhasil diubah` }));
      } else dispatch(dispatch(action.ui.showStatusModal({ type: "error", message: res.message[0] })));
    });
  };

  const resetPasswordConfirm = (data: Model.Manager) => {
    setPopover(-1);
    dispatch(
      action.ui.showConfirmation({
        message: `Apakah anda yakin ingin mereset password ${data.name} ?`,
        onConfirm: () => resetPassword(data),
      })
    );
  };

  const resetPassword = (data: Model.Manager) => {
    dispatch(action.ui.showLoading());
    dispatch(managerApi.resetPassword(data.uuid)).then((res) => {
      dispatch(action.ui.dismissLoading());
      if (res.data) {
        pagedRef.current?.saveFilter({});
        dispatch(
          action.ui.showStatusModal({
            type: "success",
            message: `Password ${data.name} berhasil direset menjadi nomor telepon`,
          })
        );
      } else dispatch(dispatch(action.ui.showStatusModal({ type: "error", message: res.message[0] })));
    });
  };

  const deleteManagerConfirm = (data: Model.Manager) => {
    setPopover(-1);
    if (data.isContact) {
      dispatch(
        action.ui.showStatusModal({
          type: "error",
          message: `Anda tidak bisa menghapus ${data.name}, yang saat ini sebagai kontak admin`,
        })
      );
      return;
    }
    dispatch(
      action.ui.showConfirmation({
        message: `Apakah anda yakin ingin menghapus ${data.name} dari daftar manager?`,
        onConfirm: () => deleteManager(data),
      })
    );
  };

  const deleteManager = (data: Model.Manager) => {
    dispatch(action.ui.showLoading());
    dispatch(managerApi.deleteManager(data.uuid)).then((res) => {
      dispatch(action.ui.dismissLoading());
      if (res.data) {
        pagedRef.current?.saveFilter({});
        dispatch(action.ui.showStatusModal({ type: "success", message: `${data.name} berhasil dihapus` }));
      } else dispatch(dispatch(action.ui.showStatusModal({ type: "error", message: res.message[0] })));
    });
  };

  const renderItem = (item: Model.Manager, key: number) => {
    return (
      <React.Fragment key={key}>
        <tr style={{ position: "relative", zIndex: 0 }}>
          <td className={commonClass.commonTd}>
            <p className="m-0">Nama</p>
            <p className="m-0">{item.name}</p>
          </td>
          <td className={commonClass.commonTd}>
            <p className="m-0">Telepon</p>
            <p className="m-0">{item.phone}</p>
          </td>
          <td className={commonClass.commonTd}>
            <p className="m-0">Level</p>
            <p className="m-0">{item.level}</p>
          </td>
          <td className={commonClass.commonTd}>
            <p className="m-0">Dibuat</p>
            <p className="m-0">{idDayJs(item.createdAt).format("DD MMM YYYY")}</p>
          </td>
          <td style={{ width: "200px" }} className={commonClass.stickyTableRight}>
            <div className="d-flex mt-2 align-items-center" style={{ gap: "8px" }}>
              {item.isContact ? (
                <div className="d-flex align-items-center" style={{ gap: "5px" }}>
                  <FontAwesomeIcon className="text-success" icon={faCheck} />
                  <p style={{ fontSize: "15px" }} className="text-success m-0 text-success">
                    Admin Contact
                  </p>
                </div>
              ) : (
                <Button className="btn btn-secondary" onClick={() => setAsContact(item)}>
                  Set As Contact
                </Button>
              )}
              <Button className="btn btn-secondary" onClick={() => setPopover(key)}>
                <FontAwesomeIcon icon={faEllipsisV} />
              </Button>
            </div>
          </td>
        </tr>
        {popover === key && (
          <tr className={classes.popover}>
            <td colSpan={5} style={{ padding: 0 }}>
              <ul>
                <li onClick={() => changeLevelConfirm(item, item.level === "ADMIN" ? "APPROVER" : "ADMIN")}>
                  <p className="m-0">Ubah level ke {item.level === "ADMIN" ? "Approver" : "Admin"}</p>
                </li>
                <li onClick={() => resetPasswordConfirm(item)}>
                  <p className="m-0">Reset Password</p>
                </li>
                <li onClick={() => deleteManagerConfirm(item)}>
                  <p className="m-0">Delete Manager</p>
                </li>
              </ul>
            </td>
          </tr>
        )}
      </React.Fragment>
    );
  };

  const handleAddManager = (val: { phoneNumber: string; name: string }) => {
    dispatch(action.ui.showLoading());
    dispatch(managerApi.addManager(val)).then((res) => {
      dispatch(action.ui.dismissLoading());
      if (res.data) {
        pagedRef.current?.saveFilter({});
        setFormRerender((c) => ++c);
        dispatch(action.ui.showStatusModal({ message: `${val.name} berhasil ditambahkan`, type: "success" }));
        closeModalRef.current?.click();
      } else dispatch(action.ui.showStatusModal({ message: res.message[0], type: "error" }));
    });
  };

  return (
    <>
      <div style={{ paddingTop: "15px" }}>
        {popover >= 0 && <div className={classes.overlay} onClick={() => setPopover(-1)} />}
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h2 className="page-title" style={{ fontWeight: "bold" }}>
              Manager
            </h2>

            <Button data-bs-toggle="modal" data-bs-target="#addManagerModal" className="btn btn-info">
              <p className="m-0">Tambah Manager</p>
            </Button>
          </div>

          <div className="card" style={{ overflow: "hidden" }}>
            <div className="d-flex" style={{ minHeight: "calc(100vh - 200px)" }}>
              <div style={{ width: "100%" }}>
                <PagedNumber ref={pagedRef} fetchData={fetchManager} items={renderItem}>
                  {({ renderItem }) => (
                    <>
                      <div style={{ minHeight: "calc(100vh - 255px)" }} className={commonClass.stickyTableContainer}>
                        <table className="table">
                          <tbody>{renderItem()}</tbody>
                        </table>
                      </div>
                    </>
                  )}
                </PagedNumber>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addManagerModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className={`modal-header border-bottom`}>
              <h5 className="modal-title " style={{ fontWeight: 500 }}>
                Tambah Manager
              </h5>
              <button
                type="button"
                ref={closeModalRef}
                className="close"
                style={{ backgroundColor: "transparent", border: "none" }}
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faTimes} className="" />
              </button>
            </div>
            <Form key={formRerender} validation={validationObj} onSubmit={handleAddManager}>
              <div className="modal-body">
                <div>
                  <p className="m-0">Nama</p>
                  <TextField field="name" className="form-control" />
                </div>

                <div className="mt-3">
                  <p className="m-0">Telepon</p>
                  <TextField field="phoneNumber" type="number" className="form-control" />
                </div>
              </div>
              <div className="modal-footer border-top" style={{ padding: "6px 12px" }}>
                <Button type="submit" className={`btn btn-info`} style={{ padding: "6px 25px" }}>
                  Tambah
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
