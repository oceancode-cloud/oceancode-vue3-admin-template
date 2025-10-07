/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace DatasourceType {
  export enum DatasourceType {
    /**
     * Mysql
     */
    MYSQL = "mysql",

    /**
     * h2
     */
    H2 = "h2",

    /**
     * sqlite
     */
    SQLITE = "sqlite",

  }

  export function options(){
    return [
      { label: 'Mysql', value: DatasourceType.MYSQL },
      { label: 'h2', value: DatasourceType.H2 },
      { label: 'sqlite', value: DatasourceType.SQLITE },
    ]
  }

  export function from(val: DatasourceType) {
    return options().find(e => e.value === val)
  }
}