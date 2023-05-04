import React, { useRef, useState } from "react";
import useStyle from "./Request.styles";
import logo from "@/assets/images/logo.png";
import Form, { FormRef } from "@/component/form/Form";
import TextField from "@/component/form/TextField/TextField";
import SelectField from "@/component/form/SelectField/SelectField";
import dayjs from "dayjs";
import { useAppDispatch } from "@/hooks/useRedux";
import goodsApi from "@/req/request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import requestApi from "@/req/request";
import action from "@/redux/reduceraction";
import { useNavigate } from "react-router-dom";
import routes from "@/const/routes";

const Request: React.FC = () => {
  const { classes } = useStyle();
  const [isBorrow, setIsBorrow] = useState(false);
  const [pickUpDate, setPickUpDate] = useState<string | undefined>();
  const [goodsOption, setGoodsOption] = useState<{ value: string; label: string }[]>([]);
  const [optionsLength, setOptionsLength] = useState(1);
  const [requestType, setRequestType] = useState("");
  const dispatch = useAppDispatch();
  const lastFieldIdx = useRef(1);
  const [goodsFieldIdx, setGoodsFieldIdx] = useState([1]);
  const navigate = useNavigate();
  const formRef = useRef<FormRef>(null);

  const submitVal = (values: Record<string, string>) => {
    const { name, phoneNumber, pickUpDate, requestType, returnDate, ...restGoods } = values;
    const goodsObj: Record<string, number> = {};
    for (const goodsKey in restGoods) {
      const amount = parseInt(restGoods[`${goodsKey}-amount`] || "0");
      if (!amount) continue;
      if (!goodsOptionSetRef.current.has(restGoods[goodsKey])) {
        dispatch(action.ui.showStatusModal({ type: "error", message: "Mohon periksa barang yang anda pilih" }));
        return;
      }
      goodsObj[restGoods[goodsKey]] = amount;
    }
    const goodsArr: { id: string; amount: number }[] = [];
    for (const id in goodsObj) goodsArr.push({ id, amount: goodsObj[id] });
    dispatch(action.ui.showLoading());
    dispatch(
      requestApi.createRequest({
        name,
        phoneNumber,
        pickUpDate,
        requestType,
        goods: goodsArr,
        returnDate,
      })
    ).then((res) => {
      dispatch(action.ui.dismissLoading());
      if (res.data) {
        navigate(routes.requestSuccess, {
          state: res.data,
        });
      } else dispatch(action.ui.showStatusModal({ type: "error", message: res.message[0] }));
    });
  };

  const onChangeVal = (values: any) => {
    setIsBorrow(values.requestType === "BORROW");
    setPickUpDate(values.pickUpDate);
  };

  const goodsOptionRef = useRef<typeof goodsOption>([]);
  const goodsOptionSetRef = useRef(new Set<string>());

  const requestGoodsOfType = (type: string) => {
    formRef.current?.unRegister(
      goodsFieldIdx.reduce((acc, v) => [...acc, `${v}goods`, `${v}goods-amount`], [] as string[])
    );
    setRequestType(type);
    setGoodsFieldIdx([++lastFieldIdx.current]);
    dispatch(goodsApi.allGoods(type)).then((res) => {
      if (res.data) {
        const valueSet = new Set<string>();
        const options = res.data.map((v) => {
          valueSet.add(v.uuid);
          return { label: v.name, value: v.uuid };
        });
        setOptionsLength(res.data.length);
        goodsOptionRef.current = options;
        goodsOptionSetRef.current = valueSet;
        goodsValObj.current = {};
        goodsValSet.current = new Set();
        setGoodsOption(options);
      }
    });
  };

  const goodsValObj = useRef<Record<string, { value: string; label: string }>>({});
  const goodsValSet = useRef(new Set<string>());

  const getOptions = (fieldName: string) => {
    const options = goodsOptionRef.current.filter(
      (v) => !goodsValSet.current.has(v.value) || v.value === goodsValObj.current[fieldName]?.value
    );
    return options;
  };

  const onChangeDropdownVal = (field: string, value: string) => {
    if (!!value) {
      if (goodsValObj.current[field]) {
        goodsValSet.current.delete(goodsValObj.current[field].value);
      }
      goodsValObj.current[field] = goodsOptionRef.current.find((v) => v.value === value) as {
        value: string;
        label: string;
      };
      goodsValSet.current.add(value);
    } else {
      if (goodsValObj.current[field]) {
        goodsValSet.current.delete(goodsValObj.current[field].value);
        // @ts-ignore
        goodsValObj.current[field] = undefined;
      }
    }
    setGoodsOption(goodsOptionRef.current.filter((v) => !goodsValSet.current.has(v.value)));
  };

  const addNewGoods = () => {
    setGoodsFieldIdx((c) => c.concat(++lastFieldIdx.current));
  };

  const onRemoveGoods = (index: number, field: string) => {
    setGoodsFieldIdx((c) => c.slice(0, index).concat(c.slice(index + 1)));
    onChangeDropdownVal(field, "");
  };

  return (
    <div className={`${classes.container}`}>
      <Form ref={formRef} onSubmit={submitVal} className="form-horizontal mt-3 form-material" onChange={onChangeVal}>
        <div className={`card  ${classes.topCard} ${classes.card}`}>
          <div className="card-body">
            <div className="d-flex">
              <div style={{ flexShrink: 0 }}>
                <img src={logo} alt="logo" style={{ width: "120px" }} />
              </div>
              <div style={{ marginLeft: "10px" }}>
                <h2>IPBI Warehouse</h2>
                <p>Please fill all the form below in order to request goods from IPBI warehouse</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`card ${classes.card}`}>
          <div className="card-body">
            <p className={classes.cardTitle}>Nomor Telepon</p>
            <TextField
              field="phoneNumber"
              type="number"
              className="form-control"
              placeholder="Nomor telepon..."
              parentProps={{
                className: "input-group mb-3",
              }}
            />
          </div>
        </div>
        <div className={`card ${classes.card}`}>
          <div className="card-body">
            <p className={classes.cardTitle}>Nama</p>
            <TextField
              field="name"
              type="text"
              className="form-control"
              placeholder="Nama..."
              parentProps={{
                className: "input-group mb-3",
              }}
            />
          </div>
        </div>

        <div className={`card ${classes.card}`}>
          <div className="card-body">
            <p className={classes.cardTitle}>Tipe Request</p>
            <SelectField
              placeholder="Pilih tipe request..."
              onExternalChange={requestGoodsOfType}
              options={[
                {
                  label: "Peminjaman",
                  value: "BORROW",
                },
                {
                  label: "Pengambilan",
                  value: "TAKE",
                },
              ]}
              field="requestType"
              className="form-control"
              parentProps={{
                className: "input-group mb-3",
              }}
            />
          </div>
        </div>

        <div className={`card ${classes.card}`}>
          <div className="card-body">
            <p className={classes.cardTitle}>Barang</p>
            {goodsFieldIdx.map((idx, key) => (
              <div key={key} className="d-flex align-items-center" style={{ gap: "10px" }}>
                <div className="row" style={{ flex: "auto" }}>
                  <div className="col-6">
                    <SelectField
                      className="form-control"
                      placeholder="Pilih Barang..."
                      // @ts-ignore
                      onExternalChange={(val) => onChangeDropdownVal(`${idx}goods`, val)}
                      parentProps={{
                        className: "input-group mb-3",
                      }}
                      field={`${idx}goods`}
                      options={getOptions(`${idx}goods`)}
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      field={`${idx}goods-amount`}
                      required
                      className="form-control"
                      type="number"
                      placeholder="Jumlah..."
                    />
                  </div>
                  {!requestType && (
                    <div className="col-12">
                      <p className="m-0 text-danger">Silahkan pilih tipe request terlebih dahulu</p>
                    </div>
                  )}
                </div>
                <div
                  role="button"
                  onClick={() => (key > 0 ? onRemoveGoods(key, `${idx}goods`) : null)}
                  style={{ transform: "translate(0, -13px)" }}
                >
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-danger"
                    style={{ fontSize: "22px", opacity: key > 0 ? 1 : 0 }}
                  />
                </div>
              </div>
            ))}
            {goodsFieldIdx.length < optionsLength && (
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-outline-secondary" onClick={addNewGoods}>
                  Tambah
                </button>
              </div>
            )}
          </div>
        </div>

        <div className={`card ${classes.card}`}>
          <div className="card-body">
            <p className={classes.cardTitle}>Tanggal Pengambilan</p>
            <TextField type="date" min={dayjs().format("YYYY-MM-DD")} className="form-control" field="pickUpDate" />
          </div>
        </div>
        {isBorrow && (
          <div className={`card ${classes.card}`}>
            <div className="card-body">
              <p className={classes.cardTitle}>Tanggal Pengembalian</p>
              <TextField
                type="date"
                min={!!pickUpDate ? pickUpDate : undefined}
                className="form-control"
                field="returnDate"
              />
            </div>
          </div>
        )}
        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-info" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Request;
