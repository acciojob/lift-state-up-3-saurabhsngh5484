import React from "react";

const Child2 = ({getValue})=>{

    return(
        <div>
            <h3>Child Component 2</h3>
            <button onClick={getValue} value="Option 2">Option 2</button>
        </div>
    )
}

export default Child2;