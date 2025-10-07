/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace AccountType {
  export enum AccountType {
    /**
     * Mysql
     */
    MYSQL = "mysql",

    /**
     * H2
     */
    H2 = "h2",

    /**
     * TOKEN
     */
    TOKEN = "token",

  }

  export function options(){
    return [
      { label: 'Mysql', value: AccountType.MYSQL },
      { label: 'H2', value: AccountType.H2 },
      { label: 'TOKEN', value: AccountType.TOKEN },
    ]
  }

  export function from(val: AccountType) {
    return options().find(e => e.value === val)
  }
}