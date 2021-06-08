import styled from "styled-components";

export const LogoWrapp = styled.a`
  display: inline-flex;
  align-items: center;
`;

export const LogoIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: inline-block;
`;

export const LogoText = styled.span`
    color:#fff;
    font-size: 16px;
    font-weight: 800;
    margin-lefT:10px;
`;
