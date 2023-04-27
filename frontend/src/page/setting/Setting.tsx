import { idDayJs } from "@/config/helper";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import React, { useRef, useState } from "react";
import useStyle from "./Setting.styles";
import Button from "@/component/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import Form from "@/component/form/Form";
import TextField from "@/component/form/TextField/TextField";
import action from "@/redux/reduceraction";
import userApi from "@/req/user";
import * as yup from "yup";

const wording: Record<string, string> = {
  name: "Nama",
  phoneNumber: "Telepon",
};

const Setting: React.FC = () => {
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { classes } = useStyle();
  const [renderForm, setRenderForm] = useState(1);
  const buttonModalRef = useRef<HTMLButtonElement>(null);
  const buttonCloseModalRef = useRef<HTMLButtonElement>(null);
  const [activeKey, setActiveKey] = useState<keyof typeof authState>("name");

  const openFormModal = (key: keyof typeof authState) => {
    setActiveKey(key);
    buttonModalRef.current?.click();
  };

  const onSubmitFormModal = (value: Record<string, string>) => {
    if (value["phoneNumber"]) {
      value["phone"] = value["phoneNumber"];
      delete value["phoneNumber"];
    }
    updateProfile(value, () => buttonCloseModalRef.current?.click());
  };

  const onSubmitForm = (value: { currentPassword: string; password: string }) => {
    updateProfile(value, () => setRenderForm((c) => ++c));
  };

  const updateProfile = (value: Record<string, string>, cb?: () => void) => {
    dispatch(action.ui.showLoading());
    dispatch(userApi.updateProfile(value)).then((res) => {
      dispatch(action.ui.dismissLoading());
      if (res.data) {
        dispatch(action.ui.showStatusModal({ message: "Update success", type: "success" }));
        const { phone, ...restData } = res.data;
        dispatch(
          action.auth.changeAuthForm({
            ...authState,
            ...restData,
            phoneNumber: phone,
          })
        );
        cb?.();
      } else dispatch(action.ui.showStatusModal({ message: res.message[0], type: "error" }));
    });
  };

  return (
    <>
      <div style={{ maxWidth: "700px", paddingTop: "15px", margin: "0 auto" }}>
        <div className="container-fluid">
          <div className="card">
            <h5 className="card-title border-bottom m-0" style={{ fontWeight: 500, padding: 12 }}>
              Profil
            </h5>
            <div className="card-body" style={{ padding: 0 }}>
              <table className={`table m-0 ${classes.table}`}>
                <tbody>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <p className="m-0">Nama</p>
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="m-0" style={{ fontWeight: 500 }}>
                          {authState.name}
                        </p>
                        <Button
                          onClick={() => openFormModal("name")}
                          className={`btn btn-secondary opacity-75 ${classes.editButton}`}
                        >
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <p className="m-0">Telepon</p>
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="m-0" style={{ fontWeight: 500 }}>
                          {authState.phoneNumber}
                        </p>
                        <Button
                          onClick={() => openFormModal("phoneNumber")}
                          className={`btn btn-secondary opacity-75 ${classes.editButton}`}
                        >
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <p className="m-0">Level</p>
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <p className="m-0" style={{ fontWeight: 500 }}>
                        {authState.level}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="m-0">Dibuat</p>
                    </td>
                    <td>
                      <p className="m-0" style={{ fontWeight: 500 }}>
                        {idDayJs(authState.createdAt).format("DD MMMM YYYY")}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card mt-2">
            <h5 className="card-title m-0" style={{ fontWeight: 500, padding: 12 }}>
              Ganti Password
            </h5>
            <Form onSubmit={onSubmitForm} key={renderForm}>
              <div style={{ padding: 12 }}>
                <p className="m-0" style={{ fontSize: "15px" }}>
                  Password Lama
                </p>
                <TextField type="password" field="currentPassword" className="form-control" />
              </div>

              <div style={{ padding: 12 }}>
                <p className="m-0" style={{ fontSize: "15px" }}>
                  Password Baru
                </p>
                <TextField type="password" field="password" className="form-control" />
              </div>
              <div className="d-flex justify-content-end" style={{ padding: 12 }}>
                <Button className="btn btn-info">Ubah</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <button
        style={{ display: "none" }}
        type="button"
        ref={buttonModalRef}
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#updateModal"
      />

      <div
        className="modal fade"
        id="updateModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className={`modal-header border-bottom`}>
              <h5 className="modal-title " style={{ fontWeight: 500 }}>
                Update {wording[activeKey as keyof typeof wording]}
              </h5>
              <button
                type="button"
                ref={buttonCloseModalRef}
                className="close"
                style={{ backgroundColor: "transparent", border: "none" }}
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <Form
              onSubmit={onSubmitFormModal}
              key={activeKey as unknown as string}
              validation={yup.object({ [activeKey]: yup.string().required() })}
              defaultValues={{ [activeKey]: authState[activeKey] }}
            >
              <div className="modal-body ">
                <p className="m-0" style={{ fontSize: "15px" }}>
                  {wording[activeKey as keyof typeof wording]}
                </p>
                <TextField
                  type={activeKey === "phoneNumber" ? "number" : "text"}
                  field={activeKey as unknown as string}
                  className="form-control"
                />
              </div>
              <div className="modal-footer border-top" style={{ padding: "6px 12px" }}>
                <button
                  type="submit"
                  className={`btn btn-info`}
                  data-bs-dismiss="modal"
                  style={{ padding: "6px 25px" }}
                >
                  Simpan
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
