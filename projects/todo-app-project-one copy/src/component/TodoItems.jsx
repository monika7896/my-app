import React from 'react'
import TodoItem from './TodoItem'
 import styles from './TodoItems.module.css'
const TodoItems= ({todoItems}) => {
  console.log("uuutt",TodoItems)
  return (
    <>  
    <div className={styles.itemContainer}>
    {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
 
    </div>  
    </>
  )
}

export default TodoItems
