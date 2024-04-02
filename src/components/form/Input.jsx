import React from "react";

export default function Input(props){
    return (
        <>
            <input
            type={props.type}
            className={props.className}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeholder}
            key={props.key}
            />
        </>
    );
}