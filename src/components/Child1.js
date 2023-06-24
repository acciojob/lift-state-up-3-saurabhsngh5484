import React from "react";

const Child1 = ({getValue})=>{

    return(
        <div>
            <h3>Child Component 1</h3>
            <button onClick={getValue} value="Option 1">Option 1</button>
        </div>
    )
}

export default Child1;