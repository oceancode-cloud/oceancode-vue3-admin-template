import { defineStore } from 'pinia'

const PLUGIN_BASE_URL = import.meta.env.VITE_PLUGIN_BASE_URL || '/plugins'

export interface PageInfo {
  title?: string
}

export interface MenuItem {
  name: string
  id: string
  key: string
}

export const useGlobal = defineStore('global', {
  state: () => {
    return {
      data: {
        projectId: '',
        query: {} as any,
        params: {} as any,
        routerName: '' as string,
        pluginBaseUrl: PLUGIN_BASE_URL as string,
        page: {} as PageInfo,
        menu: {
          name: ''
        } as MenuItem
      }
    }
  },
  getters: {
    projectId: state => state.data.projectId,
    query: state => state.data.query,
    params: state => state.data.params,
    pluginBaseUrl: state => state.data.pluginBaseUrl,
    routerName: state => state.data.routerName,
    page: state => state.data.page,
    currentMenu: state => state.data.menu,
  },
  actions: {
    getProjectId() {
      return this.data.projectId;
    },
    setProjectId(projectId: string) {
      this.data.projectId = projectId;
    },
    setQuery(query: any) {
      this.data.query = query || {};
    },
    setParams(params: any) {
      this.data.params = params || {};
    },
    setRouterName(name: string) {
      this.data.routerName = name;
    },
    setPageInfo(info: any) {
      this.data.page = Object.assign(this.data.page, info);
    },
    setCurrentMenu(info: MenuItem) {
      this.data.menu = info;
    }
  }
})
