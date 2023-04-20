import { ErrorResponse, SuccessResponse } from "@/req/index.d";
import { Pagination as PaginationType } from "@/req/globalType";
import React, { createContext, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useAppDispatch } from "@/hooks/useRedux";
import action from "@/redux/reduceraction";
import Pagination from "../pagination/Pagination";

interface Props {
  fetchData: (
    metadata: { limit: number; page: number },
    filter: Record<string, any>
  ) => Promise<SuccessResponse<PaginationType<any>> | ErrorResponse>;
  items: (data: any, key: number) => JSX.Element;
  itemsSkeleton?: (key: number) => JSX.Element;
  children: (props: { renderItem: () => JSX.Element[] }) => JSX.Element;
  urlTrack?: boolean;
  fetchInitial?: boolean;
  queryParamsPrefix?: string;
}

const OFFSET_LIMIT = 20;

type CtxType = {
  submitFilter: (filter: Record<string, any>) => void;
  urlTrack: boolean;
  queryParamsPrefix: string;
  popStateTrigger: number;
};

type PagedNumberRef = {
  saveFilter: (val: Record<string, any>) => void;
};

export const PagedNumberCtx = createContext<CtxType>({} as CtxType);

const PagedNumber = forwardRef<PagedNumberRef, Props>(
  ({ queryParamsPrefix, fetchData, items, children, itemsSkeleton, urlTrack, fetchInitial }, ref) => {
    const dispatch = useAppDispatch();
    const [data, setData] = useState<any[]>([]);
    const [metadata, setMetadata] = useState({ totalPage: 1, currentPage: 1 });
    const [loading, setLoading] = useState(false);
    const [popStateTrigger, setPopStateTrigger] = useState(1);

    const currentPage = useRef(1);
    const currentFilterString = useRef("");

    const currentFilterObj = useRef<Record<string, any>>({});

    const manageHistory = (page: number, pushHistory = true) => {
      if (!urlTrack) return;
      const pageKey = getPaginationKey();
      const { pathname, search } = window.location;
      let fullUrl = pathname + search;
      const pageRegex = new RegExp(`(&|\\?)${pageKey}=\\d+((?=&)|$)`, "g");
      const regexMatch = search.match(pageRegex);
      if (regexMatch) fullUrl = fullUrl.replace(pageRegex, `${regexMatch[0].slice(0, 1)}${pageKey}=${page}`);
      else {
        if (search) fullUrl += `&${pageKey}=${page}`;
        else fullUrl += `?${pageKey}=${page}`;
        window.history.replaceState(window.history.state, "", fullUrl.replace(/\d+$/g, "1"));
      }

      if (pushHistory) window.history.pushState({ data: queryParamsPrefix || "" }, "", fullUrl);
    };

    const fetch = () => {
      const filter = currentFilterObj.current;
      setLoading(true);
      fetchData({ limit: OFFSET_LIMIT, page: currentPage.current }, filter).then((res) => {
        setLoading(false);
        if (res.data) {
          setData(res.data.data);
          setMetadata(res.data.metadata);
        } else dispatch(action.ui.showStatusModal({ type: "error", message: res.message[0] }));
      });
    };

    const renderItem = () => {
      if (loading && itemsSkeleton) return renderSkeleton();
      return data.map(items);
    };

    const renderSkeleton = () => {
      return Array(8)
        .fill(0)
        .map((_, key) => itemsSkeleton?.(key)) as JSX.Element[];
    };

    useEffect(() => {
      const pageKey = getPaginationKey();
      const page = new URLSearchParams(window.location.search).get(pageKey) || "1";

      const filterParamsKey = queryParamsPrefix ? `${queryParamsPrefix}_filter` : "filter";

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
      currentFilterObj.current = filterObj;
      currentPage.current = parseInt(page);

      manageHistory(parseInt(page), false);
      if (fetchInitial) fetch();

      if (urlTrack) {
        window.addEventListener("popstate", onPopState);
        return () => {
          window.removeEventListener("popstate", onPopState);
        };
      }
    }, []);

    const getPaginationKey = () => {
      return queryParamsPrefix ? `${queryParamsPrefix}_page` : "page";
    };

    const saveFilter = (values: Record<string, any>, pushState = true) => {
      if (urlTrack) {
        const urlIns = new URLSearchParams(window.location.search);
        const { pathname } = window.location;
        const filterPrefix = queryParamsPrefix ? `${queryParamsPrefix}_filter` : "filter";
        const filterValue = Object.keys(values).reduce((acc, v) => {
          if (!values[v]) return acc;
          acc += `${v}:${values[v]};`;
          return acc;
        }, "");
        if (filterValue) {
          const encodedFilter = encodeURIComponent(filterValue.slice(0, filterValue.length - 1));
          currentFilterString.current = encodedFilter;
          urlIns.set(filterPrefix, encodedFilter);
        } else {
          urlIns.delete(filterPrefix);
          currentFilterString.current = "";
        }
        const pageKey = getPaginationKey();
        urlIns.set(pageKey, "1");
        const fullUrl = pathname + "?" + urlIns.toString();

        if (pushState) window.history.pushState({ data: queryParamsPrefix }, "", fullUrl);
      }
      currentFilterObj.current = values;
      currentPage.current = 1;
      fetch();
    };

    const onPageClick = (page: number) => {
      currentPage.current = page;
      if (!urlTrack) return fetch();

      const pageKey = getPaginationKey();
      const { pathname, search } = window.location;
      let fullUrl = pathname + search;
      const pageRegex = new RegExp(`(&|\\?)${pageKey}=\\d+((?=&)|$)`, "g");
      const regexMatch = search.match(pageRegex);
      if (regexMatch) fullUrl = fullUrl.replace(pageRegex, `${regexMatch[0].slice(0, 1)}${pageKey}=${page}`);
      else {
        if (search) fullUrl += `&${pageKey}=${page}`;
        else fullUrl += `?${pageKey}=${page}`;
        window.history.replaceState(window.history.state, "", fullUrl.replace(/\d+$/g, "1"));
      }

      if (urlTrack) window.history.pushState({ data: queryParamsPrefix || "" }, "", fullUrl);
      fetch();
    };

    const onPopState = () => {
      const urlIns = new URLSearchParams(window.location.search);
      const prefixKey = queryParamsPrefix || "";
      const filterKey = prefixKey ? `${prefixKey}_filter` : "filter";
      const paginationKey = getPaginationKey();
      const [page, filterString] = [urlIns.get(paginationKey) || "1", urlIns.get(filterKey) || ""];
      if (page === currentPage.current.toString() && filterString === currentFilterString.current) return;
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
      currentPage.current = parseInt(page as string);
      currentFilterString.current = filterString || "";
      setPopStateTrigger((c) => ++c);
      saveFilter(filterObj, false);
    };

    useImperativeHandle(ref, () => ({
      saveFilter,
    }));

    const contextValue = {
      submitFilter: saveFilter,
      urlTrack: !!urlTrack,
      queryParamsPrefix: queryParamsPrefix || "",
      popStateTrigger,
    };

    return (
      <PagedNumberCtx.Provider value={contextValue}>
        <div className="d-flex flex-column justify-content-between" style={{ height: "100%" }}>
          <div>{children({ renderItem })}</div>
          <div className="d-flex justify-content-center" style={{ flexShrink: 0 }}>
            <Pagination currentPage={metadata.currentPage} maxpage={metadata.totalPage} onClickPage={onPageClick} />
          </div>
        </div>
      </PagedNumberCtx.Provider>
    );
  }
);

PagedNumber.displayName = "PagedNumber";

PagedNumber.defaultProps = {
  urlTrack: true,
  fetchInitial: true,
};

export default PagedNumber;
