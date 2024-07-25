interface Window {
  $loading: any
  $nativeMessage: any
  $message: any
  $dialog: any
  // 语言
  $t: any
  $checkPermission: any
  $vue: any
  // 键盘按键记录
  $KeyboardActive?: { [T: string]: boolean }
  onKeySpacePressHold?: Function

  // 编辑 JSON 的存储对象
  opener: any
}

declare type Recordable<T = any> = Record<string, T>