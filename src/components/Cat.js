import { useCatFact } from "../hooks/useCatFact"

export const Cat = () => {
    const {data,isLoading,catRefetch} = useCatFact();
    if(isLoading) return <h1>Loading ...</h1>
    return <div>
        <button onClick={catRefetch}>Refetch</button>
        <h2>{data.fact}</h2>
    </div>
}