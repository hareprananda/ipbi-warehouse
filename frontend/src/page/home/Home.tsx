import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks/useRedux";
import goodsApi from "@/req/goods";
import { RecentChange } from "@/req/goods/goods.model";
import useStyle from "./Home.styles";
import colors from "@/const/colors";
import CalendarSection from "./CalendarSection";
import requestApi from "@/req/request";
import * as ReqModel from "@/req/request/request.model";
import action from "@/redux/reduceraction";
import { idDayJs } from "@/config/helper";
import StatusFlag from "@/component/status/StatusFlag";
import useCommonStyle from "@/component/style/common.style";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [recentChange, setRecentChange] = useState<RecentChange>([]);
  const [pendingReq, setPendingReq] = useState<ReqModel.PendingRequest>([]);
  const [pendingLoading, setPendingLoading] = useState(false);
  const { classes } = useStyle();
  const { classes: commonClass } = useCommonStyle();

  useEffect(() => {
    dispatch(goodsApi.recentGoods()).then((res) => {
      if (res.data) {
        setRecentChange(res.data);
      }
    });

    setPendingLoading(true);
    dispatch(requestApi.getPending()).then((res) => {
      setPendingLoading(false);
      if (res.data) {
        setPendingReq(res.data);
      } else dispatch(action.ui.showStatusModal({ message: res.message[0], type: "error" }));
    });
  }, []);

  return (
    <div style={{ paddingTop: "15px" }}>
      <div className="container-fluid">
        <h2 className="page-title" style={{ fontWeight: "bold" }}>
          Home
        </h2>
        <h3 className="text-secondary">Perubahan Terbaru</h3>
        <div className="row g-3">
          <div className="col-lg-3 col-md-6">
            <div className="card position-relative m-0" style={{ overflow: "hidden" }}>
              <div className={classes.recentCardAccent} style={{ backgroundColor: colors.primary }} />
              <div className="card-body" style={{ padding: "15px" }}>
                <div className="d-flex justify-content-between align-items-end" style={{ gap: "10px" }}>
                  <div>
                    <span className="text-secondary" style={{ fontSize: "12px" }}>
                      Nama Barang:
                    </span>
                    <h4 className="card-title mb-0">{recentChange[0]?.name}</h4>
                  </div>
                  <div>
                    <h4 className="card-title mb-0">
                      {recentChange[0]?.stock} {recentChange[0]?.unit}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card position-relative m-0" style={{ overflow: "hidden" }}>
              <div className={classes.recentCardAccent} style={{ backgroundColor: colors.success }} />
              <div className="card-body" style={{ padding: "15px" }}>
                <div className="d-flex justify-content-between align-items-end" style={{ gap: "10px" }}>
                  <div>
                    <span className="text-secondary" style={{ fontSize: "12px" }}>
                      Nama Barang:
                    </span>
                    <h4 className="card-title mb-0">{recentChange[1]?.name}</h4>
                  </div>
                  <div>
                    <h4 className="card-title mb-0">
                      {recentChange[1]?.stock} {recentChange[1]?.unit}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card position-relative m-0" style={{ overflow: "hidden" }}>
              <div className={classes.recentCardAccent} style={{ backgroundColor: colors.danger }} />
              <div className="card-body" style={{ padding: "15px" }}>
                <div className="d-flex justify-content-between align-items-end" style={{ gap: "10px" }}>
                  <div>
                    <span className="text-secondary" style={{ fontSize: "12px" }}>
                      Nama Barang:
                    </span>
                    <h4 className="card-title mb-0">{recentChange[2]?.name}</h4>
                  </div>
                  <div>
                    <h4 className="card-title mb-0">
                      {recentChange[2]?.stock} {recentChange[2]?.unit}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card position-relative m-0" style={{ overflow: "hidden" }}>
              <div className={classes.recentCardAccent} style={{ backgroundColor: colors.purple }} />
              <div className="card-body" style={{ padding: "15px" }}>
                <div className="d-flex justify-content-between align-items-end" style={{ gap: "10px" }}>
                  <div>
                    <span className="text-secondary" style={{ fontSize: "12px" }}>
                      Nama Barang:
                    </span>
                    <h4 className="card-title mb-0">{recentChange[3]?.name}</h4>
                  </div>
                  <div>
                    <h4 className="card-title mb-0">
                      {recentChange[3]?.stock} {recentChange[3]?.unit}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CalendarSection />
          <div className="col-12 col-lg-4">
            <div className="card  m-0">
              <div className="border-bottom" style={{ padding: "14px 16px" }}>
                <h5 className="card-title m-0" style={{ fontWeight: 500 }}>
                  Goods
                </h5>
              </div>
              <div className={`card-body ${classes.goodsCardBody}`}>
                <table className={`table ${classes.goodsTable}`}>
                  <thead>
                    <tr>
                      <th scope="col">Barang</th>
                      <th scope="col">Stock</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentChange.map((goods, idx) => (
                      <tr key={idx}>
                        <td style={{ paddingLeft: "16px" }}>{goods.name}</td>
                        <td>
                          {goods.stock} {goods.unit}
                        </td>
                        <td style={{ paddingRight: "16px" }}>
                          <button
                            className="btn btn-outline-info"
                            style={{ fontSize: "13px", borderRadius: "9px", padding: "8px 12px" }}
                          >
                            History
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {recentChange.length > 0 && (
                  <div className="d-flex justify-content-center my-2">
                    <button className="btn btn-info" style={{ fontSize: "13px" }}>
                      Lihat lebih
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="border-bottom" style={{ padding: "14px 16px" }}>
                <h5 className="card-title m-0" style={{ fontWeight: 500 }}>
                  Pending Request
                </h5>
              </div>
              <div className={`card-body`}>
                <div className={commonClass.stickyTableContainer}>
                  {!pendingLoading && !pendingReq && <p className="m-0">Belum ada pending request</p>}
                  <table className={`table ${classes.pendingTable} `}>
                    <tbody>
                      {pendingReq.map((req, idx) => (
                        <tr key={idx}>
                          <td className={commonClass.stickyTableTd}>
                            <div>
                              <p>Nama</p>
                              <p>{req.name}</p>
                            </div>
                          </td>
                          <td className={commonClass.stickyTableTd}>
                            <div>
                              <p>Tipe</p>
                              <p>{req.type}</p>
                            </div>
                          </td>
                          <td className={commonClass.stickyTableTd}>
                            <div>
                              <p>Pengambilan</p>
                              <p>{idDayJs(req.takeDate).format("DD MMMM YYYY")}</p>
                            </div>
                          </td>
                          <td className={commonClass.stickyTableTd}>
                            <div>
                              <p>Pengembalian</p>
                              <p>{!req.returnDate ? "-" : idDayJs(req.returnDate).format("DD MMMM YYYY")}</p>
                            </div>
                          </td>

                          <td className={commonClass.stickyTableTd}>
                            <div>
                              <p>Dibuat</p>
                              <p>{idDayJs(req.createdAt).format("DD MMMM YYYY")}</p>
                            </div>
                          </td>

                          <td className={commonClass.stickyTableTd}>
                            <div>
                              <p>Status</p>
                              <StatusFlag status={req.status} />
                            </div>
                          </td>
                          <td className={commonClass.stickyTableRight}>
                            <button
                              style={{ fontSize: "13px", borderRadius: "9px", padding: "8px 12px" }}
                              className="btn btn-outline-info"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {pendingReq.length > 0 && (
                  <div className="d-flex justify-content-center my-2">
                    <button className="btn btn-info" style={{ fontSize: "13px" }}>
                      Lihat lebih
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
