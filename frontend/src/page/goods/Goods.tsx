import { useAppDispatch } from "@/hooks/useRedux";
import goodsApi from "@/req/goods";
import { FC, useRef, useState } from "react";
import * as Model from "@/req/goods/goods.model";
import PagedNumber, { PagedNumberRef } from "@/component/pagednumber/PagedNumber";
import PagedFilters from "@/component/pagednumber/PagedFilters";
import TextField from "@/component/form/TextField/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import useCommonStyle from "@/component/style/common.style";
import Button from "@/component/button/Button";
import GoodsHistory from "./GoodsHistory";
import useStyle from "./Goods.styles";
import Form from "@/component/form/Form";
import action from "@/redux/reduceraction";
import * as yup from "yup";

const validationObj = yup.object({
  unit: yup.string().required(),
  stock: yup.number().required().min(1),
  name: yup.string().required(),
});

const Goods: FC = () => {
  const dispatch = useAppDispatch();
  const { classes: commonClass } = useCommonStyle();
  const [activeGoodsHistory, setActiveGoodsHistory] = useState({} as Model.GoodsData);
  const [activeGoods, setActiveGoods] = useState({} as Model.GoodsData);
  const [activeType, setActiveType] = useState<"add" | "edit">("add");
  const pagedNumberRef = useRef<PagedNumberRef>(null);
  const goodsContainerRef = useRef<HTMLDivElement>(null);

  const fetchGoods = (metadata: { limit: number; page: number }, filter: Record<string, any>) => {
    const usedFilter = { ...metadata, ...filter };
    return dispatch(goodsApi.getGoods(usedFilter));
  };

  const { classes } = useStyle();

  const changeActiveGoodsHistory = (data: Model.GoodsData) => {
    setActiveGoodsHistory(data);
    if (data.uuid) goodsContainerRef.current?.classList.add(classes.goodsNonActive);
    else goodsContainerRef.current?.classList.remove(classes.goodsNonActive);
  };

  const toggleModal = () => {
    // @ts-ignore
    const myModal = new bootstrap.Modal(document.getElementById("goodsModal"), {
      keyboard: false,
    });
    myModal.toggle();
  };

  const openFormModal = (data = {} as unknown as Model.GoodsData) => {
    setActiveGoods(data);
    setActiveType(data.uuid ? "edit" : "add");
    toggleModal();
  };

  const onSubmit = ({ name, stock, unit }: Model.GoodsData) => {
    dispatch(action.ui.showLoading());
    const payload = {
      unitName: unit,
      name,
      stock,
    };
    if (activeType === "add") return submitAdd(payload);
    else return submitEdit(payload);
  };

  const submitAdd = (data: { name: string; unitName: string; stock: number }) => {
    dispatch(goodsApi.addGoods(data)).then((res) => {
      dispatch(action.ui.dismissLoading());
      if (res.data) {
        dispatch(action.ui.showStatusModal({ message: `${name} berhasil ditambahkan`, type: "success" }));
        pagedNumberRef.current?.saveFilter({});
      } else dispatch(action.ui.showStatusModal({ message: res.message[0], type: "error" }));
    });
  };

  const submitEdit = (data: { name: string; unitName: string; stock: number }) => {
    dispatch(goodsApi.updateGoods(activeGoods.uuid, data)).then((res) => {
      dispatch(action.ui.dismissLoading());
      if (res.data) {
        dispatch(action.ui.showStatusModal({ message: "Barang berhasil update", type: "success" }));
        pagedNumberRef.current?.saveFilter({});
      } else dispatch(action.ui.showStatusModal({ message: res.message[0], type: "error" }));
    });
  };

  const onDeleteGoods = (data: Model.GoodsData) => {
    dispatch(
      action.ui.showConfirmation({
        message: `Apakah anda yakin ingin menghapus ${data.name}?`,
        onConfirm: () => deleteGoods(data),
      })
    );
  };

  const deleteGoods = (data: Model.GoodsData) => {
    dispatch(action.ui.showLoading());
    dispatch(goodsApi.deleteGoods(data.uuid)).then((res) => {
      dispatch(action.ui.dismissLoading());
      if (res.data) {
        dispatch(action.ui.showStatusModal({ message: `${data.name} berhasil dihapus`, type: "success" }));
        pagedNumberRef.current?.saveFilter({});
      } else dispatch(action.ui.showStatusModal({ message: res.message[0], type: "error" }));
    });
  };

  const renderGoodsItem = (dat: Model.GoodsData, key: number) => {
    return (
      <tr key={key}>
        <td className={`${commonClass.commonTd}`} style={{ minWidth: "150px" }}>
          <p>Nama</p>
          <p>{dat.name}</p>
        </td>
        <td className={`${commonClass.commonTd}`} style={{ minWidth: "150px" }}>
          <p>Stock</p>
          <p>
            {dat.stock} {dat.unit}
          </p>
        </td>
        <td className={`${commonClass.stickyTableRight}`}>
          <div className="d-flex justify-content-end" style={{ gap: "5px", marginTop: "4px" }}>
            <Button className="btn btn-info" onClick={() => changeActiveGoodsHistory(dat)}>
              Riwayat
            </Button>
            <Button className="btn btn-outline-info" onClick={() => openFormModal(dat)}>
              <FontAwesomeIcon icon={faEdit} />
            </Button>

            <Button className="btn btn-outline-danger" onClick={() => onDeleteGoods(dat)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div style={{ paddingTop: "15px" }}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h2 className="page-title" style={{ fontWeight: "bold" }}>
            Barang
          </h2>

          <Button className="btn btn-info" onClick={() => openFormModal()}>
            <p className="m-0">Tambah Barang</p>
          </Button>
        </div>

        <div className="card" style={{ overflow: "hidden" }}>
          <div className="d-flex" style={{ minHeight: "calc(100vh - 200px)" }}>
            <div ref={goodsContainerRef} className={classes.goodsContainer}>
              <PagedNumber ref={pagedNumberRef} urlTrack={false} fetchData={fetchGoods} items={renderGoodsItem}>
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
                    <div className={`${commonClass.stickyTableContainer} ${classes.mainTable}`}>
                      <table className="table">
                        <tbody>{renderItem()}</tbody>
                      </table>
                    </div>
                  </>
                )}
              </PagedNumber>
            </div>
            <GoodsHistory
              activeGoods={activeGoodsHistory}
              onRemoveActive={() => changeActiveGoodsHistory({} as unknown as Model.GoodsData)}
            />
          </div>
        </div>
      </div>

      <div className="modal fade" id="goodsModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-bottom">
              <h5 className="modal-title" id="exampleModalLabel">
                {activeType === "edit" ? `Edit ${activeGoods.name}` : "Tambah Barang"}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <Form
              validation={validationObj}
              defaultValues={activeGoods}
              onSubmit={onSubmit}
              key={activeGoods.uuid || "1"}
            >
              <div className="modal-body">
                <div>
                  <p className="m-0">Nama Barang</p>
                  <TextField className="form-control" field="name" placeholder="" />
                </div>
                <div className="mt-2">
                  <p className="m-0">Stok</p>
                  <TextField className="form-control" field="stock" type="number" placeholder="" />
                </div>
                <div className="mt-2">
                  <p className="m-0">Satuan</p>
                  <TextField className="form-control" field="unit" placeholder="" />
                </div>
              </div>
              <div className="modal-footer border-top">
                <Button className="btn btn-info">Simpan</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goods;
