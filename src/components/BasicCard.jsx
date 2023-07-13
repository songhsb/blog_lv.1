import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

export default function BasicCard({ post }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          닉네임 또는 이메일
        </Typography>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2">{post.content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/detail/${post.id}`)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
