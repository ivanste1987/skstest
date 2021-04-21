import axios from "axios";
import router from "../router/index.js";
const actions = {
  async tryLogin(context, payload) {
    try {
      const response = await axios.post(
        "https://todo-fullstack-app-ivanste1987.herokuapp.com/api/users/login",
        payload
      );

      context.commit("HANDLE_LOGIN", { islogin: true });
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      context.commit("HANDLE_SINGIN_MESSAGE", error.response.data.error);
    }
  },
  /*Singup Action */
  async trySingup(context, payload) {
    try {
      const response = await axios.post(
        "https://todo-fullstack-app-ivanste1987.herokuapp.com/api/users",
        payload
      );
      if (response.status === 201) {
        context.commit("HANDLE_MESSAGE", response.data.message);
      }
    } catch (error) {
      if (error.response.status === 409) {
        context.commit("HANDLE_MESSAGE", error.response.data.message);
      }
      if (error.response.data.message.errors.password) {
        context.commit(
          "HANDLE_MESSAGE",
          "Password is shorter than the minimum allowed length 7"
        );
      }
      if (error.response.data.message.errors.name) {
        context.commit("HANDLE_MESSAGE", "Username is not valid.");
      }
    }
  },
  /*Stay Loggedin Action */
  stayLoggedin(context) {
    const token = localStorage.getItem("token");
    if (router.currentRoute.fullPath === "/") {
      return;
    }
    if (token) {
      context.commit("HANDLE_LOGIN", {
        islogin: true,
      });
    } else {
      router.replace("/");
    }
  },

  /*GET  All postst */
  async getAllPosts(context) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      context.commit("SET_ALL_POSTS", response.data);
    } catch (error) {
      /*Ovde bi hendlovao greske sa servera koja stignu */
      console.log(error);
    }
  },

  /*GET  comments for post */
  async getAllComments(context, payload) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${payload}/comments`
      );
      context.commit("SET_COMMENTS", response.data);
    } catch (error) {
      /*Ovde bi hendlovao greske sa servera koja stignu */
      console.log(error);
    }
  },

  /*GET  user */
  async getUser(context, payload) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${payload}`
      );
      context.commit("SET_USER", response.data);
    } catch (error) {
      /*Ovde bi hendlovao greske sa servera koja stignu */
      console.log(error);
    }
  },
};

export default actions;
