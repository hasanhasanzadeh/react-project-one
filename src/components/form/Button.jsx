
export default function Button(props){
    return (
        <>
            <button type={props.type} className={props.className}  key={props.key} onClick={props.onClick}>
                {props.label}
            </button>
        </>
    );
}