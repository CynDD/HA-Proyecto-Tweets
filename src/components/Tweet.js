import React, { Fragment } from "react";

const Tweet = ({ tweet }) => {
  return (
    <Fragment key={tweet.id}>
      <dt>
        <strong>@{tweet.author.username}</strong>
      </dt>
      <dd>{tweet.text}</dd>
      <hr />
    </Fragment>
  );
};

export default Tweet;
