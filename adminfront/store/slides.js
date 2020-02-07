import {create, getAll, getOne, del} from '@/api/slides';

export const state = () => ({
  list: [],
  total: 1,
  current: {
    title: '',
    text: '',
    photo: '',
    link: '',
    url: '',
    order: null
  },
});

export const actions = {
  updateCurrent({commit}, { item }) {
    commit('setCurrent', item);
  },
  async createNewOne({state}, { token, sliderName }) {
    return await create({ slide: {...state.current, sliderName}, token});
  },
  async load({commit}, {slider, page, count}) {
    const { data } = await getAll(slider, page, count);

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
  setTotalCount(state, count) {
    state.total = count;
  },
  delOne(state, index) {
    state.list.splice(index, 1);
  }
};

export const getters = {
  list: (state) => state.list,
  current: (state) => state.current,
  total: (state) => state.total
};
