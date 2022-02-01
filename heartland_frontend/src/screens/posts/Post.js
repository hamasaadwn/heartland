import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { loadSinglePost } from "../../actions/postActions";

import {
  changeBackgroundToWhite,
  changeNavbar,
} from "../../actions/rootActions";
import { Container } from "../../components/styled/Container.style";
import { PostContainer } from "./PostContainer.style";
import timeFormatter from "../../utils/timeFormatter";

const Post = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { post } = useSelector((state) => state.post);
  const id = params.id;

  useEffect(() => {
    dispatch(changeBackgroundToWhite());
    dispatch(changeNavbar("white"));
    dispatch(loadSinglePost(id));
  }, [dispatch, id]);

  return (
    <Container>
      <PostContainer>
        <div className="innerDiv">
          <h2>{post && post.title}</h2>
          <br />
          <div className="image">
            <img
              src={post && `${process.env.REACT_APP_API_URL}${post.image}`}
              alt=""
            />
          </div>
          <h5>{post && timeFormatter(post.createdAt)}</h5>
          <br />
          <p>{post && post.describtion}</p>
          <br />
          {post && post.pdf ? (
            <div className="downloadPdf">
              <a
                href={`${process.env.REACT_APP_API_URL}${post.pdf}`}
                rel="noopener"
                target="_blank"
              >
                <p>
                  <img src="/images/pdf.png" alt={post.title} /> View Attached
                  PDF
                </p>
              </a>
            </div>
          ) : (
            ""
          )}

          <br />
          {post && post.pictures && post.pictures.length > 0 ? (
            <div className="album">
              <h2>Album</h2>
              {post.pictures.map((p, i) => (
                <img
                  src={`${process.env.REACT_APP_API_URL}${p}`}
                  alt=""
                  key={i}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </PostContainer>
    </Container>
  );
};

export default Post;
