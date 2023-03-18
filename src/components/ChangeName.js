import { useContext, useState } from "react"
import { AppContext } from "../App"
export const ChangeName = () => {
    //Truyền object nên là nhận cũng phải là object
    const {setUserName} = useContext(AppContext)
    const [changedName,setChangedName] = useState("")
    return <div>
        <input type = "text" onChange={(event)=> setChangedName(event.target.value)}></input>
        <button onClick={() => setUserName(changedName)} >Change name</button>
    </div>
}