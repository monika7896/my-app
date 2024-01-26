import AppName from "./component/AppName"
import AddTodo from "./component/AddTodo"
import TodoItems from "./component/TodoItems"


function App() {
 const todoItems=[{
  name:'Buy Milk',
  dueDate:'4/10/24'
 },
 {
  name:'Buy Milk',
  dueDate:'go to school'
 }]
  return (
    <center className='todo-container'>
    <AppName/>
    <AddTodo/>
    <div className="item-container">
      <TodoItems todoItem={todoItems}></TodoItems>
   

    </div>
    
   
</center>

  )
}

export default App
