import { loginReq } from '@/api/auth';

export const state = () => ({
  token: ''
})

export const actions = {
  login: async ({commit}, {login, password}) => {
    let res = await loginReq(login, password)
    if (res.data && res.data.error && res.data.error.message) {
      console.error(res.data.error.message);
      return false;
    } else {
      if (res.data && res.data.data && res.data.data.token)
        commit('setToken', res.data.data.token);
      return res;
    }
  }
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  }
}
