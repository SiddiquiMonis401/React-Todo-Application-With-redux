import React from 'react';
import {useDispatch} from 'react-redux'
import {DelAction,CompleteAction} from '../Action'
function Todo(props) {
    //assigning dipsatch 
    const dispatch=useDispatch();
    //Delete the Todo form the store
    
    const getStyle=()=>{
       return{ 
       textDecoration:props.todo.completed?'line-through':'none',
       backgroundColor:'rgb(20%,50%,60%)',
       borderBottom:'1px #000 dotted',
       }
   }
    return (
        <div style={getStyle()} >
            <p style={{fontSize:'20px'}}>            <input type="checkbox"  onChange={()=> dispatch(CompleteAction(props.todo.id))}/>
            
                {props.todo.title}{"    "}
                
            
            <button style={{float:'right'}} onClick={ () => dispatch(DelAction(props.index) )} >X</button>
            </p>

        </div>
    );
}

export default Todo;