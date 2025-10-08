/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { deleteFunctionGroupById } from '@common-api/api/function/MethodFunction';

export function loadContextMenu(param: any) {
  return [
    {
      label:'新增',
      key: '1757344410544_0',
      children: 
        [
          {
            label:'分组',
            key: '1757431700101_0',
            eventType: 'open',
            dialog: {
              id: 'add-group-form',
              value: {
                parentId: param?.id,
              },
            },
          },
          {
            label:'函数包',
            key: '1757431700101_1',
            eventType: 'open',
            dialog: {
              id: 'add-function-package-form',
              value: {
                groupId: param?.id,
              },
            },
          },
        ]
    },
    {
      label:'修改分组',
      key: '1757344410544_1',
      eventType: 'open',
      dialog: {
        id: 'update-group-form',
        value: {
          id: param?.id,
          name: param?.name,
          code: param?.code,
        },
      },
    },
    {
      label:'删除分组',
      key: '1757344410544_2',
       onClick(param: any) {
        return deleteFunctionGroupById(param?.id);
      }
    },
  ]
}