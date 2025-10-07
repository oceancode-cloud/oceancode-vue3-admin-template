import { defineStore } from "pinia";

export const useGlobal = defineStore('global', {
  state: () => {
    return {
      data: {
        projectId: '',
        query:{} as any,
        params:{} as any,
      }
    }
  },
  getters: {
    projectId:(state)=>state.data.projectId,
    query: (state) => state.data.query,
    params: (state) => state.data.params,
  },
  actions: {
    getProjectId() {
      return this.data.projectId;
    },
    setProjectId(projectId: string){
      this.data.projectId = projectId;
    },
    setQuery(query: any){
      this.data.query = query || {};
    },
    setParams(params: any){
      this.data.params = params || {};
    }
  }
});