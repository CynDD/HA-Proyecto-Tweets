import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendTweet } from "./tweetSlice";

function TweetForm({ history }, props) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const user = props.match.params.user;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendTweet(text, history));
  };
  return (
    <form onSubmit={handleSubmit}>
      {user ? <h2> User is: {user} </h2> : <h2> No selected user </h2>}

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
