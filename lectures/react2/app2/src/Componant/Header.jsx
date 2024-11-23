import { useContext } from "react";
import { MyContext } from "./Context";

export function Header(obj) {
    const c2 = useContext(MyContext)
    return(
        <div>
            Hello {c2.msg} This is Header!!!
        </div>
    );
}