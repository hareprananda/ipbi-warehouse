import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import useStyle from "./Calendar.styles";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "@/hooks/useRedux";
import requestApi from "@/req/request";
import * as Model from "@/req/request/request.model";
import action from "@/redux/reduceraction";
import lang from "@/const/lang";
import { idDayJs } from "@/config/helper";
import colors from "@/const/colors";
import StatusFlag from "@/component/status/StatusFlag";

const CalendarSection: React.FC = () => {
  const { classes } = useStyle();
  const dispatch = useAppDispatch();
  const [activeTile, setActiveTile] = useState(dayjs().format("YYYY-MM-DD"));
  const [eventMonth, setEventMonth] = useState<Record<string, string>>({});
  const [eventMonthLoading, setEventMonthLoading] = useState(false);
  const [dailyEvent, setDailyEvent] = useState<Model.DailyEvent>([]);
  const [dailyLoading, setDailyLoading] = useState(false);
  const [activeEventIdx, setActiveEventIdx] = useState(-1);
  const calendarRef = useRef<Calendar>(null);

  const fetchEvent = (month: string) => {
    setEventMonthLoading(true);
    dispatch(requestApi.eventMonth(month)).then((res) => {
      setEventMonthLoading(false);
      if (res.data) {
        setEventMonth(res.data);
      } else dispatch(action.ui.showStatusModal({ message: res.message[0], type: "error" }));
    });
  };

  useEffect(() => {
    calendarRef.current?.forceUpdate();
  }, [eventMonth]);

  const fetchMonthRef = useRef<NodeJS.Timeout | undefined>();

  const onChangeMonth = (month: string) => {
    clearTimeout(fetchMonthRef.current);
    setEventMonthLoading(true);
    fetchMonthRef.current = setTimeout(() => {
      fetchEvent(month);
    }, 500);
  };

  const fetchEventDate = (date: string) => {
    setDailyLoading(true);
    dispatch(requestApi.eventDaily(date)).then((res) => {
      setDailyLoading(false);
      if (res.data) {
        setDailyEvent(res.data);
      } else dispatch(action.ui.showStatusModal({ type: "error", message: res.message[0] }));
    });
  };

  useEffect(() => {
    fetchEvent(activeTile.slice(0, 7));
  }, []);

  useEffect(() => {
    fetchEventDate(activeTile);
  }, [activeTile]);

  return (
    <>
      <div className="col-12 col-lg-8">
        <div className={`card ${classes.cardContainer}`}>
          <div className={classes.calendarContainer}>
            {eventMonthLoading && (
              <div className={`${classes.calendarLoader}`}>
                <div className={`spinner-border text-primary `} role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
            <Calendar
              onActiveStartDateChange={({ activeStartDate }) =>
                onChangeMonth(dayjs(activeStartDate).format("YYYY-MM-DD"))
              }
              ref={calendarRef}
              locale="id"
              next2Label={null}
              prev2Label={null}
              view="month"
              nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
              prevLabel={<FontAwesomeIcon icon={faChevronLeft} />}
              onChange={(val) => setActiveTile(dayjs(val as unknown as string).format("YYYY-MM-DD"))}
              className={classes.calendar}
              tileClassName={({ date, activeStartDate }) => {
                let className = "";
                if (dayjs(date).format("YYYY-MM-DD") === activeTile) className = classes.activeTile;
                else if (eventMonth[dayjs(date).format("YYYY-MM-DD")]) className = classes.tileEvent;
                else className = classes.tile;

                if (dayjs(date).get("month") !== activeStartDate.getMonth()) className += ` ${classes.otherMonth}`;
                return className;
              }}
            />
          </div>
          <div className={classes.descSection}>
            <p className={classes.descTitle}>{dayjs(activeTile).locale("id").format("DD MMMM YYYY")}</p>
            <div>
              {!dailyEvent.length && !dailyLoading && <p>Tidak ada event di tanggal ini</p>}
              {dailyLoading && <p>Mohon tunggu...</p>}
              {dailyEvent.map((event, key) => (
                <div
                  data-bs-toggle="modal"
                  data-bs-target="#dailyReqModal"
                  className={classes.dailyList}
                  onClick={() => setActiveEventIdx(key)}
                  key={key}
                  role="button"
                >
                  <div>
                    <p>{event.name}</p>
                    <p>
                      {activeTile === dayjs(event.returnDate).format("YYYY-MM-DD") ? "Pengembalian" : "Pengambilan"}{" "}
                    </p>
                  </div>
                  <StatusFlag status={event.status} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="dailyReqModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-md" style={{ maxWidth: "338px" }}>
          <div className="modal-content">
            <div className="modal-header border-bottom">
              <h5 className="modal-title" style={{ fontWeight: 500 }}>
                Request {dailyEvent[activeEventIdx]?.name}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ padding: "16px 0 0 0" }}>
              <p className={classes.detailSectionTitle} style={{ padding: "0 16px", color: "black" }}>
                Tipe: {lang[dailyEvent[activeEventIdx]?.type || ""]}
              </p>
              <div className={`row g-2 mt-1 ${classes.detailModalRow}`} style={{ padding: "0 16px" }}>
                <div className="col-6">
                  <div>
                    <p className={classes.detailSectionTitle}>Pengambilan</p>
                    <p className="m-0">{idDayJs(dailyEvent[activeEventIdx]?.takeDate).format("DD MMMM YYYY")}</p>
                  </div>
                </div>

                {dailyEvent[activeEventIdx]?.returnDate === "BORROW" && (
                  <div className="col-6">
                    <div>
                      <p className={classes.detailSectionTitle}>Pengembalian</p>
                      <p className="m-0">{idDayJs(dailyEvent[activeEventIdx]?.returnDate).format("DD MMMM YYYY")}</p>
                    </div>
                  </div>
                )}

                <div className="col-6">
                  <div>
                    <p className={classes.detailSectionTitle}>Status</p>
                    <StatusFlag status={dailyEvent[activeEventIdx]?.status || ""} />
                  </div>
                </div>

                <div className="col-6">
                  <div>
                    <p className={classes.detailSectionTitle}>Assign by</p>
                    <p className="m-0">{dailyEvent[activeEventIdx]?.assignBy}</p>
                  </div>
                </div>
              </div>
              <table className={`table ${classes.detailModalRow} ${classes.detailTable}`} style={{ marginBottom: "0" }}>
                <tbody>
                  {dailyEvent[activeEventIdx]?.goods.map((goods, idx) => (
                    <tr key={idx}>
                      <td style={{ paddingLeft: "16px" }}>
                        <div>
                          <p className="m-0">Item</p>
                          <p className="m-0" style={{ color: "black", fontWeight: 400 }}>
                            {goods.name}
                          </p>
                        </div>
                      </td>
                      <td style={{ paddingRight: "16px" }}>
                        <div>
                          <p className="m-0">Jumlah</p>
                          <p className="m-0" style={{ color: "black", fontWeight: 400 }}>
                            {Math.abs(parseInt(goods.quantity))} {goods.unit}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer" style={{ padding: "5px 12px" }}>
              <button
                type="button"
                className="btn "
                style={{ backgroundColor: colors.primary, color: colors.white }}
                data-bs-dismiss="modal"
              >
                Oke
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarSection;
