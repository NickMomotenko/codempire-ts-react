import styled from "styled-components";

import chackIcon from "../../assets/chack.png";

export const CommentWrapp = styled.div`
  text-align: right;

  &:before {
    content: "";
    display: inline-block;
    background: url(${chackIcon}) center no-repeat;
    width: 122px;
    height: 258px;
    margin-bottom: -100px;
    margin-right: 20px;
    z-index: -1;
  }
`;

export const CommentBody = styled.div`
  background: #422ed4;
  box-shadow: 0px 100px 80px rgba(80, 76, 103, 0.07),
    0px 0px 10.0172px rgba(80, 76, 103, 0.035);
  border-radius: 25px;
  position: relative;

  padding: 24px;
  font-size: 20px;
  line-height: 30px;
  color: #fff;
  font-weight: 600;
  min-height: 162px;
  text-align: left;
`;
