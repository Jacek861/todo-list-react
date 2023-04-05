import { ButtonsContainer, StyledHideButton, StyleDoneButton } from "./styled.js"

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, setAllDone }) => (

  <ButtonsContainer>
    {tasks.length > 0 && (
      <>
        <StyledHideButton onClick={toggleHideDone}>
          {hideDoneTasks ? "Show" : "Hide"} Complited Task
        </StyledHideButton >
        <StyleDoneButton 
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Finish All Tasks
        </StyleDoneButton >
      </>
    )}
  </ButtonsContainer>

);

export default Buttons;