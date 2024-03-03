import { Component } from 'vue';
import { RouterParam } from './RouterParam';

export interface MenuOption {
  id: string | number
  title: string
  parentId?: string
  children?: Array<MenuOption>
  router?: RouterParam,
  icon?: Component
}