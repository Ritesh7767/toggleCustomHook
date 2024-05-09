import { useState, useRef } from "react"

const useToggleItems = (arr, i = 0) => {

    if (i >= arr.length) throw Error ("Index must not be greater than equal to length of array") 
    let index = useRef(i)
    let [state, setState] = useState(arr[index.current])

    console.log(index)
    const toggleItems = () => {        
        index.current = (index.current + 1) % arr.length
        setState(arr[index.current])
    }

    return [state, toggleItems]
}

export default useToggleItems