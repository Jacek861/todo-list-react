import "./style.css"

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, setAllDone }) => (

    <div className="section__container">
      {tasks.length > 0 && (
        <>
          <button onClick={toggleHideDone} className="buttons">
            {hideDoneTasks ? "Show" : "Hide"} Complited Task
          </button>
          <button
          onClick={setAllDone}
            className="buttons"
            disabled={tasks.every(({ done }) => done)}
          >
            Finish All Tasks
          </button>
        </>
      )}
    </div>
    
 );
  
  export default Buttons;