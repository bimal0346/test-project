import {useEffect, useState} from 'react';

interface DemoProps{}

export default function Demo({}: DemoProps) {
    const[count,setCount] = useState(0);

    useEffect(()=> {
        console.log('The count is:', count);
    }, []);

    return(
        <div className='tutorial'>
            <h1>count: {count}</h1> 
            <button onClick={() => setCount(count - 1)}>
                Decrement
                </button><br></br>
                <button onClick={() => setCount(count + 1)}>
                Increment
                </button>
        </div>
    );
}