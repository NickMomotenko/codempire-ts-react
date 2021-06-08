import styled, { css } from "styled-components";

export const ItemWrapp = styled.div`
  min-height: 57px;
  min-width: 170px;
  background: #ffffff;
  border-radius: 20px;
  display: inline-block;

  font-weight: 800;
  font-size: 16px;

  color: #1c1c39;
  text-align: center;
  line-height: 57px;
  cursor: pointer;
  margin: 0 20px 20px 0;
  box-shadow: 0 0px 6px #9a979717;
  transition: color, background 0.4s;

  ${(props) =>
    props.active
      ? css`
          color: #ffffff;
          background: #422ed4;
        `
      : ""}

  &:hover {
    color: #ffffff;
    background: #422ed4;
  }
`;
