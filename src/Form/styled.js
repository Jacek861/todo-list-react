import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledInput = styled.input`
    border: 1px solid #ddd;
    padding: 5px;
`;

export const StyledButton = styled.button`
    background-color: teal;
    color: white;
    border: none;
    padding: 5px;
    transition: background 1s, transform 1s;

    &:hover {
        background-color: rgb(6, 197, 197);
        transform: scale(1.1);
    }
`;
