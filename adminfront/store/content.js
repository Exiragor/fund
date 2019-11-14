import {create, getAll, getOne, del} from '@/api/content';

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
  updateCurrent({commit}, { item }) {
    commit('setCurrent', item);
  },
  async createNewOne({state}, { token }) {
    return await create({ content: {...state.current}, token});
  },
  async load({commit}, { page, count }) {
    const { data } = await getAll({ page, count });
    commit('setList', data.items);
    commit('setTotalCount', data.total);
  },
  async loadOne({commit}, { alias }) {
    const { data } = await getOne(alias);
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
