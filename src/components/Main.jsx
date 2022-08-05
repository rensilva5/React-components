import React, { useState } from "react";

function Main () {
    const [count, setCount] = useState(0)
    const handleClick = () => setCount(count + 1)
    return (
        <main>
            <h2>Main section here...</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, laborum qui quasi cum alias architecto corrupti vitae esse. Facere hic inventore nisi dolorum fuga numquam reprehenderit enim culpa eligendi odit.</p>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>
                Click me!
            </button>
        </main>
    )
}

export default Main;