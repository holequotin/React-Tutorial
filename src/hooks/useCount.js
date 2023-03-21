import { useState } from "react"

export const useCount = () => {
    const [count,setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }
    const restart = () => {
        setCount(0);
    }
    return {count,increase,decrease,restart}
}