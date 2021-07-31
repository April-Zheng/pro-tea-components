import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useCallback,
  useMemo,
} from 'react';
import { Table, TableAddon } from 'tea-component';
import { IParams, ITableInfo, ProTableProps, TableStatus } from './type';

const { autotip, pageable, sortable, filterable, selectable } = Table.addons;

const ProTable = forwardRef((props: ProTableProps, ref) => {
  const {
    columns,
    addons = [],
    onFetch,
    onRetry,
    onFilterChange,
    onSortChange,
    sortColumns = [],
    filterColumns = [],
    selectableShow = false,
    selectableOptions = {},
    onSelectedChange,
    pageOptions = {
      paginationShow: true,
      pageSizeOptions: [10, 20, 50, 100],
      pageIndex: 1,
      pageSize: 10,
    },
    ...restProps
  } = props;

  const defaultSorts = useMemo(() => {
    return sortColumns
      ?.filter((item: any) => item?.prefer)
      ?.map((item: any) => {
        return { by: item.key, order: item.prefer };
      });
  }, [sortColumns]);

  const defaultFilter = useMemo(() => {
    return filterColumns.reduce(
      (res, filter) => ({ ...res, [filter.column]: filter?.value || '' }),
      {},
    );
  }, [filterColumns]);

  const [SearchParams, setSearchParams] = useState<IParams>({
    pageIndex: pageOptions.pageIndex,
    pageSize: pageOptions.pageSize,
    sorts: defaultSorts,
    ...defaultFilter,
  });

  const [TableInfo, setTableInfo] = useState<ITableInfo>({
    List: [],
    Status: TableStatus.Default,
    Total: 0,
  });

  const TableAddons = useMemo(() => {
    const Addons: TableAddon[] = [
      autotip({
        isLoading: TableInfo.Status === TableStatus.LOADING,
        isError: TableInfo.Status === TableStatus.ERROR,
        onRetry: () => {
          fetchData();
          onRetry?.();
        },
      }),
    ];
    // 分页
    pageOptions.paginationShow &&
      Addons.push(
        pageable({
          recordCount: TableInfo.Total,
          pageSizeOptions: pageOptions.pageSizeOptions,
          pageSize: Number(SearchParams.pageSize),
          pageIndex: Number(SearchParams.pageIndex),
          onPagingChange: (query) => {
            const { pageSize, pageIndex } = query;
            setSearchParams({ ...SearchParams, pageSize, pageIndex });
          },
        }),
      );
    // 排序
    !!sortColumns?.length &&
      Addons.push(
        sortable({
          columns: sortColumns,
          value: SearchParams?.sorts || defaultSorts || [],
          onChange: (value, context) => {
            onSortChange?.(value, context);
            setSearchParams({ ...SearchParams, sorts: value, pageIndex: 1 });
          },
        }),
      );
    // 筛选
    !!filterColumns?.length &&
      filterColumns?.forEach((filter) => {
        Addons.push(
          filterable({
            ...filter,
            value: SearchParams[filter.column],
            onChange: (value: any, context: any) => {
              onFilterChange?.(value, context);
              setSearchParams({
                ...SearchParams,
                pageIndex: 1,
                [filter.column]: value,
              });
            },
          }),
        );
      });
    selectableShow &&
      Addons.push(
        selectable({
          ...selectableOptions,
          value: SearchParams?.selectedKeys || [],
          onChange: (keys, context) => {
            onSelectedChange?.(keys, context);
            setSearchParams({ ...SearchParams, selectedKeys: keys });
          },
        }),
      );
    return Addons;
  }, [SearchParams, pageOptions, sortColumns, filterColumns]);

  const fetchData = useCallback(async () => {
    setTableInfo({ ...TableInfo, Status: TableStatus.LOADING });
    try {
      const result = await onFetch?.({
        ...SearchParams,
      });
      if (result.Code === 0) {
        setTableInfo({
          List: result.Data || [],
          Total: result.Total,
          Status: TableStatus.Default,
        });
      } else {
        setTableInfo({ ...TableInfo, Status: TableStatus.ERROR });
      }
    } catch (err) {
      setTableInfo({ ...TableInfo, Status: TableStatus.ERROR });
    }
  }, [onFetch, SearchParams]);

  useEffect(() => {
    fetchData();
  }, [SearchParams]);

  useImperativeHandle(ref, () => {
    return {
      fetchData,
      SearchParams,
      setSearchParams: (val: object) => {
        setSearchParams({ ...SearchParams, ...val });
      },
    };
  });
  return (
    <div>
      <Table
        {...restProps}
        columns={columns}
        records={TableInfo.List}
        addons={[...addons, ...TableAddons]}
      />
    </div>
  );
});

export default ProTable;
