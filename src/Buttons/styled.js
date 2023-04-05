import styled from "styled-components";

export const StyledHideButton = styled.button`
  border: none;
  color: teal;
  background: transparent;
  transition: 2s;
  padding: 5px;

  &:hover {
    color: rgb(5, 182, 182);
  }
`;

export const StyleDoneButton = styled(StyledHideButton)`
  background: lightgrey;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      padding: 0;
  }
`;