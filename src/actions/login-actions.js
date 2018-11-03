
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'

export function login (username, password) {
  return {
    type: LOGIN,
    payload: {
      username: `${username}`,
      password: `${password}`
    }
  }
}
export function Registering () {
  return {
    type: Registering,
    payload: ''
  }
}

export function register (username, password) {
  return {
    type: REGISTER,
    payload: {
      username: `${username}`,
      password: `${password}`
    }
  }
}
