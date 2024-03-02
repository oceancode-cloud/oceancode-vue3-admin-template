import { RouterParam } from './RouterParam';

export interface MenuOption {
  id: string
  title: string
  parentId?: string
  children?: Array<MenuOption>
  router?: RouterParam
}