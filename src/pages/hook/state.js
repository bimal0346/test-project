
import React, { useState } from 'react';

function Abc() {
    const [count, setCounter] = useState(0);

    function updateCount() {
        setCounter(count + 1);
    }

    return (
        <>
            <h1>Button Clicked {count} times</h1>
            <button onClick={updateCount}>Click Me</button>
        </>
    );
}

export default Abc;
