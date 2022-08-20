import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import ToDo from "./components/ToDo";
import UpdateForm from "./components/UpdateForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //Task (List) State
  const [toDo, setToDo] = useState([
    {id: 1, title: "Task 1", status: false},
    {id: 2, title: "Task 2", status: false}
  ]);

  // useEffect(() => {
    
  //   return () => {
  //     fetch("http://localhost:9292/test")
  // .then((r) => r.json())
  // .then((data) => console.log(data));
  //   }
  // }, [])
  

  //Temp State
  const [newTask, setNewTask] = useState("");
   //newTask will be used to hold temporarly data 
   //that will be added as new task in task list
  const [updateData, setUpdateData] = useState("");
   //updatedData will hold task that is being edited
   //Use '' to avoid error > A component is changing 
   //an uncontrolled input to be controlled
   
  //Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  //Delete Task
  const deleteTask = (id) => {
    let currTasks = toDo.filter((task) => task.id !== id);
    setToDo(currTasks);
  };

  //Mark as Completed
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;      
    })
    setToDo(newTask);
  };

  //Cancel Update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  //Change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  //Update Task
  const updateTask = (e) => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  return (
    <div className="container App">
      <br />
      <h2>List Of To Do's</h2>
      <br />
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {toDo && toDo.length ? "" : <h3>NO Task...</h3>}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
