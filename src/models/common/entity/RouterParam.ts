export interface RouterParam {
  name: string

  // 微前端的应用ID
  app?: string

  params?: Map<string, string | number>

  query?: Map<string, string | number>
}