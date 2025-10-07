/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace ModelEnumType {
  export enum ModelEnumType {
    /**
     * 字符串
     */
    STRING = "String",

    /**
     * 整型
     */
    INTEGER = "Integer",

  }

  export function options(){
    return [
      { label: '字符串', value: ModelEnumType.STRING },
      { label: '整型', value: ModelEnumType.INTEGER },
    ]
  }

  export function from(val: ModelEnumType) {
    return options().find(e => e.value === val)
  }
}