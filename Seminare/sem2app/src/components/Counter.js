import {useState} from "react";

function Counter (){
    const [count, setCount] = useState(0);
    return (   
        <div>
            <p>Клинки на меня</p>
            <button onClick={()=>setCount(count+1)}>Click {count}</button>
        </div>
    );
}
export default Counter;