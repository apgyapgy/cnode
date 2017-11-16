import { USER_LOGIN } from './Action'

// 全局store树
let longStateinit = {
  token: localStorage.token || ''
}
export function LoginState (state = longStateinit, action) {
  switch (action.type) {
    case USER_LOGIN :
      return {
        ...state,
        token: action.data
      }
    default:
      return state
  }
}
