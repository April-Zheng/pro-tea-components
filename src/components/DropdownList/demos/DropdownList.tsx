import { DropdownList } from 'pro-tea-components';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(null);

  const treeList = [
    {
      text: 'list-1',
      value: '1',
      children: [
        {
          text: 'list-1-1',
          value: '1001',
          children: [
            { text: 'list-1-1-1', value: '1001001' },
            { text: 'list-1-1-2', value: '1001002' },
          ],
        },
      ],
    },
    {
      text: 'list-2',
      value: '2',
      children: [
        {
          text: 'list-2-1',
          value: '2001',
          children: [
            { text: 'list-2-1-1', value: '2001001' },
            { text: 'list-2-1-2', value: '2001002' },
            { text: 'list-2-1-3', value: '2001003' },
            { text: 'list-2-1-4', value: '2001004' },
          ],
        },
        {
          text: 'list-2-2',
          value: '2002',
          children: [
            { text: 'list-2-2-1', value: '2002001' },
            { text: 'list-2-2-2', value: '2002002' },
            { text: 'list-2-2-3', value: '2002003' },
            { text: 'list-2-2-4', value: '2002004' },
          ],
        },
      ],
    },
    {
      text: 'list-3',
      value: '3',
      children: [
        {
          text: 'list-3-1',
          value: '3001',
          children: [
            { text: 'list-3-1-1', value: '3001001' },
            { text: 'list-3-1-2', value: '3001002' },
            { text: 'list-3-1-3', value: '3001003' },
          ],
        },
        {
          text: 'list-3-2',
          value: '3002',
          children: [
            { text: 'list-3-2-1', value: '3002001' },
            { text: 'list-3-2-2', value: '3002002' },
            { text: 'list-3-2-3', value: '3002003' },
          ],
        },
        {
          text: 'list-3-3',
          value: '3003',
          children: [
            { text: 'list-3-3-1', value: '3003001' },
            { text: 'list-3-3-2', value: '3003002' },
          ],
        },
        {
          text: 'list-3-4',
          value: '3004',
          children: [{ text: 'list-3-4-1', value: '3004001' }],
        },
      ],
    },
  ];

  return (
    <DropdownList
      className={'tree-select'}
      size={'l'}
      type="button"
      options={treeList || []}
      value={value}
      onChange={(value: string) => {
        setValue(value);
      }}
    />
  );
};
