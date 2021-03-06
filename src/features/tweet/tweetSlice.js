import { createSlice } from "@reduxjs/toolkit";
import api from "../../app/api";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: {
    tweets: [],
    sendingTweet: false,
    sendTweetError: null,
    loading: false,
    error: null,
  },
  reducers: {
    sendTweetStart(state, action) {
      state.sendingTweet = true;
    },
    sendTweetSuccess(state, action) {
      state.sendingTweet = false;
      state.sendTweetError = null;
      state.tweets.push(action.payload);
    },
    sendTweetError(state, action) {
      state.sendingTweet = false;
      state.sendTweetError = action.payload;
    },
    fetchTweetsStart(state, action) {
      state.loading = true;
    },
    fetchTweetsSuccess(state, action) {
      state.loading = false;
      state.tweets = action.payload;
      state.error = null;
    },
    fetchTweetsError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.tweets = [];
    },
  },
});

export const {
  sendTweetError,
  sendTweetStart,
  sendTweetSuccess,
  fetchTweetsStart,
  fetchTweetsSuccess,
  fetchTweetsError,
} = tweetSlice.actions;

export const sendTweet = (text, history) => async (dispatch) => {
  dispatch(sendTweetStart());

  try {
    const response = await api.post("/tweets", { text });
    dispatch(sendTweetSuccess(response.data));
    history.push("/tweets");
  } catch (error) {
    dispatch(sendTweetError(error.response?.data));
  }
};

export const fetchTweets = () => async (dispatch) => {
  dispatch(fetchTweetsStart());
  try {
    const response = await api.get("/tweets");
    dispatch(fetchTweetsSuccess(response.data));
  } catch (error) {
    dispatch(fetchTweetsError(error.message));
  }
};

export default tweetSlice.reducer;
