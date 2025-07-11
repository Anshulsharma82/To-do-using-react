import { useState } from "react"

export default function Header(props) {
    const [ inputValue,setInputValue ] = useState('')
    const  [errorMsg,setErrorMsg ] = useState('')
    function createToDo() {
        if(inputValue==="") {
            setErrorMsg('Please enter to-do to proceed.')
            setTimeout(() => {
                setErrorMsg('')
            },2000)
            return;
        }
        const toDoObj = {
            key: Date.now(),
            toDo: inputValue,
            completed: false
        }
        props.setToDoItems([toDoObj,...props.toDoItems])
        setInputValue('')
    }
    return (
        <>
            <header className="headerContainer">
                <div>
                    <h1>TO-DO APP</h1>
                    <p >Reminds Everything...</p>
                </div>
                <a title="source code" href="https://github.com/Anshulsharma82/To-do-using-react.git" target="_blank">
                    <img src="/github_logo.png" alt="" />GITHUB
                </a>
            </header>
            <p className="errorP">{errorMsg}</p>
            <div className="createToDo">
                <div>
                    <h2>CREATE</h2>
                    <h2>TO DO</h2>
                </div>
                <div>
                    <input type="text" placeholder="Enter Your To Do" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button onClick={createToDo}>Create</button>
                </div>
            </div>
        </>
    )
}