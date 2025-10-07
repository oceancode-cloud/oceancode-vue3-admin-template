/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface FunctionPackageInfo {
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
   * 创建时间
   */
  createdAt:string

  /**
   * 更新时间
   */
  updatedAt:string

  /**
   * 包名
   */
  packageName:string

  /**
   * 分组ID
   */
  groupId:string

}