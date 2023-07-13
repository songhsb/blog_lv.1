import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../axios/api";
import Button from "../components/Button";

function Detail() {
  const param = useParams();
  const navigate = useNavigate();

  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const { data } = await api.get("/posts");
    setPosts(data);
  };

  const post = posts?.find((post) => post.id === param.id);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div>
        <h2>{post?.title}</h2>
        <p>{post?.content}</p>
      </div>
      <div>
        <Button
          size="small"
          onClick={() => {
            navigate(`/update/${post.id}`);
          }}
        >
          blog 수정하러 가기
        </Button>
      </div>
    </>
  );
}

export default Detail;
