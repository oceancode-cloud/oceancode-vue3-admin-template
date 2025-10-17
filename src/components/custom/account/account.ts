import { AccountType } from "ocean-admin-api/models/account/AccountType"

export function isDb(param):boolean{
  const it = AccountType.from(param.type)
  if(!it)return
  const type = it.value

  return [AccountType.AccountType.MYSQL,
    AccountType.AccountType.MARIADB,
    AccountType.AccountType.SQLITE].indexOf(type)!=-1
}
export function showHostField(param){
  if(param.config && param.config.cluster){
    return false
  }
  const it = AccountType.from(param.type)
  if(!it)return false
  const type = it.value
  if(isDb(param)){
    return true
  }

  return [AccountType.AccountType.ELASTICSEARCH,
    AccountType.AccountType.REDIS
  ].indexOf(type)!=-1
}

export function showPortField(param){
  if(param.config && param.config.cluster){
    return false
  }
  const it = AccountType.from(param.type)
  if(!it)return
  const type = it.value
  if(isDb(param)){
    return true
  }

  return [AccountType.AccountType.ELASTICSEARCH,
    AccountType.AccountType.REDIS
  ].indexOf(type)!=-1
}

export function showAddressField(param){
  if(param.config && !param.config.cluster){
    return false
  }
  const it = AccountType.from(param.type)
  if(!it)return
  const type = it.value
  if(isDb(param)){
    return true
  }

  return [AccountType.AccountType.ELASTICSEARCH,
    AccountType.AccountType.REDIS
  ].indexOf(type)!=-1
}

export function showUsernameField(param){
  const it = AccountType.from(param.type)
  if(!it)return
  const type = it.value
  if(isDb(param)){
    return true
  }

  return [AccountType.AccountType.ELASTICSEARCH,
    AccountType.AccountType.REDIS
  ].indexOf(type)!=-1
}

export function showPasswordField(param){
  const type = AccountType.from(param.type)
  if(isDb(param)){
    return true
  }

  return [AccountType.AccountType.ELASTICSEARCH,
    AccountType.AccountType.REDIS
  ].indexOf(type)!=-1
}


export function showClusterField(param){
  const it = AccountType.from(param.type)
  if(!it) return
  const type = it.value
  if(isDb(param)){
    return true
  }

  return [AccountType.AccountType.ELASTICSEARCH,
    AccountType.AccountType.REDIS
  ].indexOf(type)!=-1
}


export function showAuthorization(param){
  const it = AccountType.from(param.type)
  if(!it)return false
  const type = it.value

  return AccountType.AccountType.TOKEN === type
}

export function isAppType(param){
  const it = AccountType.from(param.type)
  if(!it)return false
  const type = it.value
  return AccountType.AccountType.APP === type
}

export function isToken(param){
  const it = AccountType.from(param.type)
  if(!it)return false
  const type = it.value
  return AccountType.AccountType.TOKEN === type
}