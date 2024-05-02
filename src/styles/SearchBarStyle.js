import styled from "styled-components";
import SearchIconSrc from '../assets/image/magnify.svg';

export const Bar = styled.div`
width: 750px;
height: 50px;
border-radius: 10px;
background-color: #F6F6F6;
align-items: center;
justify-content: center;`

export const SearchIcon = styled.img.attrs({
    src: SearchIconSrc,
    alt: "SearchIcon",
  })`
  width: 21px;
  float: right;
  margin-right: 20px;
  margin-top: 13px;
  `;

  export const SearchInput = styled.input`
  width: calc(100% - 80px);
  height: 30px;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  margin-left: 20px;
  margin-top: 8px;
  background-color: #F6F6F6;
  &::placeholder {
    color: #000000;
    font-size: 15px;
  }
`;