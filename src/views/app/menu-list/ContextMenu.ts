/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { deleteMenuGroupById } from '@/api/menu/AppMenuFunction';

export function loadContextMenu(param: any) {
  return [
    {
      label:'新增菜单',
      key: '1757683300294_0',
      eventType: 'open',
      dialog: {
        id: 'add-menu',
        value: {
          groupId: param?.id,
        },
      },
    },
    {
      label:'修改分组',
      key: '1757683300294_1',
      eventType: 'open',
      dialog: {
        id: 'update-group-form',
        value: {
          name: param?.name,
          id: param?.id,
        },
      },
    },
    {
      label:'删除分组',
      key: '1757683300294_2',
       onClick(param: any) {
        return deleteMenuGroupById(param?.id);
      }
    },
  ]
}