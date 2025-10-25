/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */
import { ModelType } from '@common-api/models/model/ModelType';
import { deleteModelGroupById } from '@common-api/api/model/ModelFunction';

export function loadContextMenu(param: any) {
  return [
    {
      label:'新增',
      key: '1757213675633_0',
      children: 
        [
          {
            label:'分组',
            key: '1757213741769_0',
            eventType: 'open',
            dialog: {
              id: 'add-group-form',
              value: {
                parentId: param?.id,
              },
            },
          },
          {
            label:'模型',
            key: '1757213741769_1',
            children: 
              [
                {
                  label:'数据表',
                  key: '1757213741131_0',
                  children: 
                    [
                      {
                        label:'源模型',
                        key: '1757228929813_0',
                        eventType: 'open',
                        dialog: {
                          id: 'add-model-form',
                          value: {
                            groupId:param.id,
                            type: ModelType.ModelType.TABLE_BASE,
                          },
                        },
                      },
                      {
                        label:'表模型',
                        key: '1757228929813_1',
                        eventType: 'open',
                        dialog: {
                          id: 'add-model-form',
                          value: {
                            type: ModelType.ModelType.TABLE,
                          },
                        },
                      },
                    ]
                },
                {
                  label:'枚举',
                  key: '1757213741131_1',
                  eventType: 'open',
                  dialog: {
                    id: 'add-model-form',
                    value: {
                      id: param?.id,
                      type: ModelType.ModelType.ENUMS,
                    },
                  },
                },
                {
                  label:'实体',
                  key: '1757213741131_2',
                  eventType: 'open',
                  dialog: {
                    id: 'add-model-form',
                    value: {
                      type: ModelType.ModelType.ENTITY,
                    },
                  },
                },
                {
                  label:'输入',
                  key: '1757213741131_3',
                  eventType: 'open',
                  dialog: {
                    id: 'add-model-form',
                    value: {
                      type: ModelType.ModelType.INPUT_MODEL,
                    },
                  },
                },
                {
                  label:'输出',
                  key: '1757213741131_4',
                  eventType: 'open',
                  dialog: {
                    id: 'add-model-form',
                    value: {
                      type: ModelType.ModelType.RESPONSE_MODEL,
                    },
                  },
                },
                {
                  label:'参数',
                  key: '1757213741131_5',
                  eventType: 'open',
                  dialog: {
                    id: 'add-model-form',
                    value: {
                      type: ModelType.ModelType.PARAM,
                    },
                  },
                },
              ]
          },
        ]
    },
    {
      label:'删除',
      key: '1757213675633_1',
       onClick(param: any) {
        return deleteModelGroupById(param?.id);
      }
    },
    {
      label:'修改',
      key: '1757213675633_2',
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
  ]
}