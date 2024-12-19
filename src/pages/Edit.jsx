import { useContext } from "react";
import Editor from "./Editor";
import { ReviewDispatchContext } from "../App";
import { useParams } from "react-router-dom";

function Edit() {
  const params = useParams();
  const { handleUpdateReview } = useContext(ReviewDispatchContext);
  const onSubmit = (data) => {
    handleUpdateReview(
      data.id,
      data.sort,
      data.title,
      data.date,
      data.rate,
      data.desc
    );
  };

  return <Editor onSubmit={onSubmit} />;
}

export default Edit;
