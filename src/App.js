import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


const tasks = [
  { id: 1, content: "przejsc na React", done: false },
  { id: 2, content: "zjesc obiad", done: true },
];

const hideDoneTasks = false;

function App() {
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
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
