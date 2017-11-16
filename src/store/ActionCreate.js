import {
  USER_LOGIN
} from './Action'

export const LoginFn = {
  UserLogin: (data) => ({
    type: USER_LOGIN,
    data: data
  })
}
