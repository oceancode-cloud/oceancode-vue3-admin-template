/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace ModelFieldType {
  export enum ModelFieldType {
    /**
     * Text
     */
    TEXT = "Text",

    /**
     * BOOLEAN
     */
    BOOLEAN = "Boolean",

    /**
     * Timestamp
     */
    TIMESTAMP = "Timestamp",

    /**
     * Date
     */
    DATE = "Date",

    /**
     * DateTime
     */
    DATE_TIME = "DateTime",

    /**
     * File
     */
    FILE = "File",

    /**
     * Time
     */
    TIME = "Time",

    /**
     * Integer
     */
    INTEGER = "Integer",

    /**
     * List
     */
    LIST = "List",

    /**
     * Long
     */
    LONG = "Long",

    /**
     * Ref
     */
    REF = "Ref",

    /**
     * REF_LIST
     */
    REF_LIST = "Ref<List>",

    /**
     * ANY
     */
    ANY = "ANY",

    /**
     * String
     */
    STRING = "String",

    /**
     * StringTypeMap
     */
    STRING_TYPE_MAP = "StringTypeMap",

    /**
     * BigDecimal
     */
    BIG_DECIMAL = "BigDecimal",

  }

  export function options(){
    return [
      { label: 'Text', value: ModelFieldType.TEXT },
      { label: 'BOOLEAN', value: ModelFieldType.BOOLEAN },
      { label: 'Timestamp', value: ModelFieldType.TIMESTAMP },
      { label: 'Date', value: ModelFieldType.DATE },
      { label: 'DateTime', value: ModelFieldType.DATE_TIME },
      { label: 'File', value: ModelFieldType.FILE },
      { label: 'Time', value: ModelFieldType.TIME },
      { label: 'Integer', value: ModelFieldType.INTEGER },
      { label: 'List', value: ModelFieldType.LIST },
      { label: 'Long', value: ModelFieldType.LONG },
      { label: 'Ref', value: ModelFieldType.REF },
      { label: 'REF_LIST', value: ModelFieldType.REF_LIST },
      { label: 'ANY', value: ModelFieldType.ANY },
      { label: 'String', value: ModelFieldType.STRING },
      { label: 'StringTypeMap', value: ModelFieldType.STRING_TYPE_MAP },
      { label: 'BigDecimal', value: ModelFieldType.BIG_DECIMAL },
    ]
  }

  export function from(val: ModelFieldType) {
    return options().find(e => e.value === val)
  }
}