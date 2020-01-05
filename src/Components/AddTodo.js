import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {AddAction} from '../Action'
function AddTodo(props) {
    const dispatch=useDispatch();
    var [title,setTitle]=useState("");
    const addTodo=(e)=>{
        e.preventDefault();
        dispatch(AddAction(title))
    }
    return (
        <div>
            <form onSubmit={addTodo} > 
                <input type="text" name="title" value={title} placeholder="Add your Todos Here" onChange={(e)=>{setTitle(title=e.target.value)}} />
                
            </form>
        </div>
    );
}

export default AddTodo;