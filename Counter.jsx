import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount]= useState(10)
    const handleAdd = ()=>{
        const mewcount = count - 1
        setCount(mewcount)
    }
    
    return (
        <div style={{border: '2px solid black'}}>
            <h3>Counter{count}</h3>
            <button onClick={handleAdd}>add</button>
        </div>
    );
};

export default Counter;