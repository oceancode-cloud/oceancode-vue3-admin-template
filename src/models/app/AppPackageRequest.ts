/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface AppPackageRequest {
  /**
   * traits
   */
  traits?: Array<any>

  /**
   * 名称
   */
  name: string

  /**
   * 包名
   */
  packageName: string

  /**
   * group
   */
  group: string

  /**
   * 模板ID
   */
  templateId: string

  /**
   * 描述
   */
  description?: string

}