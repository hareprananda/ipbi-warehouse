import React, { useEffect, useState } from "react";
import useStyle from "./Request.styles";
import logo from "@/assets/images/logo.png";
import Form from "@/component/form/Form";
import TextField from "@/component/form/TextField/TextField";
import SelectField from "@/component/form/SelectField/SelectField";
import dayjs from "dayjs";
import AutoCompleteField from "@/component/form/AutoCompleteField/AutoCompleteField";
import { useAppDispatch } from "@/hooks/useRedux";
import goodsApi from "@/req/request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Request: React.FC = () => {
  const { classes } = useStyle();
  const [isBorrow, setIsBorrow] = useState(false);
  const [pickUpDate, setPickUpDate] = useState<string | undefined>();
  const [goodsOption, setGoodsOption] = useState<{ value: string; label: string }[]>([]);
  const dispatch = useAppDispatch();
  const [goodsNumber, setGoodsNumber] = useState(1);

  const submitVal = (values: any) => {
    console.log();
  };

  const onChangeVal = (values: any) => {
    console.log(values);
    setIsBorrow(values.requestType === "BORROW");
    setPickUpDate(values.pickUpDate);
  };

  useEffect(() => {
    dispatch(goodsApi.allGoods()).then((res) => {
      if (res.data) {
        setGoodsOption(res.data.map((v) => ({ label: v.name, value: v.uuid })));
      }
    });
  }, []);

  return (
    <div className={`${classes.container}`}>
      <Form onSubmit={submitVal} className="form-horizontal mt-3 form-material" onChange={onChangeVal}>
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
              prefix="+62"
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
            {Array(goodsNumber)
              .fill(0)
              .map((_, idx) => (
                <div key={idx} className="d-flex align-items-center" style={{ gap: "10px" }}>
                  <div className="row" style={{ flex: "auto" }}>
                    <div className="col-6">
                      <AutoCompleteField
                        className="form-control"
                        placeholder="Pilih Barang..."
                        parentProps={{
                          className: "input-group mb-3",
                        }}
                        field="goods"
                        options={goodsOption}
                      />
                    </div>
                    <div className="col-6">
                      <TextField field="amount" className="form-control" type="number" placeholder="Jumlah..." />
                    </div>
                  </div>
                  <div role="button" style={{ transform: "translate(0, -13px)" }}>
                    <FontAwesomeIcon icon={faTimes} className="text-danger" style={{ fontSize: "22px" }} />
                  </div>
                </div>
              ))}
            <div className="d-flex justify-content-end">
              <button className="btn btn-outline-secondary" onClick={() => setGoodsNumber((c) => ++c)}>
                Tambah
              </button>
            </div>
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
      </Form>
    </div>
  );
};

export default Request;
