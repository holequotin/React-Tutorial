import { useState } from "react"

export const useToggle = () => {
    const [isVisble,setVisible] = useState(false);

    const toggle = () => {
        setVisible(!isVisble);
    }
    return [isVisble,toggle];
}