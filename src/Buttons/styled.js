import styled from "styled-components";

export const DivButtons = styled.divButtons`
  border: none;
  color: teal;
  background: transparent;
  transition: 2s;
  padding: 5px;

  &:hover {
    color: rgb(5, 182, 182);
    cursor: pointer;
  }
`;

export const DivContainer = styled.container`
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      padding: 0;
  }
`;