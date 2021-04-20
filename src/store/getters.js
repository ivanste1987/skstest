const getters = {
  CheckUser(state){
    return state.islogin;
  },
  SetMessage(state) {
    return state.message;
  },
  SetSinginMsg(state){
    return state.singinMsg
  },
  GetAllPosts(state) {
    return state.allPosts;
  },
  GetComments(state) {
    return state.allComments;
  },
  GetUser(state){
    return state.theUser
  }
};

export default getters;
