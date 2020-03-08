import {getAll, getOne, del} from '@/api/email';

export const state = () => ({
  list: [],
  current: {
    name: '',
    alias: '',
    value: ''
  },
  total: 0
});

export const actions = {
  async load({commit}, { page, count, token }) {
    const { data } = await getAll({ page, count, token });
    console.log(data);
    commit('setList', data.items);
    commit('setTotalCount', data.total);
  },
  async loadOne({commit}, { id }) {
    const { data } = await getOne(id);
    commit('setCurrent', data);
  },
  async del({commit}, { id, index, token }) {
    await del({id, token});
    commit('delOne', index);
  }
};

export const mutations = {
  setCurrent(state, item) {
    let curr = { ...state.current };
    state.current = {...curr, ...item};
  },
  setList(state, items) {
    state.list = items;
  },
  delOne(state, index) {
    state.list.splice(index, 1);
  },
  setTotalCount(state, count) {
    state.total = count;
  },
};

export const getters = {
  list: (state) => state.list,
  current: (state) => state.current,
  total: (state) => state.total
};
