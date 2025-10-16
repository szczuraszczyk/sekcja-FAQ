import { useState } from "react";

function Item({question, answer, none}) {

    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        console.log("ustawiam isClicked na " + !isClicked);
        setIsClicked(!isClicked)
    }

    return (

        <p onClick={handleClick}>{question} <br />
        {isClicked ? "^0- "+answer : none}</p>

    )
}

export default Item;