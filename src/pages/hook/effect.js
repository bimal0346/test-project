
import React, { useState, useEffect } from 'react';

function Abc() {
    const [count, setCounter] = useState(0);
    const [data, setData] = useState("Bimal");

    useEffect(() => {
        console.log("Component Mounted");
    }, [count]);

    function updateCount() {
        setCounter(count + 1);
    }

    function updateData() {
        setData("poudel");
    }

    return (
        <>
            <h1>Button Clicked {count} times</h1>
            <button onClick={updateCount}>Click Me</button>
            <button onClick={updateData}>Update Data</button>
        </>
    );
}

export default Abc;

