import { createSlice } from "@reduxjs/toolkit";
import api from "../../app/api";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: {
    tweets: [],
    sendingTweet: false,
    sendTweetError: null,
    loading: false,
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
    },
  },
});

export const {
  sendTweetError,
  sendTweetStart,
  sendTweetSuccess,
  fetchTweetsStart,
  fetchTweetsSuccess,
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
  const response = await api.get("/tweets");
  dispatch(fetchTweetsSuccess(response.data));
};

export default tweetSlice.reducer;
