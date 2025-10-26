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

const SSO_URL = import.meta.env.VITE_SSO_URL || '';

export function isSsoEnabled() {
  return !isEmpty(SSO_URL);
}

export function toSsoPage() {
  if(isEmpty(useUser().getToken())){
    return false;
  }
  if (isSsoEnabled()) {
    let url = SSO_URL.trim()
    if (url.indexOf('?') === -1) {
      url += '?'
    }
    if (!url.endsWith('?')) {
      url += '&'
    }
    url += 'redirect=' + encodeURIComponent(window.location.href)
    window.location.href = url
    return true;
  }
  return false;
}
