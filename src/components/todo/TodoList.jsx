import Button from "../form/Button";
import Input from "../form/Input";

export default function TodoList(props){
    let deleteStyle='px-4';
    if (props.todoList.checked===1){
        deleteStyle='px-4 line-through ';
        console.log(deleteStyle);
    }
    const Checked=(todo)=>{
            if (todo.todoList.checked===1){
                props.handelChange(todo.todoList.id,0);
            }else{
                props.handelChange(todo.todoList.id,1);
            }
    }
    return (
        <>
        <div  className="flex justify-between m-2 p-2 text-2xl font-bold">
            <div className="flex justify-center items-center px-4 mx-4">
                <Input type="checkbox" onChange={()=>Checked(props)}  className="p-2 border text-red-500 text-2xl cursor-pointer font-bold"/>
                <h4 className={deleteStyle}>{props.todoList.description}</h4>
            </div>
            <Button type="button" label="delete" onClick={()=>props.handelDelete(props.todoList.id)} className="bg-red-500 text-white px-4 py-2 rounded shadow fade" />
        </div>
        </>
    );
}