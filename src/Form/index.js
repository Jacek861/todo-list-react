import "./style.css";
import { useState } from "react";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("")
   
    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const TrimmedContent = newTaskContent.trim()
        
        if(!TrimmedContent) {
            return;
        }
        addNewTask(TrimmedContent);
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="form__field"
                placeholder="Enter a task"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <button className="form__button">Add Task</button>
        </form>
    );
};

export default Form;