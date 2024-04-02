import Button from "../form/Button";
import Input from "../form/Input";

export default function TodoList(props){
    let deleteStyle='';
    if (props.todoList.checked===1){
        deleteStyle='px-4 line-through ';
    }else{
        deleteStyle='px-4';
    }
    const Checked=(event)=>{
        if (event.target.checked===true){
           props.handelChange(props.todoList.description,true);
        }else{
           props.handelChange(props.todoList.description,false)
        }
    }
    return (
        <>
        <div  className="flex justify-between m-2 p-2 text-2xl font-bold">
            <div className="flex justify-center items-center px-4 mx-4">
                <Input type="checkbox" onChange={Checked}  className="p-2 border text-red-500 text-2xl cursor-pointer font-bold"/>
                <h4 className={deleteStyle}>{props.todoList.description}</h4>
            </div>
            <Button type="button" label="delete" onClick={()=>props.handelDelete(props.todoList.description)} className="bg-red-500 text-white px-4 py-2 rounded shadow fade" />
        </div>
        </>
    );
}