import Button from "@/component/button/Button";
import AutoCompleteField from "@/component/form/AutoCompleteField/AutoCompleteField";
import SelectField from "@/component/form/SelectField/SelectField";
import TextField from "@/component/form/TextField/TextField";
import PagedFilters from "@/component/pagednumber/PagedFilters";
import PagedNumber, { PagedNumberRef } from "@/component/pagednumber/PagedNumber";
import StatusFlag from "@/component/status/StatusFlag";
import useCommonStyle from "@/component/style/common.style";
import { idDayJs } from "@/config/helper";
import { statusOption } from "@/const/common";
import { useAppDispatch } from "@/hooks/useRedux";
import requestApi from "@/req/request";
import * as Model from "@/req/request/request.model";
import userApi from "@/req/user";
import React, { useEffect, useRef, useState } from "react";
import ManageReqDetail from "./ManageReqDetail";

const ManageReq: React.FC = () => {
  const dispatch = useAppDispatch();
  const { classes: commonClass } = useCommonStyle();
  const [managerOption, setManagerOption] = useState<{ label: string; value: string }[]>([]);

  const [activeData, setActiveData] = useState({} as Model.RequestData);
  const pagedNumberRef = useRef<PagedNumberRef>(null);

  const fetchReq = (metadata: { limit: number; page: number }, filter: Record<string, any>) => {
    const usedFilter = { ...metadata, ...filter };
    return dispatch(requestApi.getRequest(usedFilter));
  };

  const getAllManager = () => {
    dispatch(userApi.allManager()).then((res) => {
      if (res.data) setManagerOption(res.data.map((v) => ({ label: v.name, value: v.uuid })));
    });
  };

  useEffect(() => {
    getAllManager();
  }, []);

  const customFilterLabel = (obj: Record<string, string>) => {
    if (obj["assignBy"]) {
      obj["assignBy"] = managerOption.find((v) => v.value === obj["assignBy"])?.label as string;
    }
    return obj;
  };

  const refreshPagedNumber = () => {
    pagedNumberRef.current?.saveFilter({});
  };

  const renderItem = (data: Model.RequestData, key: number) => {
    return (
      <tr key={key}>
        <td style={{ minWidth: "140px" }} className={`${commonClass.commonTd} ${commonClass.stickyTableTd}`}>
          <p className="m-0">Request by</p>
          <p className="m-0">{data.requestby}</p>
        </td>
        <td style={{ minWidth: "140px" }} className={`${commonClass.commonTd} ${commonClass.stickyTableTd}`}>
          <p className="m-0">Assign by</p>
          <p className="m-0">{data.assignby}</p>
        </td>
        <td style={{ minWidth: "140px" }} className={`${commonClass.commonTd} ${commonClass.stickyTableTd}`}>
          <p className="m-0">Tanggal Ambil</p>
          <p className="m-0">{idDayJs(data.takeDate).format("DD MMM YYYY")}</p>
        </td>
        <td style={{ minWidth: "140px" }} className={`${commonClass.commonTd} ${commonClass.stickyTableTd}`}>
          <p className="m-0">Tanggal Kembali</p>
          <p className="m-0">{data.returnDate ? idDayJs(data.returnDate).format("DD MMM YYYY") : "_"}</p>
        </td>
        <td style={{ minWidth: "140px" }} className={`${commonClass.commonTd} ${commonClass.stickyTableTd}`}>
          <p className="m-0">Dibuat</p>
          <p className="m-0">{idDayJs(data.createdAt).format("DD MMM YYYY")}</p>
        </td>
        <td style={{ minWidth: "130px" }} className={`${commonClass.commonTd} ${commonClass.stickyTableTd}`}>
          <p className="m-0">Status</p>
          <StatusFlag status={data.status} />
        </td>
        <td className={commonClass.stickyTableRight}>
          <Button className="btn btn-info" style={{ marginTop: "6px" }} onClick={() => setActiveData(data)}>
            Detail
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div style={{ paddingTop: "15px" }}>
        <div className="container-fluid">
          <h2 className="page-title" style={{ fontWeight: "bold" }}>
            Request
          </h2>
          <div className="card">
            <div className="d-flex m-0" style={{ minHeight: "calc(100vh - 200px)" }}>
              <div style={{ width: "100%" }}>
                <PagedNumber ref={pagedNumberRef} fetchData={fetchReq} items={renderItem}>
                  {({ renderItem }) => (
                    <>
                      <PagedFilters filterLabel={customFilterLabel}>
                        <div className="row align-items-center">
                          <div className="col-4">
                            <p className="m-0">Nama :</p>
                          </div>
                          <div className="col-8">
                            <TextField field="name" className="form-control" placeholder="Nama..." />
                          </div>
                          <div className="col-4">
                            <p className="m-0">Tanggal Ambil :</p>
                          </div>
                          <div className="col-8">
                            <TextField type="date" field="takeDate" className="form-control" />
                          </div>
                          <div className="col-4">
                            <p className="m-0">Tanggal Kembali :</p>
                          </div>
                          <div className="col-8">
                            <TextField type="date" field="returnDate" className="form-control" />
                          </div>
                          <div className="col-4">
                            <p className="m-0">Status :</p>
                          </div>
                          <div className="col-8">
                            <SelectField
                              options={statusOption}
                              field="status"
                              className="form-control"
                              parentProps={{
                                className: "input-group",
                              }}
                            />
                          </div>
                          <div className="col-4">
                            <p className="m-0">Assign By :</p>
                          </div>
                          <div className="col-8">
                            <AutoCompleteField options={managerOption} field="assignBy" className="form-control" />
                          </div>
                        </div>
                        <div className="d-flex justify-content-end mt-3">
                          <Button className="btn btn-info ml-auto">Submit</Button>
                        </div>
                      </PagedFilters>

                      <div className={`${commonClass.stickyTableContainer}`}>
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
      <ManageReqDetail
        onChangeStatus={refreshPagedNumber}
        activeData={activeData}
        onResetData={() => setActiveData({} as Model.RequestData)}
      />
    </>
  );
};

export default ManageReq;
