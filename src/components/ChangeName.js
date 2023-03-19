import { useContext, useState } from "react"
export const ChangeName = () => {
    //Truyền object nên là nhận cũng phải là object
    const [changedName,setChangedName] = useState("")
    return <div>
        <input type = "text" onChange={(event)=> setChangedName(event.target.value)}></input>
        <button >Change name</button>
    </div>
}