import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios/api";
import Button from "../components/Button";
import BasicCard from "../components/BasicCard";
import styled from "styled-components";

function Home() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const { data } = await api.get("/posts");
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <StButtonDiv>
        <Button
          size="large"
          onClick={() => {
            navigate("/write");
          }}
        >
          새 글 작성
        </Button>
      </StButtonDiv>
      <StCardDiv>
        {posts?.map((post) => (
          <div key={post.id}>
            <BasicCard post={post}></BasicCard>
          </div>
        ))}
      </StCardDiv>
    </>
  );
}

const StButtonDiv = styled.div`
  width: auto;
  padding: 20px;
  text-align: center;
`;

const StCardDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

export default Home;
