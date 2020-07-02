import * as constants from '@/store/constants';

const state = {
  login: false,
};

const actions = {};

const mutations = {
  // eslint-disable-next-line no-shadow
  [constants.SESSION_SIGN_IN]: (state) => {
    state.login = true;
  },
  // eslint-disable-next-line no-shadow
  [constants.SESSION_SIGN_OUT]: (state) => {
    state.login = false;
  },
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
