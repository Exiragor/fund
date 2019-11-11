import {createNews, getNews, getOneNews, deleteNews} from '@/api/news';

export const state = () => ({
  list: [],
  total: 1,
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
  },
  async createNewOne({state}, { token }) {
    return await createNews({ news: {...state.currentNews}, token});
  },
  async loadNews({commit}, { page, count }) {
    const { data } = await getNews({ page, count });
    commit('setNews', data.items);
    commit('setTotalCount', data.total);
  },
  async loadOneNews({commit}, { id }) {
    const { data } = await getOneNews(id);
    commit('setCurrentNews', data);
  },
  async deleteNews({commit}, { id, index, token }) {
    await deleteNews({id, token});
    commit('deleteNews', index);
  }
};

export const mutations = {
  setCurrentNews(state, news) {
    let item = { ...state.currentNews };
    state.currentNews = {...item, ...news};
  },
  setNews(state, news) {
    state.list = news;
  },
  setTotalCount(state, count) {
    state.total = count;
  },
  deleteNews(state, index) {
    state.list.splice(index, 1);
  }
};

export const getters = {
  newsList: (state) => state.list,
  currentNews: (state) => state.currentNews,
  total: (state) => state.total
}
