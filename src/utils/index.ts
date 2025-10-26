import { useGlobal, useUser } from '@/store'
import { deepTree } from '@oceancode/ocean-wui'
export * from './validator'
export * from './router'
export * from './event'
import { isEmpty, uniqueId } from 'lodash'
export * from './validator'
export * from './router'
export * from './event'
export * from './uuid'

export { isEmpty, uniqueId, deepTree }

export function toRedirect(): boolean {
  const { query } = useGlobal()
  const redirect = query.redirect as string
  if (redirect) {
    let url = redirect.trim()
    if (url.startsWith('http')) {
      if (url.indexOf('?') == -1) {
        url += '?'
      }
      if (!url.endsWith('?')) {
        url += '&'
      }
      url += 'token=' + useUser().getToken()
      window.location.href = url
      return true
    }
  }
  return false
}

const LOGIN_URL = import.meta.env.VITE_LOGIN_URL || ''
export function toUserLoginPage() {
  if(isEmpty(useUser().getToken())){
    return false;
  }
  if (LOGIN_URL && LOGIN_URL.trim().length > 0) {
    let url = LOGIN_URL.trim()
    if (url.indexOf('?') === -1) {
      url += '?'
    }
    if (!url.endsWith('?')) {
      url += '&'
    }
    url += 'redirect=' + encodeURIComponent(window.location.href)
    window.location.href = url
    return
  }
  return true;
}
