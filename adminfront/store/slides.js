import {create, getAll, getOne, del} from '@/api/slides';

export const state = () => ({
  list: [],
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
  async load({commit}, slider) {
    const { data } = await getAll(slider);
    commit('setList', data);
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
  }
};

export const getters = {
  list: (state) => state.list,
  current: (state) => state.current
};
