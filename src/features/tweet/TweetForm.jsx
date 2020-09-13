import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendTweet } from "./tweetSlice";

function TweetForm({ history }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendTweet(text, history));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>New Tweet</h1>
      <textarea
        placeholder="Say something"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

export default TweetForm;
