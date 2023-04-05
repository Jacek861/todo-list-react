import { DivContainer, DivButtons } from "./styled.js"

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, setAllDone }) => (

  <DivContainer>
    {tasks.length > 0 && (
      <>
        <DivButtons onClick={toggleHideDone}>
          {hideDoneTasks ? "Show" : "Hide"} Complited Task
        </DivButtons>
        <DivButtons
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Finish All Tasks
        </DivButtons>
      </>
    )}
  </DivContainer>

);

export default Buttons;