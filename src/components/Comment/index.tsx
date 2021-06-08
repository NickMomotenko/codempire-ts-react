import React from "react";

import { CommentWrapp, CommentBody } from "./styles";
import { CommentProps } from "./interface";

const Comment: React.FC<CommentProps> = ({ text }) => {
  return (
    <CommentWrapp>
      <CommentBody>{text}</CommentBody>
    </CommentWrapp>
  );
};

export default Comment;
