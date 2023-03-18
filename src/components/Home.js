import { useContext } from "react"
import { AppContext } from "../App"
export const Home = () => {
    const {username} = useContext(AppContext)
    return <div>
        <h1>This is a HomePage</h1>
        <h2>User name : {username}</h2>
    </div>
}