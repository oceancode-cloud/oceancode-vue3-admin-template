export interface TreeOptionValue<V = any> {
  value?: V
}

export interface TreeOption<V extends TreeOptionValue = TreeOptionValue> {
  id: string
  label: string
  parentId?: string
  value?: V
  children?: Array<TreeOption<V>>
}