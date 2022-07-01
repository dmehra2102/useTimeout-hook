import { useEffect, useState } from "react"


export const useTimeout = (delay)=> {
    const [ready,setReady] = useState(false);

    useEffect(()=> {
        const timer = setTimeout(()=>{
            setReady(true);
        },delay);
        return ()=> {
            clearTimeout(timer);
        }
    },[delay]);

    return ready;
}