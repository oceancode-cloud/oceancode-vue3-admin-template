import { setConfig } from 'ocean-admin-api/index';
const API_PREFIX_ = import.meta.env.VITE_GLOB_API_URL || ''
const QUERY_API_PREFIX_ = API_PREFIX_ + (import.meta.env.VITE_GLOB_API_PATH || '/graphql/query')

setConfig({
  baseUrl: API_PREFIX_,
  queryUrl: QUERY_API_PREFIX_
})