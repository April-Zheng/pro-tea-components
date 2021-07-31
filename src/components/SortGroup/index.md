---
title: 排序 SortGroup
path: /SortGroup
group:
  title: '组件'
  path: /components
---

# 排序

### 简单使用

<code src='../SortItem/demos/SortItem.tsx'></code>

### 禁用

<code src='../SortItem/demos/SortItemDisabled.tsx'></code>

### 排序组

<code src='./demos/SortGroup.tsx'></code>

### 排序组 - 多选

<code src='./demos/SortGroupMulti.tsx'></code>

### 组件属性

| 参数     | 说明     | 类型                                                          | 默认值 |
| :------- | :------- | ------------------------------------------------------------- | :----- |
| name     | 展示名称 | string                                                        | -      |
| by       | 字段名   | string                                                        | -      |
| value    | 字段值   | 'asc' \| 'desc' \| ''                                         | -      |
| disabled | 是否禁用 | boolean                                                       | false  |
| onChange | 回调事件 | (arg: { order: 'asc' \| 'desc' \| '' ; by: string; }) => void | -      |

### 排序组属性

| 参数        | 说明         | 类型                                                              | 默认值 |
| :---------- | :----------- | ----------------------------------------------------------------- | :----- |
| value       | 字段值       | [ValueProps[]](/components/sort-group#组件值)                     | -      |
| options     | 排序选项     | [OptionsProps[]](/components/sort-group#选项)                     | -      |
| multiple    | 是否多选     | boolean                                                           | false  |
| disabled    | 是否禁用     | boolean                                                           | false  |
| onItemClick | 选项回调事件 | (arg: { order: 'asc' \| 'desc' \| '' ; by: string; }) => void     | -      |
| onChange    | 回调事件     | (arg: { OrderBy: 'asc' \| 'desc' \| '' ; Name: string; }) => void | -      |

### 组件值

| 参数    | 说明   | 类型                  | 默认值 |
| :------ | :----- | --------------------- | :----- |
| Name    | 字段名 | string                | -      |
| OrderBy | 字段值 | 'asc' \| 'desc' \| '' | -      |

### 选项

| 参数     | 说明        | 类型    | 默认值 |
| :------- | :---------- | ------- | :----- |
| name     | 选项名称    | string  | -      |
| value    | 选项唯一 id | string  | -      |
| disabled | 是否禁用    | boolean | false  |
