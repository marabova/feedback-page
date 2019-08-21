import { getLocalStorage } from "./getLocalStorage";
import writeSingleComment from "../components/comment";

const displayComments = () => {
  /* istanbul ignore else */
  if (getLocalStorage()) {
    const comments = JSON.parse(getLocalStorage());
    comments.forEach(item => {
      writeSingleComment(item);
    });
  }
};

export default displayComments;
