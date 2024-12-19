import { useContext } from "react";
import { ReviewDispatchContext } from "../App";
import Editor from "./Editor";

function Create() {
  const { handleAddReview } = useContext(ReviewDispatchContext);
  const onSubmit = (data) => {
    handleAddReview(data.sort, data.title, data.date, data.rate, data.desc);
  };

  return <Editor onSubmit={onSubmit} />;
}

export default Create;
