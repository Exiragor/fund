export const state = () => ({
  currentNews: {
    title: '',
    description: '',
    text: '',
    date: '',
    photo: ''
  },
});

export const actions = {
  updateCurrent({commit}, { news }) {
    commit('setCurrentNews', news);
  }
};

export const mutations = {
  setCurrentNews(state, news) {
    let item = { ...state.currentNews };
    state.currentNews = {...item, ...news};
  }
};
