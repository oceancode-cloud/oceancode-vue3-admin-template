/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { deletePageGroupById } from '@common-api/api/page/PageFunction';

export function loadContextMenu(param: any) {
  return [
    {
      label:'新增分组',
      key: '1761414842915_0',
      eventType: 'open',
      dialog: {
        id: 'add-group-form',
        value: {
          parentId: param?.id,
        },
      },
    },
    {
      label:'修改分组',
      key: '1761414842915_1',
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
      key: '1761414842915_2',
       onClick(param: any) {
        return deletePageGroupById(param?.id);
      }
    },
    {
      label:'新增组件',
      key: '1761414842915_3',
      eventType: 'open',
      dialog: {
        id: 'add-page-form',
        value: {
          groupId: param?.id,
        },
      },
    },
  ]
}