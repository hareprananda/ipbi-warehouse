import PagedNumber, { PagedNumberRef } from "@/component/pagednumber/PagedNumber";
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import * as Model from "@/req/goods/goods.model";
import useStyle from "./GoodsHistory.styles";
import useCommonStyle from "@/component/style/common.style";
import { idDayJs } from "@/config/helper";
import Button from "@/component/button/Button";
import { useAppDispatch } from "@/hooks/useRedux";
import goodsApi from "@/req/goods";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import StatusFlag from "@/component/status/StatusFlag";
interface Props {
  activeGoods: Model.GoodsData;
  onRemoveActive: () => void;
}

const GoodsHistory: React.FC<Props> = ({ activeGoods, onRemoveActive }) => {
  const { classes } = useStyle();
  const { classes: commonClass } = useCommonStyle();
  const dispatch = useAppDispatch();
  const goodsHistoryRef = useRef<PagedNumberRef>(null);
  const [activeData, setActiveData] = useState({} as Model.GoodsHistory);
  const location = useLocation();
  const navigate = useNavigate();

  const onPopState = useCallback(() => {
    if (window.screen.width > 992 || !activeGoods.uuid) return;
    onRemoveActive();
  }, [activeGoods]);

  useEffect(() => {
    if (activeGoods.uuid) {
      goodsHistoryRef.current?.saveFilter({});
      if (window.screen.width <= 992) window.history.pushState("", "", location.pathname + location.search);
    }

    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [activeGoods]);

  const fetchHistory = (metadata: { limit: number; page: number }) => {
    const activeId = activeGoods.uuid;
    return dispatch(goodsApi.goodsHistory(activeId, { page: metadata.page }));
  };

  const showDetailModal = (data: Model.GoodsHistory) => {
    setActiveData(data);
    // @ts-ignore
    const modal = new bootstrap.Modal(document.getElementById("detailHistoryModal"), {
      keyboard: false,
    });
    modal.show();
  };

  const renderHistoryItem = (dat: Model.GoodsHistory, key: number) => {
    return (
      <Fragment key={key}>
        <tr key={key} style={{ borderRadius: "10px" }}>
          <td style={{ minWidth: "120px" }} className={`${commonClass.commonTd} ${classes.historyList}`}>
            <p>Request by</p>
            <p>{dat.req?.requestBy || "-"}</p>
          </td>
          <td style={{ minWidth: "100px" }} className={`${commonClass.commonTd} ${classes.historyList}`}>
            <p>Assigned by</p>
            <p>{dat.assignby || "-"}</p>
          </td>
          <td style={{ minWidth: "115px" }} className={`${commonClass.commonTd} ${classes.historyList}`}>
            <p>Waktu</p>
            <p>{idDayJs(dat.updatedAt).format("DD MMMM YYYY")}</p>
          </td>
          <td style={{ minWidth: "105px" }} className={`${commonClass.commonTd} ${classes.historyList}`}>
            <p>Perubahan</p>
            <p className={`${dat.change < 0 ? "text-danger" : "text-success"}`}>{dat.change}</p>
          </td>
          <td style={{ minWidth: "100px" }} className={`${classes.historyList} ${commonClass.stickyTableRight}`}>
            <div>
              <Button className="btn btn-outline-info mt-1" onClick={() => showDetailModal(dat)}>
                View
              </Button>
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={5} style={{ padding: "3px 0" }} />
        </tr>
      </Fragment>
    );
  };

  const hideHistory = () => {
    if (window.screen.width > 992) return onRemoveActive();
    navigate(-1);
  };

  return (
    <>
      <div className={classes.historySection}>
        <div style={{ minWidth: "300px", width: "100%", height: "100%" }}>
          <div
            className="d-flex align-items-center"
            style={{ gap: "10px", padding: "13px", borderBottom: "1px solid white" }}
          >
            {window.screen.width < 992 && (
              <FontAwesomeIcon className={classes.backButton} icon={faArrowLeft} role="button" onClick={hideHistory} />
            )}
            <h4 className="m-0" style={{ fontSize: "16px" }}>
              History {activeGoods.name}
            </h4>
          </div>
          <div className="d-flex" style={{ minHeight: "calc(100% - 53.47px)", width: "100%" }}>
            <div style={{ overflow: "auto", width: "100%", padding: " 0px 10px" }}>
              <PagedNumber
                ref={goodsHistoryRef}
                urlTrack={false}
                fetchData={fetchHistory}
                items={renderHistoryItem}
                fetchInitial={false}
              >
                {({ renderItem }) => (
                  <div>
                    <table className={`table mt-2 `}>
                      <tbody>{renderItem()}</tbody>
                    </table>
                  </div>
                )}
              </PagedNumber>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="detailHistoryModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className={`modal-header border-bottom`}>
              <h5 className="modal-title" style={{ fontWeight: 500 }}>
                History Detail
              </h5>
              <button
                type="button"
                className="close"
                style={{ backgroundColor: "transparent", border: "none" }}
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className={`modal-body ${classes.modalContainer}`} style={{ padding: "0" }}>
              <table className="table" style={{ marginBottom: "6px" }}>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <p className="m-0" style={{ fontWeight: 500 }}>
                        Tipe: {activeData.req ? "Request" : "Update Admin"}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="m-0">Assign By</p>
                    </td>
                    <td>
                      <p className="m-0">{activeData.assignby}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="m-0">Perubahan</p>
                    </td>
                    <td>
                      <p className={`m-0 ${activeData.change < 0 ? "text-danger" : "text-success"}`}>
                        {activeData.change}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Waktu</td>
                    <td>
                      <p className="m-0">{idDayJs(activeData.updatedAt).format("DD MMMM YYYY")}</p>
                    </td>
                  </tr>

                  {activeData.req && (
                    <>
                      <tr>
                        <td colSpan={2}>
                          <p className="m-0" style={{ fontWeight: 500 }}>
                            Request Detail
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <p className="m-0">Nama</p>
                        </td>
                        <td>
                          <p className="m-0">{activeData.req.requestBy}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>Tipe</td>
                        <td>
                          <p className="m-0">{activeData.req.type}</p>
                        </td>
                      </tr>

                      <tr>
                        <td>Pengambilan</td>
                        <td>
                          <p className="m-0">{idDayJs(activeData.req.takeDate).format("DD MMMM YYYY")}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>Pengembalian</td>
                        <td>
                          <p className="m-0">
                            {" "}
                            {activeData.req.returnDate
                              ? idDayJs(activeData.req.returnDate).format("DD MMMM YYYY")
                              : "_"}
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <p className="m-0">Status</p>
                        </td>
                        <td>
                          <StatusFlag status={activeData.req.status} />
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
            <div className="modal-footer" style={{ padding: "0px 12px 6px" }}>
              <button type="button" data-bs-dismiss="modal" className={`btn btn-info`} style={{ padding: "6px 25px" }}>
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoodsHistory;
