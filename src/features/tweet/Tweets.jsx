import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchTweets } from "./tweetSlice";
import Tweet from "../../components/Tweet";

function Tweets() {
  const tweets = useSelector((state) => state.tweet.tweets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);
  return (
    <div>
      <Link to="/new-tweet">New Tweet</Link>
      <dl>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </dl>
    </div>
  );
}

export default Tweets;
