import React, {useState} from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";


const Parent = ()=>{
    let [option, setOption] = useState('');

    function getValue(e){
        setOption(e.target.value);
    }

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child1 getValue={getValue}/>
            <Child2 getValue={getValue}/>
            <p>Selected Option: {option}</p>
        </div>
    )
}

export default Parent;