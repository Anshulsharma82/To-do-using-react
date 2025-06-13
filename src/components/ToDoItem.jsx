import { useState } from "react"

export default function ToDoItem(props) {
    console.log('props::::::', props)
    const [isEditing, setIsEditing] = useState(false)
    const [editingTaskValue, setEditingTaskValue] = useState(props.item.toDo)
    function editToDo() {
        setIsEditing(true)
    }
    
    
    return (
        <>
            <div className="toDoItem">
                <div>
                    {props.item.completed ? <p className="taskCompletedP">Task Completed</p> : ''}
                    {!isEditing ? <h3>{editingTaskValue} </h3> : <input className="editInput" type="text" value={editingTaskValue} onChange={(e) => setEditingTaskValue(e.target.value)} />}
                </div>
                <div className="modifyButtonsDiv">
                    { !props.item.completed ? !isEditing ? <button onClick={editToDo}><i class="fa-solid fa-pen-to-square fa-xl"></i></button> : <button onClick={() => props.saveToDo(props.item.key,editingTaskValue,setIsEditing)}><i class="fa-regular fa-floppy-disk fa-xl"></i></button> : ''}
                    {!props.item.completed ? <button onClick={() => props.taskCompleted(props.item.key)} > <i class="fa-solid fa-circle-check fa-xl"></i> </button> : "" }
                    <button onClick={ () => props.deleteTask(props.item.key)}> <i class="fa-solid fa-trash fa-xl"></i> </button>
                </div>
            </div>
        </>
    )
}