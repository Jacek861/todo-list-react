import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";


const tasks = [
  { id: 1, content: "przejsc na React", done: false },
  { id: 2, content: "zjesc obiad", done: true },
];


function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);
  const toggleHideDone = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };

  return (
    <Container>
      <Header
        title="Task List"
      />
      <Section
        title="Add a new Task"
        body={<Form />}
      />
      <Section
        title="Task List"
        body={
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
            toggleHideDone={toggleHideDone}
          />
        }
      />
    </Container>
  );
}

export default App;
