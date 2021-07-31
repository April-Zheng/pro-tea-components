import React, { useEffect, useRef, useState } from 'react';
import { ProTable } from 'pro-tea-components';
import { Input } from 'tea-component';
export default () => {
  const records = [
    { name: 'Mario', age: 48, stage: 'teenager', marriage: 0 },
    { name: 'Luigi', age: 38, stage: 'youth', marriage: 0 },
    { name: 'Koopa', age: 28, stage: 'youth', marriage: 1 },
    { name: 'Yoshi', age: 18, stage: 'youth', marriage: 0 },
    { name: 'Link', age: 8, stage: 'middle-aged', marriage: 2 },
    { name: 'Zelda', age: 58, stage: 'middle-aged', marriage: 1 },
    { name: 'Wario', age: 68, stage: 'elder', marriage: 3 },
    { name: 'Pikachu', age: 78, stage: 'elder', marriage: 4 },
  ];
  const MARRIAGE_TEXT = ['未婚', '已婚', '离异', '再婚', '丧偶'];
  const STAGE_TEXT = {
    teenager: '少年',
    youth: '青年',
    'middle-aged': '中年',
    elder: '老年',
  };
  const columns = [
    { key: 'name', header: '姓名' },
    { key: 'age', header: '年龄' },
    {
      key: 'stage',
      header: '年龄段',
      render: (x: { stage: string | number }) => STAGE_TEXT[x.stage],
    },
    {
      key: 'marriage',
      header: '婚姻状态',
      render: (x: { marriage: string | number }) => MARRIAGE_TEXT[x.marriage],
    },
  ];

  const ProTableRef = useRef(null);

  const onFetch = async (params: any) => {
    console.log('onFetch params', params);
    return {
      Code: 0,
      Data: records,
      Total: records.length,
    };
  };

  return (
    <div>
      <ProTable ref={ProTableRef} columns={columns} onFetch={onFetch} />
    </div>
  );
};
