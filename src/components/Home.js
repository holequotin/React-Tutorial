import { useQuery } from "@tanstack/react-query"
import Axios from "axios"
export const Home = () => {
    const {data:catData,isLoading,refetch} = useQuery(["cat"],() => {
        return Axios.get("https://catfact.ninja/fact/").then((res) => res.data);
    })
    if(isLoading){
        return <h2>Loading....</h2>
    }
    return <div>
        <h1>This is a HomePage</h1>
        <h2>
            Cat fact : {catData?.fact}
        </h2>
        <button onClick={refetch}>Refect data</button>
    </div>
}