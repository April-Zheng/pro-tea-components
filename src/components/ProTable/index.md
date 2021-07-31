---
title: 表格 ProTable
path: /ProTable
group:
  title: '组件'
  path: /components
---

### 简单使用

<code src='./demos/ProTable.tsx' />

### 插件

通过 sortColumns 配置排序, filterColumns 配置筛选, selectableShow 配置多选

更多复杂配置请移步[tea-component](https://tea-design.github.io/component/table/Table%E8%A1%A8%E6%A0%BC)
<code src='./demos/ProTablePlugins.tsx' />

### 组件属性

继承[tea-component](https://tea-design.github.io/component/table/Table%E8%A1%A8%E6%A0%BC) table 的组件属性, 附带额外属性

| 参数             | 说明         | 类型                                                                                                                                 | 默认值 |
| :--------------- | :----------- | ------------------------------------------------------------------------------------------------------------------------------------ | :----- |
| sortColumns      | 排序配置项   | [SortableOptions['columns']](https://tea-design.github.io/component/table/Table%E8%A1%A8%E6%A0%BC)                                   | -      |
| filterColumns    | 筛选配置项   | [SortableOptions['columns']](https://tea-design.github.io/component/table/Table%E8%A1%A8%E6%A0%BC)                                   | -      |
| pageOptions      | 分页配置项   | [IPageOptions](/components/pro-table/#分页配置)                                                                                      | -      |
| selectableShow   | 是否开启多选 | boolean                                                                                                                              | -      |
| onSelectedChange | 多选回调事件 | (value: any, context: any) => void;                                                                                                  | -      |
| onFilterChange   | 筛选回调事件 | (value: any, context: any) => void;                                                                                                  | -      |
| onSortChange     | 排序回调事件 | (value: any, context: any) => void;                                                                                                  | -      |
| onFetch          | 表格数据请求 | (params: { pageIndex: number; pageSize: number; [x: string]: any; }) => Promise\<{ Code: number; Data: Array<any>; Total: number }>; | -      |

### 分页配置

| 参数            | 说明         | 类型                                                                                                       | 默认值            |
| :-------------- | :----------- | ---------------------------------------------------------------------------------------------------------- | :---------------- |
| paginationShow  | 是否开启分页 | boolean                                                                                                    | true              |
| pageIndex       | 页数         | number                                                                                                     | 1                 |
| pageSize        | 每页条数     | number                                                                                                     | 10                |
| pageSizeOptions | 每页条数配置 | [PageableOptions['pageSizeOptions']](https://tea-design.github.io/component/table/Table%E8%A1%A8%E6%A0%BC) | [10, 20, 50, 100] |
