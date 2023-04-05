import { StyledForm, StyledInput, StyledButton } from "./styled"
import { useState } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault();

        const TrimmedContent = newTaskContent.trim()

        if (!TrimmedContent) {
            return;
        }
        addNewTask(TrimmedContent);
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                className="form__field"
                placeholder="Enter a task"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <StyledButton>Add Task</StyledButton>
        </StyledForm>
    );
};

export default Form;