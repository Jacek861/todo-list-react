import styled, { css } from "styled-components";

export const StyledTasks = styled.ul`
    margin: 0;
    padding: 0;
`;

export const StyledItem = styled.li`
    list-style-type: none;
    display: grid;
    grid-template-columns: auto 1fr auto;
    border-bottom: 1px solid #ddd;
    align-items: center;
    padding: 10px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const StyledContent = styled.span`
    padding: 0 10px;

    ${({ done }) => done && css`
         text-decoration: line-through;
    `}
`;

export const StyledTaskButton = styled.button`
    height: 30px;
    width: 30px;
    border: none;
    color: white;
    transition: background 2s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: green;
        &:hover {
            background-color: rgb(3, 197, 3)};

        &:active {
            background-color: rgb(3, 255, 3)};
    `}

    ${({ remove }) => remove && css`
        background-color: red;
        &:hover {
            background-color: rgb(252, 61, 61)
        };

        &:active {
            background-color: rgb(247, 146, 146)
        };
    `}
`;




const StyledTaskButtonn = styled.button`
    height: 30px;
    width: 30px;
    background-color: ${({ color }) => color || "green"};
    border: none;
    color: white;
    transition: background 2s;

    &:hover {
        background-color: ${({ hover }) => hover || "rgb(3, 197, 3)"};
    }

    &:active {
        background-color: ${({ active }) => active || "rgb(3, 255, 3)"};
    }
`;