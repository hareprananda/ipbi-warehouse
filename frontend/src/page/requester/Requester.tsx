import PagedNumber from "@/component/pagednumber/PagedNumber";
import { useAppDispatch } from "@/hooks/useRedux";
import requesterApi from "@/req/requester";
import React from "react";
import * as Model from "@/req/requester/requester.model";
import useCommonStyle from "@/component/style/common.style";
import { idDayJs } from "@/config/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHistory, faPhone } from "@fortawesome/free-solid-svg-icons";
import Button from "@/component/button/Button";
import { useNavigate } from "react-router-dom";
import routes from "@/const/routes";

const Requester: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { classes: commonClass } = useCommonStyle();

  const fetchRequester = (params: Record<string, any>) => {
    return dispatch(requesterApi.getRequester(params));
  };

  const clickContact = (phone: string) => {
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  const clickHistory = (id: string) => {
    const searchParams = new URLSearchParams({ filter: `requestById:${id}` }).toString();
    navigate(routes.manageRequest + "?" + searchParams);
  };

  const renderItem = (data: Model.RequesterData, key: number) => {
    return (
      <tr key={key}>
        <td style={{ minWidth: "200px" }} className={`${commonClass.commonTd} ${commonClass.stickyTableTd}`}>
          <p className="m-0">Nama</p>
          <p className="m-0">{data.name}</p>
        </td>
        <td style={{ minWidth: "135px" }} className={`${commonClass.commonTd} ${commonClass.stickyTableTd}`}>
          <p className="m-0">Kontak</p>
          <p className="m-0">{data.phone}</p>
        </td>
        <td style={{ minWidth: "130px" }} className={`${commonClass.commonTd} ${commonClass.stickyTableTd}`}>
          <p className="m-0">Jumlah Request</p>
          <p className="m-0">{data.numberRequest}</p>
        </td>
        <td style={{ minWidth: "160px" }} className={`${commonClass.commonTd} ${commonClass.stickyTableTd}`}>
          <p className="m-0">Request Terakhir</p>
          <Button
            onClick={() => clickHistory(data.uuid)}
            className="btn btn-secondary d-flex align-items-center"
            style={{ gap: "5px", padding: "2px 10px" }}
          >
            <p className="m-0">{idDayJs(data.lastCreated).format("DD MMM YYYY")}</p>
            <FontAwesomeIcon icon={faEye} />
          </Button>
        </td>
        <td className={`${commonClass.stickyTableRight}`}>
          <div className="d-flex justify-content-end mt-2" style={{ gap: "5px" }}>
            <Button className="btn btn-success" onClick={() => clickContact(data.phone)}>
              <FontAwesomeIcon icon={faPhone} style={{ fontSize: "14px" }} />
            </Button>
            <Button
              onClick={() => clickHistory(data.uuid)}
              className="btn btn-outline-info d-flex align-items-center"
              style={{ gap: "5px" }}
            >
              <FontAwesomeIcon style={{ fontSize: "15px" }} icon={faHistory} />
              <p className="m-0" style={{ fontSize: "16px" }}>
                Histori
              </p>
            </Button>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div style={{ paddingTop: "15px" }}>
      <div className="container-fluid">
        <h2 className="page-title" style={{ fontWeight: "bold" }}>
          Peminta
        </h2>

        <div className="card" style={{ overflow: "hidden" }}>
          <div className="d-flex" style={{ minHeight: "calc(100vh - 200px)" }}>
            <div style={{ width: "100%" }}>
              <PagedNumber fetchData={fetchRequester} items={renderItem}>
                {({ renderItem }) => (
                  <>
                    <div className={commonClass.stickyTableContainer}>
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
  );
};

export default Requester;
