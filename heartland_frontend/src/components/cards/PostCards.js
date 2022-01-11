import React from "react";
import { Link } from "react-router-dom";

import { PostCard } from "../styled/cards/PostCard.style";

import timeFormatter from "../../utils/timeFormatter";

const PostCards = ({ post }) => {
  const lessChar = (text) => {
    const { innerWidth: width } = window;
    let stg = "";
    if (width >= 1920) {
      stg = text.substring(0, 1400);
    } else if (width >= 1565) {
      stg = text.substring(0, 1145);
    } else if (width >= 1309) {
      stg = text.substring(0, 930);
    } else if (width >= 1069) {
      stg = text.substring(0, 754);
    } else if (width >= 1069) {
      stg = text.substring(0, 754);
    } else if (width >= 856) {
      stg = text.substring(0, 591);
    } else if (width >= 719) {
      stg = text.substring(0, 448);
    } else if (width >= 601) {
      stg = text.substring(0, 344);
    } else {
      stg = text.substring(0, 145);
    }

    return stg;
  };

  return (
    <PostCard>
      {console.log(post)}
      <div className="innerDiv">
        <div className="image">
          <img src={post.image} alt="" />
        </div>
        <div className="contentDiv">
          <Link to="/">
            <h2>{post.title}</h2>
            <h6>{timeFormatter(post.createdAt)}</h6>
            <p>
              {lessChar(post.describtion)}
              ....
            </p>
          </Link>
        </div>
      </div>
    </PostCard>
  );
};

export default PostCards;
