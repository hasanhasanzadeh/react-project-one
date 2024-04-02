import React,{useState} from "react";
import Button from "./components/form/Button";
import Input from "./components/form/Input";
import Main from "./components/Main";
import TodoList from "./components/todo/TodoList";

export default function Home(){
    let [todoLists,setTodoList]=useState([]);
    let [description,setDescription]=useState('');
    let [id,setId]=useState(1);
    const onChange=(event)=>{
        setDescription(event.target.value);
    }
    const todoAdd=()=>{
        if (description!==''){
            setTodoList([...todoLists, {description:description,checked:0,id:id}]);
            setDescription('');
            setId(id+1);
        }
    }

    const handelDeleted=(id)=>{
        let newTodo=todoLists.filter((item)=>{
            if (item.id===id){
                return false;
            }
            return true;
        });
        setTodoList(newTodo);
    }
    const handelChecked = (id, status) => {
        const updatedTodoList = todoLists.map(item => {
            if (item.id === id) {
               item.checked = status ? 1 : 0;
            }
            return item;
        });
        setTodoList(updatedTodoList);
    }


    return(
      <>
          <Main className="container">
              <div className="container bg-amber-50 shadow mx-auto mt-40">
                  <div className="m-8">
                      <div>
                          {
                              todoLists.map((todo,index)=>{
                                return (
                                    <TodoList key={index} todoList={todo} handelDelete={handelDeleted} handelChange={handelChecked} />
                                );
                              })
                          }
                      </div>
                      <div>
                          <Input
                              type="text"
                              name={description}
                              value={description}
                              onChange={onChange}
                              className="w-full p-3 my-3 rounded border-blue-300 focus:outline-0 focus:border-blue-300 font-medium"
                              placeholder="Enter Todo Description"
                          />
                      </div>
                      <div>
                          <Button
                              label="Add Todo"
                              type="button"
                              onClick={todoAdd}
                              className="text-white w-1/2 mx-auto bg-blue-400 p-4 rounded cursor-pointer my-3 shadow hover:bg-blue-500 fade"
                          />
                      </div>
                  </div>
              </div>
          </Main>
      </>
    );
}