const mutations = {
  /*Login mutations */
  HANDLE_LOGIN(state, payload) {
    state.islogin = payload.islogin;
  },
  HANDLE_MESSAGE(state, payload) {
    state.message = payload;
    console.log(state.message);
  },
  SET_ALL_POSTS(state, payload) {
    state.allPosts = payload;
  },
  SET_COMMENTS(state, payload) {
    state.allComments = payload;
  },
  SET_USER(state, payload) {
    state.theUser = payload;
  },
};

export default mutations;
