import React , { useDeferredValue, useState } from "react";

function NumberList({ numbers }) {
    const DeferredValue = useDeferredValue(numbers)
    function App () {
        console.log('render');
        const [number, setNumber] = useState(0);

        const clickHandeler = () => {
            setNumber((prevNumber) => prevNumber + 1);
            setNumber((prevNumber) => prevNumber + 1);
        }
    }
    return(
        <div>
            {numbers.map((item =>
                <p key={item}>{item}</p>
              ))}
              </div>
    )
}

export default NumberList;