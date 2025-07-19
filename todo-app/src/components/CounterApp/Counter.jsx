
import './counter.css'
import CounterButtton from './CounterButton'
import { useState } from 'react'

export default function Counter(){

    const[count,setCount] = useState(0);

    function pIncrement(by){
        return(
             setCount(count+by)
        )
    }
     function pDecrement(by){
        return(
             setCount(count-by)
        )
    }

    function Reset(){
        return(
             setCount(0)
        )
    }

    return(
        <>
         <span className="Mcount">{count}</span>
        <CounterButtton by ={1} inc ={pIncrement} dec ={pDecrement}></CounterButtton>
        <CounterButtton by ={2} inc ={pIncrement} dec ={pDecrement}></CounterButtton>
        <CounterButtton by ={5}inc ={pIncrement} dec ={pDecrement}></CounterButtton> 
        <button className="RButton" onClick={Reset}>REset</button>
        </>
    )
}

 