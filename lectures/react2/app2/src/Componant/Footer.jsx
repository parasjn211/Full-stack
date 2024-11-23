import { useContext } from "react";
import { MyContext } from "./Context";


/*eslint-disable react/prop-types*/
export function Footer({firstname}) {
    const c1 = useContext(MyContext)
    return (
        <div>
            Hello {c1.msg} This is Footer!!!
        </div>
    );
}