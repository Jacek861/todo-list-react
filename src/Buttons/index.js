import { ButtonsContainer, StyledButtons } from "./styled.js"

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, setAllDone }) => (

  <ButtonsContainer>
    {tasks.length > 0 && (
      <>
        <StyledButtons onClick={toggleHideDone}>
          {hideDoneTasks ? "Show" : "Hide"} Complited Task
        </StyledButtons >
        <StyledButtons 
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Finish All Tasks
        </StyledButtons >
      </>
    )}
  </ButtonsContainer>

);

export default Buttons;