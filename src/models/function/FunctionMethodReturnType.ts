/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace FunctionMethodReturnType {
  export enum FunctionMethodReturnType {
    /**
     * 集合
     */
    COLLECTION = -1,

    /**
     * 聚合
     */
    AGGR = -3,

    /**
     * Any
     */
    ANY = -2,

    /**
     * 无
     */
    NONE = 0,

    /**
     * 单值
     */
    SIMPLE = 1,

  }

  export function options(){
    return [
      { label: '集合', value: FunctionMethodReturnType.COLLECTION },
      { label: '聚合', value: FunctionMethodReturnType.AGGR },
      { label: 'Any', value: FunctionMethodReturnType.ANY },
      { label: '无', value: FunctionMethodReturnType.NONE },
      { label: '单值', value: FunctionMethodReturnType.SIMPLE },
    ]
  }

  export function from(val: FunctionMethodReturnType) {
    return options().find(e => e.value === val)
  }
}