/**
 * Copyright (C) Ocean Code Cloud. 2025-2025 .All Rights Reserved.
 */

export namespace AppPackageStatus {
  export enum AppPackageStatus {
    /**
     * 创建
     */
    CREATED = 0,

    /**
     * 构建中
     */
    BUILDING = 1,

    /**
     * 构建成功
     */
    SUCCESS = 2,

    /**
     * 构建失败
     */
    ERROR = 3,

    /**
     * 已发布
     */
    PUBLISHED = 4,

  }

  export function options(){
    return [
      { label: '创建', value: AppPackageStatus.CREATED },
      { label: '构建中', value: AppPackageStatus.BUILDING },
      { label: '构建成功', value: AppPackageStatus.SUCCESS },
      { label: '构建失败', value: AppPackageStatus.ERROR },
      { label: '已发布', value: AppPackageStatus.PUBLISHED },
    ]
  }

  export function from(val: AppPackageStatus) {
    return options().find(e => e.value === val)
  }
}