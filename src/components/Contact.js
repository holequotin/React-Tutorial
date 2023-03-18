import { AppContext } from "../App"
import { useContext,useState } from "react"
export const Contact = () => {
    const {username} = useContext(AppContext)
    return <div>
        <h1>This is Contact Page</h1>
        <h2>User name : {username}</h2>
    </div>
}