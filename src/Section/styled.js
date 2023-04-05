
import styled from "styled-components";

export const StyledSection = styled.div`
    background-color: white;
    margin: 10px 0;
`;

export const StyledHeader = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ddd;
    display: grid;
    grid-template-columns: 1fr auto auto;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledTitle = styled.div`
    margin: 0;
`;

export const StyledBody = styled.div`
    padding: 10px;
`;

