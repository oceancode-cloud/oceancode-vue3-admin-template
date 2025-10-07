/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace ModelType {
  export enum ModelType {
    /**
     * 参数
     */
    PARAM = 21,

    /**
     * 数据表
     */
    TABLE = 1,

    /**
     * 枚举
     */
    ENUMS = 2,

    /**
     * 实体
     */
    ENTITY = 3,

    /**
     * 源表
     */
    TABLE_BASE = 4,

    /**
     * 输入模型
     */
    INPUT_MODEL = 5,

    /**
     * 输出模型
     */
    RESPONSE_MODEL = 6,

  }

  export function options(){
    return [
      { label: '参数', value: ModelType.PARAM },
      { label: '数据表', value: ModelType.TABLE },
      { label: '枚举', value: ModelType.ENUMS },
      { label: '实体', value: ModelType.ENTITY },
      { label: '源表', value: ModelType.TABLE_BASE },
      { label: '输入模型', value: ModelType.INPUT_MODEL },
      { label: '输出模型', value: ModelType.RESPONSE_MODEL },
    ]
  }

  export function from(val: ModelType) {
    return options().find(e => e.value === val)
  }
}