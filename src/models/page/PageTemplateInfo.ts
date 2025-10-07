/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export interface PageTemplateInfo {
  /**
   * componentGroup
   */
  componentGroup?:string

  /**
   * platform
   */
  platform:string

  /**
   * 创建时间
   */
  createdAt:string

  /**
   * 配置
   */
  config?:string

  /**
   * 更新时间
   */
  updatedAt:string

  /**
   * 缩略图
   */
  shortcutImg:string

  /**
   * 自增主键
   */
  id:string

  /**
   * 图片
   */
  images?:Array<any>

  /**
   * 是否发布
   */
  published:boolean

  /**
   * 类型
   */
  type:string

  /**
   * 分组
   */
  group:string

  /**
   * 模型ID
   */
  templateId:string

  /**
   * 用户
   */
  userId?:string

  /**
   * 标题
   */
  title:string

  /**
   * keywords
   */
  keywords?:Array<any>

  /**
   * 描述
   */
  description?:string

}