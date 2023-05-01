import React, { PropsWithChildren, useContext, useEffect, useRef, useState } from "react";
import { PagedNumberCtx } from "./PagedNumber";
import Form from "../form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";
import useStyle from "./PagedFilters.styles";

interface Props extends PropsWithChildren {
  filterLabel?: (labelObj: Record<string, string>) => Record<string, string>;
  otherButton?: JSX.Element;
}

const PagedFilters: React.FC<Props> = ({ children, filterLabel, otherButton }) => {
  const PNContext = useContext(PagedNumberCtx);
  const [openPopover, setOpenPopover] = useState(false);
  const [hideEl, setHideEl] = useState(true);
  const { classes } = useStyle();
  const popoverRef = useRef<HTMLDivElement>(null);

  const [appliedFilter, setAppliedFilter] = useState<Record<string, any>>({});

  const setFilterFromUrl = () => {
    const filterParamsKey = PNContext.queryParamsPrefix ? `${PNContext.queryParamsPrefix}_filter` : "filter";
    const queryParamsIns = new URLSearchParams(window.location.search);
    const filterString = queryParamsIns.get(filterParamsKey) as string;
    let filterObj: Record<string, any> = {};
    if (filterString) {
      filterObj = decodeURIComponent(filterString)
        .split(";")
        .reduce((acc, v) => {
          const [key, value] = v.split(":");
          acc[key] = value;
          return acc;
        }, {} as Record<string, any>);
    }
    setAppliedFilter(filterObj);
  };

  useEffect(() => {
    if (PNContext.popStateTrigger === 1) return;
    setFilterFromUrl();
  }, [PNContext.popStateTrigger]);

  useEffect(() => {
    if (PNContext.urlTrack) setFilterFromUrl();
  }, []);

  useEffect(() => {
    if (openPopover) return setHideEl(false);
    popoverRef.current?.classList.remove(classes.popoverActive);
    setTimeout(() => {
      setHideEl(true);
    }, 500);
  }, [openPopover]);

  useEffect(() => {
    if (hideEl) return;
    popoverRef.current?.classList.add(classes.popoverActive);
  }, [hideEl]);

  const submitForm = (val: Record<string, any>) => {
    for (const key in val) if (!val[key].trim()) delete val[key];
    setOpenPopover(false);
    setAppliedFilter(val);
    PNContext.submitFilter(val);
  };

  const removeFilter = (excludedKey: string) => {
    const finalResult = {} as Record<string, any>;
    for (const key in appliedFilter) {
      if (key === excludedKey) continue;
      finalResult[key] = appliedFilter[key];
    }
    setAppliedFilter(finalResult);
    PNContext.submitFilter(finalResult);
  };

  const renderChips = () => {
    const contentArr = [] as JSX.Element[];
    const filterLabelObj = filterLabel ? filterLabel({ ...appliedFilter }) : appliedFilter;
    for (const key in filterLabelObj) {
      contentArr.push(
        <div key={key} className={classes.chips}>
          <p className="m-0">
            {key} : {filterLabelObj[key]}
          </p>
          <FontAwesomeIcon icon={faTimes} role="button" onClick={() => removeFilter(key)} />
        </div>
      );
    }
    return contentArr;
  };

  const chipsArr = renderChips();

  return (
    <>
      <div className="position-relative">
        <div className="p-2 border-bottom d-flex justify-content-between align-items-center">
          <button className={`btn btn-outline-secondary ${classes.filterButton}`} onClick={() => setOpenPopover(true)}>
            <div className="d-flex align-items-center gap-1">
              <FontAwesomeIcon icon={faFilter} style={{ fontSize: "15px" }} />
              <p className="m-0" style={{ fontSize: "15px" }}>
                Filter
              </p>
            </div>
          </button>
          {otherButton}
        </div>
        {!!chipsArr.length && <div className={`p-2 ${classes.appliedFilterContainer}`}>{chipsArr}</div>}
        {!hideEl && (
          <div ref={popoverRef} className={`card ${classes.popover}`}>
            <div className="card-body p-3">
              <Form defaultValues={appliedFilter} onSubmit={submitForm} className="form-horizontal form-material">
                {children}
              </Form>
            </div>
          </div>
        )}
      </div>
      {openPopover && <div className={classes.overlay} onClick={() => setOpenPopover(false)} />}
    </>
  );
};

export default PagedFilters;
