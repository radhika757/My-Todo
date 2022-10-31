import "./Task.css";


export const Task = (props) => {
    return (
        <div className="task" style={{ backgroundColor: props.completed ? "green" : "white"}}>
          <h4> {props.id} {props.taskName}
          <button className="complete" onClick={() => props.completeTask(props.id)}>Complete</button>
          {/* Passing task as an arguement to deleteTask function */}
          <button className="delete"   onClick={() => props.deleteTask(props.id)}> Delete </button>
          </h4>
        </div>
      );
};