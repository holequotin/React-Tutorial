import { useQuery } from "@tanstack/react-query"
import Axios from "axios"


export const useCatFact = () => {
    const {data,isLoading,error,refetch} = useQuery(["cat"],() => {
        return Axios.get("https://catfact.ninja/fact/").then((res) => res.data);
    })
    if(error){
        console.log("Get data error");
    }
    const catRefetch = () => {
        alert("Fetched");
        refetch();
    }
    return {data,isLoading,catRefetch}
}