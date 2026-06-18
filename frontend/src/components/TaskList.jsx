import Task from "./Task";

export default function TaskList({tasks,handleOnDelete,handleOnUpdate}){
    return(
        <div className="task-list">
            {
                tasks.map((task)=>{
                    return(
                        <Task key={task._id} task={task} handleOnDelete={handleOnDelete} handleOnUpdate={handleOnUpdate}/>
                    )
                })
            }
        </div>
    )
}