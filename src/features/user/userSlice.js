import api from "../../app/api";

const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {
    signingUp: false,
    signupError: null,
    loggedIn: false,
    loginError: null,
    loggingIn: false,
  },
  reducers: {
    signupUserStart(state, action) {
      state.signingUp = true;
    },
    signupUserSuccess(state, action) {
      state.signingUp = false;
      state.loggedIn = true;
      state.signupError = null;
    },
    signupUserError(state, action) {
      state.signingUp = false;
      state.loggedIn = false;
      state.signupError = action.payload;
    },
    loginUserStart(state, action) {
      // usa estado específico para login, no los de signup
      // quedaría: state.loggingIn = true
      state.loggingIn = true;
    },
    loginUserSuccess(state, action) {
      // usa loggingIn
      state.loggingIn = true;
      state.loggedIn = true;
      state.loginError = null;
      // usa loginError
    },
    loginUserError(state, action) {
      state.loggingIn = false;
      state.loggedIn = false;
      state.loginError = action.payload;
    },
  },
});

export const {
  signupUserError,
  signupUserStart,
  signupUserSuccess,
  loginUserError,
  loginUserStart,
  loginUserSuccess,
} = userSlice.actions;

export const signupUser = (user, history) => {
  return async function (dispatch) {
    dispatch(signupUserStart());

    try {
      const response = await api.post("/users", user);

      dispatch(signupUserSuccess());

      // guardar en localStorage
      localStorage.setItem("token", response.data.token);

      // actulizar instancia de axios
      api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;

      // redireccionar a tweets
      history.push("/tweets");
    } catch (error) {
      dispatch(signupUserError(error.response?.data));
    }
  };
};

export const loginUser = (user, history) => {
  return async function (dispatch) {
    dispatch(loginUserStart());

    try {
      const response = await api.post("/sessions", user);

      dispatch(loginUserSuccess());

      // guardar en localStorage
      localStorage.setItem("token", response.data.token);

      // actulizar instancia de axios
      api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;

      // redireccionar a tweets
      history.push("/new-tweet");
    } catch (error) {
      dispatch(loginUserError(error.response?.data));
    }
  };
};

export const logoutUser = (user, history) => {
  /* return async function (dispatch) {
    dispatch(loginUserStart());

    try {
      const response = await api.post("/sessions", user);

      dispatch(loginUserSuccess());

      // guardar en localStorage
      localStorage.setItem("token", response.data.token);

      // actulizar instancia de axios
      api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;

      // redireccionar a tweets
      history.push("/new-tweet");
    } catch (error) {
      dispatch(loginUserError(error.response?.data));
    }
  };*/
};

export default userSlice.reducer;
