import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../axios/api";
import useInput from "../hooks/useInput";
import Button from "../components/Button";

function Update() {
  const param = useParams();
  const navigate = useNavigate();

  const [posts, setPosts] = useState(null);
  const [content, onChangeContentHandler] = useInput();

  const fetchPosts = async () => {
    const { data } = await api.get("/posts");
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const post = posts?.find((post) => post.id === param.id);

  const onClickUpdateButtonHandler = async ({ post, content }) => {
    await api.put(`/posts/${post.id}`, { title: post.title, content });
    navigate("/");
  };

  const onClickDeleteButtonHandler = async (postId) => {
    await api.delete(`/posts/${postId}`);
    navigate("/");
  };

  return (
    <>
      <h2>{post?.title}</h2>
      <div>
        <label>내용</label>
        <textarea
          type="text"
          name="content"
          value={content}
          onChange={onChangeContentHandler}
        />
      </div>
      <div>
        <Button
          size={"small"}
          type="button"
          onClick={() => onClickUpdateButtonHandler({ post, content })}
        >
          수정
        </Button>
        <Button
          size={"small"}
          type="button"
          onClick={() => onClickDeleteButtonHandler(post.id)}
        >
          삭제
        </Button>
      </div>
    </>
  );
}

export default Update;
