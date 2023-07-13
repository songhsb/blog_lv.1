import { useNavigate } from "react-router-dom";
import api from "../axios/api";
import useInput from "../hooks/useInput";
import Button from "../components/Button";

function Write() {
  const navigate = useNavigate();
  const shortid = require("shortid");

  const [title, onChangeTitleHandler] = useInput();
  const [content, onChangeContentHandler] = useInput();

  const onSubmitHandler = async ({ title, content }) => {
    if (title && content) {
      await api.post("/posts", { id: shortid.generate(), title, content });
      navigate("/");
    } else alert("제목과 내용을 입력해주세요.");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler({ title, content });
      }}
    >
      <label>제목</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChangeTitleHandler}
      />
      <label>내용</label>
      <textarea
        type="text"
        name="content"
        value={content}
        onChange={onChangeContentHandler}
      />
      <div>
        <Button size={"small"} type="submit">
          저장
        </Button>
      </div>
    </form>
  );
}

export default Write;
