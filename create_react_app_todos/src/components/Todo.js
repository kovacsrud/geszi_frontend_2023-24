
function Todo(props) {
    //const{title,completed}=todo;
  return (
    <div>
        {
            props.todo.completed ?
             <p className="athuzott">{props.todo.title}</p>
              :
             <p>{props.todo.title}</p>
        }
    </div>
  )
}

export default Todo