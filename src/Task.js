import {useState, version} from "react"
export const Task = (props) =>{
    return <div style={{backgroundColor : props.isComplete ? "green" : "white"}}>
        <p>{props.name}</p> <button onClick={() => props.setComplete(props.id)}>Complete</button> <button onClick={() => props.setNotComplete(props.id)}>Not Complete</button><button onClick={() => props.delete(props.id)}>X</button>
    </div>
}

export const Text = (props) => {
    const [text,setText] = useState("")
    return <div>
        <input type="text" onChange={(event) => {
            setText(event.target.value)
        }}></input>
        <h1>
            {text}
        </h1>
    </div>
}