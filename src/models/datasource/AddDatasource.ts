/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface AddDatasource {
  /**
   * 唯一ID
   */
  datasourceId:string

  /**
   * 名称
   */
  name:string

  /**
   * 描述
   */
  description?:string

  /**
   * 类型
   */
  type:DatasourceType

  /**
   * 关联账号
   */
  accountId?:string

}