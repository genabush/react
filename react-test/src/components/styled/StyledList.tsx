import { styled } from "styled-components";

type StyledListProps = {
  flexDirection?: string;
};
export const StyledList = styled.ul<StyledListProps>`
  flex-direction: ${(props) => props.flexDirection || "row"};
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 10px;
  background-color: darkblue;
  color: white;
  width: 100%;
  & > li {
    margin: 0 1rem;
    line-height: 1;
    & > a {
      color: white;
      text-decoration: none;
      &.active {
        color: yellow;
      }
    }
  }
  & > li:first-child {
    margin-left: 0;
  }
`;
