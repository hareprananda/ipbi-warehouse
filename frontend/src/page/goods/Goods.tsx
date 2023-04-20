import { useAppDispatch } from "@/hooks/useRedux";
import goodsApi from "@/req/goods";
import React, { useEffect, useState } from "react";
import * as Model from "@/req/goods/goods.model";
import PagedNumber from "@/component/pagednumber/PagedNumber";
import PagedFilters from "@/component/pagednumber/PagedFilters";
import TextField from "@/component/form/TextField/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import useStyle from "./Goods.styles";
import useCommonStyle from "@/component/style/common.style";
import Button from "@/component/button/Button";

const Goods: React.FC = () => {
  const dispatch = useAppDispatch();
  const { classes } = useStyle();
  const { classes: commonClass } = useCommonStyle();

  const fetchGoods = (metadata: { limit: number; page: number }, filter: Record<string, any>) => {
    const usedFilter = { ...metadata, ...filter };
    return dispatch(goodsApi.getGoods(usedFilter));
  };

  const items = (dat: Model.GoodsData, key: number) => {
    return (
      <tr key={key}>
        <td className={`${commonClass.commonTd}`}>
          <p>Nama</p>
          <p>{dat.name}</p>
        </td>
        <td className={`${commonClass.commonTd}`}>
          <p>Stock</p>
          <p>
            {dat.stock} {dat.unit}
          </p>
        </td>
        <td>
          <div className="d-flex" style={{ gap: "5px", marginTop: "4px" }}>
            <Button className="btn btn-outline-info">View</Button>
            <Button className="btn btn-info">
              <FontAwesomeIcon icon={faEllipsisV} />
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
          Barang
        </h2>

        <div className="card" style={{ overflow: "hidden" }}>
          <div className="d-flex" style={{ minHeight: "calc(100vh - 200px)" }}>
            <div style={{ minWidth: "450px" }}>
              <PagedNumber urlTrack={false} fetchData={fetchGoods} items={items}>
                {({ renderItem }) => (
                  <>
                    <PagedFilters>
                      <div className="row align-items-center">
                        <div className="col-3">
                          <p className="m-0">Nama :</p>
                        </div>
                        <div className="col-9">
                          <TextField field="name" className="form-control" placeholder="Nama..." />
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-info ml-auto">Submit</button>
                      </div>
                    </PagedFilters>
                    <table className="table">
                      <tbody>{renderItem()}</tbody>
                    </table>
                  </>
                )}
              </PagedNumber>
            </div>
            <div className={classes.historySection}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goods;
