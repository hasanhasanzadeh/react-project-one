import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Label(props: { className: string; HtmlFor: string; value: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal; }){
    return (
        <>
                <label
                    className={props.className}
                    htmlFor={props.HtmlFor}
                >
                    {props.value}
                </label>
        </>
    );
}