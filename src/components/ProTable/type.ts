import { TableProps } from 'tea-component';
import {
  FilterableConfig,
  PageableOptions,
  SortableOptions,
} from 'tea-component/lib/table/addons';

enum TableStatus {
  LOADING = 'loading',
  ERROR = 'error',
  Default = 'none',
}

interface ITableInfo {
  List: any[];
  Status: any;
  Total: number;
}

interface ISortValue {
  by: string;
  order: string;
}

interface IParams {
  pageIndex: number;
  pageSize: number;
  sorts: ISortValue[];
  [x: string]: any;
}

interface IPageOptions {
  pageIndex: number;
  pageSize: number;
  paginationShow: boolean;
  pageSizeOptions: PageableOptions['pageSizeOptions'];
}

interface ProTableProps extends TableProps {
  sortColumns?: SortableOptions['columns'];
  filterColumns?: FilterableConfig[];
  pageOptions?: IPageOptions;
  selectableShow?: boolean;
  onSelectedChange?: (value: any, context: any) => void;
  onFilterChange?: (value: any, context: any) => void;
  onSortChange?: (value: any, context: any) => void;
  onFetch: (
    params: IParams,
  ) => Promise<{ Code: number; Data: Array<any>; Total: number }>;
  [name: string]: any;
}

export { TableStatus, ITableInfo, IParams, IPageOptions, ProTableProps };
