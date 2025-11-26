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
export * from './image';
export * from './copy';

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
  if (isEmpty(useUser().getToken())) {
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

export function findTreeItemByKey<T>(list: T[], cb: (item: T) => boolean): T | undefined {
  if (isEmpty(list)) {
    return;
  }
  for (const it of list) {
    if ((cb(it))) {
      return it
    }
    if ((it as any).children) {
      const ret = findTreeItemByKey((it as any).children, cb);
      if (ret) {
        return ret
      }
    }
  }
}
