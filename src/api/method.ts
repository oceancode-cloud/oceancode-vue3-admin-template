import { buildDsl } from '@oceancode/ocean-wui'

export function currentUser(fields?: Array<string | object>): string {
  return buildDsl('current_user',[],fields || ['avatar', 'nickname', 'userInfo', 'username', ])
}

