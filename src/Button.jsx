import React, { useContext } from "react";
import MyContext from "./Mycontext";

export default function Button() {
    const { theme, handler } = useContext(MyContext)
    return (
        <button onClick={handler}>{theme}</button>
    )
}