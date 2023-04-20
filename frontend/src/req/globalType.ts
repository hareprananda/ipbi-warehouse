export type Pagination<T> = {
  data: T[];
  metadata: {
    totalPage: number;
    currentPage: number;
  };
};
