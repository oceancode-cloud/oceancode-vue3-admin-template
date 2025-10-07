/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface DatasourceDetail {
  /**
   * 自增主键
   */
  id:string

  /**
   * 名称
   */
  name:string

  /**
   * 描述
   */
  description?:string

  /**
   * 唯一ID
   */
  datasourceId:string

  /**
   * 类型
   */
  type:DatasourceType

  /**
   * 账号ID
   */
  accountId?:string

}