import React, { useState } from 'react';
import { SortGroup } from 'pro-tea-components';

export default () => {
  const DemandSortList = [
    {
      name: '发布时间', // 展示名称
      value: 'submit_date', // 字段名称
      disabled: true,
    },
    {
      name: '截止时间',
      value: 'bidding_deadline',
    },
    {
      name: '投标企业数',
      value: 'bid_count',
    },
    {
      name: '浏览量',
      value: 'views_count',
    },
    {
      name: '需求预算',
      value: 'budget_min',
    },
  ];
  const initialDemandSorts = [{ Name: 'bidding_deadline', OrderBy: 'desc' }];

  const [demandSorts, setDemandSorts] = useState(initialDemandSorts);

  return (
    <SortGroup
      className="league-card"
      multiple={true}
      options={DemandSortList}
      value={demandSorts}
      onItemClick={(val: any) => {
        console.log(val);
      }}
      onChange={(value: any) => setDemandSorts(value)}
    />
  );
};
