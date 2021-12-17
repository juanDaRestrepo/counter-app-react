import React,{useState} from "react";
import  PropTypes from "prop-types";

const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(0);
    //handleAdd
    const handleAdd = (e) => {
        //setCounter(counter+1);
        setCounter((c)=>c+1)
    }
    const handleSubstract = () =>{
        setCounter(counter-1);
    }
    const handleReset = () =>{
        setCounter(value);
    }
    return <>
                <h1>Counter App</h1>
                <h2>{counter}</h2>
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleSubstract}>-1</button>
                <button onClick={handleReset}>reset</button>
           </>
}

CounterApp.propTypes = {
    value : PropTypes.number
}

export default CounterApp;