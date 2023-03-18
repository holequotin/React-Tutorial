import { ChangeName } from "./ChangeName"
import { AppContext } from "../App"
import { useContext, useState } from "react"
export const About = () => {
    const {username} = useContext(AppContext)
    return <div>
        <h1>This is about page</h1>
        <h2>User name : {username}</h2>
        <ChangeName></ChangeName>
    </div>
}